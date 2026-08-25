// problem link: https://code-lab-ph.vercel.app/labs/code-lab/contests/dc-1/get-month-name
function getMonthName(monthNumber: number): string {
  // TODO: Implement this function
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  return months[monthNumber - 1]
}