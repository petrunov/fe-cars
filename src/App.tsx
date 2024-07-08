import { useState } from 'react';
import { Button } from '@mui/base/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button className="py-20 font-bold text-red bg-blue-500">test</Button>
      <div className="card">
        <button
          type="button"
          onClick={() => setCount((oldCount) => oldCount + 1)}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
