export const fetchAppointments = () =>
  $.ajax({
    method: "GET",
    url: `/api/appointments`,
  });

export const createAppointment = (appointment) => (
  $.ajax({
    method: 'POST',
    url: `/api/appointments`,
    data: {appointment}
  })
)

