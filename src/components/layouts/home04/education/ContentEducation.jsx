import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TopEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contenttop: [
        {
          id: 1,
          classname: 'experience-box experience-box-line t3',
          datawow: '0.3s',
          year: 'Universite of Udacity',
          title: 'User Experience Design',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/react.svg',
        },
        {
          id: 2,
          classname: 'experience-box experience-box-line t3',
          datawow: '0.5s',
          year: 'Udemy',
          title: 'User Centered Design',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/redux.svg',
        },
        {
          id: 3,
          classname: 'experience-box t3',
          datawow: '0.7s',
          year: 'Skil Share',
          title: 'Interaction Design',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/javascript.svg',
        },
        {
          id: 4,
          classname: 'experience-box experience-box-line t3',
          datawow: '0.3s',
          year: 'Universite of Udacity',
          title: 'User Experience Design',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/node-dot-js.svg',
        },
        {
          id: 5,
          classname: 'experience-box experience-box-line t3',
          datawow: '0.5s',
          year: 'Udemy',
          title: 'User Centered Design',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/mongodb.svg',
        },
        {
          id: 6,
          classname: 'experience-box t3',
          datawow: '0.7s',
          year: 'Skil Share',
          title: 'Interaction Design',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/git.svg',
        },

        {
          id: 7,
          classname: 'experience-box experience-box-line t3',
          datawow: '0.5s',
          year: 'Udemy',
          title: 'User Centered Design',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/html5.svg',
        },
        {
          id: 8,
          classname: 'experience-box t3',
          datawow: '0.7s',
          year: 'Skil Share',
          title: 'Interaction Design',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/css3.svg',
        },
      ],
      contentbot: [
        {
          id: 1,
          classname: 'experience-box experience-box-line t3',
          datawow: '0.8s',
          year: '2013 - 2015',
          title: 'Designer at',
          office: 'Microsoft',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/c.svg',
        },
        {
          id: 2,
          classname: 'experience-box experience-box-line t3',
          datawow: '1s',
          year: '2013 - 2017',
          title: 'User Researcher at',
          office: 'Apple',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/cplusplus.svg',
        },
        {
          id: 3,
          classname: 'experience-box t3',
          datawow: '1.2s',
          year: '2017 - 2020',
          title: 'Lead Designer at',
          office: 'Dripple',
          text:
            'User experience (UX) design is the process design teams use to create products.',
          icon: 'images/skills/python.svg',
        },
      ],
    };
  }

  render() {
    return (
      <div className='animate-element delay5 fadeInUp'>
        <div className='padding-bottom'>
          <div className='row'>
            {this.state.contenttop.map((data) => (
              <div
                className='col-lg-3 col-12 last-col animate-element wow delay5 fadeIn'
                data-wow-delay={data.datawow}
                key={data.id}
              >
                <div className={data.classname}>
                  <div className='box-inner'>
                    {/* <h3 className="f-info bg-s2 color-d6">{data.year}</h3> */}
                    <div className='exp-wrap d-flex justify-content-center '>
                      {/* <div className="s-info color-d11 mg-b11">{data.title}</div> */}
                      {/* <p className="color-d13">
                                            {data.text}
                                            </p> */}
                      <img
                        className='skill-icons'
                        src={data.icon}
                        alt={data.icon}
                        width='80px'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='row'>
          {this.state.contentbot.map((data) => (
            <div
              className='col-lg-4 col-12 last-col animate-element wow delay5 fadeIn'
              data-wow-delay={data.datawow}
              key={data.id}
            >
              <div className={data.classname}>
                <div className='box-inner mx-auto'>
                  {/* <h3 className='f-info bg-s2 color-d6'>{data.year}</h3> */}
                  <div className='exp-wrap'>
                    <div className='s-info color-d11 mg-b11 d-flex justify-content-center'>
                      {/* {data.title} <Link to='#'>{data.office}</Link> */}
                      <img
                        className='skill-icons'
                        src={data.icon}
                        alt={data.icon}
                        width='80px'
                      />
                    </div>
                    {/* <p className='color-d13'>{data.text}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TopEducation;
