import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login.js';
// react-bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Container from 'react-bootstrap/Container'

// component to get data from user / guest
import GetTipsData from './Components/GetTrip';

class App extends Component {
  handleSignUp = () => {
    alert('signed up');
  }
  render() {
    return (
      <div className="App">
      <Navbar className="bg-olive justify-content-between">

        {/* TODO: update the logo with Navbar.Brand */}
        <h3 className="text-color-white">Pooled House</h3>

        <Form inline>
          <FormControl type="text" placeholder="ex: upper manhattan" className="mr-sm" />
          <Button type="submit" variant="outline-light"><span>{"\uD83D\uDD0D"}</span></Button>
        </Form>

        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1} variant="warning">Map View</ToggleButton>
            <ToggleButton value={2} variant="warning">List View</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
        
        <ButtonToolbar>
          <Button href="#" variant="link" className="text-color-white" onClick={this.handleSignUp}>Sign Up</Button>
          <Button href="#" variant="link" className="text-color-white">Log In</Button>
        </ButtonToolbar>
          
      </Navbar>
      </div>
    );
  }
}

export default App;
