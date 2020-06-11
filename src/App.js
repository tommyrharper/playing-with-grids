import React from 'react';
import GrommetGrid from './GrommetGrid'
import GrommetGridFinite from './GrommetGridFinite'
import GrommetGridInfinite from './GrommetGridInfinite'

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hi, I'm Tom</h1>
        <GrommetGridFinite/>
        <GrommetGridInfinite/>
      </div>
    ) 
  }
}

export default App;