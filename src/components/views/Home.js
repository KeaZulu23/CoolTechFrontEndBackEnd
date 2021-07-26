import React from "react";
import {Link } from "react-router-dom";

function Home() {
  return (

<div class="w3-content" style={{maxwidth:"1400px"}}> 


  <header class="w3-container w3-center w3-padding-32" /> 
    <h1><b>Cool Tech</b></h1>
    <p>Welcome to the website of <span class="w3-tag">Cool Tech</span></p> <br/>
    <p>Cool Tech specialises in bringing digestible information about all things technology to the laymen of the world. 
    Cool Tech offers the best possible tech experience through expert advice and a wide range of exclusive services that ensure you get the 
    most out of your tech products for your personal, business and education purchases and upgrades.</p>
  <header />


  <div class="w3-row" /> 


  <div class="w3-col l8 s12" />
  <h2>Organisation Units</h2> <br/>
    <div class="w3-card-4 w3-margin w3-white" />
      <img src="https://wallpapercave.com/wp/wp3647549.jpg" alt="Nature" style={{width:"100%"}} />
      <div class="w3-container" />

        <h3><b>News Management</b></h3>
        <h5><span class="w3-opacity">July 23, 2021</span></h5>
      <div />

      <div class="w3-container" />
        <p> Cool Tech News is a community driven portal and newsletter aggregating all of the latest and most important news in the IT industry, including new software and hardware reviews and discussions.</p>
        <div class="w3-row" />
          <div class="w3-col m8 s12" />
          <p><Link to="/news_management"><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></Link> </p>
          <div />
          <div class="w3-col m4 w3-hide-small" />
            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span></p>
          <div />
        <div/>
      <div />
    <div />
    <hr />

    
    <div class="w3-card-4 w3-margin w3-white" />
    <img src="https://wallpapercave.com/wp/wp5177397.jpg" alt="Norway" style={{width:"100%"}} />
      <div class="w3-container" />
        <h3><b>Software Reviews</b></h3>
        <h5><span class="w3-opacity">July 23, 2021</span></h5>
      <div />

      <div class="w3-container" />
        <p> Cool Tech offers many articles of tech reviews, software reviews, and hardware reviews. Check them out, see for yourself, and massively level up your development skills in the process.</p>
        <div class="w3-row" />
          <div class="w3-col m8 s12" />
          <p><Link to="/software"><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></Link> </p>
          <div />
          <div class="w3-col m4 w3-hide-small" />
            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">2</span></span></p>
          <div />
        <div />
      <div />
    <div />
  <div />

  <div class="w3-card-4 w3-margin w3-white" />
    <img src="https://www.hdwallpapersnature.com/wp-content/uploads/2019/07/Best-HD-Wallpapers-For-Macbook-Air-1050x525.jpg" alt="Norway" style={{width:"100%"}} />
      <div class="w3-container" />
        <h3><b>Hardware Reviews</b></h3>
        <h5><span class="w3-opacity">July 23, 2021</span></h5>
      <div />

      <div class="w3-container" />
        <p>Cool Tech specialises in bringing digestible information about all things technology to the laymen of the world. Learn more about us.</p>
        <div class="w3-row" />
          <div class="w3-col m8 s12" />
          <p><Link to="hardware"><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></Link> </p>
          <div />
          <div class="w3-col m4 w3-hide-small" />
            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">2</span></span></p>
          <div />
        <div />
      <div />
    <div />
  <div />

  <div class="w3-card-4 w3-margin w3-white" />
    <img src="https://wallpapercave.com/wp/wp6006339.jpg" alt="Norway" style={{width:"100%"}} />
      <div class="w3-container" />
        <h3><b>Opinion Publishing</b></h3>
        <h5><span class="w3-opacity">July 23, 2021</span></h5>
      <div />

      <div class="w3-container" />
        <p>We are commited to giving non-biased reviews, however we're also entitled to our own opinion. Read more.</p>
        <div class="w3-row" />
          <div class="w3-col m8 s12" />
          <p><Link to="/opinion"><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></Link> </p>
          <div />
          <div class="w3-col m4 w3-hide-small" />
            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">2</span></span></p>
          <div />
        <div />
      <div />
    <div />
  <div />


  <div class="w3-card-4 w3-margin w3-white" />
    <img src="https://wallpapercave.com/wp/wp1828902.png" alt="Norway" style={{width:"100%"}} />
      <div class="w3-container" />
        <h3><b>Privacy</b></h3>
        <h5><span class="w3-opacity">July 23, 2021</span></h5>
      <div />

      <div class="w3-container" />
        <p>Privacy is a fundamental human right</p>
        <div class="w3-row" />
          <div class="w3-col m8 s12" />
          <p><Link to="/privacy"><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></Link> </p>
          <div />
          <div class="w3-col m4 w3-hide-small" />
            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-badge">2</span></span></p>
          <div />
        <div />
      <div />
    <div />
  <div /> <hr /> 
      
    <div />
  <div />
<div />
<div />
<div/>
<div/>

<footer class="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
  <p>Powered by Cool Tech.</p>
</footer>

</div>

  );
}

export default Home;