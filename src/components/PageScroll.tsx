import { createContext, useCallback, useContext, useMemo, useRef, type ReactNode } from 'react';
import { Animated, StyleSheet, type NativeScrollEvent, type NativeSyntheticEvent } from 'react-native';

import { colors } from '../theme';

type Listener = () => void;

type ScrollContextValue = {
  scrollY: Animated.Value;
  subscribe: (listener: Listener) => () => void;
};

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function useScroll() {
  const ctx = useContext(ScrollContext);
  if (!ctx) throw new Error('useScroll must be used inside <PageScroll>');
  return ctx;
}

// A full-page scroll container that shares its scroll position with
// descendants, so sections can animate as they enter the viewport.
export function PageScroll({ children }: { children: ReactNode }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const listeners = useRef(new Set<Listener>()).current;

  const subscribe = useCallback(
    (listener: Listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    [listeners],
  );

  const onScroll = useMemo(
    () =>
      Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        useNativeDriver: false,
        listener: (_e: NativeSyntheticEvent<NativeScrollEvent>) => listeners.forEach((l) => l()),
      }),
    [scrollY, listeners],
  );

  const value = useMemo(() => ({ scrollY, subscribe }), [scrollY, subscribe]);

  return (
    <ScrollContext.Provider value={value}>
      <Animated.ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {children}
      </Animated.ScrollView>
    </ScrollContext.Provider>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: colors.navyDeep },
  content: { flexGrow: 1 },
});
