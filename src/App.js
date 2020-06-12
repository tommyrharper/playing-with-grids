import React from 'react';
// import GrommetGrid from './GrommetGrid'
import GrommetGridFinite from './GrommetGridFinite'
import GrommetGridInfinite from './GrommetGridInfinite'
import GrommetBox from './GrommetBox'
import GrommetOnClickBox from './GrommetOnClickBox'
import FlexBox from './FlexBox'

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hi, I'm Tom</h1>
        <FlexBox/>
        <GrommetOnClickBox/>
        <GrommetBox/>
        <GrommetGridFinite/>
        <GrommetGridInfinite/>
      </div>
    ) 
  }
}

export default App;