
//destructure korbo evabe jodi dan pashe array thake 
const [first,second]=[52,71]; // first=52    r   second=71     set hoye jabe



//variable er moddhe array thakle shei array er position onujai name dewa jay
const myNums=[52,55];
const[lang,war]=myNums; //lang=52        war=55






//function theke array er value k call and set
function getSomething(num){
  return[24,5]
}

getSomething();//  function call kortesi just dekhar jonno na korleo hobe ekhane     output:[24,5]

const [x,y]=getSomething(); //x=24   y=5   hobe






// function er moddhe arekta function
function useState(initialValue){
  let state=initialValue;
  function setState(newValue){
      state=newValue;
  }
  return[state,setState];
}




