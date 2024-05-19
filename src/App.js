
import './App.css';

import Header from './Components/Header/Header';
// import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

// pages imported from here
import About from "./Components/Pages/About/About"
import { useState } from 'react';
import { useContext, createContext } from 'react';
import { counterContext } from './Components/context';




function App() {





  const [count,setCount]=useState(0)


  return (

    <>

      <counterContext.Provider value={{count,setCount}}>
        <div className="App">
          <Header />

          <Footer />
        </div>
      </counterContext.Provider>
    </>
  );

}

export default App;
