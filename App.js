import data from './data'
import './App.css';
import { useState } from 'react';
import Travel from './components/Travel';

function App() {

  const [state, setState] = useState(data)

  function Remove(id) {
    const discarded = state.filter((items) => items.id !== id)
    setState(discarded)
  }


  if (state.length === 0) {
    return (
      <div className='sec'>
        <p style={{fontSize:'2rem',fontWeight:'bolder',fontFamily:'cursive'}}>Nothing Left</p>
        <button onClick={() => { setState(data) }} style={{height:'2rem',width:'6rem',backgroundColor:'greenyellow',border:'1px solid black',cursor:'pointer'}}>Refresh</button>
      </div>
    )
  }

  return (
    <div>
      <Travel data={state} Remove={Remove} />
    </div>
  );
}

export default App;