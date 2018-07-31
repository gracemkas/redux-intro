import React, {Component} from 'react';
import { connect } from 'react-redux';

class ElementForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newElement: ''
        }
      }
    
      handleElementChange = (event) => {
        //set state of react loacal state to what is typed
        this.setState({
          newElement: event.target.value
        })
      }
    render() {
        return (
    <div>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_ONE'})}>Button One</button>
        <button onClick={() => this.props.dispatch({type: 'BUTTON_TWO'})}>Button Two</button>
        <input type="text" onChange={this.handleElementChange}/>
        <button onClick={() => this.props.dispatch({type: 'ADD_ELEMENT', payload: this.state.newElement})}>Add Element</button>
        <button onClick={() => this.props.dispatch({type: 'CLEAR_ELEMENT_LIST'})}>Clear</button>
    </div>
        )

    }

}
export default connect()(ElementForm)



