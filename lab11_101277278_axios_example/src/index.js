import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import "./index.css";

import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      const persons = res.data.results;
      this.setState({ persons });
      console.log(persons);
    });
  }

  createPersonLists(person) {
    return (
      <Card className="text-center" style={{ width: "200px", margin: "10px" }}>
        <Card.Img variant="top" src={person.picture.large}></Card.Img>
        <Card.Body>
          <Card.Title>{person.login.username}</Card.Title>
          <Card.Text>Gender: {person.gender}</Card.Text>
          <Card.Text>
            Time Zone Description: {person.location.timezone.description}
          </Card.Text>
          <Card.Text>Address: {person.location.street.number}</Card.Text>
          <Card.Text>Email: {person.email}</Card.Text>
          <Card.Text>
            Birth Date and Age: {person.dob.date} ({person.dob.age})
          </Card.Text>
          <Card.Text>Register Date: {person.registered.date}</Card.Text>
          <Card.Text>Phone #: {person.phone}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {this.state.persons.map((person) => this.createPersonLists(person))}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersonList />
  </React.StrictMode>
);
