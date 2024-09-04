import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../../api/apiService';
import PeopleDetail from '../../components/People/PeopleDetail';
import LoadingSpinner from '../../components/LoadingSpinner';

const PeopleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [person, setPerson] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await getById('people', id);
      setPerson(response.data);
    } catch (err) {
      setError('Failed to fetch person details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) 
    return <LoadingSpinner />;

  if (error) 
    return <div>{error}</div>;

  if (!person) 
    return <div>No person found</div>;

  return <PeopleDetail data={person} />;
};

export default PeopleDetailPage;
