import React, { Component } from 'react';
import {Data,Data2,Data3} from './Data';
import Heading from './Heading';

class Main extends Component {
    render() {
        return (
            <div>
            <ul className="description">     
                {
                   Data.map(iter => 
                    <li className="Des" id={iter.id}>
                        <h2>{iter.Heading}</h2>
                        <p>{iter.Detail}</p>
                    </li>
                ) 
                } 
                    {
                        Data2.map(iter =>
                            <li className="Des" id={iter.id}>
                                <h2>{iter.Heading}</h2>
                                <p>{iter.Detail}</p>
                            </li>
                        )
                    } 
                    {
                        Data3.map(iter =>
                            <li className="Des" id={iter.id}>
                                <h2>{iter.Heading}</h2>
                                <p>{iter.Detail}</p>
                            </li>
                        )
                    }   
                    <li class="Des Des--desi" >
                        <h2>React components lifecycle diagram</h2>
                        <p>Click on a method to see a description.</p>
                        <p>Taken from the <a className="link" href="https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods">React documentation page</a>
                        ,compiled by <a className="link2" href="https://eduardoboucas.com">Eduardo Bouças</a>.</p>
                    </li>
                    <li class="Des--close"><a className="Cancel" href="#">X</a></li>
            </ul>
                <Heading />
            </div>
        );
    }
}

export default Main;        