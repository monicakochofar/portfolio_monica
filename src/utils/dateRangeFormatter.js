export function getMonthDiff(dateFrom, dateTo) {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear())
  );
}

export function getEndDate(endDate) {
  if (endDate === 'Current') {
    return new Date();
  }
  return new Date(endDate.slice(-4), endDate.slice(0, 2));
}

export function getYears(months) {
  let years = 0;
  if (months > 12) {
    years = +(months / 12).toFixed(2);
  } else if (months === 12) {
    years = 1;
  } else {
    years = +(months * 0.084).toFixed(2);
  }

  return years;
}
