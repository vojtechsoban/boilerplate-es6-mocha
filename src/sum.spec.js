import { expect } from "chai";
import { solution, sumOddNumbers } from "./sum";

describe("sum", () => {
	describe("sum parameterized demo", () => {
    [
    {
      X: 1,
      Y: 2,
      expected: 3
    }
    ].forEach(context => {
      it(`X: ${context.X} Y: ${context.Y} `, function() {
        expect(solution(context.X, context.Y)).to.be.equal(context.expected);
      });
    });
  });
  describe("sum manual demo", () => {
    it("6 + 66 = 72", () => {
      expect(solution(6, 66)).to.be.equal(72)
    })
  })
  describe("sum odd numbers demo", () => {
    it("1 + 2 + 3 + 4 = 4", () => {
      expect(sumOddNumbers(1, 2, 3, 4)).to.be.equal(4)
    })
    it("2 + 4 + 6 = 0", () => {
      expect(sumOddNumbers(2, 4, 6)).to.be.equal(0)
    })
  })
});
