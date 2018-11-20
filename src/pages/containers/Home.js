import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    username: ''
  }


  handleChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  handleSetUsername = (e) => {
    console.log(this.state)
    this.props.dispatch({ type: 'SET_USERNAME', payload: this.state.username})
  }

  render(){
    return(
      <div>
        HOME
        <input type='text' onChange={this.handleChangeUsername} />
        <button onClick={this.handleSetUsername}>Set username</button>
      </div>
    )
  }
}

export default connect()(Home);