import { useState } from "react" //kaj 3 a useState use koray automatic import hoyeche

// ekhane 1st a 1ta function banaisi . trpr return a div er moddhe count Add aigulo nisi  . trpr return er opore counterStyle er moddhe border er style ta nisi. r shei style ta return er moddher div er moddhe use korsi. trpr export default diye export korlam.
export default function Counter() {


  //3rd kaj: onek shomoy onk hishab rakhte hoy ja bare abr kome.ex: run,taka poysha,facebook like etc etc. shei jonno react a default vabe e 1ta shubidha ase.
  //const=useState dile upore automatic react theke import hoye jabe. trpr useState er initial value 0 set korsi. trpr const er pashe [] er moddhe name disi count r setCount.1st name dibo 2nd tay set diye shei name tai use korbo. tai count , setCount 
  const [count, setCount] = useState(0);



  //4th kaj:Even handler add korbo

  const handleAdd = () => {
    {/*  console.log('add button clicked')  eta diye console a dekhbo j button click hocche ki na*/ }

    //akhon amra button er count k barabo tai count value change kori

    const newCount = count + 1;
    setCount(newCount);  //set count holo ager count er valuer theke 1 beshi orthat click korle 1 kore barbe. 

  }







  const counterStyle = {
    border: '2px  solid yellow'
  }
  return (
    <div style={counterStyle}>
      <h3>Count: {count} </h3>  {/*kaj 3 er pore ekhane count use korlam tahole count er number dekhabe. initial value 0 dekhabe. erpr kaj holo 1ta even handler add kora jekhane click kora hoy. */}
      <button onClick={handleAdd}>Add</button> {/*kaj 4 er por ekhane even handler ta add kore disi. */}
    </div>
  )
}


/* kaj gulo
1. function declare kore return er moddhe likhsi ki ki lagbe.
2. useState dilam r import korlam upore (useState a initial value dibo nahole undefined ashbe. r left side a 2ta name dibo ex:runs,setRuns)
3. even handler er moddhe update korlam condition gulo.
4. even handler gulo return er moddhe use korsi jekhane jekhane lagbe.



ai shob gulo jeno show how tai APP.jsx er moddhe import kore  return er moddhe function er name use koresi   <Counter></Counter>
*/