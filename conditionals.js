/* deleted step 1 ---------------------------------
    variable cold in step 2 interferes with step 1.
    tried using let on step 1 but still the same. 
    I thought let can be used if later changed. 
    Will clarify this in the future. 
-------------------------------------------------- */

//step 2 -------------------------------------------
const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
//step 2 done ---------------------------------------

//step 3 start---------------------------------------
const temperature = 45;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");
//step 3 end -----------------------------------------

