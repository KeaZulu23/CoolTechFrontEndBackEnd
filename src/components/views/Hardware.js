import React from "react";
import {Link } from "react-router-dom";

function Hardware() {
  return (

        <div class="w3-content w3-container w3-padding-64" id="about" style={{textalign:"center;"}}>
        <h3 class="w3-center">AMD Ryzen 7 5800X vs. Intel Core i7-10700K vs. Core i7-11700K</h3>
        <p class="w3-center"><em>By Kea Zulu.</em></p><br/>
        <img src="https://static.techspot.com/articles-info/2261/images/2021-05-30-image-2-j_1100.webp" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333"/>
        
        <p>The idea of the original comparison review was to see how latest and greatest AMD and Intel 8-core/16-thread processors 
        do against each other and where each company stands in terms of gaming performance. That’s not to say we’re recommending you 
        race out and buy either of those CPUs right now. </p><br/><br/>
        
        <div class="w3-row"/>
            <div class="w3-col m6 w3-center w3-padding-large"/>
            <p><b><i class="fa fa-user w3-margin-right"></i></b></p><br/>
            <img src="https://static.techspot.com/articles-info/2261/images/2021-05-30-image-4-j_1100.webp" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333"/>
            <div/>

            <div class="w3-col m6 w3-hide-small w3-padding-large"/>
            <p/>For the AM4 platform we've the tested using the MSI X570 Unify and for the LGA1200 platform the Gigabyte Z590 Aorus Master running the latest BIOS on both counts, and of course, the latest display drivers and Windows 10 version available.<br/> <br/> In total we’ve tested 32 games at 1080p, 1440p and 4K, and we’ll look at the data for about a dozen titles and then get into the usual data breakdown. So let’s do it
            <p/><br/>
            <div/>
        <div/>

        <div class="w3-row"/>
            <div class="w3-col m6 w3-center w3-padding-large"/>
            <p><b><i class="fa fa-user w3-margin-right"></i>Benchmarks</b></p><br/>
            <img src="https://static.techspot.com/articles-info/2261/bench/HZD.png" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333"/>
            <div/>

            <div class="w3-col m6 w3-hide-small w3-padding-large">
            <p>Starting with the Horizon Zero Dawn, we see that at 1080p the 10700K is slightly slower than the 11700K. We’re talking about a 4% drop in performance, though that was enough to see the Ryzen 7 5800X pull ahead by a 7% margin.
            Certainly not a big difference and as expected they are reduced further when increasing the resolution. The 11700K is just 3% faster at 1440p, while the 5800X was 6% faster.
            </p>
            </div>
        <div/>

        <div class="w3-row"/>
            <div class="w3-col m6 w3-center w3-padding-large"/>
            <p><b><i class="fa fa-user w3-margin-right"></i></b></p><br/>
            <img src="https://static.techspot.com/articles-info/2261/bench/WDL.png" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="500" height="333"/>
            <div/>

            
            <div class="w3-col m6 w3-hide-small w3-padding-large">
            <p>Then for those playing at 4K it really doesn’t matter which of these CPUs you use, the experience is going to be identical. 
            Moving on to Watch Dogs: Legion we find a similar situation where the 10700K is slightly slower than the 11700K, and therefore also trails the 5800X. 
            The margins are small though, the 5800X was 7% faster at 1080p for example and 6% faster at 1440p, though interestingly maintained a 5% margin at 4K, 
            though we’re talking about just a 3% difference there.
            </p>
            </div>
        <div/>
        <div/></div>
  );
}

export default Hardware;