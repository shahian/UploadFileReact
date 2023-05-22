import  jalaali  from 'jalaali-js';
import { convertObjectDateToText } from './dateConvertor';

export const convertToMiladi = (date) => {
    const temp = jalaali.toGregorian(date.year, date.month, date.day) 
    return convertObjectDateToText({year: temp?.gy, month: temp?.gm, day: temp?.gd})
}