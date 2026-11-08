import { Link, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts, space, webOnly } from '../theme';

// Gold call-to-action that opens an outside URL (a new tab on the web,
// the system browser on native).
export function ExternalButton({ url, label, solid = false }: { url: string; label: string; solid?: boolean }) {
  return (
    <Link href={url as Href} target="_blank" rel="noopener noreferrer" asChild>
      <Pressable accessibilityRole="link" style={webOnly({ cursor: 'pointer' })}>
        {(state) => {
          const hovered = (state as { hovered?: boolean }).hovered || state.pressed;
          const filled = solid !== !!hovered;
          return (
            <View style={[styles.button, filled && styles.buttonFilled]}>
              <Text style={[styles.text, filled && styles.textFilled]}>{label} ↗</Text>
            </View>
          );
        }}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: space.sm,
    paddingHorizontal: space.md,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 4,
    ...webOnly({ transitionProperty: 'background-color', transitionDuration: '200ms' }),
  },
  buttonFilled: { backgroundColor: colors.gold },
  text: { fontFamily: fonts.display, fontSize: 13, letterSpacing: 2, color: colors.goldLight, textTransform: 'uppercase', textAlign: 'center' },
  textFilled: { color: colors.navyDeep },
});
