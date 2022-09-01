import React, {} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Screen from './components/Screen/Screen';
import Button from './components/Button/Button';

function App(){

  return (
    <div className="App">
       <Header />
       <form>
         <Screen  value={0}/>
         <div className='button-row'>
          <Button label={'AC'}/>
          <Button label={'Del'}/>
          <Button label={'.'}/>
          <Button label={'/'}/>
            </div>
            <div className='button-row'>
          <Button label={'7'}/>
      <Button label={'8'}/>
      <Button label={'9'}/>
      <Button label={'+'}/>
            </div>
            <div className='button-row'>
          <Button label={'4'}/>
      <Button label={'5'}/>
      <Button label={'6'}/>
      <Button label={'X'}/>
            </div>
            <div className='button-row'>
          <Button label={'1'}/>
      <Button label={'2'}/>
      <Button label={'3'}/>
      <Button label={'-'}/>
            </div>
            <div className='button-row'>
          <Button label={'0'}/>
          <Button label={'='}/>
            </div>
       </form >
       <div>
           
       </div>
       
    </div>
  );
}

export default App;
