import { TrucksPerDay } from '@/app/lib/definition'

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};



export const generateYAxisLabels = (data: any[], property: string, divisions: number = 5) => {
  const yAxisLabels = [];
  const highestRecord = Math.max(...data.map((item) => item[property]));

  // Calculate the top label as the next multiple of divisions
  const topLabel = Math.ceil(highestRecord / divisions) * divisions;

  // Generate Y-axis labels
  for (let i = topLabel; i >= 0; i -= topLabel / divisions) {
    yAxisLabels.push(i);
  }

  return { yAxisLabels, topLabel };
};


export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};


// const ExcelDateToJSDate = (date: number | string) => {
//   let converted_date = new Date(Math.round((date - 25569) * 864e5));
//   converted_date = String(converted_date).slice(4, 15)
//   date = converted_date.split(" ")
//   let day = date[1];
//   let month = date[0];
//   month = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(month) / 3 + 1
//   if (month.toString().length <= 1)
//       month = '0' + month
//   let year = date[2];
//   return String(day + '-' + month + '-' + year.slice(2, 4))
// }

// export const ExcelDateToJSDate = (date: number): string => {
//   let converted_date = new Date(Math.round((date - 25569) * 86400 * 1000));
//   converted_date.setDate(converted_date.getDate() + 1); // Excel dates are offset by 1
//   const day = converted_date.getDate().toString().padStart(2, '0');
//   const month = (converted_date.getMonth() + 1).toString().padStart(2, '0');
//   const year = converted_date.getFullYear().toString();
//   return `${day}-${month}-${year}`;
// };

export const ExcelDateToJSDate = (excelDate:number) => {
  return new Date((excelDate - (25567 + 1)) * 86400 * 1000);
};

// export const ExcelDateToJSDate = (excelDate: number) => {
//   const millisecondsPerDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
//   const date = new Date((excelDate - 25569) * millisecondsPerDay); // Adjust for Excel epoch (1900)
//   return date;
// };

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'UTC', // Or specify the timezone you need
});

// const formattedDate = dateFormatter.format(load.scheduledDate);
// console.log(formattedDate);

