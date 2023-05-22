export function numberWithCommas(x) {
  console.log('valuevaluevaluevaluevaluevalue xxxxx',x)
  // eslint-disable-next-line eqeqeq
  if (x === 0) return 0;
  else {
    return (Number(x?.replace(/\D/g, "")) || "")?.toLocaleString();
  }
  // x = x.replaceAll(',','')
  // let floatValues =  /^[0-9]{1,3}(?:\,[0-9]{3})*(?:\.[0-9]{1,2})?$/;
  // x = (x?.replace(floatValues, "") || "")?.toLocaleString();
  // console.log('valuevaluevaluevaluevaluevalue last', x)
  // return x;
}
