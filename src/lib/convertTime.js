const currentTimestamp = Date.now();
const exp = (currentTimestamp / 1000 + 31556926) * 1000;
const calendarDate = new Date(exp).toLocaleDateString('en-GB');
const dates = { exp, calendarDate };

export default dates;
