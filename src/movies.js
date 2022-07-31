// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = [];

  const newArray = moviesArray.map(function (item) {
    allDirectors.push(item.director);
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenMovies = moviesArray.filter(function (item) {
    return item.director == "Steven Spielberg" && item.genre.includes("Drama");
  });
  return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length > 0) {
    let sumTotal = moviesArray.reduce((a, b) => a + b.score, 0);
    totalAverage = Math.round((sumTotal / moviesArray.length) * 100) / 100;
    return totalAverage;
  }
  return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const arrayDrama = moviesArray.filter((word) => word.genre.includes("Drama"));
  return scoresAverage(arrayDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = moviesArray
    .map((x) => x)
    .sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      }
      if (a.year < b.year) {
        return -1;
      } else if (a.year == b.year && a.title > b.title == true) {
        return 1;
      } else {
        return -1;
      }
    });
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArray = moviesArray.map((x) => x.title.toLowerCase()).sort();
  if (newArray.length > 20) {
    return newArray.slice(0, 20);
  }
  return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // let minutess = 0;
  // let hours = str.match(/(\d+)\s*h/);
  // let minutes = str.match(/(\d+)\s*m/);
  // const newArray = moviesArray.map((x) => x);
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
