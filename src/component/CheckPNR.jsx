import React, { useState } from "react";
import "./css/checkpnr.css";
import axios from "axios";

const CheckPNR = () => {
  const [pnr, setpnr] = useState("");
  const [container, setContainer] = useState();

  const handleChange = (e) => {
    setpnr(e.target.value);
  };

  const check = (e) => {
    e.preventDefault();
    const loading = document.querySelector(".loading");
    loading.style.display = "flex";

    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v3/getPNRStatus',
        params: { pnrNumber: pnr },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
        }
    };

    axios.request(options).then(function (response) {
        loading.style.display = 'none';
        setContainer(response.data.data);
    }).catch(function (error) {
        console.error(error);
    });
  };

  return (
    <div className="box">
      <h2>Enter PNR</h2>
      <div id="pnrinput">
        <input
          type="number"
          placeholder="ENTER PNR"
          value={pnr}
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={check}>
          CHECK
        </button>
      </div>
      <div className="loading hide">
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
      {container ? (
        <div id="result">
          <div id="resultcard">
            <div id="station">
              <div id="from">
                <p> FROM </p>
                <h4> {container.BoardingStationName} </h4>
                <p> {container.SourceDoj} </p>
                <h5> {container.DepartureTime} </h5>
              </div>
              <div id="to">
                <p> DEST </p>
                <h4> {container.ReservationUptoName} </h4>
                <p> {container.DestinationDoj} </p>
                <h5> {container.ArrivalTime} </h5>
              </div>
            </div>

            <div id="trainName">
              <span>
                <b> {container.TrainNo} </b>:
              </span>
              <span> {container.TrainName} </span>
            </div>
            {container.PassengerStatus && container.PassengerStatus.map((item, index) => {
              return (
                <div id="passenger">
                  <h5> {"Passenger: "+index+1} </h5>
                  <h5> {item.CurrentStatus} </h5>
                  <h5> - </h5>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CheckPNR;
