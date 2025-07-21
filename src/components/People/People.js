import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PersonDetails from './PersonDetails';
import './People.css';

function People() {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then((response) => setPeople(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="page-container">
      <div className="people-wrapper">
        {selectedPerson ? (
          <PersonDetails person={selectedPerson} goBack={() => setSelectedPerson(null)} />
        ) : (
          people.map((person, index) => (
            <div
              className="person-card"
              key={index}
              onClick={() => handleCardClick(person)}
            >
              <img
                src={person.picture.medium}
                alt={`${person.name.first} ${person.name.last}`}
                className="person-img"
              />
              <div className="person-info">
                <h3>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h3>
                <p><strong>Birthdate:</strong> {new Date(person.dob.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default People;
