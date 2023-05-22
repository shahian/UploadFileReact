
export function numberWithoutComman(x) {
 let validator = /^[-+]?\d*(,\d{3})*(\.\d*)?$/g;
 x = x.replaceAll(',','')
 const isNumber = x => !!`${x}`.match(validator)
 console.log(isNumber(x))
 if(isNumber(x)){
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
 }else{
  return ''
 }
}