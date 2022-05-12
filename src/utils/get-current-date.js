const getCurrentDate = () => {
  const date = new Date();
  const [day, month, year] = date.toLocaleDateString().split('.');
  return `${year}-${month}-${day}`;
};

export default getCurrentDate;
