/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Alert, Button, GestureResponderEvent, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

function EmployeeForm(props: {
  fullName: string | undefined;
  onFullNameChange: ((text: string) => void) | undefined;
  age: string | undefined; onAgeChange: ((text: string) => void) | undefined;
  occupation: string | undefined; onOccupationChange: ((text: string) => void) | undefined;
  onUpdate: ((event: GestureResponderEvent) => void) | undefined;
}) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Employee Information Entry</Text>

      <TextInput
        value={props.fullName}
        onChangeText={props.onFullNameChange}
        placeholder="Full Name"
        placeholderTextColor="#000"
        style={styles.input}
      />

      <TextInput
        value={props.age}
        onChangeText={props.onAgeChange}
        placeholder="Age"
        keyboardType="numeric"
        placeholderTextColor="#000"
        style={styles.input}
      />

      <TextInput
        value={props.occupation}
        onChangeText={props.onOccupationChange}
        placeholder="Occupation specialized in training"
        placeholderTextColor="#000"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Update"
          onPress={props.onUpdate}
          color="#007AFF"
        />
      </View>
    </View>
  );
}

function SumFirstDigitAndLastDigit() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const calculateSum = () => {
    if (number === '') {
      setResult('Please enter a number!');
      return;
    }

    const numStr = number.replace('-', '');
    const firstDigit = parseInt(numStr[0]);
    const lastDigit = parseInt(numStr[numStr.length - 1]);
    const sum = firstDigit + lastDigit;

    setResult('First Digit: ' + firstDigit + '\nLast Digit: ' + lastDigit + '\nSum: ' + sum);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Sum First & Last Digit</Text>

      <TextInput
        value={number}
        onChangeText={setNumber}
        placeholder="Enter a number"
        placeholderTextColor="#000"
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Calculate"
          onPress={calculateSum}
          color="#007AFF"
        />
      </View>

      <Text>{result}</Text>
    </View>
  );
}

function FindMinimum() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [result, setResult] = useState('');

  const findMinimum = () => {
    if (num1 === '' || num2 === '' || num3 === '') {
      setResult('Please enter all three numbers!');
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    let min = n1;
    if (n2 < min) {
      min = n2;
    }
    if (n3 < min) {
      min = n3;
    }

    setResult('Numbers: ' + n1 + ', ' + n2 + ', ' + n3 + '\nMinimum: ' + min);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Find Minimum Number</Text>

      <TextInput
        value={num1}
        onChangeText={setNum1}
        placeholder="First Number"
        placeholderTextColor="#000"
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        value={num2}
        onChangeText={setNum2}
        placeholder="Second Number"
        placeholderTextColor="#000"
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        value={num3}
        onChangeText={setNum3}
        placeholder="Third Number"
        placeholderTextColor="#000"
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Find Minimum"
          onPress={findMinimum}
          color="#007AFF"
        />
      </View>

      <Text>{result}</Text>
    </View>
  );
}

function HailstoneSequence() {
  const [number, setNumber] = useState('');
  const [sequence, setSequence] = useState('');

  const generateHailstone = () => {
    if (number === '') {
      setSequence('Please enter a number!');
      return;
    }

    const n = parseInt(number);
    if (n <= 0) {
      setSequence('Please enter a positive number!');
      return;
    }

    let current = n;
    let steps = [current];

    while (current !== 1) {
      if (current % 2 === 0) {
        current = current / 2;
      } else {
        current = current * 3 + 1;
      }
      steps.push(current);
    }

    const result = 'Starting Number: ' + n + '\nTotal Steps: ' + steps.length
     + '\n\nSequence:\n' + steps.join(' → ');
    setSequence(result);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Hailstone Sequence</Text>

      <TextInput
        value={number}
        onChangeText={setNumber}
        placeholder="Enter a positive number (n > 0)"
        placeholderTextColor="#000"
        keyboardType="numeric"
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Generate Sequence"
          onPress={generateHailstone}
          color="#007AFF"
        />
      </View>

      <Text>{sequence}</Text>
    </View>
  );
}

function App() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleUpdate = () => {
    if (fullName === '' || age === '' || occupation === '') {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    const message = 'Update data successfully!\n\nName: ' + fullName
     + '\nAge: ' + age + '\nOccupation: ' + occupation;
    Alert.alert('Success', message);
  };

  return (
    <ScrollView style={styles.container}>

      <EmployeeForm
        fullName={fullName}
        age={age}
        occupation={occupation}
        onFullNameChange={setFullName}
        onAgeChange={setAge}
        onOccupationChange={setOccupation}
        onUpdate={handleUpdate}
      />
      <SumFirstDigitAndLastDigit />
      <FindMinimum />
      <HailstoneSequence />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginBottom: 20,
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 20,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0c0c0cff',
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fafafa',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 30,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4caf50',
  },
  resultText: {
    fontSize: 16,
    color: '#2e7d32',
    lineHeight: 24,
  },
  infoBox: {
    backgroundColor: '#fff3cd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  infoText: {
    fontSize: 14,
    color: '#856404',
    marginBottom: 3,
  },
});

export default App;
