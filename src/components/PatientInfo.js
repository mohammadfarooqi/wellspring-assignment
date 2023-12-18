import { useCallback } from 'react';
import { Badge } from './ui/Badge';

function PatientInfo({ patient }) {
  const { patientName, caregiverName, visitStatus } = patient;

  const renderBadge = useCallback((str) => {
    switch (str) {
      case 'Visit completed':
        return <Badge>{str}</Badge>;
      case 'Started training':
        return <Badge variant="success">{str}</Badge>;
      case 'Missing documentation':
        return <Badge variant="warning">{str}</Badge>;
      default:
        return null;
    }
  }, []);

  return (
    <div className="flex justify-between items-center pt-4 pb-3 border-b border-grey-100 last:border-none">
      <div className="text-sm space-y-1">
        <div className="font-bold text-grey-600">{patientName}</div>
        <div className="text-grey-500">{caregiverName}</div>
      </div>
      {renderBadge(visitStatus)}
    </div>
  );
}

export default PatientInfo;
