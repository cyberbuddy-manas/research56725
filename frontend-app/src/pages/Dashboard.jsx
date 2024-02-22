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
    const [data, setData] = useState([
        {
            "SerialNumber": 60,
            "Timestamp": "2023-12-13 23:06:20",
            "FEVER": 95,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 0,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 100,
            "Timestamp": "2023-12-13 23:03:28",
            "FEVER": 100,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 8,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 104,
            "Timestamp": "2023-12-13 23:00:38",
            "FEVER": 104,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 13,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 96,
            "Timestamp": "2023-02-13 22:57:50",
            "FEVER": 96,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 3,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 101,
            "Timestamp": "2023-12-13 22:55:04",
            "FEVER": 101,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 4,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 103,
            "Timestamp": "2023-12-13 22:52:16",
            "FEVER": 103,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 16,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 99,
            "Timestamp": "2023-12-13 22:50:12",
            "FEVER": 99,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 19,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 102,
            "Timestamp": "2023-12-13 22:47:38",
            "FEVER": 102,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 16,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 96,
            "Timestamp": "2023-12-13 22:45:03",
            "FEVER": 91,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 5,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 97,
            "Timestamp": "2023-12-13 22:42:24",
            "FEVER": 99.7,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 19.2,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 100,
            "Timestamp": "2023-12-13 22:39:50",
            "FEVER": 91.2,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 2.8,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 49,
            "Timestamp": "2023-12-13 22:37:22",
            "FEVER": 92.6,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 31,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 48,
            "Timestamp": "2023-12-13 22:36:24",
            "FEVER": 92.9,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 23.1,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 47,
            "Timestamp": "2023-12-13 22:34:04",
            "FEVER": 94,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 18.4,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 46,
            "Timestamp": "2023-12-13 22:31:42",
            "FEVER": 91.6,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 26.3,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 45,
            "Timestamp": "2023-12-13 22:29:17",
            "FEVER": 95,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 31,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 44,
            "Timestamp": "2023-12-13 22:26:18",
            "FEVER": 104.3,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 27.3,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 43,
            "Timestamp": "2023-12-13 22:23:58",
            "FEVER": 96.6,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 12,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 42,
            "Timestamp": "2023-12-13 22:21:35",
            "FEVER": 96,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 15.7,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 41,
            "Timestamp": "2023-12-13 22:20:11",
            "FEVER": 100.9,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 29,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 40,
            "Timestamp": "2023-12-13 22:17:59",
            "FEVER": 96.3,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 16.1,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 39,
            "Timestamp": "2023-12-13 22:15:48",
            "FEVER": 95.9,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 16.7,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 38,
            "Timestamp": "2023-12-13 22:13:23",
            "FEVER": 97.3,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 25.2,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 37,
            "Timestamp": "2023-12-13 22:11:12",
            "FEVER": 91.3,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 10.8,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 36,
            "Timestamp": "2023-12-13 22:08:50",
            "FEVER": 94.7,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 22,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 35,
            "Timestamp": "2023-12-13 22:06:38",
            "FEVER": 104.9,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 3.8,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 34,
            "Timestamp": "2023-12-13 22:05:26",
            "FEVER": 92.7,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 9.7,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 33,
            "Timestamp": "2023-12-13 22:01:49",
            "FEVER": 94.4,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 25.1,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 32,
            "Timestamp": "2023-12-13 21:59:16",
            "FEVER": 93.2,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 9.2,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 31,
            "Timestamp": "2023-12-13 21:57:33",
            "FEVER": 97.9,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 26.9,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 30,
            "Timestamp": "2023-12-13 21:55:08",
            "FEVER": 103.8,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 30.6,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 29,
            "Timestamp": "2023-12-13 21:52:45",
            "FEVER": 102.6,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 20.3,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 28,
            "Timestamp": "2023-12-13 21:50:22",
            "FEVER": 101.9,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 10,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 27,
            "Timestamp": "2023-12-13 21:47:59",
            "FEVER": 91,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 25,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 26,
            "Timestamp": "2023-12-13 21:45:37",
            "FEVER": 104.4,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 22,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 25,
            "Timestamp": "2023-12-13 21:43:15",
            "FEVER": 94.9,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 29.2,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 24,
            "Timestamp": "2023-12-13 21:40:54",
            "FEVER": 90.3,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 8.4,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 23,
            "Timestamp": "2023-12-13 21:38:39",
            "FEVER": 97.2,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 11.1,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 22,
            "Timestamp": "2023-12-13 21:36:16",
            "FEVER": 102.8,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 20.5,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 21,
            "Timestamp": "2023-12-13 21:33:56",
            "FEVER": 99.1,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 28.1,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 20,
            "Timestamp": "2023-12-13 21:31:32",
            "FEVER": 90.3,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 28.9,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 19,
            "Timestamp": "2023-12-13 21:30:44",
            "FEVER": 96.2,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 12.3,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 18,
            "Timestamp": "2023-12-13 21:28:37",
            "FEVER": 95.4,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 19.2,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 17,
            "Timestamp": "2023-12-13 21:26:26",
            "FEVER": 96.7,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 23.4,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 16,
            "Timestamp": "2023-12-13 21:24:15",
            "FEVER": 98.1,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 27.1,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 15,
            "Timestamp": "2023-12-13 21:22:04",
            "FEVER": 98.3,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 29.1,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 14,
            "Timestamp": "2023-12-13 21:19:51",
            "FEVER": 103,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 30.3,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 13,
            "Timestamp": "2023-12-13 21:17:40",
            "FEVER": 101.5,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 3.2,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 12,
            "Timestamp": "2023-12-13 21:15:31",
            "FEVER": 98.4,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 14.6,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 11,
            "Timestamp": "2023-12-11 02:30:22",
            "FEVER": 101.1,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 6.2,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 10,
            "Timestamp": "2023-12-11 02:27:37",
            "FEVER": 92.2,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 7.4,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 9,
            "Timestamp": "2023-12-11 02:25:01",
            "FEVER": 96.9,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 15.6,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 1
        },
        {
            "SerialNumber": 8,
            "Timestamp": "2023-12-11 02:22:19",
            "FEVER": 104.7,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 13.6,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 7,
            "Timestamp": "2023-12-11 02:19:35",
            "FEVER": 102.5,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 24.3,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 6,
            "Timestamp": "2023-12-11 02:16:45",
            "FEVER": 96.6,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 22.9,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 5,
            "Timestamp": "2023-12-11 02:13:55",
            "FEVER": 95,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 1.4,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 4,
            "Timestamp": "2023-12-11 02:11:13",
            "FEVER": 97.8,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 1,
            "TRAVEL_HISTORY": 10.6,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 3,
            "Timestamp": "2023-12-11 02:08:41",
            "FEVER": 92.2,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 1.5,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 2,
            "Timestamp": "2023-12-11 02:06:08",
            "FEVER": 91.3,
            "COUGH": 0,
            "BREATHING_DIFFICULTY": 1,
            "FATIGUE": 1,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 29.9,
            "CONTACT_WITH_COVID_INFECTED": 1,
            "COVID_SUSPECTS": 0
        },
        {
            "SerialNumber": 1,
            "Timestamp": "2023-12-11 02:03:37",
            "FEVER": 104.8,
            "COUGH": 1,
            "BREATHING_DIFFICULTY": 0,
            "FATIGUE": 0,
            "LOSS_OF_SENSES": 0,
            "TRAVEL_HISTORY": 8.6,
            "CONTACT_WITH_COVID_INFECTED": 0,
            "COVID_SUSPECTS": 0
        }
    ]);
    const [num, setNum] = useState(1);
    const [expanded, setExpanded] = useState(false);
    const field = useRef();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://covidcheckapi.azurewebsites.net/data/' + num);
    //             const jsonData = await response.json();
    //             const sortedData = jsonData.sort((a, b) => a.SerialNumber - b.SerialNumber).reverse();
    //             setData(sortedData);
    //         } catch (error) {
    //             console.error('Failed to fetch data:', error);
    //         }
    //     };

    //     fetchData();

    //     const interval = setInterval(fetchData, 5000);

    //     return () => clearInterval(interval);
    // }, [num]);

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
        const fieldsToRender = expanded ? data : data.slice(0, 9);
        let hi = 1;
        return fieldsToRender.map((item, index) => (
            <tr key={index}>
                <td style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>PID {hi++} <button>Check Reports</button></td>
                <td style={{ color: getColorForFEVER(item.FEVER) }}>{item.FEVER}</td>
                <td style={{ color: getColorForCOUGH(item.COUGH) }}>{item.COUGH}</td>
                <td style={{ color: getColorForBREATHING_DIFFICULTY(item.BREATHING_DIFFICULTY) }}>{item.BREATHING_DIFFICULTY}</td>
                <td style={{ color: getColorForFATIGUE(item.FATIGUE) }}>{item.FATIGUE}</td>
                <td style={{ color: getColorForLOSS_OF_SENSES(item.LOSS_OF_SENSES) }}>{item.LOSS_OF_SENSES}</td>
                <td style={{ color: getColorForTRAVEL_HISTORY(item.TRAVEL_HISTORY) }}>{item.TRAVEL_HISTORY}</td>
                <td style={{ color: getColorForCONTACT_WITH_COVID_INFECTED(item.CONTACT_WITH_COVID_INFECTED) }}>{item.CONTACT_WITH_COVID_INFECTED}</td>
                <td style={{ color: getColorForCOVID_SUSPECTS(item.COVID_SUSPECTS) }}>{item.COVID_SUSPECTS}</td>
            </tr>
        )
        );
    };

    return (
        <div>
            <div className='header'>
                <h1>Covid Check Dashboard</h1>
                <Link to='/reports'>Navigate to Reports</Link>
                <span>&nbsp; | &nbsp;</span>
                <Link to='/doctor'>Navigate to Doctor</Link>
                <br /><br />
                {/* <h3>
                    Login: Patient1 |{' '}
                    <a style={{ color: 'inherit' }} href="#">
                        Change Patient
                    </a>
                </h3> */}
                {/* <p id='noti'></p> */}
                {/* <i onClick={copyText} className='gg-copy'></i> */}
            </div>
            <table className='data-table'>
                <thead>
                    <tr>
                        <th>Patient ID (PID)</th>
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
                <tbody style={{ textAlign: "center" }}>
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
                        <td colSpan="9" style={{ textAlign: "center", color: "white" }}>
                            Click to {expanded ? 'Collapse -' : 'Expand +'}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;