import React, { useState } from 'react';


function App() {   

  const [result,setResult] = useState('');
  const [clearr, setClearr] = useState(false);
    const handleClick = (e)=>{
      if(clearr === false){
        setResult(result.concat(e.target.name));
      }
      else{
        setResult('' + e.target.name);
        setClearr(false);
      }
         }

    const handleClick1 = (e)=>{
      
        setResult(result.concat(e.target.name));
        setClearr(false);
       
    }

    const clearInput = (e)=>{
      setResult('');  
    }

    const delette = (e)=>{
      setResult(result.slice(0, -1));
    }

    const calculate = (e)=>{
      try{
      setResult(eval(result).toString());
      setClearr(true);
      }catch(err){
        setResult('Error');
        setClearr(true);
      }
       
    }

  return(
    <section className="container">
      <form >
        <input type="text" className="screen" value={result} />
      </form>
      <div className="keys">
        <button onClick={handleClick} className="key" name="7">7</button>
        <button onClick={handleClick} className="key" name="8">8</button>
        <button onClick={handleClick} className="key" name="9">9</button>
        <button onClick={handleClick1} className="key" id="plus" name="+">+</button>
        <button onClick={handleClick} className="key" name="4">4</button>
        <button onClick={handleClick} className="key" name="5">5</button>
        <button onClick={handleClick} className="key" name="6">6</button>

        <button onClick={handleClick} className="key" name="1">1</button>
        <button onClick={handleClick} className="key" name="2">2</button>
        <button onClick={handleClick} className="key" name="3">3</button>
        <button onClick={handleClick1} className="key" id="minus" name="-">-</button>
        <button onClick={handleClick} className="key" name="0">0</button>
        <button onClick={handleClick} className="key" name=".">.</button>
        <button onClick={delette} className="key" id="c">C</button>
        <button onClick={handleClick1} className="key" id="times" name="*">*</button>

        <button onClick={clearInput} className="key" id="clear" >Clear</button>
        <button onClick={calculate} className="key" id="equal" name="=">=</button>
        <button onClick={handleClick1} className="key" id="divide" name="/">&divide;</button>

        
        
        
        
     
      </div>
    </section>
  );
}

export default App;
