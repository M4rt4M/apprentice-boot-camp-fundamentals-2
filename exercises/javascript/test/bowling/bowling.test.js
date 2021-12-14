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

    const rolls3 = [0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(bowl(rolls3)).toBe(11);
  });

  it("should calculate the score for a game containing a spare", () => {
    const rolls1 = [5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(bowl(rolls1)).toBe(12);

    const rolls2 = [5, 5, 1, 9, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(bowl(rolls2)).toBe(23);
  })

  it("should calculate score of for a game with a strike", () => {
    const rolls1 = [10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(bowl(rolls1)).toBe(14);

    const rolls2 = [10, 1, 1, 0, 0, 0, 0, 10, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(bowl(rolls2)).toBe(28);
  })

  it("should calculate score of for a game with consecutive strikes", () => {
    const rolls1 = [10, 1, 1, 0, 0, 0, 0, 10, 10, 1, 1, 0, 0, 0, 0, 0, 0];
    expect(bowl(rolls1)).toBe(49);
  })

});
