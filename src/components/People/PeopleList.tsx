import React from 'react';
import { Link } from 'react-router-dom';
import { PeopleListProps } from './People.interface';

const PeopleList: React.FC<PeopleListProps> = ({ 
  people,
  onPageChange,
  currentPage,
  totalPages,
  hasPrevious,
  hasNext
 }) => {
  return (
    <div className="container mt-4">
      <h1>Star Wars List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Birth Year</th>
            <th>Gender</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
              <td>{person.hair_color}</td>
              <td>{person.birth_year}</td>
              <td>{person.gender}</td>
              <td>
                <Link to={`/Star-Wars/people/${person.id}`} className="btn btn-primary btn-sm">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul className="pagination">
          <li className={`page-item ${!hasPrevious ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => hasPrevious && onPageChange(currentPage - 1)}
              disabled={!hasPrevious}
            >
              Previous
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{`Page ${currentPage} of ${totalPages}`}</span>
          </li>
          <li className={`page-item ${!hasNext ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => hasNext && onPageChange(currentPage + 1)}
              disabled={!hasNext}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default PeopleList;
