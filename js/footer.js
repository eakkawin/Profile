import React from 'react';
import ReactDOM from 'react-dom';
export default class Footer extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div className='footer'>
        <div className='text'>© 2017 Profile Web</div>
        <div className='text'>Build with React, Sass, Webpack</div>
      </div>
    )
  }
}
