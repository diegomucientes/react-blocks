import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import Advertisement from './Advertisement';
import './Main.css';

class Main extends Component{
    render(){
        return(
            <div className="main">
                {this.props.children};
            </div>
        )
    } 
}

export default Main; 