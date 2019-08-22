import React, {Component} from 'react';
import Data from './Data';
import Card from './Card';
import './App.css'


class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            properties:Data.properties,
            property:Data.properties[0],
            newIndex: [0],
        }
    }
nextProperty = () => {
  const newIndex = this.state.property.id++;
  this.setState({
    property: Data.properties[newIndex]
  })

}
prevProperty = () => {
  const newIndex = this.state.property.id-1;
  this.setState({
    property: Data.properties[newIndex]
  })
console.log(this.state.property);
}

render () {
  const {properties, property} = this.state;
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
      disabled={properties.id === Data.properties.length+1}
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