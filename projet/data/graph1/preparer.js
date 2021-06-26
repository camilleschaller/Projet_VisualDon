const R = require('ramda')
const movie = require('../imdb_top_1000.json')


const Released_Year = R.uniq(movie.map(d => d.Released_Year))
    .filter(Boolean)
    .sort()

const countMoviePerYear = Released_Year => movie.filter(d => d.Released_Year === Released_Year).length

const data = Released_Year.map(Released_Year => ({
  Released_Year,
    count: countMoviePerYear(Released_Year)
}))

console.log(
    JSON.stringify(data)
)