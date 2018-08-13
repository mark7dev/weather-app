import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='app__header'>
          <button className='app__add'>
            <i className='fa fa-plus-circle' /> New city
          </button>
        </header>
        <div className='grid'>
          <aside className='app__aside'>
            <h1 className='app__title'>All countries</h1>
            <a href='#' className='app__country'>France</a>
            <input type='text' placeholder='Location' className='app__input' />
          </aside>
          <section className='app__view'>Text</section>
        </div>
      </div>
    );
  }
}

 export default App;
