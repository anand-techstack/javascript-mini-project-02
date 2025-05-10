function updateClock() {
  const date_object = new Date();

  let hours = date_object.getHours();
  const minutes = date_object.getMinutes();
  const seconds = date_object.getSeconds();
  const am_pm = hours >= 12 ? "PM" : "AM";
  const format_hours = hours % 12 || 12;

  const timeString = `${String(format_hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')} ${am_pm}`;
  document.getElementById('time').textContent = timeString;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const current_month = months[date_object.getMonth()];
  const current_date = date_object.getDate();
  const current_year = date_object.getFullYear();
  const current_day = days[date_object.getDay()];

  const dateString = `${current_month}, ${current_date}, ${current_year}`;
  document.getElementById('date').textContent = dateString;
  document.getElementById('day').textContent = current_day;
}

setInterval(updateClock, 1000);
updateClock(); // Call once initially

