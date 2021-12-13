import { bowl } from "../../main/bowling/bowling";

describe("Bowling tests", () => {
  it("should calculate score of zero when zero pins are hit", () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(bowl(rolls)).toBe(0);
  });

  it("should calculate the score for a regular game of bowling", () => {
    const rolls1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(bowl(rolls1)).toBe(20);

    const rolls2 = [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1];
    expect(bowl(rolls2)).toBe(22);

  });
});
