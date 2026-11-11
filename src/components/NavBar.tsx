import { Link, usePathname, type Href } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, contentMaxWidth, fonts, space, webOnly } from '../theme';
import { useViewport } from '../hooks/useViewport';

const logo = require('../../assets/images/logo.png');

type NavItem = { label: string; href: Href; match: (path: string) => boolean };

const items: NavItem[] = [
  { label: 'Committees', href: '/', match: (p) => p === '/' || p.startsWith('/committees') },
  { label: 'Schedule', href: '/schedule', match: (p) => p.startsWith('/schedule') },
  { label: 'Code of Conduct', href: '/code-of-conduct', match: (p) => p.startsWith('/code-of-conduct') },
  { label: 'Country Matrix', href: '/country-matrix', match: (p) => p.startsWith('/country-matrix') },
];

// Site-wide top bar. Wide screens: emblem left, links and Register right.
// Phones: emblem and Register on one row, the page links centred beneath.
export function NavBar() {
  const { width } = useViewport();
  const pathname = usePathname();
  const compact = width < 1000;
  const gutter = width < 600 ? space.md : space.lg;

  const links = (
    <View style={[styles.links, compact && styles.linksCompact]}>
      {items.map((item) => (
        <NavLink key={item.label} item={item} active={item.match(pathname)} compact={width < 420} />
      ))}
    </View>
  );

  return (
    <View style={[styles.bar, { paddingHorizontal: gutter }]}>
      <View style={styles.inner}>
        <View style={styles.row}>
          <Link href="/" asChild>
            <Pressable accessibilityRole="link" accessibilityLabel="HUSMUN home" style={styles.brand}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.brandText}>HUSMUN</Text>
            </Pressable>
          </Link>
          {!compact && links}
          <RegisterButton active={pathname.startsWith('/register')} />
        </View>
        {compact && links}
      </View>
    </View>
  );
}

function NavLink({ item, active, compact }: { item: NavItem; active: boolean; compact: boolean }) {
  return (
    <Link href={item.href} asChild>
      <Pressable accessibilityRole="link" style={webOnly({ cursor: 'pointer' })}>
        {(state) => {
          const hovered = (state as { hovered?: boolean }).hovered || state.pressed;
          return (
            <Text
              style={[
                styles.link,
                compact && styles.linkCompact,
                (active || hovered) && styles.linkActive,
                active && styles.linkCurrent,
              ]}
            >
              {item.label}
            </Text>
          );
        }}
      </Pressable>
    </Link>
  );
}

function RegisterButton({ active }: { active: boolean }) {
  return (
    <Link href="/register" asChild>
      <Pressable accessibilityRole="link" style={webOnly({ cursor: 'pointer' })}>
        {(state) => {
          const hovered = (state as { hovered?: boolean }).hovered || state.pressed;
          return (
            <View style={[styles.register, (active || hovered) && styles.registerActive]}>
              <Text style={[styles.registerText, (active || hovered) && styles.registerTextActive]}>Register</Text>
            </View>
          );
        }}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: space.sm,
    backgroundColor: colors.navy,
    borderBottomWidth: 1,
    borderBottomColor: colors.goldFaint,
  },
  inner: { width: '100%', maxWidth: contentMaxWidth, gap: space.sm },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: space.md },
  brand: { flexDirection: 'row', alignItems: 'center', gap: space.xs },
  logo: { width: 44, height: 44 },
  brandText: { fontFamily: fonts.display, fontSize: 18, letterSpacing: 3, color: colors.ivory },
  links: { flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: space.lg },
  linksCompact: { flex: 0, justifyContent: 'center', flexWrap: 'wrap', columnGap: space.md, rowGap: space.xs },
  link: {
    paddingVertical: 4,
    fontFamily: fonts.displayRegular,
    fontSize: 12,
    letterSpacing: 2,
    color: colors.muted,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
    ...webOnly({ transitionProperty: 'color, border-color', transitionDuration: '200ms' }),
  },
  linkCompact: { fontSize: 11, letterSpacing: 1.5 },
  linkActive: { color: colors.goldLight },
  linkCurrent: { borderBottomColor: colors.gold },
  register: {
    paddingVertical: space.xs,
    paddingHorizontal: space.sm,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 4,
    ...webOnly({ transitionProperty: 'background-color', transitionDuration: '200ms' }),
  },
  registerActive: { backgroundColor: colors.gold },
  registerText: { fontFamily: fonts.display, fontSize: 12, letterSpacing: 2, color: colors.goldLight, textTransform: 'uppercase' },
  registerTextActive: { color: colors.navyDeep },
});
