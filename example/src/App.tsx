import { Text, View, StyleSheet, Button } from 'react-native';
import { multiply } from 'react-native-my-test-module';
import { useState } from 'react';
import { LogBox } from 'react-native';
import { testMultiplyByNegativeOne, testMultiplyByOne, testMultiplyBySmallFraction, testMultiplyByZero, testMultiplyCommutativeProperty, testMultiplyConsecutiveNumbers1, testMultiplyConsecutiveNumbers2, testMultiplyConsecutiveNumbers3, testMultiplyDecimal1, testMultiplyDecimal10, testMultiplyDecimal2, testMultiplyDecimal3, testMultiplyDecimal4, testMultiplyDecimal5, testMultiplyDecimal6, testMultiplyDecimal7, testMultiplyDecimal8, testMultiplyDecimal9, testMultiplyDecimalNumbers, testMultiplyDoubleSingleDigit, testMultiplyExchange1, testMultiplyExchange2, testMultiplyExchange3, testMultiplyFifty, testMultiplyFive, testMultiplyFour, testMultiplyFourByFive, testMultiplyFractional, testMultiplyLargeDecimalNumbers, testMultiplyLargeNumbers, testMultiplyMixedDecimal1, testMultiplyMixedDecimal2, testMultiplyMixedDecimal3, testMultiplyMixedDecimal4, testMultiplyMixedSignNumbers, testMultiplyNegateTwenty, testMultiplyNegativeByNegative, testMultiplyNegativeDecimal, testMultiplyNegativeDecimal1, testMultiplyNegativeDecimal2, testMultiplyNegativeDecimal3, testMultiplyNegativeDecimal4, testMultiplyNegativeDecimal5, testMultiplyNegativeEight, testMultiplyNegativeFive, testMultiplyNegativeFour, testMultiplyNegativeLargeNumbers, testMultiplyNegativeNine, testMultiplyNegativeNumbers, testMultiplyNegativeSeven, testMultiplyNegativeSix, testMultiplyNegativeTen, testMultiplyNegativeThree, testMultiplyNegativeTwo, testMultiplyNegativeWithDecimal, testMultiplyNine, testMultiplyOneHundred, testMultiplyPositiveNumbers, testMultiplyPrimeNumbers1, testMultiplyPrimeNumbers2, testMultiplyPrimeNumbers3, testMultiplySameNegativeNumbers1, testMultiplySameNegativeNumbers2, testMultiplySameNegativeNumbers3, testMultiplySameNegativeNumbers4, testMultiplySameNegativeNumbers5, testMultiplySeven, testMultiplySingleByLargeNumber, testMultiplySingleDigits, testMultiplySix, testMultiplySmallDecimals, testMultiplyTenByTen, testMultiplyTenPowers1, testMultiplyTenPowers2, testMultiplyTenPowers3, testMultiplyThree, testMultiplyThreeByFive, testMultiplyThreeByFour, testMultiplyTripleSingleDigit, testMultiplyTwelve, testMultiplyTwenty, testMultiplyTwo, testMultiplyTwoByFive, testMultiplyTwoByThree, testMultiplyVeryLargeNumbers1, testMultiplyVeryLargeNumbers2, testMultiplyVerySmallNumber, testMultiplyVerySmallNumbers1, testMultiplyVerySmallNumbers2, testMultiplyVerySmallNumbers3, testMultiplyWithIntegerResultFromDecimal1, testMultiplyWithIntegerResultFromDecimal2, testMultiplyWithIntegerResultFromDecimal3, testMultiplyZeroByZero } from './MultiplyTest';

