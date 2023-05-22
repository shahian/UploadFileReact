export const convertObjectDateToText = (date) => {
  return `${date.year}-${date?.month.toString().padStart(2, "0")}-${date.day
    .toString()
    .padStart(2, "0")}`;
};
