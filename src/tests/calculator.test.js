const calculator = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.addition(2, 3)).toBe(5);
    });

    test('should add two negative numbers correctly', () => {
      expect(calculator.addition(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator.addition(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(calculator.addition(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(calculator.addition(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.addition(2.5, 3.5)).toBeCloseTo(6, 5);
    });

    test('should add large numbers', () => {
      expect(calculator.addition(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(calculator.subtraction(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative number', () => {
      expect(calculator.subtraction(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(calculator.subtraction(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(calculator.subtraction(5, 0)).toBe(5);
    });

    test('should subtract a number from zero', () => {
      expect(calculator.subtraction(0, 5)).toBe(-5);
    });

    test('should subtract two zeros', () => {
      expect(calculator.subtraction(0, 0)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.subtraction(10.5, 3.5)).toBeCloseTo(7, 5);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calculator.multiplication(45, 2)).toBe(90);
    });

    test('should multiply two negative numbers correctly', () => {
      expect(calculator.multiplication(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(calculator.multiplication(5, -3)).toBe(-15);
    });

    test('should multiply by zero', () => {
      expect(calculator.multiplication(100, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(calculator.multiplication(7, 1)).toBe(7);
    });

    test('should handle decimal numbers', () => {
      expect(calculator.multiplication(2.5, 4)).toBeCloseTo(10, 5);
    });

    test('should multiply large numbers', () => {
      expect(calculator.multiplication(1000, 1000)).toBe(1000000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calculator.division(20, 5)).toBe(4);
    });

    test('should divide resulting in decimal', () => {
      expect(calculator.division(10, 3)).toBeCloseTo(3.333333, 5);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.division(-10, -2)).toBe(5);
    });

    test('should divide positive by negative', () => {
      expect(calculator.division(10, -2)).toBe(-5);
    });

    test('should divide one by itself', () => {
      expect(calculator.division(5, 5)).toBe(1);
    });

    test('should divide zero by a number', () => {
      expect(calculator.division(0, 5)).toBe(0);
    });

    test('should handle decimal division', () => {
      expect(calculator.division(7.5, 2.5)).toBeCloseTo(3, 5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.division(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => calculator.division(-10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => calculator.division(0, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('Image Examples - Basic Operations', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(calculator.addition(2, 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(calculator.subtraction(10, 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(calculator.multiplication(45, 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(calculator.division(20, 5)).toBe(4);
    });
  });

  describe('Modulo', () => {
    test('should return remainder of two positive numbers', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo correctly', () => {
      expect(calculator.modulo(17, 5)).toBe(2);
    });

    test('should handle modulo with negative dividend', () => {
      expect(calculator.modulo(-10, 3)).toBe(-1);
    });

    test('should handle modulo with negative divisor', () => {
      expect(calculator.modulo(10, -3)).toBe(1);
    });

    test('should handle modulo of equal numbers', () => {
      expect(calculator.modulo(7, 7)).toBe(0);
    });

    test('should handle modulo with decimal numbers', () => {
      expect(calculator.modulo(5.5, 2)).toBeCloseTo(1.5, 5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => calculator.modulo(-10, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  describe('Power', () => {
    test('should raise positive number to positive exponent', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power correctly', () => {
      expect(calculator.power(2, 8)).toBe(256);
    });

    test('should handle power with zero exponent', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should handle power with negative exponent', () => {
      expect(calculator.power(2, -2)).toBeCloseTo(0.25, 5);
    });

    test('should handle negative base with positive exponent', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    test('should handle negative base with even exponent', () => {
      expect(calculator.power(-3, 2)).toBe(9);
    });

    test('should handle decimal base and exponent', () => {
      expect(calculator.power(2.5, 2)).toBeCloseTo(6.25, 5);
    });

    test('should handle power of 1', () => {
      expect(calculator.power(100, 1)).toBe(100);
    });

    test('should handle base of 1', () => {
      expect(calculator.power(1, 1000)).toBe(1);
    });

    test('should handle large exponents', () => {
      expect(calculator.power(10, 6)).toBe(1000000);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root correctly', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should handle square root of perfect squares', () => {
      expect(calculator.squareRoot(25)).toBe(5);
    });

    test('should handle square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should handle square root of decimal numbers', () => {
      expect(calculator.squareRoot(2.25)).toBeCloseTo(1.5, 5);
    });

    test('should handle square root resulting in irrational number', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414213, 5);
    });

    test('should throw error for negative number', () => {
      expect(() => calculator.squareRoot(-4)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error for negative decimal', () => {
      expect(() => calculator.squareRoot(-9.5)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should handle large numbers', () => {
      expect(calculator.squareRoot(1000000)).toBe(1000);
    });

    test('should handle very small decimal numbers', () => {
      expect(calculator.squareRoot(0.0001)).toBeCloseTo(0.01, 5);
    });
  });

  describe('Image Examples - Extended Operations', () => {
    test('should calculate 5 % 2 = 1 (modulo)', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate 2 ^ 3 = 8 (power)', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate √16 = 4 (square root)', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });
  });

  describe('Edge Cases', () => {
    test('should handle very small decimal numbers', () => {
      expect(calculator.addition(0.0001, 0.0002)).toBeCloseTo(0.0003, 4);
    });

    test('should handle negative zero', () => {
      expect(calculator.addition(-0, 5)).toBe(5);
    });

    test('should handle Infinity in division', () => {
      const result = calculator.division(10, 0.000001);
      expect(result).toBeGreaterThan(0);
    });

    test('should handle combined operations', () => {
      const result = calculator.power(calculator.squareRoot(4), 3);
      expect(result).toBe(8);
    });

    test('should handle modulo of results from other operations', () => {
      const result = calculator.modulo(calculator.power(3, 3), 5);
      expect(result).toBe(2);
    });
  });
});
