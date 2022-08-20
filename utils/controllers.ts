export const getLightning = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    try {
        const res = await fetch(`https://www.icalendar37.net/lunar/api/?month=${month}&year=${year}&lang=en`);
        const {phase} = await res.json();
        const {lighting} = phase[day]
        return Math.floor(lighting);
      } catch (error) {
        return null;
      }
}