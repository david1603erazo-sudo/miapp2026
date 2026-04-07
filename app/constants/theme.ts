/**
 * Colores vibrantes y llamativos para la app
 */

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#ffffff',
    background: '#0D1B2A',
    tint: '#FF006E',
    icon: '#ffffff',
    tabIconDefault: '#B0BEC5',
    tabIconSelected: '#00F5FF',
    card: '#1A2F42',
    buttonPrimary: '#FF006E',
    buttonSecondary: '#00D9FF',
    gradient1: '#FF006E',
    gradient2: '#00D9FF',
    success: '#00FF41',
    warning: '#FFB700',
    danger: '#FF2757',
  },
  dark: {
    text: '#f1f5f9',
    background: '#0D1B2A',
    tint: '#FF006E',
    icon: '#94a3b8',
    tabIconDefault: '#94a3b8',
    tabIconSelected: '#00F5FF',
    card: '#1A2F42',
    buttonPrimary: '#FF006E',
    buttonSecondary: '#00D9FF',
    gradient1: '#FF006E',
    gradient2: '#00D9FF',
    success: '#00FF41',
    warning: '#FFB700',
    danger: '#FF2757',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
  },
});