import React, { Component } from 'react';

import './App.css';

import request from 'superagent';

class App extends Component {
  constructor() {
    super();

     this.state = {
       cities: [],
      show: false
    };
  }

   showInput = () => {
    this.setState({
      show: true
    });
  }

  addCity = (e) => {
    //I.If ENTER was pressed
    const ENTER_KEY = 13;

    if (e.keyCode === ENTER_KEY) {
      //II. Save new city in 'cities'.
      this.setState({
        cities: [
          //III. Get past data
          ...this.state.cities,
          {
            id: this.state.cities.length + 1,
            name: e.target.value
          }
        ],
        show: false
      });

      //IV. Clean the input.
      e.target.value = '';
    }
  }

fetchWeather = (e) => {
  e.preventDefault();

  const COUNTRY = e.target.textContent;
  const ENDPOINT = `https://maps.googleapis.com/maps/api/geocode/json?address=${ COUNTRY }`;

  request
   .get(ENDPOINT)
   .then(response => console.log(response.body.results[0].geometry.location));
}

  render() {
    return (
      <div className='app'>
        <header className='app__header'>
          <button onClick={ this.showInput } className='app__add'>
            <i className='fa fa-plus-circle' /> New city
          </button>
        </header>
        <div className='grid'>
          <aside className='app__aside'>
            <h1 className='app__title'>All countries</h1>
            { this.state.cities.map(city => {
              return <a
                        onClick={ this.fetchWeather }
                        key={ city.id }
                        href='#'
                        className='app__country'
                      >
                        { city.name }
                      </a>
            }) }
            { this.state.show && <input onKeyUp={ this.addCity } autoFocus type='text' placeholder='Location' className='app__input' /> }
          </aside>
          <section className='app__view'>
            <div>
              Summary
            </div>
          </section>
        </div>
      </div>
    );
  }
}

 export default App;
