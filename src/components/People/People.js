import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './People.css';

function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then((response) => setPeople(response.data.results))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="page-container">
      <div className="people-wrapper">
        {people.map((person, index) => (
          <div className="person-card" key={index}>
            <img
              src={person.picture.medium}
              alt={`${person.name.first} ${person.name.last}`}
              className="person-img"
            />
            <div className="person-info">
              <h3>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h3>
              <p><strong>Birthdate:</strong> {new Date(person.dob.date).toLocaleDateString()}</p>
              {/* <p><strong>Email:</strong> {person.email}</p>
              <p><strong>Phone:</strong> {person.phone}</p>
              <p><strong>Location:</strong> {person.location.city}, {person.location.country}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;
