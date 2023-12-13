import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

const getColorForFEVER = (fever) => {
    if (fever > 90 && fever < 96.5) {
        return '#FF3333'; // Hypothermia - Red
    } else if (fever > 96.5 && fever < 99.9) {
        return '#66CC66'; // Normal - Green
    } else if (fever > 99.9) {
        return '#FF3333'; // Hyperthermia - Red
    }
};

const getColorForCOUGH = (cough) => {
    if (cough == 1) {
        return '#FF3333'; // Hypothermia - Red
    } else if (cough == 0) {
        return '#66CC66'; // Normal - Green
    }
};

const getColorForBREATHING_DIFFICULTY = (BREATHING_DIFFICULTY) => {
    if (BREATHING_DIFFICULTY == 1) {
        return '#FF3333'; // Hypothermia - Red
    } else if (BREATHING_DIFFICULTY == 0) {
        return '#66CC66'; // Normal - Green
    }
};

const getColorForFATIGUE = (FATIGUE) => {
    if (FATIGUE == 1) {
        return '#FF3333'; // Hypothermia - Red
    } else if (FATIGUE == 0) {
        return '#66CC66'; // Normal - Green
    }
};

const getColorForLOSS_OF_SENSES = (LOSS_OF_SENSES) => {
    if (LOSS_OF_SENSES == 1) {
        return '#FF3333'; // Hypothermia - Red
    } else if (LOSS_OF_SENSES == 0) {
        return '#66CC66'; // Normal - Green
    }
};

const getColorForCONTACT_WITH_COVID_INFECTED = (CONTACT_WITH_COVID_INFECTED) => {
    if (CONTACT_WITH_COVID_INFECTED == 1) {
        return '#FF3333'; // Hypothermia - Red
    } else if (CONTACT_WITH_COVID_INFECTED == 0) {
        return '#66CC66'; // Normal - Green
    }
};

const getColorForTRAVEL_HISTORY = (TRAVEL_HISTORY) => {
    if (TRAVEL_HISTORY == 0) {
        return '#66CC66'; // Hypothermia - GREEN
    } else if (TRAVEL_HISTORY < 31 && TRAVEL_HISTORY > 15) {
        return '#FF9933'; // Low Risk - Orange
    } else if (TRAVEL_HISTORY < 15 && TRAVEL_HISTORY > 1) {
        return '#FF3333'; // High Risk - Red
    }
};

const getColorForCOVID_SUSPECTS = (COVID_SUSPECTS) => {
    if (COVID_SUSPECTS >= 0.5) {
        return '#FF3333'; // Hypothermia - Red
    } else if (COVID_SUSPECTS < 0.5) {
        return '#66CC66'; // Normal - Green
    }
};

function Home() {
    const [data, setData] = useState([]);
    const [num, setNum] = useState(1);
    const [expanded, setExpanded] = useState(false);
    const field = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://covidcheckapi.azurewebsites.net/data/' + num);
                const jsonData = await response.json();
                const sortedData = jsonData.sort((a, b) => a.SerialNumber - b.SerialNumber).reverse();
                setData(sortedData);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        // Fetch data initially
        fetchData();

        // Fetch data every 5 seconds
        const interval = setInterval(fetchData, 5000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, [num]);

    const handleButtonClick = () => {
        const inputValue = field.current.value;
        setNum(Number(inputValue));
    };

    function copyText() {
        var copyText = document.getElementById('noti');
        navigator.clipboard.writeText(copyText.innerHTML);
        alert('Text copied to clipboard!');
    };

    const renderTableRows = () => {
        const fieldsToRender = expanded ? data : data.slice(0, 4);

        return fieldsToRender.map((item, index) => (
            <tr key={index}>
                <td style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.Timestamp}</td>
                <td style={{ color: getColorForFEVER(item.FEVER) }}>{item.FEVER}</td>
                <td style={{ color: getColorForCOUGH(item.COUGH) }}>{item.COUGH}</td>
                <td style={{ color: getColorForBREATHING_DIFFICULTY(item.BREATHING_DIFFICULTY) }}>{item.BREATHING_DIFFICULTY}</td>
                <td style={{ color: getColorForFATIGUE(item.FATIGUE) }}>{item.FATIGUE}</td>
                <td style={{ color: getColorForLOSS_OF_SENSES(item.LOSS_OF_SENSES) }}>{item.LOSS_OF_SENSES}</td>
                <td style={{ color: getColorForTRAVEL_HISTORY(item.TRAVEL_HISTORY) }}>{item.TRAVEL_HISTORY}</td>
                <td style={{ color: getColorForCONTACT_WITH_COVID_INFECTED(item.CONTACT_WITH_COVID_INFECTED) }}>{item.CONTACT_WITH_COVID_INFECTED}</td>
                <td style={{ color: getColorForCOVID_SUSPECTS(item.COVID_SUSPECTS) }}>{item.COVID_SUSPECTS}</td>
            </tr>
        ));
    };

    return (
        <div>
            <div className='header'>
                <h1>Covid Check Data</h1>
                <h3>
                    Login: Patient1 |{' '}
                    <a style={{ color: 'inherit' }} href="#">
                        Change Patient
                    </a>
                </h3>
                <p id='noti'></p>
                <i onClick={copyText} className='gg-copy'></i>
            </div>
            <table className='data-table'>
                <thead>
                    <tr>
                        <th>TIMESTAMP</th>
                        <th>FEVER</th>
                        <th>COUGH</th>
                        <th>BREATHING DIFFICULTY</th>
                        <th>FATIGUE</th>
                        <th>LOSS OF SENSES</th>
                        <th>TRAVEL HISTORY</th>
                        <th>CONTACT WITH INFECTED</th>
                        <th>COVID SUSPECTS</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableRows()}
                    {/* Button row at the end */}
                    <tr
                        onClick={() => setExpanded(!expanded)}
                        style={{
                            cursor: 'pointer',
                            textAlign: 'center',
                            backgroundColor: '#333', // Adjust the background color if needed
                            color: '#fff', // Adjust the text color if needed
                        }}
                    >
                        <td colSpan="9" style={{ textAlign: "center" }}>
                            Click to {expanded ? 'Collapse -' : 'Expand +'}
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to='/reports'>Navigate to Reports</Link>
            <span>&nbsp; | &nbsp;</span>
            <Link to='/doctor'>Navigate to Doctor</Link>
        </div>
    );
}

export default Home;