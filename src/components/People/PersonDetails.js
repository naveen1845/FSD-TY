import './PersonDetails.css';

function PersonDetails({ person, goBack }) {
  return (
    <div className="person-details-container">
      <button className="back-button" onClick={goBack}>← Back to List</button>

      <h2>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h2>
      <img
        src={person.picture.large}
        alt={`${person.name.first} ${person.name.last}`}
        className="person-img-large"
      />
      <div className="person-details">
        <p><strong>Gender:</strong> {person.gender}</p>
        <p><strong>Birthdate:</strong> {new Date(person.dob.date).toLocaleDateString()}</p>
        <p><strong>Age:</strong> {person.dob.age}</p>
        <p><strong>Phone:</strong> {person.phone}</p>
        <p><strong>Email:</strong> {person.email}</p>
        <p><strong>Cell:</strong> {person.cell}</p>
        <p><strong>Location:</strong> {person.location.city}, {person.location.state}, {person.location.country}</p>
        <p><strong>Address:</strong> {person.location.street.number} {person.location.street.name}</p>
        <p><strong>Postcode:</strong> {person.location.postcode}</p>
        <p><strong>Timezone:</strong> {person.location.timezone.description}</p>
      </div>
    </div>
  );
}

export default PersonDetails;
