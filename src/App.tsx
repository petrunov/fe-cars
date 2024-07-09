// import { useState } from 'react';
import { Button } from '@mui/material';
import './App.css';
import CustomTable from './components/CustomTable/CustomTable';

function App() {
  return (
    <>
      <CustomTable></CustomTable>
      <Button
        variant="contained"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      ></Button>
    </>
  );
}

export default App;
