import React, { Component } from 'react';
import star from '../../star.png'
import sup from '../../sup.png'

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        {/*generated code*/}
        <header id="home">
          {/* <nav id="nav-wrap"> */}
          {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
          {/* <ul id="nav" className="nav"> */}
          {/* <li className="current"><a className="smoothscroll" href="#home">Home</a></li> */}
          {/* <li><a className="smoothscroll" href="#about">About</a></li> */}
          {/* <li><a className="smoothscroll" href="#resume">Resume</a></li> */}
          {/* <li><a className="smoothscroll" href="#portfolio">Projects</a></li> */}
          {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
          {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
          {/* </ul> */}
          {/* </nav> */}

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
              <h3>{resumeData.role}</h3>
              <h3>{resumeData.roleDescription}</h3>
              <br />
              <table style={{ width: "100%" }}>
                <tr>
                  <td>
                    <a href="https://apps.apple.com/us/app/star-fighter-alien-galaxies/id1488097401" target="_blank"><img src={star} alt="Star Fighter: Alien Galaxies by Greg Gomez" /></a>
                  </td>
                  <td>
                    <a href="https://apps.apple.com/us/app/sup-city/id1258947595" target="_blank"><img src={sup} alt="Sup? City by Greg Gomez" /></a>
                  </td>
                </tr>
              </table>
              <br />
              <a href="mailto:greg@gomez.ws" style={{ color: "#fff" }}>greg@gomez.ws</a>
              <hr color="#fff" />
              <ul className="social">
                {
                  resumeData.socialLinks && resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank"><i className={item.className}></i></a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          {/* Code to show navigation button arrow */}
          {/* <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p> */}

        </header>
      </React.Fragment>
    );
  }
}
