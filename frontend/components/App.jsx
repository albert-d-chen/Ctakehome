import React from "react";

import PhysiciansContainer from '../components/physician_index_container';


class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Notable Health</h1>
        <PhysiciansContainer />
      </div>
    );
  }
};

export default App;