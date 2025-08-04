import React from 'react';
import './BirthdayReminder.css';

const people = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    birthdate: 'August 4, 1998'
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 30,
    birthdate: 'February 14, 1995'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    age: 28,
    birthdate: 'May 21, 1997'
  },
  {
    id: 4,
    name: 'Bob Williams',
    age: 22,
    birthdate: 'November 10, 2003'
  }
];

function BirthdayReminder() {
  return (
    <div className="birthday-container">
      <h2>Birthday Reminders</h2>
      <ul className="birthday-list">
        {people.map((person) => (
          <li key={person.id} className="birthday-card">
            <h3>{person.name}</h3>
            <p>Age: {person.age} years</p>
            <p>Birthday: {person.birthdate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BirthdayReminder;