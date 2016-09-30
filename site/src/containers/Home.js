import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      query: "Star",
      currentMovieId: "tt0086190"
    };
  }

  componentWillMount(){
    this.search();
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
  }

  componentWillUpdate(nextProps, nextState){
  }

  updateSearch(){
    this.setState({query: this.refs.query.value});
    this.search(this.refs.query.value);
  }
  selectMovie(){
    this.setState({currentMovieId: this.refs.movieSelector.value});
  }

  render() {
    var movies = _.map(this.state.movies, (movie) => {
      return <li key={movie.imdbID}>{movie.Title}</li>
    });
    var options = _.map(this.state.movies, (movie) => {
      return <option key={`option _${movie.imdbID}`} value={movie.imdbID}>{movie.Title}</option>;
    });
    var selectedMovie = _.find(this.state.movies, (movie) => {
      return movie.imdbID == this.state.currentMovieId;
    });
    var img;
    if(selectedMovie){
      img = <img src={selectedMovie.Poster} />;
    }
    return <div className="Home">
      <h2>Search For Movie:</h2>
      <input ref="query" onChange={ (e) => { this.updateSearch(); } } type="text" value={this.state.query} />
      <select ref="movieSelector" value={this.state.currentMovieId} onChange={ (e) => { this.selectMovie(); } }>{options}</select>
      <br />
      <ul>{movies}</ul>
      {img}
    </div>
  }

  search(query = "star"){
    var url = `http://www.omdbapi.com?s=${query}&y=&r=json&plot=short`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.Search,
        total: response.body.totalResults
      });
      console.log(response.body.totalResults);
    });
  }
}

module.exports = Home;
