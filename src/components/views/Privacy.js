import React from "react";

import {Link } from "react-router-dom";

function About() {
  return (
        <div class="w3-content" style={{maxwidth:"2000px; margin-top:46px"}}>
        <div class="w3-container w3-content w3-center w3-padding-64" style={{maxwidth:"800px"}} id="band">
            <h2 class="w3-wide">Cool Tech</h2>
            <p class="w3-opacity"><i>About Us</i></p>
            <p class="w3-justify">Privacy is a fundamental human right. At Cool Tech, it’s also one of our core values. 
            Your devices are important to so many parts of your life. What you share from those experiences, and who you share it with, 
            should be up to you. We at Cool Tech want to protect your privacy and give you control over your information. It’s not always easy. But that’s the kind of innovation we believe in.</p>
        </div>
        </div>
  );
}

export default About;