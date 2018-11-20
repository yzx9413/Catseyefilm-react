import React, { Component } from 'react';

import Main from './main';
import Foot from './foot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          猫眼电影
        </header>
        <section>
          <Main />
        </section>
        <footer>
          <Foot />
        </footer>
      </div>
    );
  }
}

export default App;
