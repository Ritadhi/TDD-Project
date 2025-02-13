# String Calculator (TDD Assessment)

This project is a simple implementation of a string calculator that performs addition on comma-separated numbers, as well as numbers separated by new lines or custom delimiters. The project follows a Test-Driven Development (TDD) approach and is implemented in JavaScript using Jest for testing.

## Task Overview

The goal of the task was to develop a calculator that can:

1. Add numbers represented as strings.
2. Handle custom delimiters and multiple delimiters.
3. Reject negative numbers with a clear error message.
4. Ignore numbers greater than 1000 in the sum.

## Features

- **Basic Addition**: Can handle an empty string, a single number, or multiple comma-separated numbers.
- **New Line as Delimiter**: Supports new lines (`\n`) as a separator.
- **Custom Delimiters**: Allows custom delimiters (e.g., `//;`).
- **Negative Number Handling**: Rejects negative numbers and provides an error message.
- **Numbers Greater Than 1000**: Ignores numbers greater than 1000 in the sum.
- **Multiple Delimiters**: Supports multiple delimiters, both short and long.

## Setup and Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (https://nodejs.org/)

### Steps

1. Install dependencies:
    ```bash
    npm install
    ```

2. Run the tests:
    ```bash
    npm run test
    ```

## Running Tests

The project uses **Jest** for testing. You can run all tests by running the following command in the project directory:

```bash
npm run test
```

Jest will execute all the tests defined in the `tests` folder and output the results to the console.

## Example Usage

Here is an example of how to use the `add` function:

```javascript
const { add } = require('./stringCalculator');

// Adding empty string
console.log(add('')); // 0

// Adding single number
console.log(add('1')); // 1

// Adding comma-separated numbers
console.log(add('1,5')); // 6

// Adding numbers with custom delimiters
console.log(add('//;\n1;2')); // 3

// Adding negative numbers (will throw error)
console.log(add('-1')); // "negative numbers not allowed -1"
```

## Test Cases

The following test cases are implemented using Jest:

- **Basic Addition**: `add('')`, `add('1')`, `add('1,5')`
- **Handling Negative Numbers**: `add('-1')`, `add('2,-1,3')`, `add('2,-1,3,-4,6')`
- **Numbers Greater Than 1000**: `add('2,1000')`
- **Custom Delimiters**: `add('//;\n1;2')`, `add('//[***]\n1***2***3')`
- **Multiple Delimiters**: `add('//[*][%]\n1*2%3')`
- **New Line as Delimiter**: `add('1\n2,3')`

You can find these tests in the `stringCalculator.test.js` file.
