export const fetchLogs = () =>
  $.ajax({
    method: "GET",
    url: `/api/logs`,
  });

export const createLog = (log) => (
  $.ajax({
    method: 'POST',
    url: `/api/logs`,
    data: {log}
  })
)

