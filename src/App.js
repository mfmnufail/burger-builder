import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout >
          <BurgerBuilder />
          {/* <p>test</p> */}
        </Layout>
      </div>
    );
  }
}

export default App;
