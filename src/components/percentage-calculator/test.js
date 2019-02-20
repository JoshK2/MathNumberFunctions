import assert from "assert";
import { percentageCalculator } from "./percentage-calculator";

describe("percentageCalculator", function() {
  it("calculate percentage of value inside another value", () => {
    const result = percentageCalculator(50, 100);
    assert(result === 50);
  });
});
