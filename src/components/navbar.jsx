import React, { Component } from 'react';
class Navbar extends Component {
    state = {  } 
     getSuit=()=>{
        if(this.props.trumpSuit!=undefined)
        return  <div className="nav-item px-2">Trump Suit: <span   style={{color:(this.props.trumpSuit=="♥" || this.props.trumpSuit=="♦")?"red":"black"}}>{this.props.trumpSuit}</span></div>
     }
     getActions=()=>{
        if(this.props.actions!=undefined){
            return <div className="nav-item px-2 text-warning ">{this.props.actions}</div>
        }
     }
    render() { 
        console.log(this.props.trumpSuit)
        return (<nav class="navbar navbar-expand-lg navbar-dark bg-primary" >
             <span className="navbar-brand">{this.props.playerName}</span>
             <div className='nav-item '>Points: {this.props.points}   </div> {this.getSuit()}  {this.getActions()}
             </nav>);
           
}
}
 
export default Navbar;