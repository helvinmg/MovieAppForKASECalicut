import './App.css'
import MovieDetails from './components/MovieDetails'
import MovieForm from './components/MovieForm'
function App() {
  return (
    <>
      <h1>Movie App</h1>
      <MovieDetails/>
      <h2>Use the following form to add details</h2>
      <MovieForm/>
    </>
  )
}

export default App
