import React, { useState } from "react";
import axios from "axios";
import './css/trainstatus.css'
const TrainStatus = () => {
    const [train, setTrain] = useState({ trainNo: '', startDay: '' });
    const [container, setContainer] = useState([]);

    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setTrain({ ...train, [name]: value });
        console.log(train.name);
    }

    const check = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus',
            params: { trainNo: '19038', startDay: '1' },
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
            <div id='pnrinput'>
                <input type='number' placeholder='ENTER TRAIN NO'
                    name="trainNo"
                    value={train.trainNo}
                    onChange={handleChange}></input>
                <button type='submit'
                    onClick={check}>
                    CHECK
                </button>
            </div>
            <div id="result">
                <div id='resultcard' >

                    <div id='trainNameStatus'>
                        <span><b> train number </b>:</span>
                        <span> train name </span>
                    </div>
                    
                    <div id='stats'>
                        <span>
                            <p>Last :</p>
                            <p>Upcoming : </p>
                            <p>Delay : </p>
                        </span>
                        <span>
                            <p> station name </p>
                            <p> station name </p>
                            <p> time amount</p>
                        </span>
                        <span>
                            <p> time </p>
                            <p> time </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainStatus;