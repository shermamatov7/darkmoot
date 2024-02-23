import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero';

function App() {
  const [state, setState] = useState(false);
  console.log(state);

  return (
    <div style={{ background: state ? "black" : "green" }} className="App">
      <Header state={state} setState={setState} />
      <Hero />
    </div>
  );
}

export default App;
