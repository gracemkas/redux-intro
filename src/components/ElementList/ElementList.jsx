import React, { Component } from 'react';
import { connect } from 'react-redux';

class ElementList extends Component {
    
  render() {
    let elementListItemArray = this.props.elementList.map ((item, index) => {
        return <li key={index}>Name: {item.name} Atomic Number: {item.atomicNumber} </li>
      })
    return (
        <div>
                {elementListItemArray}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {elementList: state.elementList}
  }
  
export default connect(mapStateToProps)(ElementList);