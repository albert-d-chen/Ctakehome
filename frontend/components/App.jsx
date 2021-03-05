import React from "react";

import MainContainer from '../components/main_container'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className='header'>Cellares</h1>
        <MainContainer />
      </div>
    );
  }
};

export default App;