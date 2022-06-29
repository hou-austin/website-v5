const glassColorLookup: { [key in GlassColors]: { [color: string]: string } } =
  {
    white: {
      bg: `bg-white/10`,
      border: `border-white/10`,
      text: `text-white`,
    },
    black: {
      bg: `bg-black/10`,
      border: `border-black/10`,
      text: `text-black`,
    },
    red: {
      bg: `bg-red-400/10`,
      border: `border-red-400/10`,
      text: `text-red-400`,
    },
    sky: {
      bg: `bg-sky-400/10`,
      border: `border-sky-400/10`,
      text: `text-sky-400`,
    },
    purple: {
      bg: `bg-purple-400/10`,
      border: `border-purple-400/10`,
      text: `text-purple-400`,
    },
    auto: {
      bg: `bg-black/10 dark:bg-white/10`,
      border: `border-black/10 dark:border-white/10`,
      text: `text-black dark:text-white`,
    },
  };

type GetColoredGlassStylesProps = {
  color?: GlassColors;
  types?: ("bg" | "border" | "text")[];
};

export const getColoredGlassStyles = (
  props: GetColoredGlassStylesProps
): string => {
  const color = props?.color ?? "auto";
  const types = props?.types ?? ["bg", "border", "text"];

  const styles = glassColorLookup[color];

  return types.reduce((acc, type) => {
    return `${acc} ${styles[type]}`;
  }, "");
};
