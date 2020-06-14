import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends Component{
  render(){
    return(
      <div>
        <h1>React Course</h1>
        <h2><a href= "/">Home</a></h2>
        <h2><a href= "/header">Header</a></h2>
        <h2><a href= "/content">Content</a></h2>
        <h2><a href= "/footer">Footer</a></h2>
      </div>
    );
  }
}
export default App;
