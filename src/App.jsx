import React, { useState } from "react";
import "./App.css";
export default function App() {
  let holidays = {
    holidays: [
      {
        id: 1,
        holiday: "New Year's Day",
        date: "2023-01-01",
        day: "Sunday",
      },
      {
        id: 2,
        holiday: "Republic Day",
        date: "2023-01-26",
        day: "Thursday",
      },
      {
        id: 3,
        holiday: "Holi",
        date: "2023-03-13",
        day: "Monday",
      },
      {
        id: 4,
        holiday: "Good Friday",
        date: "2023-04-14",
        day: "Friday",
      },
      {
        id: 5,
        holiday: "Labour Day",
        date: "2023-05-01",
        day: "Monday",
      },
      {
        id: 6,
        holiday: "Independence Day",
        date: "2023-08-15",
        day: "Tuesday",
      },
      {
        id: 7,
        holiday: "Gandhi Jayanti",
        date: "2023-10-02",
        day: "Monday",
      },
      {
        id: 8,
        holiday: "Diwali",
        date: "2023-10-19",
        day: "Thursday",
      },
      {
        id: 9,
        holiday: "Christmas Day",
        date: "2023-12-25",
        day: "Monday",
      },
    ],
  };
  return (
    <div className='App'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>First</th>
            <th scope='col'>Last</th>
            <th scope='col'>Handle</th>
          </tr>
        </thead>
        <tbody>
          {holidays.holidays.map((each) => (
            <tr key={each.id}>
              <th scope='row'>{each.id}</th>
              <td>{each.date}</td>
              <td>{each.day}</td>
              <td>{each.holiday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
