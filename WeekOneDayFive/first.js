/*Define a function max() that takes two numbers as arguments and returns the largest
 of them. Use the if-then-else construct available in Javascript.
 */
function max(a,b){
    if(a>b) return a;
    else return b;
}

console.log(max(5,2));
//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(first, second, third){
if(first > second && first > third)
return first;
else if(second > first && second > third)
return second;
else return third;
}
console.log(maxOfThree(3,5,23));
/*Write a function isVowel() that takes a character (i.e. a string of 
    length 1) and returns true if it is a vowel, false otherwise.*/
  function isVowel(a){
    let flg = false;
      let arr =['a','A','e','E','i','I','o','O','u','U'];
       for(let i = 0; i< arr.length; i++){
             if(a===arr[i])
             flg = true;
       }
          return flg;
      
    }
    
    console.log(isVowel('a'));
    /*Define a function sum() and a function multiply() that sums and multiplies (respectively) 
    all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, 
    and multiply([1,2,3,4]) should return 24. */
   
    function sum(arr){
        var s = 0;
        for(var i = 0; i< arr.length; i++){
            s= s + arr[i];
        }
        return s;
    }
    console.log(sum([1,2,3,4]));
    function multiplies(arr){
        var s = 1;
        for(var i = 0; i< arr.length; i++){
            s= s * arr[i];
        }
        return s;
    }
    console.log(multiplies([1,2,3,4]));
    /**
     * Define a function reverse() that computes the reversal of a string. For example,
     *  reverse("jag testar") should return the string "ratset gaj".
     */
    function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) { 
            newString += str[i]; 
        }
        return newString; 
    }
    reverseString('ratset gaj');
    /**
     * Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
     * 
     */

    console.log(longestStringForLoop(['boop', 'bloomburg', 'hello']));
    console.log(longestStringReduce(['boop', 'bloomburg', 'hello']));
    
    function longestStringForLoop(arr) {
      let word = "";
      for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
          word = arr[i];
        }
      }
      return word;
    }
    function longestStringReduce(arr) {
      return arr.reduce((a, b) => a.length < b.length ? b : a, "");
    }
   
    