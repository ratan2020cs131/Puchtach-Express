import React, { useState } from "react";
import axios from "axios";
import "./css/trainstatus.css";
const TrainStatus = () => {
  const [train, setTrain] = useState("");
  const [day, setDay] = useState("");
  const [container, setContainer] = useState();

  let value;
  const handleChange = (e) => {
    value = e.target.value;
    setTrain(value);
    // console.log(train);
    console.log(container);
  };

  const handleDay = (e) => {
    value = e.target.value;
    setDay(value);
    // console.log(train);
    console.log(day);
  };

  const check = (e) => {
    e.preventDefault();
    setContainer();
    const loading = document.querySelector(".loading");
    loading.style.display = "flex";

    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus",
      params: { trainNo: train, startDay: day },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        loading.style.display = "none";
        console.log(response.data.data);
        setContainer(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // const Result = (container) => {
  //     let last_station = container.previous_stations.length-1;
  //     return
  // }

  return (
    <div className="box">
      <h2>Enter Train No.</h2>
      <div id="pnrinput">
        <input
          type="number"
          placeholder="ENTER TRAIN NO"
          name="trainNo"
          value={train}
          onChange={handleChange}
        ></input>
        <input
          type="number"
          placeholder="0 FOR TODAY, 1 FOR YESTERDAY"
          name="startDay"
          value={day}
          onChange={handleDay}
          style={{width:"224px"}}
        ></input>
        <button type="submit" onClick={check}>
          CHECK
        </button>
      </div>
      {container ? 
        <>
          <div id="trainNameStatus">
            <span style={{display:"inline-block", margin:"auto"}}>
              <b> {container.train_number} </b>:
            </span>
            <span style={{display:"inline-block", margin:"auto"}}> {container.ir_train_name} </span>
            <div>DOJ: {container.std} </div>
          </div>

          <div id="stats">
            {
                container.new_message ?
                <h5 style={{margin:"auto"}}>{container.new_message}</h5>
                :
                <>
                <span>
              <p>Last :</p>
              <p>Upcoming : </p>
              <p>Delay : </p>
            </span>
            <span>
              <p> {container.previous_stations && container.previous_stations[container.previous_stations.length-1].station_name}</p>
              <p> {container.current_station_name} </p>
              <p> {container.delay}</p>
            </span>
            <span>
              <p> {container.previous_stations && container.previous_stations[container.previous_stations.length-1].etd} </p>
              <p> {container.eta} </p>
            </span>
            </>
            }
          </div>
        </>
       :
        <div className="loading hide">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      }
    </div>
  );
};

export default TrainStatus;
