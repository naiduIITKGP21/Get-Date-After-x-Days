const addDays = require("date-fns/addDays");
const updateDate = (days) => {
  const date = new Date(2020, 08, 22);
  const newDate = addDays(date, days);
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
};
module.exports = updateDate;
