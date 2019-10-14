const test = QUnit.test;


test('test will work', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const test1 = true;
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    test1 === expected;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(test1, expected);
});