import React from 'react';
import './calculator.css';

export default class InputBox extends React.Component {

    render() {
        return <tr>
            <td colSpan="5">
                <input type="text" id="data" disabled />
            </td>
        </tr>
    }

}