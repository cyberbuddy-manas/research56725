import React from 'react';
import { Link } from "react-router-dom";

function Doctor() {
  return (
    <div className='header'>
      <Link style={{ color: "white" }} to="/">Home</Link>
      <h1 style={{ marginTop: "20px" }}>Patient Data</h1>
      <p>Anomaly Reported: <b>Patient 1</b></p>
      <h2>Details:</h2>
      <table border="1" style={{ width: "100%", marginTop: "10px" }}>
        <tr>
          <td>Patient Name</td>
          <td><b>Manas Gupta</b></td>
        </tr>
        <tr>
          <td>Address</td>
          <td><b>A-542/1, Ranjit Avenue, Amritsar-143001, Punjab</b></td>
        </tr>
        <tr>
          <td>Time to reach</td>
          <td><b>9 mins</b></td>
        </tr>
      </table>
      <p>Use this to communicate with Authorities</p>
      <p id='noti'></p><i className="gg-copy"></i>

      <h2>Anomaly Details:</h2>

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

export default Doctor