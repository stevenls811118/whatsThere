export const displayDate = (timestamp) => {
  const date = new Date(timestamp);

  const array = date.toDateString().split(' ');
 
  return `${array[1]} ${array[2]}`;
};

