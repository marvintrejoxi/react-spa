import React from 'react';
import { connect } from 'react-redux';

function Header(props){
  return(
    <div>{props.username}</div>
  )
}

function mapStateToProps(state) {
  return {
    username: state.data.username
  }
}

export default connect(mapStateToProps)(Header);