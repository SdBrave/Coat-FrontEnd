import axios from 'axios';
import React, { Component } from 'react';
class ActionForm extends Component {
    state = { showForm:true } 
    handleSubmit=(e)=>{
        axios.post("http://127.0.0.1:8000/coatgame/set_trump",e.target)
        console.log(e)
         e.preventDefault();
    }
    getForm=()=>{
        if (this.state.showForm)
        return (<form onSubmit={this.handleSubmit}>
            <input hidden readOnly  type={"text"} value={this.props.id}></input>
            <input type="submit" value="Submit" />
          </form>)
        else
        return <div></div>
    }
    render() { 
        return (this.getForm());
    }
}
 
export default ActionForm;