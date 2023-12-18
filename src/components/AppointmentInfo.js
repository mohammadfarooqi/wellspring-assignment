import { cn } from '../lib/utils';
import DotsIcon from './icons/DotsIcon';
import { Button } from './ui/Button';

function AppointmentInfo({ appointment }) {
  const {
    time,
    appointmentType,
    patientName,
    appointmentName,
    // appointmentDate,
    appointmentDescription,
  } = appointment;

  return (
    <div className="flex items-center bg-grey-50 rounded-2xl overflow-hidden">
      <div
        className={cn(
          'py-[19px] pl-[14px] pr-[11px] mr-0 w-[93px] text-center',
          appointmentType === 'Telehealth'
            ? 'bg-blue-light-400'
            : 'bg-purple-300'
        )}
      >
        <div className="text-grey-25 font-bold text-base">{time}</div>
        <div
          className={cn(
            'font-medium text-xs',
            appointmentType === 'Telehealth'
              ? 'text-blue-light-700'
              : 'text-purple-600'
          )}
        >
          {appointmentType}
        </div>
      </div>
      <div className="py-[21px] pl-[22px] ml-0 flex-1">
        <div className="text-grey-700 font-bold text-sm mb-0">
          {appointmentName}: {patientName}
        </div>
        <div className="text-grey-500 font-normal text-xs">
          {appointmentDescription}
        </div>
      </div>
      <Button
        variant="ghost"
        className="p-0 rounded-sm px-1 self-start mt-2 mr-3"
      >
        <DotsIcon />
      </Button>
    </div>
  );
}

export default AppointmentInfo;
