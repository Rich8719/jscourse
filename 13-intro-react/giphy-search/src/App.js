import React, { Component } from 'react';
import Search from './components/search.js'
import GifList from './components/list.js'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      gifs:[]
    }
  }
  updateParentState = gifs => {
    this.setState({
      gifs: gifs
    })
  }

  render() {
    return (
      <div className="App">
        <Search hideHomeLink={true} buttonClass="__large" 
          updateParentState={this.updateParentState}/>

        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default App
