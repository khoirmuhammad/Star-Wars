// src/pages/PeopleListPage.tsx
import React, { useEffect, useState } from 'react';
import { get } from '../../api/apiService';
import PeopleList from '../../components/People/PeopleList';
import LoadingSpinner from '../../components/LoadingSpinner';

const PeopleListPage: React.FC = () => {
  const [peopleData, setPeopleData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [hasPrevious, setHasPrevious] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);


  useEffect(() => {
    fetchData(`/?page=${currentPage}`);
  }, [currentPage]);

  const fetchData = async (param: string | null) => {
    try {
      const response = await get(`people${param}`);
      setPeopleData(response.data.results);
      setTotalPages(Math.ceil(response.data.count / 10)); // Assume 10 items per page & round up
      setHasPrevious(response.data.previous !== null);
      setHasNext(response.data.next !== null);
    } catch (err) {
      setError('Failed to fetch people data');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) 
    return <LoadingSpinner />;

  if (error) 
    return <div>{error}</div>;

  return <PeopleList 
    people={peopleData.map((data: any, index: number) => 
    ({ id: index + 1, 
        name: data.name, 
        height: data.height, 
        mass: data.mass, 
        hair_color: data.hair_color,
        birth_year: data.birth_year,
        gender: data.gender }))}
    onPageChange={handlePageChange}
    currentPage={currentPage}
    totalPages={totalPages}
    hasPrevious={hasPrevious}
    hasNext={hasNext} />;
};

export default PeopleListPage;
