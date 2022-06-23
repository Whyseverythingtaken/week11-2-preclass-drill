function applyCallback(inputArray, callbackFunction) {
  const results = inputArray.map((number) => {
    return callbackFunction(number);
  });

  return results;
}

module.exports = applyCallback;
