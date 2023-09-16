import React, { useState } from "react";
import axios from "axios";
import "./css/checkfare.css";

const GetFare = () => {
  const [station, setStation] = useState({ trainNo: "", from: "", to: "" });
  const [container, setContainer] = useState([]);
  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStation({ ...station, [name]: value });
    console.log(station[name]);
  };

  const check = (e) => {
    e.preventDefault();
    const loading = document.querySelector(".loading");
    loading.style.display = "flex";

    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v2/getFare",
      params: {
        trainNo: station.trainNo,
        fromStationCode: station.from,
        toStationCode: station.to,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
      },
    };

    axios.request(options)
      .then(function (response) {
        loading.style.display = "none";
        // console.log(response.data.data);
        setContainer(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="box">
      <h2>Enter Details</h2>
      <div id="pnrinput">
        <input
          type="text"
          placeholder="TRAIN NO"
          name="trainNo"
          value={station.trainNo}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="SOURCE STATION"
          name="from"
          value={station.from}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="DEST STATION"
          name="to"
          value={station.to}
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
      <div id="result">
        <div id="resultcard">
          <h3>General</h3>
          <div id="trainclass">
            {container && container.general &&
              container.general.map((item) => {
                return <span>{item.classType}</span>;
              })}
          </div>
          <div id="classfare">
            {container && container.general &&
              container.general.map((item) => {
                return <span>{item.fare}</span>;
              })}
          </div>
        </div>
        <div id="resultcard">
          <h3>Tatkal</h3>
          <div id="trainclass">
            {container && container.general &&
              container.tatkal.map((item) => {
                return <span>{item.classType}</span>;
              })}
          </div>
          <div id="classfare">
            {container && container.general &&
              container.tatkal.map((item) => {
                return <span>{item.fare}</span>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetFare;
