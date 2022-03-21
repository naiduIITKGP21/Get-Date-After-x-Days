const addDays = require("date-fns/addDays");
const updateDate = (days) => {
  let date = new Date(2020, 8, 22);
  const newDate = addDays(date, days);
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
};
module.exports = updateDate;
