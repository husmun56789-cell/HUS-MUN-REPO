import { useEffect, useRef, type ReactNode } from 'react';
import { Animated, Easing, View, type StyleProp, type ViewStyle } from 'react-native';

import { useScroll } from './PageScroll';
import { useViewport } from '../hooks/useViewport';

type Props = {
  children: ReactNode;
  delay?: number;
  distance?: number;
  style?: StyleProp<ViewStyle>;
};

// Fades and lifts its children into place the first time they scroll into view.
export function Reveal({ children, delay = 0, distance = 32, style }: Props) {
  const { subscribe } = useScroll();
  const { height } = useViewport();
  const ref = useRef<View>(null);
  const progress = useRef(new Animated.Value(0)).current;
  const shown = useRef(false);

  useEffect(() => {
    const check = () => {
      if (shown.current || !ref.current) return;
      ref.current.measureInWindow((_x, y) => {
        if (shown.current || y > height * 0.9) return;
        shown.current = true;
        Animated.timing(progress, {
          toValue: 1,
          duration: 800,
          delay,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }).start();
      });
    };
    const unsubscribe = subscribe(check);
    // Elements already on screen at load reveal without needing a scroll.
    const initial = setTimeout(check, 120);
    return () => {
      unsubscribe();
      clearTimeout(initial);
    };
  }, [subscribe, height, delay, progress]);

  return (
    <Animated.View
      ref={ref}
      style={[
        style,
        {
          opacity: progress,
          transform: [
            { translateY: progress.interpolate({ inputRange: [0, 1], outputRange: [distance, 0] }) },
            { scale: progress.interpolate({ inputRange: [0, 1], outputRange: [0.96, 1] }) },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
