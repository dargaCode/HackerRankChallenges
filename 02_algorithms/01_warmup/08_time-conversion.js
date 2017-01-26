
// https://www.hackerrank.com/challenges/time-conversion

// Convert and print the given 12-hour time in 24-hour format

function timeConversion(time24) {
  const meridiem = time24.substring(time24.length - 2);
  const numericTime = time24.substring(0, time24.length - 2);
  const timeArray = numericTime.split(":");
  const hour12 = Number(timeArray[0]);

  const hour24 = convertHour(hour12, meridiem)

  // add leading zero if needed
  if (hour24 < 10) {
    timeArray[0] = '0' + hour24;
  } else {
    timeArray[0] = hour24;
  }

  const time12 = timeArray.join(':');

  console.log(time12);
}

function convertHour(hour12, meridiem) {
  let hour24 = hour12;

  if (meridiem === 'AM' && hour12 === 12) {
    hour24 -= 12;
  }
  if (meridiem === 'PM' && hour12 !== 12) {
    hour24 += 12;
  }

  return hour24;
}
