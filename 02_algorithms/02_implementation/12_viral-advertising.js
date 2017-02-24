
// https://www.hackerrank.com/challenges/strange-advertising

// On day 1, 5 people are targeted by a viral ad. Each day, half (rounded down) of the people who see it will like it and share it with 3 friends. The other half ignore it. Given an integer of the nth day, print the total number of people who have liked the ad by that day.

// CONSTANTS

  const INITIAL_VIEWERS = 5;
  const SUCCESS_RATE = 0.5;
  const SHARES_ON_SUCCESS = 3;

// FUNCTIONS

  function getTotalLikesByDay(day) {
    let totalLikes = 0;
    let dailyViewers = INITIAL_VIEWERS;

    for (let i = 1; i <= day; i++) {
      const dailyLikes = Math.floor(dailyViewers * SUCCESS_RATE);
      totalLikes += dailyLikes;
      dailyViewers = dailyLikes * 3;
    }

    return totalLikes;
  }

// MAIN

(function main() {
  const day = 3;
  const totalLikes = getTotalLikesByDay(day);

  console.log(totalLikes);
}());
