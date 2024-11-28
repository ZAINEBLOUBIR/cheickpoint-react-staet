import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'zaineb loubiri',
        bio: 'A passionate developer and tech enthusiast.',
        imgSrc: '/WhatsApp Image 2024-10-23 à 20.13.09_11e566ff.jpg',
        profession: 'Software Developer',
      },
      shows: false,
      timeSinceMount: 0,
    };


    this.toggleShow = this.toggleShow.bind(this);

    this.interval = null
    this.btnHandler = () => {
      this.setState((state) => ({ show: !state.show }))
      this.setState((state) => ({ timeSinceMount: 0 }))
    }

  }

  componentDidMount() {

    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }


  componentWillUnmount() {

    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt="Person" />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}

        <p>Time since mounted: {timeSinceMount} seconds</p>
      </div>
    );
  }
}


export default App;

