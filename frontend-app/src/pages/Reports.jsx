import React from 'react';
import { Link } from "react-router-dom";
import Map from './map.png';

function Reports() {
    function copyText() {
        var copyText = document.getElementById("noti");
        navigator.clipboard.writeText(copyText.innerHTML);
        alert("Text copied to clipboard!");
    }
    return (
        <div className='header'>
            <Link style={{ color: "black" }} to="/">Home</Link>
            {/* <h1 style={{ marginTop: 20 }}>Anomaly Reported</h1>
            <h3>Authorities and your family have been notified and will be reaching to your registered address.</h3>
            <p>Current Registered Address: <span>A-542/1, Green Avenue, Amritsar-143001, Punjab</span></p>
            <p id='noti'></p><i onClick={copyText} className="gg-copy"></i> */}
            <h2>Location of Nearest Hospital:</h2>
            <div style={{ width: "100%", height: "60vh", overflow: "hidden", border: "1px solid black", }}>
                <img style={{ position: "relative", top: "-10px", right: "300px", height: "104.5%" }} src={Map} />
            </div>
            {/* <h2 style={{ marginTop: "0px" }}>What went wrong:</h2> */}

            {/* <table border="1" style={{ width: "100%", marginTop: "10px" }}>
                <tr>
                    <th>Instance</th>
                    <th>Problem Metric</th>
                    <th>Recorded at</th>
                    <th>Normal Range</th>
                    <th>Your Value</th>
                </tr>
                <tr>
                    <td>First Instance</td>
                    <td>Fever</td>
                    <td>2023-12-13 22:57:50	</td>
                    <td>(96.5-99.9)%</td>
                    <td>103</td>
                </tr>
                <tr>
                    <td>Second Instance</td>
                    <td>Fever</td>
                    <td>2023-12-13 23:00:38	</td>
                    <td>(96.5-99.9)%</td>
                    <td>101</td>
                </tr>
            </table> */}
        </div>
    )
}

export default Reports