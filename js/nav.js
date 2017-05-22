import React from 'react';
import ReactDOM from 'react-dom';
import Scroll, {Link,Element,Events,scroll,scrollSpy} from 'react-scroll'
export default class Nav extends React.Component{
  constructor(){
    super()
  }
  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }

  render(){
    return(
      <div>
        <div className='navbar'>
          <ul className="nav">
            <Link activeClass="active" to='profile' spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}><a><li className="nav" >Profile</li></a></Link>
            <Link to='skill' spy={true} smooth={true} offset={-50} duration={500}><a><li className="nav">Skill</li></a></Link>
            <Link to='contact' spy={true} smooth={true} offset={-50} duration={500}><a><li className="nav">Contact</li></a></Link>
          </ul>
        </div>
      </div>
    )
  }
}
