export function verifiPhone(str) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
  return reg.test(str);
}

export function verifiEmail(str) {
  const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z]{2,3}){1,2}$/;
  return reg.test(str);
}
