export const formatDate = (date: Date, time: string) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}T${time}`;
};

export const convertLocaleTimeString = (date: string) => {
  const dateString = new Date(date);
  const time = dateString.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return time;
};

export const convertTo12HourFormat = (date: string) => {
  const [hours, minutes] = date.split(':').map(Number);
  
  const suffix = hours >= 12 ? 'PM' : 'AM';
  
  const hours12 = hours % 12 || 12;

  return `${hours12}:${String(minutes).padStart(2, '0')} ${suffix}`;
}