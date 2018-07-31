import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux';
import ElementsForm from './components/ElementsForm/ElementsForm';
import ElementList from './components/ElementList/ElementList';

class App extends Component {


  render() {
    return (
      <div>
        <p>Redux Intro</p>
        {/* when we click, make redux happen */}
        <ElementsForm />
        <ElementList />
        {/* {JSON.stringify(this.props.elements)}
        {JSON.stringify(this.props.first)} */}
      </div>
    );
  }
}

//gives us the data
// const mapReduxStateToProps = (reduxState) => {
//   //What this returns appears on this components props
//   return {elements: reduxState.elementReducer,
//             first: reduxState.firstReducer}
// }

//Currying. Dispatch comes from connect
export default App;
