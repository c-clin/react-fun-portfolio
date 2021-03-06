import React, { Component } from 'react';
import $ from 'jquery';

// https://api.unsplash.com/photos/random?&query=cats&client_id=8a3b86c522f37241f107be57b5b3713407e5e3c59942bde90f13a62846da1106

const clientID = "8a3b86c522f37241f107be57b5b3713407e5e3c59942bde90f13a62846da1106"
const query = 'cats'

var finalURL = `https://api.unsplash.com/photos/random?&query=${query}&client_id=${clientID}`


class About extends Component {

  render() {
    return (
      <div className="about">
        <div className="about-me">
          <h3>About Me</h3>

          <p>
            Hi there! My name is Catherine and I'm a self-taught web developer in Los Angeles, California. I graduated from UCLA with a degree in Economics only to realize that my true passion lies in web development. I love exploring various frameworks and building amazing tools with clean, easy-to-read code. I'm currently seeking a Front-End Developer role in the greater Los Angeles area. I'd love to join a team of passionate and dedicated individuals who value hard work and enjoy the grind. Feel free to check out more of my work on Github and connect with me on Linkedin!          </p>

        </div>

      </div>
    );
  }
}

export default About;