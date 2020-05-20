import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './style.scss';
//import Welcome from './components/Welcome';
// import Com from './components/Component';
import Monsters from './components/Monsters';



function App() {
  // const x = 5;
  
  // let state = {
  //   user: 'Kamil Lan',
  //   isloggedin: true,
  //   friends: ['pawel', 'michal', 'krysia']    
  // }
  // To powinno być w return to poniżej
  // <Welcome/>
  // {state.isloggedin ? (<h1>Cześć {state.user}</h1>) : <h1>Zaloguj się!</h1> }

  return (

    <div className='row'>

      <Monsters/>
      {/* <Com/> */}
    </div>











    // <div className='row'>
    //   {x}
    //   <div className='container'><img src={process.env.PUBLIC_URL + '/logo192.png'} /></div> */}
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
