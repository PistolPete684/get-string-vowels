function getCount(str) {
  // Create a new string with only the vowels aeiou
  let vowelStr = str.match(/[aeiou]/g);
  // A Ternary Operator to handle instnaces of null
  // It returns 0 when null and the string length otherwise
  return vowelStr ? vowelStr.length : 0;
}