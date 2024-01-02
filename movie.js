/* a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
a String representing the studio, and a String representing the rating as its arguments, 
and sets the respective class properties to these values.*/

class Movie{
    constructor(titleOfMovie ,productionStudio, movieRating){
        this.titleOfMovie = titleOfMovie;
        this.productionStudio = productionStudio;
        this.movieRating = movieRating;
    }
}
/*Example usage:*/

const movie = new Movie("The Dark Knight","Warner Bros. Pictures","PG13")
console.log(movie)

/*OUTPUT:

titleOfMovie: 'The Dark Knight',
  productionStudio: 'Warner Bros. Pictures',
  movieRating: 'PG13'

  */


/*b) The constructor for the class Movie will set the class property rating to "PG" as default 
when no rating is provided.*/


class Movie{
    constructor(titleOfMovie ,productionStudio, movieRating="PG13"){
        this.titleOfMovie = titleOfMovie;
        this.productionStudio = productionStudio;
        this.movieRating = movieRating;
    }
}
/*Example usage:*/

const movieDetail = new Movie("The Prestige ","Touchstone Pictures")
console.log(movieDetail)

/*output:

  titleOfMovie: 'The Prestige ',
  productionStudio: 'Touchstone Pictures',
  movieRating: 'PG13'

  */

// /*c) Write a method getPG, which takes an array of base type Movie as its argument, 
//   and returns a new array of only those movies in the input array with a rating of "PG".
//    You may assume the input array is full of Movie instances. The returned array need not be full.*/

class Movie{
    constructor(titleOfMovie ,productionStudio, movieRating){
        this.titleOfMovie = titleOfMovie;
        this.productionStudio = productionStudio;
        this.movieRating = movieRating;
    }
    static getPG(movies){
        return movies.filter((movies) => movies.movieRating ==="PG")
    }
}

/*Example Usage:*/

const movie1 = new Movie("The Prestige","Touchstone Pictures","PG13")
const movie2 = new Movie("Toy Story", "Pixar", "PG")
const movie3 = new Movie("The Dark Knight","Warner Bros. Pictures","PG13")

const movieArray = [movie1,movie2,movie3]

const PgMovies = Movie.getPG(movieArray)
console.log(PgMovies)

/*OUTPUT:

    [titleOfMovie: 'Toy Story',
    productionStudio: 'Pixar',
    movieRating: 'PG']
    
    */



/* d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
    the studio “Eon Productions”, and the rating “PG­13”  */   

const movieDetails = new Movie("Casino Royale","Eon Productions","PG13");


    