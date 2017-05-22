import React from 'react';
import ReactDOM from 'react-dom';
export default class Profile extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div id='skill' className='skill'>
        <div className='skilltext'><h1>Skill</h1></div>
        <div className='skilllogo'>
          <div className='logorow'>
            <img className='size' src='../Picfile/html.png'/>
            <img className='size2' src='../Picfile/css.png'/>
            <img className='size' src='../Picfile/js.svg'/>
            <img className='size' src='../Picfile/java.png'/>
            <img className='size' src='../Picfile/react.png'/>
            <img className='size' src='../Picfile/vue.png'/>
            <img className='size' src='../Picfile/sass.svg'/>
            <img className='size' src='../Picfile/npm.png'/>
            <img className='size' src='../Picfile/git.png'/>
          </div>
        </div>
      </div>
    )
  }
}
