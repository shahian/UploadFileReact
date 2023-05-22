import  jalaali  from 'jalaali-js';

export const convertToShamsi = (date) => {
    const temp = date.split("T", 1)[0]
    const timeArray = temp.split("-")
    const [year, month, day] = timeArray;
    const timeObject = {
      year: +year,
      month: +month,
      day: +day,
    };
    const shamsiObject = jalaali.toJalaali(timeObject?.year,timeObject?.month, timeObject?.day)
    return `${shamsiObject?.jy}/${shamsiObject?.jm}/${shamsiObject?.jd}`
}