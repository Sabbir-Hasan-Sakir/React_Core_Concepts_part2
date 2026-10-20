import { useState } from "react";

export default function Batsman() {

  const [runs, setRuns] = useState(0);// 3rd kaj:  useState diye initial value set korse. r runs,setRuns diye current run r updated run set korar kaj korbo.



                            //5th kaj:amader run count korar kaj sesh akhon hishab korbo j koyta six mara hoyese.er jonno arekbar use state nibo
                            const[sixes,setSixes]=useState(0);

  //single run er jonno even handler
  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  }

  //six er jonno even handler
  const handleSix = () => {
    const updatedRuns = runs + 6;
                            const updatedSixes= sixes+1;//6th kaj: ai even handler ta six er jonno tai etar moddhe e count kortesi j koyta six hobe 1bar click korle 1ta kore six barbe 
                            setSixes(updatedSixes);
    setRuns(updatedRuns);
  }

  //four er jonno even handler
  const handleFour = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
  }





  return (
    <div>
      <h3>player: Bangla Batsman</h3>
                          <p><small>sixes: {sixes}</small></p>   {/*7th kaj: ekhane add korlam j koyta six hoyese */}
      {
        runs > 50 && <p>You score: 50</p> // 4th kaj: 1ta condition use korsi. jodi run 50 er beshi jay tahole (You score: 50)  ei lekha ta uthbe.
      }


      <h1>Score: {runs} </h1>  {/*even handler gulo ekhane use korsi protitar moddhe . runs even handler na eta initial set kora run thakbe jeta bar bar update hocche even handler a change korar jonno. */}
      <button onClick={handleSingle}>singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  )
}






/* kaj gulo
1. function declare kore return er moddhe likhsi ki ki lagbe.
2. useState dilam r import korlam upore (useState a initial value dibo nahole undefined ashbe. r left side a 2ta name dibo ex:runs,setRuns)
3. even handler er moddhe update korlam condition gulo.
4. even handler gulo return er moddhe use korsi jekhane jekhane lagbe.
5. chaile 1ta condition dite pari. (return er moddhe condition disi 50 er beshi score hole 1ta lekha uthbe)


ai shob gulo jeno show how tai APP.jsx er moddhe import kore  return er moddhe function er name use koresi   <Batsman></Batsman>



trpr koyta six marse shei hishab er jonno 

1. arekta useState nei.               const[sixes,setSixes]=useState(0)
2. jei handler er moddhe six er kaj kora hocchilo shetar moddhe six er count 1 1 kore barai.    const updatedSixes= sixes+1;      setSixes(updatedSixes);
3. return er moddhe six er count dekhanor jonno kaj kori          <p><small>sixes: {sixes}</small></p> 


*/