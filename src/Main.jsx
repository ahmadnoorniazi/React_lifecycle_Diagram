import React, { Component } from 'react';
import Details from './Details';
import {img} from './Img';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div>
                <img src={img} alt="logo" />
                <Details />      
            </div>
        );
    }
}
export default Main;  