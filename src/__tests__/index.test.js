const getPercents = require("../index.js");

  describe("valid test for getPercents function", () => {
    it("30 percent of 200 equals 60", () => {
      const result = getPercents(30, 200);
      expect(result).toBe(60);
    }),
    it("50 percent of 100 equals 50", () => {
      const result = getPercents(50, 100);
      expect(result).toBe(50);
    }),
    it("99 percent of 1000 equals 990", () => {
      const result = getPercents(99, 1000);
      expect(result).toBe(990);
    })
  })

  describe("invalid test for getPercents function", () => {
    it("incorrect value gives an error", () => {
      const result = getPercents(30, 'Hello');
      expect(result).toBe(NaN);
    }),
    it("incorrect value gives an error", () => {
      const result = getPercents(30, 'Oops');
      expect(result).toBe(NaN);
    }),
    it("incorrect value gives an error", () => {
      const result = getPercents(30, 'Ok');
      expect(result).toBe(NaN);
    }),
    it("1.18 percent of 55.3 equals 0.65", () => {
      const result = getPercents(1.18, 55.3);
      expect(result).toBe(0.65);
    })
  })
