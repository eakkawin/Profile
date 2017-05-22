import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './nav.js'
import Profile from './profile.js'
import Skill from './skill.js'
import Contact from './contact.js'
import Footer from './footer.js'
import '../sass/styles.sass'

class App extends React.Component{
    constructor() {
          super();
    }
    render() {
        return (
            <div className='container'>
                <Nav/>
                <Profile/>
                <Skill/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('main'))
