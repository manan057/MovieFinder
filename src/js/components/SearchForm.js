var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
  render: function() {
    return(
      <div className="search-form">
        <h1 className="text-center">Search For A Movie</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="test" className="form-control" ref="title" placeholder="Enter a Movie Title..." />
          </div>
          <button className="btn btn-primary btn-block">Search Movie</button>
        </form>
      </div>
    )
  },

  onSubmit: function(e) {
    e.preventDefault();
    // console.log(this.refs.title.value);
    var movie = {
      title: this.refs.title.value.trim()
    }

    AppActions.searchMovies(movie);
  }
});

module.exports = SearchForm;
