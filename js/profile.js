import React from 'react';
import ReactDOM from 'react-dom';
export default class Profile extends React.Component{
  constructor() {
        super();
        this.state = {
            name: 'Eakkawin',
            surname: 'Itthirotjanakul',
            age: '21',
            edu: 'IT,KMUTT',
            gpa: '2.78',
            aptitude: 'Coding, Frontend Developer'
        }
  }

  updateName(event) {
      this.setState({
          name: event.target.value
      })
  }
  render() {
      return (
          <div id='profile' className='profile'>
            <div className='colum'>
              <div className='colum1'>
                <img src='../Picfile/Me.png' className='circlepic'/>
              </div>
              <div className='colum2'>
                <div className='textbox'>
                  <h1 className='profilehead'>Profile</h1>
                  <div className='text'>
                    <h1>Earth (Jvom)</h1>
                    <h1>Name: {this.state.name}</h1>

                    {/*<input type="text" className='inputtext' onChange={this.updateName.bind(this)} value={this.state.name} />*/}
                    <h1>Surname: {this.state.surname}</h1>
                    <h1>Age: {this.state.age}</h1>
                    <h1>Education: {this.state.edu}</h1>
                    <h1>GPA: {this.state.gpa}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
  }
}
