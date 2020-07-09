// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

function solution(str){
    //split each letter, reverse, then join
    return str.split("").reverse().join("");
  }
  
  solution('world');

  ////////////////////////////////