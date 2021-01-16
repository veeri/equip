import React, { useRef } from "react";
import "./Dashboard.scss";
import { Line, Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Monthly Appointment",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export const Dashboard = () => {
  const inputRef = useRef("");
  return (
    <div className="dashboard">
      <h6 className="text-white">Dashboard</h6>
      <div className="apptm-info">
        Today's Appointments
        <div className="info d-flex  align-items-center">
          No Upcoming Consultations
        </div>
      </div>
      <div class="row charts">
        <div class="col-lg-6 ">
          <div class="col-lg-12 divitem ">
            <Line ref={inputRef} data={data} />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="col-lg-12 divitem">
            <Bar
              data={data}
              width={100}
              height={250}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
