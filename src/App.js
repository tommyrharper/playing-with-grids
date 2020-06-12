import React from 'react';
import GrommetGrid from './GrommetGrid'
import GrommetGridFinite from './GrommetGridFinite'
import GrommetGridInfinite from './GrommetGridInfinite'
import GrommetBox from './GrommetBox'
import GrommetOnClickBox from './GrommetOnClickBox'
import FlexBox from './FlexBox'
import MaterialUI from './MaterialUI'
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hi, I'm Tom</h1>
        <MaterialUI/>
        <FlexBox/>
        <GrommetOnClickBox/>
        <GrommetBox/>
        <GrommetGridFinite/>
        <GrommetGridInfinite/>
        <GrommetGrid/>
      </div>
    ) 
  }
}

export default App;