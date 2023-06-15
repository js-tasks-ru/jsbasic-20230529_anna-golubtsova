function getMinMax(str) {
  let arr = str
  .split(' ')
  .map(i => {if(isFinite(i) == true) {return i} else {return " "}})
  .join("")
  .split(" ")
 console.log(arr);
  
  return {
    min: Math.min(...arr), 
    max: Math.max(...arr),
  }
}
