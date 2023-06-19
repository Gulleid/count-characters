// Good Luck 💪🏾
function char_count(str, array) 
{
 var array_Count = 0;
 for (var guuleed = 0; guuleed < str.length; guuleed++) 
 {
    if (str.charAt(guuleed) == array) 
      {
      array_Count += 1;
      }
  }
  return array_Count;
}

console.log(char_count('fikrcamp', 'a'));
console.log(char_count('bootcamp','c'));
console.log(char_count('fikrcamp coding bootcamp','o'));
