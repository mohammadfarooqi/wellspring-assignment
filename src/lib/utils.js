import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

export function handleError(error) {
  console.error('API error:', error);
  throw error;
}

export function getRecentPatients(patients, currentDate, numberOfDays) {
  const recentPatients = patients.filter((patient) => {
    const lastCheckInDate = new Date(patient.lastCheckIn);
    const timeDifference = currentDate - lastCheckInDate;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
    return daysDifference <= numberOfDays;
  });
  return recentPatients;
}

export function groupAppointmentsByDate(appointments) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const thisWeek = new Date(today);
  thisWeek.setDate(today.getDate() + 7);

  const groupedAppointments = {
    today: [],
    tomorrow: [],
    thisWeek: [],
  };

  appointments.forEach((appointment) => {
    const appointmentDate = new Date(appointment.appointmentDate);

    if (appointmentDate.toDateString() === today.toDateString()) {
      groupedAppointments.today.push(appointment);
    } else if (appointmentDate.toDateString() === tomorrow.toDateString()) {
      groupedAppointments.tomorrow.push(appointment);
    } else if (appointmentDate <= thisWeek) {
      groupedAppointments.thisWeek.push(appointment);
    }
  });

  return groupedAppointments;
}
