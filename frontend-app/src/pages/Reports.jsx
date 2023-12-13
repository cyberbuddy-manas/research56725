import React from 'react';
import { Link } from "react-router-dom";

function Reports() {
    function copyText() {
        var copyText = document.getElementById("noti");
        navigator.clipboard.writeText(copyText.innerHTML);
        alert("Text copied to clipboard!");
    }
    return (
        <div className='header'>
            <Link style={{ color: "white" }} to="/">Home</Link>
            <h1 style={{ marginTop: 20 }}>Anomaly Reported</h1>
            <h3>Authorities and your family have been notified and will be reaching to your registered address.</h3>
            <p>Current Registered Address: <span>A-542/1, Ranjit Avenue, Amritsar-143001, Punjab</span></p>
            <p id='noti'></p><i onClick={copyText} className="gg-copy"></i>
            <h2 style={{ marginTop: "0px" }}>What went wrong:</h2>

            <table border="1" style={{ width: "100%", marginTop: "10px" }}>
                <tr>
                    <th>Instance</th>
                    <th>Problem Metric</th>
                    <th>Recorded at</th>
                    <th>Normal Range</th>
                    <th>Your Value</th>
                </tr>
                <tr>
                    <td>First Instance</td>
                    <td>SPO2</td>
                    <td>2023-08-14 15:33:14</td>
                    <td>(90-96)%</td>
                    <td>87.03%</td>
                </tr>
                <tr>
                    <td>Second Instance</td>
                    <td>SPO2</td>
                    <td>2023-08-14 15:38:18</td>
                    <td>(90-96)%</td>
                    <td>74.97%</td>
                </tr>
            </table>
        </div>
    )
}

export default Reports