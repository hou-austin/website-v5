const glassColorLookup: { [key in GlassColors]: { [color: string]: string } } =
  {
    white: {
      bg: `bg-zinc-400/10`,
      border: `border-white/10`,
      text: `text-white`,
    },
    black: {
      bg: `bg-zinc-400/10`,
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
    green: {
      bg: `bg-green-400/10`,
      border: `border-green-400/10`,
      text: `text-green-400`,
    },
    auto: {
      bg: `bg-zinc-400/10 dark:bg-zinc-400/10`,
      border: `border-zinc-400/10 dark:border-zinc-400/10`,
      text: `text-zinc-800 dark:text-zinc-200`,
    },
  };

type GetColoredGlassStylesProps = {
  color?: GlassColors;
  types?: ("bg" | "border" | "text")[];
};

export const getColoredGlassStyles = (
  props: GetColoredGlassStylesProps = {}
): string => {
  const color = props?.color ?? "auto";
  const types = props?.types ?? ["bg", "border", "text"];

  const styles = glassColorLookup[color];

  return types.reduce((acc, type) => {
    return `${acc} ${styles[type]}`;
  }, "");
};

const glassMonoLookup: {
  [key in GlassMono]: { [color: string]: string };
} = {
  white: {
    bg: `glass-white-bg`,
    border: `border-zinc-400/20`,
  },
  black: {
    bg: `glass-black-bg`,
    border: `dark:border-slate-50/20`,
  },
};

type GetMonoGlassStylesProps = {
  mono?: GlassMono;
  types?: ("bg" | "border")[];
};

export const getMonoGlassStyles = (
  props: GetMonoGlassStylesProps = {}
): string => {
  const mono = props?.mono;
  const types = props?.types ?? ["bg", "border"];

  if (!mono) {
    const result = [];
    for (const [, styles] of Object.entries(glassMonoLookup)) {
      result.push(
        types.reduce((acc, type) => {
          return `${acc} ${styles[type]}`;
        }, "")
      );
    }

    return result.join(" ");
  }

  const styles = glassMonoLookup[mono];

  return types.reduce((acc, type) => {
    return `${acc} ${styles[type]}`;
  }, "");
};