const ACCENT_COLORS: {
  [key in AccentColorStyles]: { [key in ColorStyleProperties]: string };
} = {
  whiteS400O10: {
    bg: `bg-zinc-400/10`,
    border: `border-white/10`,
    text: `text-white`,
  },
  blackS400O10: {
    bg: `bg-zinc-400/10`,
    border: `border-black/10`,
    text: `text-black`,
  },
  redS400O10: {
    bg: `bg-red-400/10`,
    border: `border-red-400/10`,
    text: `text-red-400`,
  },
  skyS400O10: {
    bg: `bg-sky-400/10`,
    border: `border-sky-400/10`,
    text: `text-sky-400`,
  },
  purpleS400O10: {
    bg: `bg-purple-400/10`,
    border: `border-purple-400/10`,
    text: `text-purple-400`,
  },
  greenS400O10: {
    bg: `bg-green-400/10`,
    border: `border-green-400/10`,
    text: `text-green-400`,
  },
  autoS400O10: {
    bg: `bg-zinc-400/10 dark:bg-zinc-400/10`,
    border: `border-zinc-400/10 dark:border-zinc-400/10`,
    text: `text-zinc-800 dark:text-zinc-200`,
  },
};

const THEME_COLORS: {
  [key in ThemeColorStyles]: { [key in ColorStyleProperties]: string };
} = {
  whiteTransparent: {
    bg: `glass-white-bg`,
    border: `border-zinc-400/20`,
    text: `text-black`,
  },
  blackTransparent: {
    bg: `glass-black-bg`,
    border: `dark:border-zinc-50/20`,
    text: `text-white`,
  },
  autoTransparent: {
    bg: `glass-white-bg glass-black-bg`,
    border: `border-zinc-400/20 dark:border-zinc-50/20`,
    text: `text-black dark:text-white`,
  },
};

export type GetAccentColorProps = {
  color: AccentColorStyles;
  types?: ColorStyleProperties[];
};

export const getAccentColor = (props: GetAccentColorProps): string => {
  const color = props.color;
  const types = props?.types ?? ["bg", "border", "text"];

  const styles = ACCENT_COLORS[color];

  return types.reduce((acc, type) => {
    return `${acc} ${styles[type]}`;
  }, "");
};

export type GetThemeColorProps = {
  color: ThemeColorStyles;
  types?: ColorStyleProperties[];
};

export const getThemeColor = (props: GetThemeColorProps): string => {
  const color = props.color;
  const types = props?.types ?? ["bg", "border", "text"];

  const styles = THEME_COLORS[color];

  return types.reduce((acc, type) => {
    return `${acc} ${styles[type]}`;
  }, "");
};
