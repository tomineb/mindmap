import { ReactDOM } from 'react'
import React from 'react'


const App = () => {
  
  return (
    <div >
      <div className=" ml-20 mt-20 "> 
      <h1 className=" text-4xl "> mind map </h1> <br/> 
      <div> 
      <input id="submitWords" placeholder="whats on your mind?" className="text-black placeholder-gray  border border-zinc-500"  /> 
      <button className="btn bg-blue-300  "> add to the void</button>
      <div id="item-container"> </div>

    </div>
    </div>
    </div>
  );
}

export default App;
