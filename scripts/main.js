document.addEventListener('DOMContentLoaded', () => {
  function updateDateTime() {
      const utcTimeElement = document.getElementById('utc-time');
      const currentDayElement = document.getElementById('current-day');

      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      // Get current time in UTC
      const hours = now.getUTCHours().toString().padStart(2, '0');
      const minutes = now.getUTCMinutes().toString().padStart(2, '0');
      const seconds = now.getUTCSeconds().toString().padStart(2, '0');
      const currentTimeStr = `${hours}:${minutes}:${seconds} UTC`;

      // Get current day of the week
      const currentDayStr = days[now.getUTCDay()];

      // Update HTML content
      if (utcTimeElement && currentDayElement) {
          utcTimeElement.textContent = currentTimeStr;
          currentDayElement.textContent = currentDayStr;
      } else {
          console.error('Unable to find the elements.');
      }
  }

  updateDateTime();

  setInterval(updateDateTime, 1000);
});
