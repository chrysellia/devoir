import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Fade';

class SliderSection extends Component {
    render() {
        return(
            <div className="flex flex-no-wrap overflow-hidden items-center relative" style={{height: '670px'}}>
                  <Fade  left>
                    <img className="w-1/3 flex-none p-2 h-1/2" src="image/photo6.jpg"/>
                    <img className="w-1/3 flex-none p-2 h-1/2" src="image/photo5.jpg"/>
                    <img className="w-1/3 flex-none p-2 h-1/2" src="image/fashion.jpeg"/>
                  </Fade >
                  <Slide center>
                    <h1 className="cover_title text-center">La magie de la mode au rendez-vous!</h1>
                  </Slide>
            </div>
        )
    }
}

export default SliderSection;