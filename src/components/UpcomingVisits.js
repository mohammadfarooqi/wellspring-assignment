import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle } from './ui/Card';
import AppointmentInfo from './AppointmentInfo';
import { appointments as AppointmentsApi } from '../services';
import { Badge } from './ui/Badge';
import { groupAppointmentsByDate } from '../lib/utils';

const TABS = {
  TODAY: 'today',
  TOMORROW: 'tomorrow',
  THIS_WEEK: 'thisWeek',
};

function UpcomingVisits() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState(TABS.TODAY);

  const fetchAppointments = async () => {
    try {
      setLoading(true);

      const data = (await AppointmentsApi.getAll()).map((appointment) => {
        appointment.time = appointment.time.split(' ').join('').toLowerCase();
        return appointment;
      });

      const result = groupAppointmentsByDate(data);

      setAppointments(result);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <Card>
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>Upcoming visits</CardTitle>
      </CardHeader>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <div className="flex space-x-[10px] mt-6">
              <Badge
                variant={tab === TABS.TODAY ? 'active' : 'default'}
                onClick={() => setTab(TABS.TODAY)}
                className="text-sm font-normal py-[2px] px-[10px]"
              >
                Today
              </Badge>
              <Badge
                variant={tab === TABS.TOMORROW ? 'active' : 'default'}
                onClick={() => setTab(TABS.TOMORROW)}
                className="text-sm font-normal py-[2px] px-[10px]"
              >
                Tomorrow
              </Badge>
              <Badge
                variant={tab === TABS.THIS_WEEK ? 'active' : 'default'}
                onClick={() => setTab(TABS.THIS_WEEK)}
                className="text-sm font-normal py-[2px] px-[10px]"
              >
                This week
              </Badge>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
              {appointments &&
                appointments[tab] &&
                appointments[tab].map((appointment) => (
                  <AppointmentInfo
                    key={appointment.id}
                    appointment={appointment}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </Card>
  );
}

export default UpcomingVisits;
