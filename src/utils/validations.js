export const validateNumber = (number) => {
  const validNumber = new RegExp("^[+]{1}(?:[0-9-()/.]s?){6, 15}[0-9]{1}$");
  return !!validNumber.test(number);
};
