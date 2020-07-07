// IMPORT MODULES under test here:
import { isYes } from '../yes-utils.js';
// import example from '../example.js';

const test = QUnit.test;

test('It should return true if passed anything starting with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const word1 = 'yes';
    const word2 = 'YES';
    const word3 = 'yeah';
    const word4 = 'yasss';
    const expected = true;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = isYes(word1);
    const actual2 = isYes(word2);
    const actual3 = isYes(word3);
    const actual4 = isYes(word4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
});

test('It should return false if passed anything not starting with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const word1 = 'nope';
    const word2 = 'uhh-uh';
    const word3 = 'naa';
    const word4 = 'NO';
    const expected = false;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = isYes(word1);
    const actual2 = isYes(word2);
    const actual3 = isYes(word3);
    const actual4 = isYes(word4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
});


