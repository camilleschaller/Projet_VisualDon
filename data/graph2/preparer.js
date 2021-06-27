const R = require('ramda')
const movie = require('../imdb_top_1000.json')


const Genre = R.uniq(movie.map(d => d.Genre))
    .filter(Boolean)
    .sort()

const countMoviePerYear = Genre => movie.filter(d => d.Genre === Genre).length

const data = Genre.map(Genre => ({
  Genre,
    count: countMoviePerYear(Genre)
}))

console.log(
    JSON.stringify(data)
)