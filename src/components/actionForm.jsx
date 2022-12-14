import axios from "axios";
import React, { Component } from "react";
class ActionForm extends Component {
  state = { showForm: true, formError: false,errorMessage:"" };
  handleSubmit = (e) => {
    if (this.props.id != "") {
      this.setState({ formError: false });
      axios
        .post("http://127.0.0.1:8000/coatgame/post_card", {
          "selectedCardId": this.props.id,
          "purpose": e.target[1].value,
          "playerId":this.props.playerId
        })
        .then((response) => {
          if (response.status == 200) {
            this.setState({ showForm: false });
            window.location.reload();
          }
          
        }).catch((response)=>{
            console.log(response.response.data)
            this.setState({ formError: true });
            this.setState({errorMessage:response.response.data})
          });
    } else {
      this.setState({ formError: true });
      this.setState({errorMessage:"please select card"})
    }
    console.log(e);
    e.preventDefault();
  };
  getForm = () => {
    if (this.state.showForm)
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            hidden
            readOnly
            type={"text"}
            name="selectedCardId"
            value={this.props.id}
          ></input>
          <input
            hidden
            readOnly
            type={"text"}
            name="purpose"
            value={this.props.purpose}
          ></input>
          <input type="submit" value="Submit" />
          {this.state.formError === true ? (
            <div className="danger">{this.state.errorMessage}</div>
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
