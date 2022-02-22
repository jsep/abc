export type Builder<T> = {
  [k in keyof T]?: (value: T[k]) => Builder<T>;
} & { value: () => T };

export function build<T>() {
  const builder = new Proxy(
    {},
    {
      get(target: {}, p: string | symbol): unknown {
        if (p === 'value') return () => target;
        return (value: unknown) => {
          target[p] = value;
          return builder;
        };
      },
    }
  );
  return builder as Builder<T>;
}
