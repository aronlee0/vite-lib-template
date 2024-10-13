export type MyLibType = {};

export type CanComposedFunc<P> = (arg1: P) => P;
export type ComposedFun<P> = (arg1: P) => P;

export function compose<P, F extends CanComposedFunc<P>>(
  ...args: F[]
): ComposedFun<P> {
  const len = args.length;
  if (len === 0) {
    throw new Error("compose requires at least one function argument");
  }

  return function (arg1: P) {
    return args.reduce((acc, fn) => fn(acc), arg1);
  };
}

export const addOne: CanComposedFunc<number> = function (num: number) {
  return num + 1;
};

export const double: CanComposedFunc<number> = function (num) {
  return num * 2;
};

export const triple: CanComposedFunc<number> = function (num) {
  return num * 3;
};

export const multiplyBySeven: CanComposedFunc<number> = function (num) {
  return num * 7;
};

export const divideByThree: CanComposedFunc<number> = function (num) {
  return num / 3;
};
