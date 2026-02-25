import { multiply } from "react-native-my-test-module";

export function assert(condition: any, message: string) {
    if (!condition) throw new Error(`Assertion failed: ${message}`);
}

export function assertFailed(message: string, code: string): never;
export function assertFailed(message: string): never;
export function assertFailed(message: string, code?: string): never {
  if (code !== undefined) {
    throw new Error(`code: ${code}, message: ${message}`);
  } else {
    throw new Error(`message: ${message}`);
  }
}

export const testMultiplyPositiveNumbers = async () => {
    await multiply(3, 4).then((result) => {
        assert(result.result === 12, `Expected 3 * 4 to equal 12, but got: '${result.result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeNumbers = async () => {
    await multiply(-5, 6).then((result) => {
        assert(result.result === -30, `Expected -5 * 6 to equal -30, but got: '${result.result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeByNegative = async () => {
    await multiply(-4, -7).then((result) => {
        assert(result.result === 28, `Expected -4 * -7 to equal 28, but got: '${result.result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyByZero = async () => {
    await multiply(5, 0).then((result) => {
        assert(result.result === 0, `Expected 5 * 0 to equal 0, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyByOne = async () => {
    await multiply(42, 1).then((result) => {
        assert(result.result === 42, `Expected 42 * 1 to equal 42, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimalNumbers = async () => {
    await multiply(2.5, 4).then((result) => {
        assert(result.result === 10, `Expected 2.5 * 4 to equal 10, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyZeroByZero = async () => {
    await multiply(0, 0).then((result) => {
        assert(result.result === 0, `Expected 0 * 0 to equal 0, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyLargeNumbers = async () => {
    await multiply(1000000, 2000000).then((result) => {
        assert(result.result === 2000000000000, `Expected 1000000 * 2000000 to equal 2000000000000, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplySmallDecimals = async () => {
    await multiply(0.1, 0.2).then((result) => {
        assert(Math.abs(result.result - 0.02) < 0.0001, `Expected 0.1 * 0.2 to approximately equal 0.02, but got: '${result.result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeDecimal = async () => {
    await multiply(-3.5, 2.5).then((result) => {
        assert(Math.abs(result.result - (-8.75)) < 0.0001, `Expected -3.5 * 2.5 to approximately equal -8.75, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyCommutativeProperty = async () => {
    try {
        const result1 = await multiply(7, 9);
        const result2 = await multiply(9, 7);
        assert(result1.result === result2.result, `Expected multiply(7, 9) to equal multiply(9, 7), but got '${result1.result}' and '${result2.result}'`);
    } catch (error: any) {
        assertFailed(error.message, error.code);
    }
};

export const testMultiplySingleDigits = async () => {
    await multiply(8, 9).then((result) => {
        assert(result.result === 72, `Expected 8 * 9 to equal 72, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyByNegativeOne = async () => {
    await multiply(42, -1).then((result) => {
        assert(result.result === -42, `Expected 42 * -1 to equal -42, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyVerySmallNumber = async () => {
    await multiply(0.001, 1000).then((result) => {
        assert(result.result === 1, `Expected 0.001 * 1000 to equal 1, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyTenByTen = async () => {
    await multiply(10, 10).then((result) => {
        assert(result.result === 100, `Expected 10 * 10 to equal 100, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeWithDecimal = async () => {
    await multiply(-2.5, -4).then((result) => {
        assert(result.result === 10, `Expected -2.5 * -4 to equal 10, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplySingleByLargeNumber = async () => {
    await multiply(1, 999999).then((result) => {
        assert(result.result === 999999, `Expected 1 * 999999 to equal 999999, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyFractional = async () => {
    await multiply(0.5, 0.5).then((result) => {
        assert(result.result === 0.25, `Expected 0.5 * 0.5 to equal 0.25, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyMixedSignNumbers = async () => {
    await multiply(-10, 5).then((result) => {
        assert(result.result === -50, `Expected -10 * 5 to equal -50, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyThree = async () => {
    await multiply(3, 3).then((result) => {
        assert(result.result === 9, `Expected 3 * 3 to equal 9, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyLargeDecimalNumbers = async () => {
    await multiply(123.45, 67.89).then((result) => {
        assert(Math.abs(result.result - 8385.7905) < 0.01, `Expected 123.45 * 67.89 to approximately equal 8385.7905, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeLargeNumbers = async () => {
    await multiply(-100, -100).then((result) => {
        assert(result.result === 10000, `Expected -100 * -100 to equal 10000, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyBySmallFraction = async () => {
    await multiply(100, 0.01).then((result) => {
        assert(result.result === 1, `Expected 100 * 0.01 to equal 1, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyTwo = async () => {
    await multiply(2, 2).then((result) => {
        assert(result.result === 4, `Expected 2 * 2 to equal 4, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplySix = async () => {
    await multiply(6, 6).then((result) => {
        assert(result.result === 36, `Expected 6 * 6 to equal 36, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplySeven = async () => {
    await multiply(7, 7).then((result) => {
        assert(result.result === 49, `Expected 7 * 7 to equal 49, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyFive = async () => {
    await multiply(5, 5).then((result) => {
        assert(result.result === 25, `Expected 5 * 5 to equal 25, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyFour = async () => {
    await multiply(4, 4).then((result) => {
        assert(result.result === 16, `Expected 4 * 4 to equal 16, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNine = async () => {
    await multiply(9, 9).then((result) => {
        assert(result.result === 81, `Expected 9 * 9 to equal 81, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyTwelve = async () => {
    await multiply(12, 12).then((result) => {
        assert(result.result === 144, `Expected 12 * 12 to equal 144, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyTwenty = async () => {
    await multiply(20, 20).then((result) => {
        assert(result.result === 400, `Expected 20 * 20 to equal 400, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyFifty = async () => {
    await multiply(50, 50).then((result) => {
        assert(result.result === 2500, `Expected 50 * 50 to equal 2500, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyOneHundred = async () => {
    await multiply(100, 100).then((result) => {
        assert(result.result === 10000, `Expected 100 * 100 to equal 10000, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyTwoByThree = async () => {
    await multiply(2, 3).then((result) => {
        assert(result.result === 6, `Expected 2 * 3 to equal 6, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyTwoByFive = async () => {
    await multiply(2, 5).then((result) => {
        assert(result.result === 10, `Expected 2 * 5 to equal 10, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyThreeByFour = async () => {
    await multiply(3, 4).then((result) => {
        assert(result.result === 12, `Expected 3 * 4 to equal 12, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyThreeByFive = async () => {
    await multiply(3, 5).then((result) => {
        assert(result.result === 15, `Expected 3 * 5 to equal 15, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyFourByFive = async () => {
    await multiply(4, 5).then((result) => {
        assert(result.result === 20, `Expected 4 * 5 to equal 20, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeTwo = async () => {
    await multiply(-2, 2).then((result) => {
        assert(result.result === -4, `Expected -2 * 2 to equal -4, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeThree = async () => {
    await multiply(-3, 3).then((result) => {
        assert(result.result === -9, `Expected -3 * 3 to equal -9, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeFour = async () => {
    await multiply(-4, 4).then((result) => {
        assert(result.result === -16, `Expected -4 * 4 to equal -16, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeFive = async () => {
    await multiply(-5, 5).then((result) => {
        assert(result.result === -25, `Expected -5 * 5 to equal -25, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeSix = async () => {
    await multiply(-6, 6).then((result) => {
        assert(result.result === -36, `Expected -6 * 6 to equal -36, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeSeven = async () => {
    await multiply(-7, 7).then((result) => {
        assert(result.result === -49, `Expected -7 * 7 to equal -49, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeEight = async () => {
    await multiply(-8, 8).then((result) => {
        assert(result.result === -64, `Expected -8 * 8 to equal -64, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeNine = async () => {
    await multiply(-9, 9).then((result) => {
        assert(result.result === -81, `Expected -9 * 9 to equal -81, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeTen = async () => {
    await multiply(-10, 10).then((result) => {
        assert(result.result === -100, `Expected -10 * 10 to equal -100, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegateTwenty = async () => {
    await multiply(-20, 20).then((result) => {
        assert(result.result === -400, `Expected -20 * 20 to equal -400, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimal1 = async () => {
    await multiply(1.5, 2).then((result) => {
        assert(result.result === 3, `Expected 1.5 * 2 to equal 3, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimal2 = async () => {
    await multiply(2.5, 2).then((result) => {
        assert(result.result === 5, `Expected 2.5 * 2 to equal 5, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimal3 = async () => {
    await multiply(3.5, 2).then((result) => {
        assert(result.result === 7, `Expected 3.5 * 2 to equal 7, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimal4 = async () => {
    await multiply(1.25, 8).then((result) => {
        assert(result.result === 10, `Expected 1.25 * 8 to equal 10, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimal5 = async () => {
    await multiply(0.25, 4).then((result) => {
        assert(result.result === 1, `Expected 0.25 * 4 to equal 1, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimal6 = async () => {
    await multiply(0.75, 4).then((result) => {
        assert(result.result === 3, `Expected 0.75 * 4 to equal 3, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimal7 = async () => {
    await multiply(1.1, 10).then((result) => {
        assert(Math.abs(result.result - 11) < 0.0001, `Expected 1.1 * 10 to approximately equal 11, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimal8 = async () => {
    await multiply(2.2, 5).then((result) => {
        assert(Math.abs(result.result - 11) < 0.0001, `Expected 2.2 * 5 to approximately equal 11, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimal9 = async () => {
    await multiply(3.3, 3).then((result) => {
        assert(Math.abs(result.result - 9.9) < 0.0001, `Expected 3.3 * 3 to approximately equal 9.9, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDecimal10 = async () => {
    await multiply(4.4, 2).then((result) => {
        assert(Math.abs(result.result - 8.8) < 0.0001, `Expected 4.4 * 2 to approximately equal 8.8, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeDecimal1 = async () => {
    await multiply(-1.5, 2).then((result) => {
        assert(result.result === -3, `Expected -1.5 * 2 to equal -3, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeDecimal2 = async () => {
    await multiply(-2.5, 2).then((result) => {
        assert(result.result === -5, `Expected -2.5 * 2 to equal -5, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeDecimal3 = async () => {
    await multiply(-3.5, 2).then((result) => {
        assert(result.result === -7, `Expected -3.5 * 2 to equal -7, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeDecimal4 = async () => {
    await multiply(-1.25, 8).then((result) => {
        assert(result.result === -10, `Expected -1.25 * 8 to equal -10, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyNegativeDecimal5 = async () => {
    await multiply(-0.25, 4).then((result) => {
        assert(result.result === -1, `Expected -0.25 * 4 to equal -1, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyVeryLargeNumbers1 = async () => {
    await multiply(999999, 2).then((result) => {
        assert(result.result === 1999998, `Expected 999999 * 2 to equal 1999998, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyVeryLargeNumbers2 = async () => {
    await multiply(500000, 4).then((result) => {
        assert(result.result === 2000000, `Expected 500000 * 4 to equal 2000000, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyVerySmallNumbers1 = async () => {
    await multiply(0.001, 100).then((result) => {
        assert(Math.abs(result.result - 0.1) < 0.0001, `Expected 0.001 * 100 to approximately equal 0.1, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyVerySmallNumbers2 = async () => {
    await multiply(0.0001, 1000).then((result) => {
        assert(Math.abs(result.result - 0.1) < 0.0001, `Expected 0.0001 * 1000 to approximately equal 0.1, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyVerySmallNumbers3 = async () => {
    await multiply(0.00001, 1000).then((result) => {
        assert(Math.abs(result.result - 0.01) < 0.0001, `Expected 0.00001 * 1000 to approximately equal 0.01, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyTenPowers1 = async () => {
    await multiply(10, 100).then((result) => {
        assert(result.result === 1000, `Expected 10 * 100 to equal 1000, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyTenPowers2 = async () => {
    await multiply(100, 1000).then((result) => {
        assert(result.result === 100000, `Expected 100 * 1000 to equal 100000, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyTenPowers3 = async () => {
    await multiply(1000, 10000).then((result) => {
        assert(result.result === 10000000, `Expected 1000 * 10000 to equal 10000000, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyPrimeNumbers1 = async () => {
    await multiply(11, 13).then((result) => {
        assert(result.result === 143, `Expected 11 * 13 to equal 143, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyPrimeNumbers2 = async () => {
    await multiply(17, 19).then((result) => {
        assert(result.result === 323, `Expected 17 * 19 to equal 323, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyPrimeNumbers3 = async () => {
    await multiply(23, 29).then((result) => {
        assert(result.result === 667, `Expected 23 * 29 to equal 667, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyConsecutiveNumbers1 = async () => {
    await multiply(10, 11).then((result) => {
        assert(result.result === 110, `Expected 10 * 11 to equal 110, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyConsecutiveNumbers2 = async () => {
    await multiply(15, 16).then((result) => {
        assert(result.result === 240, `Expected 15 * 16 to equal 240, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyConsecutiveNumbers3 = async () => {
    await multiply(25, 26).then((result) => {
        assert(result.result === 650, `Expected 25 * 26 to equal 650, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplySameNegativeNumbers1 = async () => {
    await multiply(-2, -2).then((result) => {
        assert(result.result === 4, `Expected -2 * -2 to equal 4, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplySameNegativeNumbers2 = async () => {
    await multiply(-3, -3).then((result) => {
        assert(result.result === 9, `Expected -3 * -3 to equal 9, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplySameNegativeNumbers3 = async () => {
    await multiply(-5, -5).then((result) => {
        assert(result.result === 25, `Expected -5 * -5 to equal 25, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplySameNegativeNumbers4 = async () => {
    await multiply(-10, -10).then((result) => {
        assert(result.result === 100, `Expected -10 * -10 to equal 100, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplySameNegativeNumbers5 = async () => {
    await multiply(-15, -15).then((result) => {
        assert(result.result === 225, `Expected -15 * -15 to equal 225, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyMixedDecimal1 = async () => {
    await multiply(0.5, 0.4).then((result) => {
        assert(Math.abs(result.result - 0.2) < 0.0001, `Expected 0.5 * 0.4 to approximately equal 0.2, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyMixedDecimal2 = async () => {
    await multiply(0.6, 0.3).then((result) => {
        assert(Math.abs(result.result - 0.18) < 0.0001, `Expected 0.6 * 0.3 to approximately equal 0.18, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyMixedDecimal3 = async () => {
    await multiply(0.7, 0.2).then((result) => {
        assert(Math.abs(result.result - 0.14) < 0.0001, `Expected 0.7 * 0.2 to approximately equal 0.14, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyMixedDecimal4 = async () => {
    await multiply(0.8, 0.9).then((result) => {
        assert(Math.abs(result.result - 0.72) < 0.0001, `Expected 0.8 * 0.9 to approximately equal 0.72, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyWithIntegerResultFromDecimal1 = async () => {
    await multiply(3.5, 10).then((result) => {
        assert(result.result === 35, `Expected 3.5 * 10 to equal 35, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyWithIntegerResultFromDecimal2 = async () => {
    await multiply(4.25, 100).then((result) => {
        assert(result.result === 425, `Expected 4.25 * 100 to equal 425, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyWithIntegerResultFromDecimal3 = async () => {
    await multiply(5.75, 1000).then((result) => {
        assert(result.result === 5750, `Expected 5.75 * 1000 to equal 5750, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyDoubleSingleDigit = async () => {
    await multiply(11, 11).then((result) => {
        assert(result.result === 121, `Expected 11 * 11 to equal 121, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyTripleSingleDigit = async () => {
    await multiply(13, 13).then((result) => {
        assert(result.result === 169, `Expected 13 * 13 to equal 169, but got: '${result}'`);
    }).catch((error) => {
        assertFailed(error.message, error.code);
    });
};

export const testMultiplyExchange1 = async () => {
    try {
        const result1 = await multiply(5, 12);
        const result2 = await multiply(12, 5);
        assert(result1.result === result2.result, `Expected 5 * 12 to equal 12 * 5, but got '${result1.result}' and '${result2.result}'`);
    } catch (error: any) {
        assertFailed(error.message, error.code);
    }
};

export const testMultiplyExchange2 = async () => {
    try {
        const result1 = await multiply(25, 4);
        const result2 = await multiply(4, 25);
        assert(result1.result === result2.result, `Expected 25 * 4 to equal 4 * 25, but got '${result1.result}' and '${result2.result}'`);
    } catch (error: any) {
        assertFailed(error.message, error.code);
    }
};

export const testMultiplyExchange3 = async () => {
    try {
        const result1 = await multiply(13, 17);
        const result2 = await multiply(17, 13);
        assert(result1.result === result2.result, `Expected 13 * 17 to equal 17 * 13, but got '${result1.result}' and '${result2.result}'`);
    } catch (error: any) {
        assertFailed(error.message, error.code);
    }
};
