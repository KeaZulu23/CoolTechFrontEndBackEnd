import React from "react";
import {Link } from "react-router-dom";

function News_Management() {
  return (

<div class="w3-content w3-padding" style={{maxwidth:"1564px"}}>

  <div class="w3-container w3-padding-32" id="about"/>
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">News in Tech!</h3>
    <p>This blog is about providing quality service alongside 
    It’s all about Tech, Gaming, Tutorials, Upcoming Sci-Fi Movies and Much More which you guys 
    expect in daily life. Make Sure you subscribe to our Newsletter so that 
    you can get our new updates notification on time.
    </p>
  <div/>

  <h2>Blog posts:</h2>

  <div class="w3-row-padding w3-grayscale"/>
    <div class="w3-col l3 m6 w3-margin-bottom"/>
      <img src="https://www.phocuswire.com/uploadedImages/Articles/News/2020/July/human%20tech%20hybrid.jpeg?width=800&height=400&scale=both&mode=crop" alt="John" style={{width:"100%"}}/>
      <h3>Tech</h3>
      <p>This page is about Techy stuff, for example, You can find here Smartphone Details, Computer-related tech stuff, and every news regarding Technology of the modern world.</p>
      <p><button class="w3-button w3-light-grey w3-block"><a href="https://www.technewsworld.com/perl/section/tech-blog/">Read</a></button></p>
    <div/>
    <div class="w3-col l3 m6 w3-margin-bottom" />
      <img src="https://img.theweek.in/content/dam/week/news/sci-tech/images/2020/10/31/gaming.jpg" alt="Jane" style={{width:"100%"}}/>
      <h3>Gaming</h3>
      <p>Basically this covers all gaming stuff like download links, Gameplay kinda contents will be uploaded here.</p>
      <p><button class="w3-button w3-light-grey w3-block"><a href="https://www.theguardian.com/technology/gamesblog">Read</a></button></p>
    <div/>
    <div class="w3-col l3 m6 w3-margin-bottom" />
      <img src="https://dytvr9ot2sszz.cloudfront.net/wp-content/uploads/2019/05/1200x628_logstash-tutorial-min.jpg" alt="Mike" style={{width:"100%"}}/>
      <h3>Tutorials</h3>
      <p>Tech and tutorials are kinda sound similar because they both works as main theme. So here you will be able to see stuffs that will help you gaining knowledge in gaming problems, tech puzzles.</p>
      <p><button class="w3-button w3-light-grey w3-block"><a href="https://www.wpbeginner.com/">Read</a></button></p>
    <div/>
    <div class="w3-col l3 m6 w3-margin-bottom" />
      <img src="https://i.guim.co.uk/img/media/3b177ca1a574b80f297363403949fc88e396548a/942_0_4193_2518/master/4193.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=5e94f1c983a478df58297c7b297ec0c8" alt="Dan" style={{width:"100%"}} />
      <h3>Sci-Fi</h3>
      <p>Read more about Sci-fi movies, upcoming.</p>
      <p><button class="w3-button w3-light-grey w3-block"><a href="https://www.scifibloggers.com/">Read</a></button></p>
    <div/>
  <div/>

    <div class="w3-container"/>
    <img src="https://assets.newatlas.com/dims4/default/18ef687/2147483647/strip/true/crop/1422x948+249+0/resize/2400x1600!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbest-film-tv-2018-upcoming-3.jpg" class="w3-image" style={{width:"100%"}} />
    <div/>  

<div/></div>
  );
}

export default News_Management;