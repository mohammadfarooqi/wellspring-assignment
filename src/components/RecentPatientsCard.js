import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle } from './ui/Card';
import { Link } from 'react-router-dom';
import PatientInfo from './PatientInfo';
import { patients as PatientsApi } from '../services';
import { getRecentPatients, getMaxCheckInDate } from '../lib/utils';

function RecentPatientsCard() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPatients = async () => {
    try {
      setLoading(true);

      const data = (await PatientsApi.getAll()).sort(
        (a, b) => new Date(b.lastCheckIn) - new Date(a.lastCheckIn)
      );

      const currentDate = getMaxCheckInDate(data);
      const result = getRecentPatients(data, currentDate, 7);

      setPatients(result);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>Recent Patients</CardTitle>
        <Link to="/patients" className="text-xs text-grey-500">
          View All
        </Link>
      </CardHeader>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          patients.map((patient) => (
            <PatientInfo key={patient.id} patient={patient} />
          ))
        )}
      </div>
    </Card>
  );
}

export default RecentPatientsCard;
