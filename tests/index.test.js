describe("Sum of two numbers", () => {
  const desc = "<p>Sum of two numbers</p>";

  describe(desc, () => {
    it("Sum should return 9", () => {
      const result = sum(2, 7);
      expect(result).toBe(9);
    });
  });
});

describe("Difference of two numbers", () => {
  const desc = "<p>Difference of two numbers</p>";

  describe(desc, () => {
    it("Difference should return 7", () => {
      const result = diff(10, 3);
      expect(result).toBe(7);
    });
  });
});

describe("Multiplication of two numbers", () => {
  const desc = "<p>Multiplication of two numbers</p>";

  describe(desc, () => {
    it("Multiplication should return 39", () => {
      const result = multi(13, 3);
      expect(result).toBe(39);
    });
  });
});

describe("Division of two numbers", () => {
  const desc = "<p>Division of two numbers</p>";

  describe(desc, () => {
    it("Division should return 11", () => {
      const result = division(33, 3);
      expect(result).toBe(11);
    });
  });
});

describe("Max number in array", () => {
  const desc = "<p>Max number in array</p>";

  describe(desc, () => {
    it("should return 81", () => {
      const testArray = [
        5,
        true,
        64,
        "Maxim",
        81,
        11,
        32,
        false,
        32,
        19,
        2,
        "string",
        28,
      ];
      const result = maxNumber(testArray);
      expect(result).toBe(81);
    });
  });
});

describe("Min number in array", () => {
  const desc = "<p>Min number in array</p>";

  describe(desc, () => {
    it("should return 2", () => {
      const testArray = [
        5,
        true,
        64,
        "Maxim",
        81,
        11,
        32,
        false,
        32,
        19,
        2,
        "string",
        28,
      ];
      const result = minNumber(testArray);
      expect(result).toBe(2);
    });
  });
});

describe("Accumulator constructor", () => {
  const desc = "<p>Accumulator constructor</p>";

  describe(desc, () => {
    it("Initial value should return 28", () => {
      const result = new Accumulator(28);
      expect(result.value).toBe(28);
    });
  });
});

describe("Increment method of Accumulator", () => {
  const desc = "<p>Increment method of Accumulator</p>";

  describe(desc, () => {
    it("Initial value is 28, Increment should return 29", () => {
      const result = new Accumulator(28);
      result.increment();
      expect(result.value).toBe(29);
    });
  });
});

describe("Decrement method of Accumulator", () => {
  const desc = "<p>Decrement method of Accumulator</p>";

  describe(desc, () => {
    it("Initial value is 44, double decrement should return 42", () => {
      const result = new Accumulator(44);
      result.decrement();
      result.decrement();
      expect(result.value).toBe(42);
    });
  });
});

describe("CancelableAccumulator constructor", () => {
  const desc = "<p>CancelableAccumulator constructor</p>";

  describe(desc, () => {
    it("Initial value should return 30", () => {
      const result = new CancelableAccumulator(30);
      expect(result.value).toBe(30);
    });
  });
});

describe("CancelableAccumulator constructor", () => {
  const desc = "<p>Inherited increment method of Accumulator constructor</p>";

  describe(desc, () => {
    it("Initial value is 30, double decrement should return 28", () => {
      const result = new CancelableAccumulator(30);
      result.decrement();
      result.decrement();
      expect(result.value).toBe(28);
    });
  });
});

describe("CancelableAccumulator constructor", () => {
  const desc = "<p>Onw clear method of CancelableAccumulator constructor</p>";

  describe(desc, () => {
    it("Initial value is 25. Reset to the original input of initial value after 5 decrements should return 25", () => {
      const result = new CancelableAccumulator(25);
      result.decrement();
      result.decrement();
      result.decrement();
      result.decrement();
      result.decrement();
      result.clear();
      expect(result.value).toBe(25);
    });
  });
});

describe("Calculate Average numbers in array", () => {
  const desc = "<p>Calculate Average numbers in array</p>";

  describe(desc, () => {
    it("Function should return 3", () => {
      const myArray = [1, 2, 3, 4, 5];
      const result = calculateAverage(myArray);
      expect(result).toBe(3);
    });
  });
});

describe("User constructor", () => {
  const desc = "<p>User constructor</p>";

  describe(desc, () => {
    it("Function should return 'Hi. My name is Sherlock and I'm 27 years old'", () => {
      const user = new User("Sherlock", 27);
      const result = user.sayHello();
      expect(result).toBe(`Hi. My name is Sherlock and I'm 27 years old`);
    });
  });
});

describe("Calculator", () => {
  const desc = "<p>Calculator</p>";

  describe(desc, () => {
    it("Function should return 1", () => {
      const result = calculator();
      expect(result()).toBe(1);
    });
  });
});

describe("Calculator", () => {
  const desc = "<p>Calculator</p>";

  describe(desc, () => {
    it("Function should return 2", () => {
      const result = calculator();
      result();
      expect(result()).toBe(2);
    });
  });
});
