import { expect, test } from "@jest/globals";
import {
  //
  compose,
  addOne,
  double,
  triple,
  multiplyBySeven,
  divideByThree,
  type CanComposedFunc,
} from "./index";

test("[compose] should be work", () => {
  const cal1 = compose<number, CanComposedFunc<number>>(addOne, double);
  expect(cal1(5)).toBe((5 + 1) * 2);

  const cal2 = compose<number, CanComposedFunc<number>>(
    multiplyBySeven,
    divideByThree
  );
  expect(cal2(21)).toBe((21 * 7) / 3);

  const cal3 = compose<number, CanComposedFunc<number>>(
    addOne,
    multiplyBySeven,
    divideByThree
  );
  expect(cal3(15)).toBe(((15 + 1) * 7) / 3);

  const cal4 = compose<number, CanComposedFunc<number>>(
    addOne,
    double,
    triple,
    (num: number) => num - 15
  );
  expect(cal4(10)).toBe((10 + 1) * 2 * 3 - 15);

  expect(() => compose<number, CanComposedFunc<number>>()).toThrow(
    "compose requires at least one function argument"
  );
});
