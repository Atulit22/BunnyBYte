import { Problem } from '../types';

export const easyProblems: Problem[] = [
  {
    id: 'easy-1',
    title: 'Hello World Function',
    description: 'Create a function that returns the string "Hello, World!"',
    example: 'helloWorld() should return "Hello, World!"',
    expectedOutput: 'Hello, World!',
    starterCode: `function helloWorld() {
  // Your code here
}`,
    testCases: [
      {
        input: 'helloWorld()',
        expectedOutput: 'Hello, World!',
        description: 'Function should return the correct greeting'
      }
    ],
    hints: [
      'Use the return statement to return a string',
      'Make sure the capitalization and punctuation match exactly'
    ],
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'easy-2',
    title: 'Add Two Numbers',
    description: 'Write a function that takes two numbers and returns their sum.',
    example: 'add(5, 3) should return 8',
    expectedOutput: '8',
    starterCode: `function add(a, b) {
  // Your code here
}`,
    testCases: [
      {
        input: 'add(5, 3)',
        expectedOutput: '8',
        description: 'Should add positive numbers'
      },
      {
        input: 'add(-2, 4)',
        expectedOutput: '2',
        description: 'Should handle negative numbers'
      }
    ],
    hints: [
      'Use the + operator to add the two parameters',
      'Return the result of a + b'
    ],
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'easy-3',
    title: 'String Length',
    description: 'Create a function that returns the length of a given string.',
    example: 'getLength("hello") should return 5',
    expectedOutput: '5',
    starterCode: `function getLength(str) {
  // Your code here
}`,
    testCases: [
      {
        input: 'getLength("hello")',
        expectedOutput: '5',
        description: 'Should return length of string'
      },
      {
        input: 'getLength("")',
        expectedOutput: '0',
        description: 'Should handle empty strings'
      }
    ],
    hints: [
      'Strings have a length property',
      'Access it using str.length'
    ],
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'easy-4',
    title: 'Even or Odd',
    description: 'Write a function that determines if a number is even or odd. Return "even" or "odd".',
    example: 'evenOrOdd(4) should return "even"',
    expectedOutput: 'even',
    starterCode: `function evenOrOdd(num) {
  // Your code here
}`,
    testCases: [
      {
        input: 'evenOrOdd(4)',
        expectedOutput: 'even',
        description: 'Should identify even numbers'
      },
      {
        input: 'evenOrOdd(7)',
        expectedOutput: 'odd',
        description: 'Should identify odd numbers'
      }
    ],
    hints: [
      'Use the modulo operator (%) to check remainder',
      'If num % 2 === 0, the number is even'
    ],
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'easy-5',
    title: 'Array First Element',
    description: 'Create a function that returns the first element of an array.',
    example: 'firstElement([1, 2, 3]) should return 1',
    expectedOutput: '1',
    starterCode: `function firstElement(arr) {
  // Your code here
}`,
    testCases: [
      {
        input: 'firstElement([1, 2, 3])',
        expectedOutput: '1',
        description: 'Should return first element'
      },
      {
        input: 'firstElement(["a", "b", "c"])',
        expectedOutput: 'a',
        description: 'Should work with strings'
      }
    ],
    hints: [
      'Array elements are accessed using indices',
      'The first element is at index 0'
    ],
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'easy-6',
    title: 'Multiply by Two',
    description: 'Write a function that multiplies a number by 2.',
    example: 'multiplyByTwo(5) should return 10',
    expectedOutput: '10',
    starterCode: `function multiplyByTwo(num) {
  // Your code here
}`,
    testCases: [
      {
        input: 'multiplyByTwo(5)',
        expectedOutput: '10',
        description: 'Should multiply positive numbers'
      },
      {
        input: 'multiplyByTwo(-3)',
        expectedOutput: '-6',
        description: 'Should multiply negative numbers'
      }
    ],
    hints: [
      'Use the * operator for multiplication',
      'Return num * 2'
    ],
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'easy-7',
    title: 'String Uppercase',
    description: 'Create a function that converts a string to uppercase.',
    example: 'makeUppercase("hello") should return "HELLO"',
    expectedOutput: 'HELLO',
    starterCode: `function makeUppercase(str) {
  // Your code here
}`,
    testCases: [
      {
        input: 'makeUppercase("hello")',
        expectedOutput: 'HELLO',
        description: 'Should convert to uppercase'
      },
      {
        input: 'makeUppercase("JavaScript")',
        expectedOutput: 'JAVASCRIPT',
        description: 'Should handle mixed case'
      }
    ],
    hints: [
      'Strings have an toUpperCase() method',
      'Call it on the string parameter'
    ],
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'easy-8',
    title: 'Maximum of Two',
    description: 'Write a function that returns the larger of two numbers.',
    example: 'max(10, 5) should return 10',
    expectedOutput: '10',
    starterCode: `function max(a, b) {
  // Your code here
}`,
    testCases: [
      {
        input: 'max(10, 5)',
        expectedOutput: '10',
        description: 'Should return the larger number'
      },
      {
        input: 'max(3, 7)',
        expectedOutput: '7',
        description: 'Should work when second is larger'
      }
    ],
    hints: [
      'Use an if statement to compare the numbers',
      'You can also use Math.max(a, b)'
    ],
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'easy-9',
    title: 'Array Length',
    description: 'Create a function that returns the number of elements in an array.',
    example: 'arrayLength([1, 2, 3, 4]) should return 4',
    expectedOutput: '4',
    starterCode: `function arrayLength(arr) {
  // Your code here
}`,
    testCases: [
      {
        input: 'arrayLength([1, 2, 3, 4])',
        expectedOutput: '4',
        description: 'Should return array length'
      },
      {
        input: 'arrayLength([])',
        expectedOutput: '0',
        description: 'Should handle empty arrays'
      }
    ],
    hints: [
      'Arrays have a length property',
      'Return arr.length'
    ],
    difficulty: 'easy',
    points: 10
  },
  {
    id: 'easy-10',
    title: 'Simple Calculator',
    description: 'Write a function that adds 1 to a given number.',
    example: 'addOne(5) should return 6',
    expectedOutput: '6',
    starterCode: `function addOne(num) {
  // Your code here
}`,
    testCases: [
      {
        input: 'addOne(5)',
        expectedOutput: '6',
        description: 'Should add 1 to positive numbers'
      },
      {
        input: 'addOne(-1)',
        expectedOutput: '0',
        description: 'Should add 1 to negative numbers'
      }
    ],
    hints: [
      'Add 1 to the input parameter',
      'Return num + 1'
    ],
    difficulty: 'easy',
    points: 10
  }
];

