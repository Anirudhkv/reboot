import React, { Component } from "react";
import firebase from "firebase";
import Dropdown from "react-bootstrap/Dropdown";
import "./assets/css/services.css";
import firebaseConfig from "./Config";
firebase.initializeApp(firebaseConfig);

class Services extends React.Component {
  constructor() {
    super();
    this.data = [
      {
        serviceName: "Trekking",
        servicePlaces: [
          {
            place: "Thusharagiri",
            time: "05-Apr to 15-Apr",
            serviceProvider: "Babu",
            contact: "9876543210",
            payment: 1800
          },
          {
            place: "Athirappilli",
            time: "05-Apr to 15-Apr",
            serviceProvider: "Kumaran",
            contact: "7609874512",
            payment: 1999
          },
          {
            place: "Silent Valley",
            time: "05-Apr to 15-Apr",
            serviceProvider: "Akhil",
            contact: "9876543210",
            payment: 2500
          },
          {
            place: "Paithalmala",
            time: "05-Apr to 15-Apr",
            serviceProvider: "Abubakkar",
            contact: "876543201",
            payment: 4000
          },
          {
            place: "Lakkidi",
            time: "05-Apr to 15-Apr",
            serviceProvider: "Seetha",
            contact: "9865123210",
            payment: 8000
          }
        ]
      },
      {
        serviceName: "Boating",
        servicePlaces: [
          {
            place: "Pookkod Lake",
            time: "05-Apr to 15-Apr",
            serviceProvider: "Saseendran",
            contact: "9876543210",
            payment: 750
          },
          {
            place: "Kumarakom",
            time: "09-Apr to 21-Apr",
            serviceProvider: "Ajish",
            contact: "9876543210",
            payment: 900
          },
          {
            place: "Periyar",
            time: "15-Apr to 21-Apr",
            serviceProvider: "Gireesh",
            contact: "9876543210",
            payment: 1500
          },
          {
            place: "Kuruva Islands",
            time: "25-Apr to 31-Apr",
            serviceProvider: "Manojkumar",
            contact: "9876543210",
            payment: 3000
          }
        ]
      }
    ];
    this.state = {
      d: parseData(this.data[0])
    };
    this.updateData = this.updateData.bind(this);
  }
  componentDidMount() {
    this.props.setCurrentLink("services");
    this.updateData = this.updateData.bind(this);
  }

  updateData() {
    console.log("updating...");
    if (document.getElementById("keyword").value.toLowerCase() === "trekking") {
      this.setState({
        d: parseData(this.data[0])
      });
    } else if (
      document.getElementById("keyword").value.toLowerCase() === "boating"
    ) {
      this.setState({
        d: parseData(this.data[1])
      });
    }
    document.getElementsByTagName("table")[0].style.display = "block";
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div>
              <div
                style={{ width: "auto", display: "block", margin: "0 auto" }}
              >
                <h4 className="dis">Enter a keyword</h4>

                <input type="text" id="keyword" />
                <input type="button" value="search" onClick={this.updateData} />
              </div>
              <table
                class="table table-striped table-hover"
                style={{ display: "none" }}
              >
                <thead>
                  <tr>
                    <th>Place</th>
                    <th>Time</th>
                    <th>Service Provider</th>
                    <th>Contact Number</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody dangerouslySetInnerHTML={{ __html: this.state.d }} />
              </table>

              {/* <select id="district" onChange={this.updateData}>
                    <option value="0">Select</option>
                    <option value="1">Trivandrum</option>
                    <option value="2">Kollam</option>
                    <option value="3">Kottayam</option>
                    <option value="4">Alappuzha</option>
                    <option value="5">Idukki</option>
                    <option value="6">Pathanamthitta</option>
                    <option value="7">Eranakulam</option>
                    <option value="8">Thrissur</option>
                    <option value="9">Palakkad</option>
                    <option value="10">Malappuram</option>
                    <option value="11">Kozhikode</option>
                    <option value="12">Wayanad</option>
                    <option value="13">Kannur</option>
                    <option value="14">Kazaragod</option>
                    </select> */}
              <br />
            </div>
          </div>
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
        </div>
      </div>
    );
  }
}
function parseData(data) {
  let x = "";
  let row = "<tr>";
  for (let places of data.servicePlaces) {
    row += `<td>${places.place}</td>`;
    row += `<td>${places.time}</td>`;
    row += `<td>${places.serviceProvider}</td>`;
    row += `<td>${places.contact}</td>`;
    row += `<td>${places.payment}</td>`;
    row += "</tr>";
  }
  x += row;
  return x;
}
const ServiceProvider = ({ name, desc, services, address, phone, city }) => {
  return (
    <div class="jumbotron">
      <div class="container">
        <h2>{name}</h2>
        <p>
          {desc}
          <br />
          Contact :<br />
          {address}
          <br />
          {city}
          <br />
          Phone: {phone}
          <br />
          Services Provided:
          {getServices(services)}
        </p>
        <p></p>
      </div>
    </div>
  );
};

const getServices = services => {
  console.log(services);
  let x = "<ul>";
  for (let s of services) {
    x += "<li>" + s.serviceName + "</li>";
  }
  x += "</ul>";
  return x;
};
export default Services;
