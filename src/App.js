import React from "react";
import {useState} from 'react';
import data from './data';
import Tours from './components/Tours'

const App = () => {
  //data pass krne ke liye useState ka use krnege ->
    const[tours,setTours] = useState(data)

    function  removetour(id){

      // hamne ek new object create kiya hai jime hamm purane wale object ki 
      //filtering kr rha hun
      // purane wale object me se haam usi tour ko daalenge jinki id match nhi hooo rhi hai

      const newTour = tours.filter(tour => tour.id !== id);
      setTours(newTour);
    }
     if(tours.length === 0)
      {
        return(
            <div className="refresh">
                <h2>No Tours Left </h2>
                <button className="btn-refresh" onClick={()=>setTours(data)}> Refresh</button>
               
            </div>
        );
      }


  return (
    <div className="App">
      
      <Tours tours={tours} removetour={removetour}></Tours>
    </div>
  );
};

export default App;
