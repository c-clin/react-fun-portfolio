import React, { Component } from 'react';
import $ from 'jquery';

// https://api.unsplash.com/photos/random?&query=cats&client_id=8a3b86c522f37241f107be57b5b3713407e5e3c59942bde90f13a62846da1106

const clientID = "8a3b86c522f37241f107be57b5b3713407e5e3c59942bde90f13a62846da1106"
const query = 'cats'

var finalURL = `https://api.unsplash.com/photos/random?&query=${query}&client_id=${clientID}`


class About extends Component {

    constructor() {
    super();
    this.state = {
      resultCat: [],
      resultUser: []
    };
    this.getCat = this.getCat.bind(this);
  }

  getCat() {
    console.log('click');
    $.getJSON(finalURL).done(function(data) {
      var resultPhoto = data.urls.thumb;
      var user = data.user.name;
      this.setState({resultCat: resultPhoto, resultUser: 'Photo by: ' + user}, function() {
        console.log(this.state);
      });
    }.bind(this))
    .fail(function() {
      console.log('There was an error loading the Unsplash API');
    })
  }

  render() {
    return (
      <div className="about">
          <h3>About Me</h3>

          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel dolor id leo hendrerit sodales vitae ut felis. Nam viverra tellus posuere, elementum sem nec, scelerisque metus. Morbi at mauris eu lectus lacinia placerat sed dapibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla scelerisque orci, eget ornare nibh lacinia vitae. Sed pulvinar est quis orci vulputate imperdiet. Phasellus condimentum nisl nec tempus suscipit. Curabitur tristique nunc at enim iaculis suscipit. Duis eu dui a enim egestas tristique. Aliquam id sem interdum, faucibus purus eu, rutrum urna. Vivamus in mauris lacus. Nunc at mi non lacus fermentum feugiat quis vel elit. Duis dapibus eros lectus, ac suscipit quam sodales et.
          </p>

          <button onClick={this.getCat.bind(this)}>Get cat!</button>

          <figure className="randomCatPhoto">
            <img src={this.state.resultCat} />
            <figcaption>{this.state.resultUser}</figcaption>
          </figure>

      </div>
    );
  }
}

export default About;