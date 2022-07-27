
// console.log(`1. Clean List of All Directors: ${getAllDirectors2(movies)}`);// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require("./data");

function getAllDirectorsClean(moviesArray) {
    const allDirectors = moviesArray.map((movie)=> movie.director);
    //BONUS
    const cleanList = allDirectors.filter(
        (director, index) => allDirectors.indexOf(director) === index);
    return cleanList;
}

console.log(getAllDirectorsClean(movies));

  // Version 2 - SAME FUNCTION USING AN ARROWfunction APPROACH
 
   const getAllDirectors2 = (moviesArray) => {
     const rawList = moviesArray.map((movie) => {
       movie.director;
     });
     // Bonus
     const cleanList = rawList.filter((director, index) => {
       rawList.indexOf(director) === index;
     });
     return cleanList;
   };

console.log(getAllDirectors2(movies));
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

 const howManyMovies = (moviesArray) => {
     const steven = moviesArray.filter(
       (movie) => movie.director === 'Steven Spielberg'
     );
     const stevenDrama = steven.filter((movie) => movie.genre.includes('Drama'));
     return stevenDrama;
   };
   console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalScores = moviesArray.reduce((total,movie)=> total + movie.score, 0);
    const average = totalScores / moviesArray.length;
    return average.toFixed(2);
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
    const totalScores = dramaMovies.reduce((total,movie)=> total + movie.score, 0);
    const average = totalScores / moviesArray.length;
    return average.toFixed(2);
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const ordenadas = moviesArray.sort((movie1,movie2) => movie1.year-movie2.year);
    return ordenadas;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const ordenadoPorTitulo = moviesArray.sort((movie) => movie.title)
    
    if (ordenadoPorTitulo.length < 20 ) {
        return ordenadoPorTitulo;
    } else {
        return ordenadoPorTitulo.slice(0,19);
    }
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const hoursToMinutes = moviesArray.map((movie) => {
        timeInHoursMinute = movie.director;
        timeInMinutes = (parseInt(timeInHoursMinute.slice(0,1)) * 60) + parseInt(timeInHoursMinute.slice(-5,-3));
        movie.director = timeInMinutes;
      });
      return hoursToMinutes;
    };

    console.log(turnHoursToMinutes(orderAlphabetically(movies)));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//----------------------------------function bestYearAvg(moviesArray) {}
