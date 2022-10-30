import axios from "axios";
import React, { Component } from "react";
class ActionForm extends Component {
  state = { showForm: true, formError: false };
  handleSubmit = (e) => {
    if (this.state.selectedCardId != "") {
      this.setState({ formError: false });
      axios.post("http://127.0.0.1:8000/coatgame/set_trump", {
        selectedCardId: e.target[0].value,
      }).then((response)=>{
       if(response.status==200){
        this.setState({showForm:false})
       }
      });
    } else {
      this.setState({ formError: true });
    }
    console.log(e);
    e.preventDefault();
  };
  getForm = () => {
    if (this.state.showForm)
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            readOnly
            type={"text"}
            name="selectedCardId"
            value={this.props.id}
          ></input>
          <input type="submit" value="Submit" />
          {this.state.formError == true ? (
            <div className="danger">Please select card</div>
          ) : (
            <div></div>
          )}
        </form>
      );
    else return <div></div>;
  };
  render() {
    return this.getForm();
  }
}

export default ActionForm;