export const intermediatePr0blems: Problem[] = [
  {
    id: 'intermediate-1',
    title: 'Reverse String',
    description: 'Write a function that reverses a string.',
    example: 'reverseString("hello") should return "olleh"',
    expectedOutput: 'olleh',
    starterCode: `function reverseString(str) {
  // Your code here
}`,
    testCases: [
      {
        input: 'reverseString("hello")',
        expectedOutput: 'olleh',
        description: 'Should reverse the string'
      },
      {
        input: 'reverseString("JavaScript")',
        expectedOutput: 'tpircSavaJ',
        description: 'Should work with longer strings'
      }
    ],
    hints: [
      'You can split the string into an array, reverse it, and join it back',
      'Or use a loop to build the reversed string'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-2',
    title: 'Palindrome Checker',
    description: 'Create a function that checks if a string is a palindrome (reads the same forwards and backwards).',
    example: 'isPalindrome("racecar") should return true',
    expectedOutput: 'true',
    starterCode: `function isPalindrome(str) {
  // Your code here
}`,
    testCases: [
      {
        input: 'isPalindrome("racecar")',
        expectedOutput: 'true',
        description: 'Should identify palindromes'
      },
      {
        input: 'isPalindrome("hello")',
        expectedOutput: 'false',
        description: 'Should identify non-palindromes'
      }
    ],
    hints: [
      'Compare the string with its reverse',
      'You can use the reverse function you learned earlier'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-3',
    title: 'Count Vowels',
    description: 'Write a function that counts the number of vowels in a string.',
    example: 'countVowels("hello") should return 2',
    expectedOutput: '2',
    starterCode: `function countVowels(str) {
  // Your code here
}`,
    testCases: [
      {
        input: 'countVowels("hello")',
        expectedOutput: '2',
        description: 'Should count vowels correctly'
      },
      {
        input: 'countVowels("JavaScript")',
        expectedOutput: '3',
        description: 'Should handle mixed case'
      }
    ],
    hints: [
      'Vowels are a, e, i, o, u',
      'Loop through the string and check each character',
      'Consider using toLowerCase() for case-insensitive matching'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-4',
    title: 'Factorial',
    description: 'Create a function that calculates the factorial of a number.',
    example: 'factorial(5) should return 120',
    expectedOutput: '120',
    starterCode: `function factorial(n) {
  // Your code here
}`,
    testCases: [
      {
        input: 'factorial(5)',
        expectedOutput: '120',
        description: 'Should calculate factorial correctly'
      },
      {
        input: 'factorial(0)',
        expectedOutput: '1',
        description: 'Should handle base case'
      }
    ],
    hints: [
      'Factorial of n is n * (n-1) * (n-2) * ... * 1',
      'Factorial of 0 is 1 by definition',
      'You can use recursion or a loop'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-5',
    title: 'Find Maximum in Array',
    description: 'Write a function that finds the largest number in an array.',
    example: 'findMax([3, 7, 2, 9, 1]) should return 9',
    expectedOutput: '9',
    starterCode: `function findMax(arr) {
  // Your code here
}`,
    testCases: [
      {
        input: 'findMax([3, 7, 2, 9, 1])',
        expectedOutput: '9',
        description: 'Should find maximum value'
      },
      {
        input: 'findMax([-1, -5, -2])',
        expectedOutput: '-1',
        description: 'Should handle negative numbers'
      }
    ],
    hints: [
      'Start with the first element as the maximum',
      'Loop through and compare each element',
      'You can also use Math.max(...arr)'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-6',
    title: 'Sum Array Elements',
    description: 'Create a function that sums all elements in an array.',
    example: 'sumArray([1, 2, 3, 4]) should return 10',
    expectedOutput: '10',
    starterCode: `function sumArray(arr) {
  // Your code here
}`,
    testCases: [
      {
        input: 'sumArray([1, 2, 3, 4])',
        expectedOutput: '10',
        description: 'Should sum all elements'
      },
      {
        input: 'sumArray([])',
        expectedOutput: '0',
        description: 'Should handle empty arrays'
      }
    ],
    hints: [
      'Use a loop to iterate through the array',
      'Keep a running total',
      'You can also use the reduce method'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-7',
    title: 'Remove Duplicates',
    description: 'Write a function that removes duplicate values from an array.',
    example: 'removeDuplicates([1, 2, 2, 3, 1]) should return [1, 2, 3]',
    expectedOutput: '[1, 2, 3]',
    starterCode: `function removeDuplicates(arr) {
  // Your code here
}`,
    testCases: [
      {
        input: 'removeDuplicates([1, 2, 2, 3, 1])',
        expectedOutput: '[1, 2, 3]',
        description: 'Should remove duplicates'
      },
      {
        input: 'removeDuplicates(["a", "b", "a"])',
        expectedOutput: '["a", "b"]',
        description: 'Should work with strings'
      }
    ],
    hints: [
      'You can use a Set to store unique values',
      'Or use filter with indexOf',
      'Convert back to array if using Set'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-8',
    title: 'Capitalize Words',
    description: 'Create a function that capitalizes the first letter of each word in a string.',
    example: 'capitalizeWords("hello world") should return "Hello World"',
    expectedOutput: 'Hello World',
    starterCode: `function capitalizeWords(str) {
  // Your code here
}`,
    testCases: [
      {
        input: 'capitalizeWords("hello world")',
        expectedOutput: 'Hello World',
        description: 'Should capitalize each word'
      },
      {
        input: 'capitalizeWords("javascript is fun")',
        expectedOutput: 'Javascript Is Fun',
        description: 'Should work with multiple words'
      }
    ],
    hints: [
      'Split the string into words',
      'Capitalize the first letter of each word',
      'Join the words back together'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-9',
    title: 'Fibonacci Sequence',
    description: 'Write a function that returns the nth number in the Fibonacci sequence.',
    example: 'fibonacci(6) should return 8',
    expectedOutput: '8',
    starterCode: `function fibonacci(n) {
  // Your code here
}`,
    testCases: [
      {
        input: 'fibonacci(6)',
        expectedOutput: '8',
        description: 'Should calculate 6th Fibonacci number'
      },
      {
        input: 'fibonacci(1)',
        expectedOutput: '1',
        description: 'Should handle base cases'
      }
    ],
    hints: [
      'Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13...',
      'Each number is the sum of the two preceding ones',
      'You can use recursion or iteration'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-10',
    title: 'Count Character Occurrences',
    description: 'Create a function that counts how many times a character appears in a string.',
    example: 'countChar("hello", "l") should return 2',
    expectedOutput: '2',
    starterCode: `function countChar(str, char) {
  // Your code here
}`,
    testCases: [
      {
        input: 'countChar("hello", "l")',
        expectedOutput: '2',
        description: 'Should count character occurrences'
      },
      {
        input: 'countChar("JavaScript", "a")',
        expectedOutput: '2',
        description: 'Should be case sensitive'
      }
    ],
    hints: [
      'Loop through the string',
      'Compare each character with the target',
      'Keep a counter'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-11',
    title: 'Array Filter Evens',
    description: 'Write a function that returns only the even numbers from an array.',
    example: 'filterEvens([1, 2, 3, 4, 5]) should return [2, 4]',
    expectedOutput: '[2, 4]',
    starterCode: `function filterEvens(arr) {
  // Your code here
}`,
    testCases: [
      {
        input: 'filterEvens([1, 2, 3, 4, 5])',
        expectedOutput: '[2, 4]',
        description: 'Should filter even numbers'
      },
      {
        input: 'filterEvens([1, 3, 5])',
        expectedOutput: '[]',
        description: 'Should return empty array if no evens'
      }
    ],
    hints: [
      'Use the filter method',
      'Check if number % 2 === 0',
      'Return the filtered array'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-12',
    title: 'Object Property Counter',
    description: 'Create a function that counts the number of properties in an object.',
    example: 'countProperties({a: 1, b: 2, c: 3}) should return 3',
    expectedOutput: '3',
    starterCode: `function countProperties(obj) {
  // Your code here
}`,
    testCases: [
      {
        input: 'countProperties({a: 1, b: 2, c: 3})',
        expectedOutput: '3',
        description: 'Should count object properties'
      },
      {
        input: 'countProperties({})',
        expectedOutput: '0',
        description: 'Should handle empty objects'
      }
    ],
    hints: [
      'Use Object.keys() to get property names',
      'Return the length of the keys array',
      'Or loop through with for...in'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-13',
    title: 'String Contains Substring',
    description: 'Write a function that checks if a string contains a specific substring.',
    example: 'containsSubstring("hello world", "world") should return true',
    expectedOutput: 'true',
    starterCode: `function containsSubstring(str, substr) {
  // Your code here
}`,
    testCases: [
      {
        input: 'containsSubstring("hello world", "world")',
        expectedOutput: 'true',
        description: 'Should find substring'
      },
      {
        input: 'containsSubstring("hello", "xyz")',
        expectedOutput: 'false',
        description: 'Should return false when not found'
      }
    ],
    hints: [
      'Use the includes() method',
      'Or use indexOf() and check if result is not -1',
      'Return a boolean value'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-14',
    title: 'Array Intersection',
    description: 'Create a function that returns the common elements between two arrays.',
    example: 'intersection([1, 2, 3], [2, 3, 4]) should return [2, 3]',
    expectedOutput: '[2, 3]',
    starterCode: `function intersection(arr1, arr2) {
  // Your code here
}`,
    testCases: [
      {
        input: 'intersection([1, 2, 3], [2, 3, 4])',
        expectedOutput: '[2, 3]',
        description: 'Should find common elements'
      },
      {
        input: 'intersection([1, 2], [3, 4])',
        expectedOutput: '[]',
        description: 'Should return empty array when no common elements'
      }
    ],
    hints: [
      'Use filter to find elements that exist in both arrays',
      'Use includes() to check if element exists in second array',
      'Consider using Set for better performance'
    ],
    difficulty: 'intermediate',
    points: 15
  },
  {
    id: 'intermediate-15',
    title: 'Group Array Elements',
    description: 'Write a function that groups array elements into chunks of specified size.',
    example: 'chunk([1, 2, 3, 4, 5], 2) should return [[1, 2], [3, 4], [5]]',
    expectedOutput: '[[1, 2], [3, 4], [5]]',
    starterCode: `function chunk(arr, size) {
  // Your code here
}`,
    testCases: [
      {
        input: 'chunk([1, 2, 3, 4, 5], 2)',
        expectedOutput: '[[1, 2], [3, 4], [5]]',
        description: 'Should group elements into chunks'
      },
      {
        input: 'chunk([1, 2, 3], 1)',
        expectedOutput: '[[1], [2], [3]]',
        description: 'Should handle size of 1'
      }
    ],
    hints: [
      'Use a loop to iterate through the array',
      'Use slice() to extract chunks',
      'Push each chunk to the result array'
    ],
    difficulty: 'intermediate',
    points: 15
  }
];

export const advancedProblems: Problem[] = [
  {
    id: 'advanced-1',
    title: 'Deep Clone Object',
    description: 'Create a function that performs a deep clone of an object (including nested objects and arrays).',
    example: 'deepClone({a: {b: 1}}) should return a completely independent copy',
    expectedOutput: '{a: {b: 1}}',
    starterCode: `function deepClone(obj) {
  // Your code here
}`,
    testCases: [
      {
        input: 'deepClone({a: {b: 1}})',
        expectedOutput: '{a: {b: 1}}',
        description: 'Should deep clone nested objects'
      },
      {
        input: 'deepClone([1, [2, 3]])',
        expectedOutput: '[1, [2, 3]]',
        description: 'Should deep clone nested arrays'
      }
    ],
    hints: [
      'Handle null and primitive values as base cases',
      'Recursively clone object properties',
      'Consider both objects and arrays'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-2',
    title: 'Implement Debounce',
    description: 'Create a debounce function that delays execution until after a specified time has elapsed.',
    example: 'debounce(func, 100) should delay function execution by 100ms',
    expectedOutput: 'function',
    starterCode: `function debounce(func, delay) {
  // Your code here
}`,
    testCases: [
      {
        input: 'typeof debounce(() => {}, 100)',
        expectedOutput: 'function',
        description: 'Should return a function'
      }
    ],
    hints: [
      'Use setTimeout to delay execution',
      'Clear previous timeout when called again',
      'Return a function that wraps the original'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-3',
    title: 'Flatten Nested Array',
    description: 'Write a function that flattens a deeply nested array into a single-level array.',
    example: 'flatten([1, [2, [3, 4]], 5]) should return [1, 2, 3, 4, 5]',
    expectedOutput: '[1, 2, 3, 4, 5]',
    starterCode: `function flatten(arr) {
  // Your code here
}`,
    testCases: [
      {
        input: 'flatten([1, [2, [3, 4]], 5])',
        expectedOutput: '[1, 2, 3, 4, 5]',
        description: 'Should flatten deeply nested arrays'
      },
      {
        input: 'flatten([1, 2, 3])',
        expectedOutput: '[1, 2, 3]',
        description: 'Should handle already flat arrays'
      }
    ],
    hints: [
      'Use recursion to handle nested arrays',
      'Check if each element is an array',
      'Use spread operator or concat to combine results'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-4',
    title: 'Implement Promise.all',
    description: 'Create your own version of Promise.all that waits for all promises to resolve.',
    example: 'promiseAll([Promise.resolve(1), Promise.resolve(2)]) should resolve to [1, 2]',
    expectedOutput: '[1, 2]',
    starterCode: `function promiseAll(promises) {
  // Your code here
}`,
    testCases: [
      {
        input: 'promiseAll([Promise.resolve(1), Promise.resolve(2)])',
        expectedOutput: '[1, 2]',
        description: 'Should resolve all promises'
      }
    ],
    hints: [
      'Return a new Promise',
      'Keep track of resolved promises count',
      'Collect results in order'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-5',
    title: 'Binary Search Implementation',
    description: 'Implement binary search algorithm to find an element in a sorted array.',
    example: 'binarySearch([1, 2, 3, 4, 5], 3) should return 2 (index)',
    expectedOutput: '2',
    starterCode: `function binarySearch(arr, target) {
  // Your code here
}`,
    testCases: [
      {
        input: 'binarySearch([1, 2, 3, 4, 5], 3)',
        expectedOutput: '2',
        description: 'Should find element index'
      },
      {
        input: 'binarySearch([1, 2, 3, 4, 5], 6)',
        expectedOutput: '-1',
        description: 'Should return -1 if not found'
      }
    ],
    hints: [
      'Use two pointers: left and right',
      'Calculate middle index',
      'Compare middle element with target'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-6',
    title: 'Memoization Function',
    description: 'Create a memoization function that caches results of expensive function calls.',
    example: 'memoize(expensiveFunction) should cache and reuse results',
    expectedOutput: 'function',
    starterCode: `function memoize(fn) {
  // Your code here
}`,
    testCases: [
      {
        input: 'typeof memoize(() => {})',
        expectedOutput: 'function',
        description: 'Should return a function'
      }
    ],
    hints: [
      'Use a cache object to store results',
      'Create a unique key for function arguments',
      'Return cached result if available'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-7',
    title: 'Event Emitter Class',
    description: 'Implement an EventEmitter class with on, off, and emit methods.',
    example: 'new EventEmitter() should support event subscription and emission',
    expectedOutput: 'object',
    starterCode: `class EventEmitter {
  // Your code here
}`,
    testCases: [
      {
        input: 'typeof new EventEmitter()',
        expectedOutput: 'object',
        description: 'Should create an object instance'
      }
    ],
    hints: [
      'Use an object to store event listeners',
      'on() should add listeners to events',
      'emit() should call all listeners for an event'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-8',
    title: 'Currying Function',
    description: 'Create a curry function that transforms a multi-argument function into a series of single-argument functions.',
    example: 'curry(add)(1)(2) should equal add(1, 2)',
    expectedOutput: 'function',
    starterCode: `function curry(fn) {
  // Your code here
}`,
    testCases: [
      {
        input: 'typeof curry(() => {})',
        expectedOutput: 'function',
        description: 'Should return a function'
      }
    ],
    hints: [
      'Check if enough arguments have been provided',
      'Return the result if all arguments are collected',
      'Return a new function that collects more arguments'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-9',
    title: 'LRU Cache Implementation',
    description: 'Implement a Least Recently Used (LRU) cache with get and put operations.',
    example: 'new LRUCache(2) should maintain a cache of size 2',
    expectedOutput: 'object',
    starterCode: `class LRUCache {
  constructor(capacity) {
    // Your code here
  }
  
  get(key) {
    // Your code here
  }
  
  put(key, value) {
    // Your code here
  }
}`,
    testCases: [
      {
        input: 'typeof new LRUCache(2)',
        expectedOutput: 'object',
        description: 'Should create an LRU cache instance'
      }
    ],
    hints: [
      'Use a Map to maintain insertion order',
      'Move accessed items to the end',
      'Remove oldest items when capacity is exceeded'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-10',
    title: 'JSON Parser',
    description: 'Implement a basic JSON parser that can parse simple JSON strings into JavaScript objects.',
    example: 'parseJSON(\'{"name": "John"}\') should return {name: "John"}',
    expectedOutput: '{name: "John"}',
    starterCode: `function parseJSON(jsonString) {
  // Your code here
}`,
    testCases: [
      {
        input: 'parseJSON(\'{"name": "John"}\')',
        expectedOutput: '{name: "John"}',
        description: 'Should parse simple JSON objects'
      },
      {
        input: 'parseJSON(\'[1, 2, 3]\')',
        expectedOutput: '[1, 2, 3]',
        description: 'Should parse JSON arrays'
      }
    ],
    hints: [
      'Handle different JSON value types',
      'Use recursive parsing for nested structures',
      'Be careful with string parsing and escaping'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-11',
    title: 'Function Composition',
    description: 'Create a compose function that combines multiple functions into a single function.',
    example: 'compose(f, g, h)(x) should equal f(g(h(x)))',
    expectedOutput: 'function',
    starterCode: `function compose(...functions) {
  // Your code here
}`,
    testCases: [
      {
        input: 'typeof compose(() => {}, () => {})',
        expectedOutput: 'function',
        description: 'Should return a composed function'
      }
    ],
    hints: [
      'Functions should be applied from right to left',
      'Use reduce or reduceRight to combine functions',
      'Return a function that applies all compositions'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-12',
    title: 'Observer Pattern',
    description: 'Implement the Observer pattern with Subject and Observer classes.',
    example: 'Subject should notify all observers when state changes',
    expectedOutput: 'object',
    starterCode: `class Subject {
  constructor() {
    // Your code here
  }
  
  subscribe(observer) {
    // Your code here
  }
  
  unsubscribe(observer) {
    // Your code here
  }
  
  notify(data) {
    // Your code here
  }
}`,
    testCases: [
      {
        input: 'typeof new Subject()',
        expectedOutput: 'object',
        description: 'Should create a Subject instance'
      }
    ],
    hints: [
      'Maintain a list of observers',
      'notify() should call update() on all observers',
      'Handle subscription and unsubscription'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-13',
    title: 'Async Queue',
    description: 'Implement an async queue that processes promises with a maximum concurrency limit.',
    example: 'new AsyncQueue(2) should process max 2 promises concurrently',
    expectedOutput: 'object',
    starterCode: `class AsyncQueue {
  constructor(concurrency) {
    // Your code here
  }
  
  add(asyncFunction) {
    // Your code here
  }
}`,
    testCases: [
      {
        input: 'typeof new AsyncQueue(2)',
        expectedOutput: 'object',
        description: 'Should create an AsyncQueue instance'
      }
    ],
    hints: [
      'Track running and pending promises',
      'Process queued items when concurrency allows',
      'Return promises for queued functions'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-14',
    title: 'Virtual DOM Diff',
    description: 'Implement a simple virtual DOM diff algorithm that compares two virtual DOM trees.',
    example: 'diff(oldTree, newTree) should return list of changes',
    expectedOutput: 'array',
    starterCode: `function diff(oldTree, newTree) {
  // Your code here
}`,
    testCases: [
      {
        input: 'diff({tag: "div"}, {tag: "span"})',
        expectedOutput: 'array',
        description: 'Should detect tag changes'
      }
    ],
    hints: [
      'Compare node types, attributes, and children',
      'Return a list of operations (add, remove, update)',
      'Handle different node types appropriately'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-15',
    title: 'State Machine',
    description: 'Implement a finite state machine with states, transitions, and actions.',
    example: 'new StateMachine(config) should handle state transitions',
    expectedOutput: 'object',
    starterCode: `class StateMachine {
  constructor(config) {
    // Your code here
  }
  
  transition(event) {
    // Your code here
  }
  
  getState() {
    // Your code here
  }
}`,
    testCases: [
      {
        input: 'typeof new StateMachine({})',
        expectedOutput: 'object',
        description: 'Should create a StateMachine instance'
      }
    ],
    hints: [
      'Track current state',
      'Validate transitions based on current state',
      'Execute actions on state changes'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-16',
    title: 'Custom Iterator',
    description: 'Create a custom iterator class that implements the iterator protocol.',
    example: 'new CustomIterator([1,2,3]) should be iterable with for...of',
    expectedOutput: 'object',
    starterCode: `class CustomIterator {
  constructor(data) {
    // Your code here
  }
  
  [Symbol.iterator]() {
    // Your code here
  }
}`,
    testCases: [
      {
        input: 'typeof new CustomIterator([])',
        expectedOutput: 'object',
        description: 'Should create an iterator instance'
      }
    ],
    hints: [
      'Implement the Symbol.iterator method',
      'Return an object with next() method',
      'next() should return {value, done}'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-17',
    title: 'Proxy Handler',
    description: 'Create a proxy handler that intercepts and customizes property access operations.',
    example: 'createProxy(obj) should intercept property access',
    expectedOutput: 'object',
    starterCode: `function createProxy(target) {
  // Your code here
}`,
    testCases: [
      {
        input: 'typeof createProxy({})',
        expectedOutput: 'object',
        description: 'Should create a proxy object'
      }
    ],
    hints: [
      'Use the Proxy constructor',
      'Implement handler methods like get, set',
      'Customize behavior for property operations'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-18',
    title: 'Rate Limiter',
    description: 'Implement a rate limiter that restricts the number of function calls within a time window.',
    example: 'rateLimiter(fn, 5, 1000) allows 5 calls per 1000ms',
    expectedOutput: 'function',
    starterCode: `function rateLimiter(fn, limit, window) {
  // Your code here
}`,
    testCases: [
      {
        input: 'typeof rateLimiter(() => {}, 5, 1000)',
        expectedOutput: 'function',
        description: 'Should return a rate-limited function'
      }
    ],
    hints: [
      'Track timestamps of function calls',
      'Remove old timestamps outside the window',
      'Reject calls that exceed the limit'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-19',
    title: 'Dependency Injection Container',
    description: 'Create a dependency injection container that manages object dependencies.',
    example: 'container.register("service", ServiceClass) and container.resolve("service")',
    expectedOutput: 'object',
    starterCode: `class DIContainer {
  constructor() {
    // Your code here
  }
  
  register(name, definition) {
    // Your code here
  }
  
  resolve(name) {
    // Your code here
  }
}`,
    testCases: [
      {
        input: 'typeof new DIContainer()',
        expectedOutput: 'object',
        description: 'Should create a DI container instance'
      }
    ],
    hints: [
      'Store service definitions and instances',
      'Handle singleton and transient lifetimes',
      'Resolve dependencies recursively'
    ],
    difficulty: 'advanced',
    points: 25
  },
  {
    id: 'advanced-20',
    title: 'Custom Promise Implementation',
    description: 'Implement your own Promise class with then, catch, and resolve/reject functionality.',
    example: 'new CustomPromise((resolve, reject) => {...}) should work like native Promise',
    expectedOutput: 'object',
    starterCode: `class CustomPromise {
  constructor(executor) {
    // Your code here
  }
  
  then(onFulfilled, onRejected) {
    // Your code here
  }
  
  catch(onRejected) {
    // Your code here
  }
  
  static resolve(value) {
    // Your code here
  }
  
  static reject(reason) {
    // Your code here
  }
}`,
    testCases: [
      {
        input: 'typeof new CustomPromise(() => {})',
        expectedOutput: 'object',
        description: 'Should create a CustomPromise instance'
      }
    ],
    hints: [
      'Track promise state (pending, fulfilled, rejected)',
      'Queue callbacks for async execution',
      'Handle chaining with proper value/error propagation'
    ],
    difficulty: 'advanced',
    points: 25
  }
];

export const allProblems = [...easyProblems, ...intermediatePr0blems, ...advancedProblems];

export const getProblemsByLevel = (level: 'easy' | 'intermediate' | 'advanced'): Problem[] => {
  switch (level) {
    case 'easy':
      return easyProblems;
    case 'intermediate':
      return intermediatePr0blems;
    case 'advanced':
      return advancedProblems;
    default:
      return [];
  }
};

export const getProblemById = (id: string): Problem | undefined => {
  return allProblems.find(problem => problem.id === id);
};