import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style'

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState('');
  // Function to handle number inputs 
  const handleNumberInput = (num: number) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };
  // Function to handle operator inputs 
  const handleOperatorInput = (operator: string) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };
  // Function to handle equal button press 
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };
  // Function to handle clear button press 
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Result}>{displayValue}</Text>
      <View style={styles.RowContainer}>
        <TouchableOpacity style={styles.NumberButton} onPress={() => handleNumberInput(7)}>
          <Text style={styles.Text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NumberButton} onPress={() => handleNumberInput(8)}>
          <Text style={styles.Text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NumberButton} onPress={() => handleNumberInput(9)}>
          <Text style={styles.Text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OperatorButton} onPress={() => handleOperatorInput('/')}>
          <Text style={[styles.Text, styles.colorOrange]}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.RowContainer}>
        <TouchableOpacity style={styles.NumberButton} onPress={() => handleNumberInput(4)}>
          <Text style={styles.Text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NumberButton} onPress={() => handleNumberInput(5)}>
          <Text style={styles.Text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NumberButton} onPress={() => handleNumberInput(6)}>
          <Text style={styles.Text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OperatorButton} onPress={() => handleOperatorInput('*')}>
          <Text style={[styles.Text, styles.colorOrange]}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.RowContainer}>
        <TouchableOpacity style={styles.NumberButton} onPress={() => handleNumberInput(1)}>
          <Text style={styles.Text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NumberButton} onPress={() => handleNumberInput(2)}>
          <Text style={styles.Text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NumberButton} onPress={() => handleNumberInput(3)}>
          <Text style={styles.Text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OperatorButton} onPress={() => handleOperatorInput('-')}>
          <Text style={[styles.Text, styles.colorOrange]}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.RowContainer}>
        <TouchableOpacity style={styles.Button0} onPress={() => handleNumberInput(0)}>
          <Text style={styles.Text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.OperatorButton} onPress={() => handleOperatorInput('+')}>
          <Text style={[styles.Text, styles.colorOrange]}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonEqual} onPress={handleEqual}>
          <Text style={[styles.Text, styles.colorWhite]}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.RowContainer}>
        <TouchableOpacity style={styles.ClearButton} onPress={handleClear}>
          <Text style={styles.Text}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;