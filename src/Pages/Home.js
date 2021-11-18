import React, {useState} from 'react';
import {Link} from 'react-router-dom';
//import './App.css';
import Header from '../Header';


function Home(){

const [contador, setContador] = useState(0);

  function increment(){
  setContador(contador+1);  // contador = contador + 1;
}

  return (
    <div className="w3-container">
      <header className="w3-container w3-center w3-black w3-text-blue w3-padding-large">        
        
          <Header title={contador} />
                  
          <input type="button" value="Clique" onClick={increment} />
          <br/><br/>
          <Link to="/cadastro">ACESSAR CADASTRO</Link>

      </header>
    </div>
  
  );
  
  }
export default Home;
