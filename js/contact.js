import React from 'react';
import ReactDOM from 'react-dom';
export default class Profile extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div id='contact' className='contact'>
        <div className='header'>
          <h1>Contact Me</h1>
        </div>
        <div className='contactlist'>
          <div className='contacticon'>
            <a href="https://www.facebook.com/EakkawinItthirotjanakul"><img className='sizeicon' src='../Picfile/facebook.png'/></a>
            <h2>Facebook</h2>
          </div>
          <div className='contacticon'>
            <a href='https://www.github.com/eakkawin'><img className='sizeicon' src='../Picfile/github.png'/></a>
            <h2>Github</h2>
          </div>
        </div>
        <div className='contactlist'>
          <div className='contacticon'>
            <a href="mailto:eakkkawinitthi@gmail.com?Subject=ContactMe" target="_top"><img className='sizeicon' src='../Picfile/mail.png'/></a>
            <h2>eakkawinitthi@gmail.com</h2>
          </div>
          <div className='contacticon'>
            <img className='sizeicon' src='../Picfile/phone.png'/>
            <h2>083-436-9821</h2>
          </div>
        </div>
      </div>
    )
  }
}
