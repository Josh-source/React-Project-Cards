import React, {Component} from 'react';
import Data from './Data';
import Card from './Card';
import './App.css'


class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            properties:Data.properties,
            // property:Data.properties[0],
            newIndex: 0,
        }
    }
nextProperty = () => {
  this.setState({
    newIndex : this.state.newIndex+1
  })
  

}
prevProperty = () => {
  if(this.state.newIndex > 0){
  this.setState({
    newIndex: this.state.newIndex -1
  })} else {this.setState({newIndex: Data.properties.length-1})}
}

render () {
  const {properties, newIndex} = this.state;
  let property = properties[newIndex];
  return (
    <>
    <div className='Mood'>
    <button id = 'one'>Edit</button>
    <button id = 'one'>Delete</button>
    <button id = 'one'>New</button>
    </div>
    <div className = "Home">
      <nav className ="Homie" >Home</nav>
    </div>
    <div className = "App">
    <button className = 'Next'
      onClick={() => this.nextProperty()}
      disabled={properties.id === Data.properties.length-1}
      >Next {'>'}</button>
    <button className = 'Previous' 
        onClick={() => this.prevProperty()}
        disabled={properties.id === 0}
        
        > {'<'} Previous</button>
    <Card property= {property} />

    </div>
    
    </>
  );
}
}
export default App;