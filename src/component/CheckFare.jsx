import React, { useState } from "react";
import axios from "axios";
import './css/checkfare.css';

const GetFare = () => {
    const [station, setStation] = useState({ trainNo: '', from: '', to: '' });
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
        const loading = document.querySelector('.loading');
        loading.style.display='flex';

        // const options = {
        //     method: 'GET',
        //     url: 'https://irctc1.p.rapidapi.com/api/v2/getFare',
        //     params: { trainNo: '19038', fromStationCode: 'ST', toStationCode: 'BVI' },
        //     headers: {
        //         'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        //         'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        //     }
        // };

        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        //     setContainer(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
    }

    return (
        <div className="box">
            <h2>Enter Details</h2>
            <div id='pnrinput'>
                <input type='text' placeholder='TRAIN NO'
                    name='trainNo'
                    value={station.from}
                    onChange={handleChange}></input>
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
                <div id='resultcard'>
                    <div id='trainclass'>
                        <span>SL</span>
                        <span>3A</span>
                        <span>2A</span>
                        <span>1A</span>
                    </div>
                    <div id='classfare'>
                        <span> 350</span>
                        <span> 750</span>
                        <span> 1200</span>
                        <span> 2500 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetFare;