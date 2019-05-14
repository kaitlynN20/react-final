import React, { Component } from 'react';


class Hero extends Component{

    render() {
        const headerBackground = {
            backgroundImage: "url(img/background-simple.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "left "
        };
        return(
            <div style={headerBackground} className="heroContainer">
               <img className="title" src="img/stallion-logo.png"/>
               <p class="pageTitle">shop</p>
               <div className="meganContainer">
                    <img className="megan-back-left" src="img/megan-yellow.png"/>
                    <img className="megan-center" src="img/megan-yellow.png"/>
                    <img className="megan-back  " src="img/megan-yellow.png"/>
               </div>
            </div>
        );
    }
}

export default Hero;