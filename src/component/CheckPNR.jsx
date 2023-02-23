import React, { useState } from "react";
import './css/checkpnr.css'
import axios from "axios";

const CheckPNR = () => {
    const [pnr, setpnr] = useState('');
    const [container, setContainer] = useState([]);

    const handleChange = (e) => {
        setpnr(e.target.value);
    }

    const pnrresult = document.querySelector('#pnrresult');

    const check = (e) => {
        e.preventDefault();
        pnrresult.classList.remove('hide');
        const options = {
            method: 'GET',
            url: 'https://irctc1.p.rapidapi.com/api/v3/getPNRStatus',
            params: { pnrNumber: String(pnr) },
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
                <input type='number' placeholder='ENTER PNR'
                    value={pnr}
                    onChange={handleChange}></input>
                <button type='submit'
                    onClick={check}>
                    CHECK
                </button>
            </div>
            <div id="result">
                <div id='resultcard' >

                    <div id='station'>
                        <div id='from'>
                            <p>FROM</p>
                            <p> date </p>
                            <h4> source </h4>
                            <h5> time </h5>
                        </div>
                        <div id='to'>
                            <p>DEST</p>
                            <p> date </p>
                            <h4> destination </h4>
                            <h4> time </h4>
                        </div>
                    </div>

                    <div id='trainName'>
                        <span><b> train number </b>:</span>
                        <span> train name </span>
                    </div>
                    
                    <div id='passenger'>
                        <h5> passenger 1 </h5>
                        <h5> confirmation status </h5>
                        <h4> seat number </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckPNR;