import React from 'react';
import { PeopleDetailProps } from './People.interface';

const PeopleDetail: React.FC<PeopleDetailProps> = ({ data }) => {
  return (
    <div className="container mt-4">
      <h1>{data.name}</h1>
      <p><strong>Birth Year:</strong> {data.birth_year}</p>
      <p><strong>Gender:</strong> {data.gender}</p>
      <h3>Films</h3>
      <ul>
        {data.films.map((film, index) => <li key={index}>{film}</li>)}
      </ul>
      <h3>Species</h3>
      <ul>
        {data.species.map((specie, index) => <li key={index}>{specie}</li>)}
      </ul>
      <h3>Starships</h3>
      <ul>
        {data.starships.map((starship, index) => <li key={index}>{starship}</li>)}
      </ul>
      <h3>Vehicles</h3>
      <ul>
        {data.vehicles.map((vehicle, index) => <li key={index}>{vehicle}</li>)}
      </ul>
    </div>
  );
};

export default PeopleDetail;
