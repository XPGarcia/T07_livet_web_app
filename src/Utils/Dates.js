const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

const days = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo"
];

function formatDate(data) {
  const fullDate = new Date(data);
  const day = days[fullDate.getDay()];
  const date = fullDate.getDate();
  const month = months[fullDate.getMonth()];
  const year = fullDate.getFullYear();
  return `${day} - ${date} ${month}, ${year}`;
}

function formatTime(data) {
  const fullDate = new Date(data);
  return fullDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
}

function formatSimpleDate(data) {
  const fullDate = new Date(data);
  const date = fullDate.getDate();
  const month = months[fullDate.getMonth()];
  const year = fullDate.getFullYear();
  return `${date}/${month}/${year}`;
}

export { formatDate, formatTime, formatSimpleDate };