// Function to calculate and print all numbers from 1 to 100 raised to powers 1 to 100 using multiply
async function calculateAndPrintPowers() {
  console.clear()
  console.log('Calculating powers from 1^1 to 100^100 using multiply:');
  
  // Create all test cases
  const multiplyTests2 = [
    { name: 'testMultiplyPositiveNumbers', fn: testMultiplyPositiveNumbers },
    { name: 'testMultiplyNegativeNumbers', fn: testMultiplyNegativeNumbers },
    { name: 'testMultiplyNegativeByNegative', fn: testMultiplyNegativeByNegative },
    { name: 'testMultiplyByZero', fn: testMultiplyByZero },
    { name: 'testMultiplyByOne', fn: testMultiplyByOne },
    { name: 'testMultiplyDecimalNumbers', fn: testMultiplyDecimalNumbers },
    { name: 'testMultiplyZeroByZero', fn: testMultiplyZeroByZero },
    { name: 'testMultiplyLargeNumbers', fn: testMultiplyLargeNumbers },
    { name: 'testMultiplySmallDecimals', fn: testMultiplySmallDecimals },
    { name: 'testMultiplyNegativeDecimal', fn: testMultiplyNegativeDecimal },
    { name: 'testMultiplyCommutativeProperty', fn: testMultiplyCommutativeProperty },
    { name: 'testMultiplySingleDigits', fn: testMultiplySingleDigits },
    { name: 'testMultiplyByNegativeOne', fn: testMultiplyByNegativeOne },
    { name: 'testMultiplyVerySmallNumber', fn: testMultiplyVerySmallNumber },
    { name: 'testMultiplyTenByTen', fn: testMultiplyTenByTen },
    { name: 'testMultiplyNegativeWithDecimal', fn: testMultiplyNegativeWithDecimal },
    { name: 'testMultiplySingleByLargeNumber', fn: testMultiplySingleByLargeNumber },
    { name: 'testMultiplyFractional', fn: testMultiplyFractional },
    { name: 'testMultiplyMixedSignNumbers', fn: testMultiplyMixedSignNumbers },
    { name: 'testMultiplyThree', fn: testMultiplyThree },
    { name: 'testMultiplyLargeDecimalNumbers', fn: testMultiplyLargeDecimalNumbers },
    { name: 'testMultiplyNegativeLargeNumbers', fn: testMultiplyNegativeLargeNumbers },
    { name: 'testMultiplyBySmallFraction', fn: testMultiplyBySmallFraction },
    { name: 'testMultiplyTwo', fn: testMultiplyTwo },
    { name: 'testMultiplySix', fn: testMultiplySix },
    { name: 'testMultiplySeven', fn: testMultiplySeven },
    { name: 'testMultiplyFive', fn: testMultiplyFive },
    { name: 'testMultiplyFour', fn: testMultiplyFour },
    { name: 'testMultiplyNine', fn: testMultiplyNine },
    { name: 'testMultiplyTwelve', fn: testMultiplyTwelve },
    { name: 'testMultiplyTwenty', fn: testMultiplyTwenty },
    { name: 'testMultiplyFifty', fn: testMultiplyFifty },
    { name: 'testMultiplyOneHundred', fn: testMultiplyOneHundred },
    { name: 'testMultiplyTwoByThree', fn: testMultiplyTwoByThree },
    { name: 'testMultiplyTwoByFive', fn: testMultiplyTwoByFive },
    { name: 'testMultiplyThreeByFour', fn: testMultiplyThreeByFour },
    { name: 'testMultiplyThreeByFive', fn: testMultiplyThreeByFive },
    { name: 'testMultiplyFourByFive', fn: testMultiplyFourByFive },
    { name: 'testMultiplyNegativeTwo', fn: testMultiplyNegativeTwo },
    { name: 'testMultiplyNegativeThree', fn: testMultiplyNegativeThree },
    { name: 'testMultiplyNegativeFour', fn: testMultiplyNegativeFour },
    { name: 'testMultiplyNegativeFive', fn: testMultiplyNegativeFive },
    { name: 'testMultiplyNegativeSix', fn: testMultiplyNegativeSix },
    { name: 'testMultiplyNegativeSeven', fn: testMultiplyNegativeSeven },
    { name: 'testMultiplyNegativeEight', fn: testMultiplyNegativeEight },
    { name: 'testMultiplyNegativeNine', fn: testMultiplyNegativeNine },
    { name: 'testMultiplyNegativeTen', fn: testMultiplyNegativeTen },
    { name: 'testMultiplyNegateTwenty', fn: testMultiplyNegateTwenty },
    { name: 'testMultiplyDecimal1', fn: testMultiplyDecimal1 },
    { name: 'testMultiplyDecimal2', fn: testMultiplyDecimal2 },
    { name: 'testMultiplyDecimal3', fn: testMultiplyDecimal3 },
    { name: 'testMultiplyDecimal4', fn: testMultiplyDecimal4 },
    { name: 'testMultiplyDecimal5', fn: testMultiplyDecimal5 },
    { name: 'testMultiplyDecimal6', fn: testMultiplyDecimal6 },
    { name: 'testMultiplyDecimal7', fn: testMultiplyDecimal7 },
    { name: 'testMultiplyDecimal8', fn: testMultiplyDecimal8 },
    { name: 'testMultiplyDecimal9', fn: testMultiplyDecimal9 },
    { name: 'testMultiplyDecimal10', fn: testMultiplyDecimal10 },
    { name: 'testMultiplyNegativeDecimal1', fn: testMultiplyNegativeDecimal1 },
    { name: 'testMultiplyNegativeDecimal2', fn: testMultiplyNegativeDecimal2 },
    { name: 'testMultiplyNegativeDecimal3', fn: testMultiplyNegativeDecimal3 },
    { name: 'testMultiplyNegativeDecimal4', fn: testMultiplyNegativeDecimal4 },
    { name: 'testMultiplyNegativeDecimal5', fn: testMultiplyNegativeDecimal5 },
    { name: 'testMultiplyVeryLargeNumbers1', fn: testMultiplyVeryLargeNumbers1 },
    { name: 'testMultiplyVeryLargeNumbers2', fn: testMultiplyVeryLargeNumbers2 },
    { name: 'testMultiplyVerySmallNumbers1', fn: testMultiplyVerySmallNumbers1 },
    { name: 'testMultiplyVerySmallNumbers2', fn: testMultiplyVerySmallNumbers2 },
    { name: 'testMultiplyVerySmallNumbers3', fn: testMultiplyVerySmallNumbers3 },
    { name: 'testMultiplyTenPowers1', fn: testMultiplyTenPowers1 },
    { name: 'testMultiplyTenPowers2', fn: testMultiplyTenPowers2 },
    { name: 'testMultiplyTenPowers3', fn: testMultiplyTenPowers3 },
    { name: 'testMultiplyPrimeNumbers1', fn: testMultiplyPrimeNumbers1 },
    { name: 'testMultiplyPrimeNumbers2', fn: testMultiplyPrimeNumbers2 },
    { name: 'testMultiplyPrimeNumbers3', fn: testMultiplyPrimeNumbers3 },
    { name: 'testMultiplyConsecutiveNumbers1', fn: testMultiplyConsecutiveNumbers1 },
    { name: 'testMultiplyConsecutiveNumbers2', fn: testMultiplyConsecutiveNumbers2 },
    { name: 'testMultiplyConsecutiveNumbers3', fn: testMultiplyConsecutiveNumbers3 },
    { name: 'testMultiplySameNegativeNumbers1', fn: testMultiplySameNegativeNumbers1 },
    { name: 'testMultiplySameNegativeNumbers2', fn: testMultiplySameNegativeNumbers2 },
    { name: 'testMultiplySameNegativeNumbers3', fn: testMultiplySameNegativeNumbers3 },
    { name: 'testMultiplySameNegativeNumbers4', fn: testMultiplySameNegativeNumbers4 },
    { name: 'testMultiplySameNegativeNumbers5', fn: testMultiplySameNegativeNumbers5 },
    { name: 'testMultiplyMixedDecimal1', fn: testMultiplyMixedDecimal1 },
    { name: 'testMultiplyMixedDecimal2', fn: testMultiplyMixedDecimal2 },
    { name: 'testMultiplyMixedDecimal3', fn: testMultiplyMixedDecimal3 },
    { name: 'testMultiplyMixedDecimal4', fn: testMultiplyMixedDecimal4 },
    { name: 'testMultiplyWithIntegerResultFromDecimal1', fn: testMultiplyWithIntegerResultFromDecimal1 },
    { name: 'testMultiplyWithIntegerResultFromDecimal2', fn: testMultiplyWithIntegerResultFromDecimal2 },
    { name: 'testMultiplyWithIntegerResultFromDecimal3', fn: testMultiplyWithIntegerResultFromDecimal3 },
    { name: 'testMultiplyDoubleSingleDigit', fn: testMultiplyDoubleSingleDigit },
    { name: 'testMultiplyTripleSingleDigit', fn: testMultiplyTripleSingleDigit },
    { name: 'testMultiplyExchange1', fn: testMultiplyExchange1 },
    { name: 'testMultiplyExchange2', fn: testMultiplyExchange2 },
    { name: 'testMultiplyExchange3', fn: testMultiplyExchange3 },
    
]

  const multiplyTests = [
    { name: 'testMultiplyPositiveNumbers', fn: testMultiplyPositiveNumbers },
    { name: 'testMultiplyNegativeNumbers', fn: testMultiplyNegativeNumbers },
    { name: 'testMultiplyNegativeByNegative', fn: testMultiplyNegativeByNegative },
    { name: 'testMultiplyByZero', fn: testMultiplyByZero },
    { name: 'testMultiplyByOne', fn: testMultiplyByOne },
    { name: 'testMultiplyDecimalNumbers', fn: testMultiplyDecimalNumbers },
    { name: 'testMultiplyZeroByZero', fn: testMultiplyZeroByZero },
    { name: 'testMultiplyLargeNumbers', fn: testMultiplyLargeNumbers },
    { name: 'testMultiplySmallDecimals', fn: testMultiplySmallDecimals },
    { name: 'testMultiplyNegativeDecimal', fn: testMultiplyNegativeDecimal },
    { name: 'testMultiplyCommutativeProperty', fn: testMultiplyCommutativeProperty },
    { name: 'testMultiplySingleDigits', fn: testMultiplySingleDigits },
    { name: 'testMultiplyByNegativeOne', fn: testMultiplyByNegativeOne },
    { name: 'testMultiplyVerySmallNumber', fn: testMultiplyVerySmallNumber },
    { name: 'testMultiplyTenByTen', fn: testMultiplyTenByTen },
    { name: 'testMultiplyNegativeWithDecimal', fn: testMultiplyNegativeWithDecimal },
    { name: 'testMultiplySingleByLargeNumber', fn: testMultiplySingleByLargeNumber },
    { name: 'testMultiplyFractional', fn: testMultiplyFractional },
    { name: 'testMultiplyMixedSignNumbers', fn: testMultiplyMixedSignNumbers },
    { name: 'testMultiplyThree', fn: testMultiplyThree },
    { name: 'testMultiplyLargeDecimalNumbers', fn: testMultiplyLargeDecimalNumbers },
    { name: 'testMultiplyNegativeLargeNumbers', fn: testMultiplyNegativeLargeNumbers },
    { name: 'testMultiplyBySmallFraction', fn: testMultiplyBySmallFraction },
    { name: 'testMultiplyTwo', fn: testMultiplyTwo },
    { name: 'testMultiplySix', fn: testMultiplySix },
    { name: 'testMultiplySeven', fn: testMultiplySeven },
    { name: 'testMultiplyFive', fn: testMultiplyFive },
    { name: 'testMultiplyFour', fn: testMultiplyFour },
    { name: 'testMultiplyNine', fn: testMultiplyNine },
    { name: 'testMultiplyTwelve', fn: testMultiplyTwelve },
    { name: 'testMultiplyTwenty', fn: testMultiplyTwenty },
    { name: 'testMultiplyFifty', fn: testMultiplyFifty },
    { name: 'testMultiplyOneHundred', fn: testMultiplyOneHundred },
    { name: 'testMultiplyTwoByThree', fn: testMultiplyTwoByThree },
    { name: 'testMultiplyTwoByFive', fn: testMultiplyTwoByFive },
    { name: 'testMultiplyThreeByFour', fn: testMultiplyThreeByFour },
    { name: 'testMultiplyThreeByFive', fn: testMultiplyThreeByFive },
    { name: 'testMultiplyFourByFive', fn: testMultiplyFourByFive },
    { name: 'testMultiplyNegativeTwo', fn: testMultiplyNegativeTwo },
    { name: 'testMultiplyNegativeThree', fn: testMultiplyNegativeThree },
    { name: 'testMultiplyNegativeFour', fn: testMultiplyNegativeFour },
    { name: 'testMultiplyNegativeFive', fn: testMultiplyNegativeFive },
    { name: 'testMultiplyNegativeSix', fn: testMultiplyNegativeSix },
    { name: 'testMultiplyNegativeSeven', fn: testMultiplyNegativeSeven },
    { name: 'testMultiplyNegativeEight', fn: testMultiplyNegativeEight },
    { name: 'testMultiplyNegativeNine', fn: testMultiplyNegativeNine },
    { name: 'testMultiplyNegativeTen', fn: testMultiplyNegativeTen },
    { name: 'testMultiplyNegateTwenty', fn: testMultiplyNegateTwenty },
    { name: 'testMultiplyDecimal1', fn: testMultiplyDecimal1 },
    { name: 'testMultiplyDecimal2', fn: testMultiplyDecimal2 },
    { name: 'testMultiplyDecimal3', fn: testMultiplyDecimal3 },
    { name: 'testMultiplyDecimal4', fn: testMultiplyDecimal4 },
    { name: 'testMultiplyDecimal5', fn: testMultiplyDecimal5 },
    { name: 'testMultiplyDecimal6', fn: testMultiplyDecimal6 },
    { name: 'testMultiplyDecimal7', fn: testMultiplyDecimal7 },
    { name: 'testMultiplyDecimal8', fn: testMultiplyDecimal8 },
    { name: 'testMultiplyDecimal9', fn: testMultiplyDecimal9 },
    { name: 'testMultiplyDecimal10', fn: testMultiplyDecimal10 },
    { name: 'testMultiplyNegativeDecimal1', fn: testMultiplyNegativeDecimal1 },
    { name: 'testMultiplyNegativeDecimal2', fn: testMultiplyNegativeDecimal2 },
    { name: 'testMultiplyNegativeDecimal3', fn: testMultiplyNegativeDecimal3 },
    { name: 'testMultiplyNegativeDecimal4', fn: testMultiplyNegativeDecimal4 },
    { name: 'testMultiplyNegativeDecimal5', fn: testMultiplyNegativeDecimal5 },
    { name: 'testMultiplyVeryLargeNumbers1', fn: testMultiplyVeryLargeNumbers1 },
    { name: 'testMultiplyVeryLargeNumbers2', fn: testMultiplyVeryLargeNumbers2 },
    { name: 'testMultiplyVerySmallNumbers1', fn: testMultiplyVerySmallNumbers1 },
    { name: 'testMultiplyVerySmallNumbers2', fn: testMultiplyVerySmallNumbers2 },
    { name: 'testMultiplyVerySmallNumbers3', fn: testMultiplyVerySmallNumbers3 },
    { name: 'testMultiplyTenPowers1', fn: testMultiplyTenPowers1 },
    { name: 'testMultiplyTenPowers2', fn: testMultiplyTenPowers2 },
    { name: 'testMultiplyTenPowers3', fn: testMultiplyTenPowers3 },
    { name: 'testMultiplyPrimeNumbers1', fn: testMultiplyPrimeNumbers1 },
    { name: 'testMultiplyPrimeNumbers2', fn: testMultiplyPrimeNumbers2 },
    { name: 'testMultiplyPrimeNumbers3', fn: testMultiplyPrimeNumbers3 },
    { name: 'testMultiplyConsecutiveNumbers1', fn: testMultiplyConsecutiveNumbers1 },
    { name: 'testMultiplyConsecutiveNumbers2', fn: testMultiplyConsecutiveNumbers2 },
    { name: 'testMultiplyConsecutiveNumbers3', fn: testMultiplyConsecutiveNumbers3 },
    { name: 'testMultiplySameNegativeNumbers1', fn: testMultiplySameNegativeNumbers1 },
    { name: 'testMultiplySameNegativeNumbers2', fn: testMultiplySameNegativeNumbers2 },
    { name: 'testMultiplySameNegativeNumbers3', fn: testMultiplySameNegativeNumbers3 },
    { name: 'testMultiplySameNegativeNumbers4', fn: testMultiplySameNegativeNumbers4 },
    { name: 'testMultiplySameNegativeNumbers5', fn: testMultiplySameNegativeNumbers5 },
    { name: 'testMultiplyMixedDecimal1', fn: testMultiplyMixedDecimal1 },
    { name: 'testMultiplyMixedDecimal2', fn: testMultiplyMixedDecimal2 },
    { name: 'testMultiplyMixedDecimal3', fn: testMultiplyMixedDecimal3 },
    { name: 'testMultiplyMixedDecimal4', fn: testMultiplyMixedDecimal4 },
    { name: 'testMultiplyWithIntegerResultFromDecimal1', fn: testMultiplyWithIntegerResultFromDecimal1 },
    { name: 'testMultiplyWithIntegerResultFromDecimal2', fn: testMultiplyWithIntegerResultFromDecimal2 },
    { name: 'testMultiplyWithIntegerResultFromDecimal3', fn: testMultiplyWithIntegerResultFromDecimal3 },
    { name: 'testMultiplyDoubleSingleDigit', fn: testMultiplyDoubleSingleDigit },
    { name: 'testMultiplyTripleSingleDigit', fn: testMultiplyTripleSingleDigit },
    { name: 'testMultiplyExchange1', fn: testMultiplyExchange1 },
    { name: 'testMultiplyExchange2', fn: testMultiplyExchange2 },
    { name: 'testMultiplyExchange3', fn: testMultiplyExchange3 },
]


const sharedDeviceTest = [
        ...multiplyTests, 
        ...multiplyTests2,
        ...multiplyTests2,
        ...multiplyTests2
]

  
  // Run all calculations in parallel
  const results = await Promise.allSettled(
    sharedDeviceTest.map(({ fn }) => fn())
  );
  
  // Log results
  results.forEach((result, index) => {
    const test = multiplyTests[index];
    const testName = test?.name || `Test ${index}`;
    if (result.status === 'fulfilled') {
      console.log(`✓ ${testName} passed - Result: ${JSON.stringify(result.value)}`);
    } else {
      console.error(`✗ ${testName} failed: ${result.reason}`);
    }
  });
}

export default function App() {
  const [result, setResult] = useState<number | null>(null);

  const handleCalculatePowers = async () => {
    await calculateAndPrintPowers();
    // Set a simple result after calculations complete
    const finalResult = await multiply(3, 7);
    setResult(finalResult.result);
  };

    const handleRunAllTests = async () => {
    LogBox.ignoreAllLogs(false);
    await handleCalculatePowers();
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
            <Button title="Run Regular Tests" onPress={handleRunAllTests} color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
