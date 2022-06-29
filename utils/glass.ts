const GLASS_OPACITY = 10;

const glassColorLookup: { [key in GlassColors]: { [color: string]: string } } =
  {
    white: {
      bg: `bg-white/${GLASS_OPACITY}`,
      border: `border-white/${GLASS_OPACITY}`,
      text: `text-white`,
    },
    black: {
      bg: `bg-black/${GLASS_OPACITY}`,
      border: `border-black/${GLASS_OPACITY}`,
      text: `text-black`,
    },
    red: {
      bg: `bg-red-400/${GLASS_OPACITY}`,
      border: `border-red-400/${GLASS_OPACITY}`,
      text: `text-red-400`,
    },
    sky: {
      bg: `bg-sky-400/${GLASS_OPACITY}`,
      border: `border-sky-400/${GLASS_OPACITY}`,
      text: `text-sky-400`,
    },
    purple: {
      bg: `bg-purple-400/${GLASS_OPACITY}`,
      border: `border-purple-400/${GLASS_OPACITY}`,
      text: `text-purple-400`,
    },
    auto: {
      bg: `bg-white/${GLASS_OPACITY} dark:bg-black/${GLASS_OPACITY}`,
      border: `border-white/${GLASS_OPACITY} dark:border-black/${GLASS_OPACITY}`,
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
