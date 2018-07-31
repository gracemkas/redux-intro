import React, {Component} from 'react';
import { connect } from 'react-redux';

class ElementForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newElement: {
            name : '',
            atomicNumber : ''
          }
        }
      }
    
      handleElementChange = (propertyName) => (event) => { 
        this.setState({
            newElement: {
                ...this.state.newElement,
                [propertyName] : event.target.value
            }
        })
      }
    render() {
        return (
    <div>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_ONE'})}>Button One</button>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_TWO'})}>Button Two</button>
        <input type="text" onChange={this.handleElementChange('name')}/>
        <input type="number" onChange={this.handleElementChange('atomicNumber')}/>
        <button onClick={() => this.props.dispatch({type: 'ADD_ELEMENT', payload: this.state.newElement})}>Add Element</button>
        <button onClick={() => this.props.dispatch({type: 'CLEAR_ELEMENT_LIST'})}>Clear</button>
    </div>
        )

    }

}
export default connect()(ElementForm)



