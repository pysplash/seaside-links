import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, List, Item } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2 className="App-title">pysplash links</h2>
        <h3>Basics</h3>
        <div class="ui doubling three column grid">
          <Grid.Column>
            <h4>Tools</h4>
            <List >
              <Item as='a' href="https://jupyterhub.readthedocs.io" >GitHub</Item>
              <Item as='a' href="https://mybinder.org">Travis</Item>
              <Item as='a'href="https://mybinder.org">ReadTheDocs</Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <h4>Jupyter Orgs</h4>
            <List >
              <Item as='a' href="https://jupyterhub.readthedocs.io" >JupyterHub</Item>
              <Item as='a' href="https://mybinder.org">Jupyter</Item>
              <Item as='a'href="https://mybinder.org">JupyterLab</Item>
              <Item as='a' href="https://mybinder.org">IPython</Item>
              <Item as='a'href="https://mybinder.org">Jupyter-Widgets</Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <h4>More Orgs</h4>
            <List >
              <Item as='a' href="https://jupyterhub.readthedocs.io">nteract</Item>
              <Item as='a' href="https://mybinder.org">Python</Item>
              <Item as='a'href="https://mybinder.org">CircuitPython/Adafruit</Item>
              <Item as='a' href="https://mybinder.org">PyLadies</Item>
              <Item as='a'href="https://mybinder.org">ReadTheDocs</Item>
            </List>
          </Grid.Column>
        </div>

        <h3>Projects</h3>
        <div class="ui doubling three column grid">
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
        </div>
        
        <h3>Tools</h3>
        <div class="ui doubling three column grid">
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
        </div>
      </div>
    );
  }
}

export default App;
