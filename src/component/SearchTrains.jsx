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

    const check = async (e) => {
        e.preventDefault();
        const loading = document.querySelector('.loading');
        loading.style.display = 'flex';

        const options = {
            method: 'GET',
            url: 'https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations',
            params: { fromStationCode: station.from, toStationCode: station.to },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
            }
        };

        axios.request(options).then(function (response) {
            loading.style.display = 'none';
            console.log(response.data.data);
            setContainer(response.data.data);
        }).catch(function (error) {
            loading.style.display = 'none';
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
            <div className='loading hide'>
                <div className="loader"></div>
                <p>Loading...</p>
            </div>
            <div id='result'>
            {container.map((item) => {
                return (
                        <div id='resultcard' >
                            <div id='trainNameStatus'>
                                <span><b>{item.train_number}</b>:</span>
                                <span> {item.train_name}</span>
                            </div>
                            <div id='trainTime'>
                                <div>
                                    <span>Depart Time</span>
                                    <span>{item.depart_time}</span>
                                </div>
                                <div>
                                    <span>Arrival Time</span>
                                    <span>{item.arrival_time}</span>
                                </div>
                            </div>
                        </div>
                )
            })}
            </div>
        </div>
    )
}

export default CheckTrains;