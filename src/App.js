import React from 'react';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';
function App() {
  // const text = { x: 1, y: 2, z: 3 };
  // const { x, y, z } = text;
  // console.log({ ...text, x: 2 });
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
}

export default App;
