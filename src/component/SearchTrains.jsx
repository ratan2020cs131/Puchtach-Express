import React, { useState } from "react";
import axios from "axios";
import './css/searchtrain.css';

const CheckTrains = () => {
    const [station, setStation] = useState({ from: '', to: '' });
    const [container, setContainer] = useState([]);
    let name, value;

    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setStation({ ...station, [name]: value });
        console.log(station[name])
    }

    const check = (e) => {
        e.preventDefault();

        const options = {
            method: 'GET',
            url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
            params: { fromStationCode: 'bju', toStationCode: 'bdts' },
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setContainer(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <div className="box">
            <h2>Enter Station Code</h2>
            <div id='pnrinput'>
                <input type='text' placeholder='SOURCE STATION'
                    name='from'
                    value={station.from}
                    onChange={handleChange}></input>
                <input type='text' placeholder='DEST STATION'
                    name='to'
                    value={station.to}
                    onChange={handleChange}></input>
                <button type='submit'
                    onClick={check}>
                    CHECK
                </button>
            </div>
            <div id='result'>
                {container.map((item) => {
                    return (
                        <div id='resultcard' >
                            <div id='trainNameStatus'>
                                <span><b> train number </b>:</span>
                                <span> train name </span>
                            </div>
                            <div id='trainTime'>
                                <div>
                                    <span>source time</span>
                                    <span>source date</span>
                                </div>
                                <div>
                                    <span>dest time</span>
                                    <span>dest date</span>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default CheckTrains;