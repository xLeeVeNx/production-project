type TMods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: TMods = {}, additional: string[] = []): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].filter(Boolean).join(' ');
};
