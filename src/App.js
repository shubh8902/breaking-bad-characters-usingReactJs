import Header from './components/Header';
import Characters from './components/Characters';
import { useState } from 'react';

function App() {
  
const [text, setText] = useState('');

  return (
    <div className="App">
      <Header setText={setText}/>
      <Characters text={text} />
    </div>
  );
}

export default App;
