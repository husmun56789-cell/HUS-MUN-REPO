import { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';

const FALLBACK = { width: 1280, height: 800 };

// Window size that is safe for static web rendering: the pre-rendered HTML has
// no window (0 × 0), and hydration keeps server-rendered styles, so the first
// client render must match the server. We use a fixed fallback until mounted,
// then switch to the real dimensions.
export function useViewport() {
  const dims = useWindowDimensions();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && dims.width > 0 ? { width: dims.width, height: dims.height } : FALLBACK;
}
