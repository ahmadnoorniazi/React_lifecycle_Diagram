import React, { Component } from 'react';
import { Data, Data2, Data3 } from './Data';


class Heading extends Component {
    render() {
        return (
            <div>
                <div className="AllBtns">
                    <ul className="Hmain">
                        <li className="btnss">Mounting</li>
                        {
                            Data.map(iter =>
                                <li className="btns"><a className="Links" href={`#${iter.id}`}>{iter.Heading}</a></li>
                            )
                        }
                    </ul>
                    <ul className="Second">
                        <li className="btnss">Updating</li>
                        {
                            Data2.map(iter =>
                                <li className="btns"><a className="Links" href={`#${iter.id}`}>{iter.Heading}</a></li>
                            )
                        }
                    </ul>
                </div>
                <div className="Third">
                <ul className="third">
                    <li className="btnss">Unmounting</li>
                    {
                        Data3.map(iter =>
                            <li className="btns"><a className="Links" href={`#${iter.id}`}>{iter.Heading}</a></li>
                        )
                    }
                </ul>
                </div>
            </div>
        );
    }
}

export default Heading;