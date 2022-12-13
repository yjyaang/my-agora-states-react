import './App.css';


import Form from './components/Form';
import Discussions from './components/Discussions';
import { useState, useEffect } from 'react';

function App() {
  const [discussion, setDiscussion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/discussions")
    .then(res => res.json())
    .then(data => {
      setDiscussion(data);
    }, [])
  });

  return (
    <div className="App">
      <main>
        <h1>MY AGORA STATES</h1>
          <Form />
          <Discussions discussions={discussion}/>
      </main>
    </div>
  );
}

export default App;
