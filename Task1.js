//Class
class Movie{
    //1.Constructor
    constructor(title,studio,rating)
    {
        this.title=title
        this.studio=studio
        this.rating=rating
    }


// 2) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
static getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
}
}
// 3) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
const movies = [
    new Movie("Casino Royale", "Eon Productions", "PG­13"),
    new Movie("Finding Nemo", "Pixar Animation Studios", "G"),
    new Movie("Harry Potter and the Sorcerer's Stone", "Warner Bros. Pictures", "PG"),
    new Movie("The Matrix", "Warner Bros. Pictures", "R")
];

// Get PG-rated movies
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

// 4) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”

const CasinoRoyale = new Movie( "Casino Royal", "Eon Productions", "PG13");
console.log("Title:", CasinoRoyale.title);

console.log("Studio:", CasinoRoyale.studio);

console.log("Rating:", CasinoRoyale.rating);