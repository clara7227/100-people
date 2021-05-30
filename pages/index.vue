<template>
  <div>
    <div class="container">
      <h1 class="title">100 people</h1>
      <div class="text-container">
        <span class="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          inventore dolores. Placeat voluptatum obcaecati repellat eaque iure
          omnis sed beatae repudiandae incidunt qui quo, quos id repellendus
          suscipit officiis illo.
        </span>
      </div>
    </div>
    <div class="container2">
      <span id="animate1">hola</span>
    </div>
    <div class="container3">
      <div class="container3.1">
        <span id="animate2">que tal</span>
      </div>
      <span class="circle"> </span>
    </div>
    EJEMPLO
    <section class="spacer">Content</section>
    <div id="pinMaster">
      <div id="pinContainer">
        <section class="panel dark">Pin Panel A</section>
        <section class="panel turqoise">Pin Panel B</section>
        <section class="panel bordeaux">Pin Panel C</section>
      </div>
      <section class="spacer">Content</section>
      <footer>Footer</footer>
    </div>
<!-- 
    DRAWING THINGS -->
    <div style="height: 400px"></div>
    <div class="spacer1 s2"></div>
    <div id="trigger1" class="spacer s0"></div>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="350"
      height="200"
    >
      <path
        id="word"
        style="
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 1009.23px;
          stroke-dashoffset: 1009.23px;
        "
        fill="none"
        stroke="#000000"
        stroke-width="5"
        d="M22.328,70.018c9.867-7.4,10.724,20.434,13.014,28.694c-0.08-9.105-1.308-31.463,11.936-31.886
			c11.313-0.361,17.046,19.368,16.367,28.098c-1.432-10.289,6.234-30.682,18.163-25.671c11.505,4.833,8.682,26.772,20.071,31.964
			c13.06,5.953,14.854-8.305,19.734-17.017c7.188-12.836,4.933-15.417,29.6-14.8c-8.954-3.842-37.42,1.728-28.539,20.1
			c5.823,12.045,34.911,12.583,30.018-8.873c-5.385,17.174,24.01,23.104,24.01,9.123c0-9.867,3.816-15.937,16.034-18.5
			c8.359-1.754,18.982,4.754,25.9,9.25c-10.361-4.461-51.941-13.776-37.749,12.357c9.435,17.372,50.559,2.289,33.477-6.063
			c-2.871,19.008,32.415,31.684,30.695,54.439c-2.602,34.423-66.934,24.873-79.302,2.134c-13.11-24.101,38.981-36.781,54.798-40.941
			c8.308-2.185,42.133-12.162,25.88-25.587c-2.779,17.058,19.275,28.688,29.963,12.911c6.862-10.131,6.783-25.284,30.833-19.117
			c-9.404-0.429-32.624-0.188-32.864,18.472c-0.231,17.912,21.001,21.405,40.882,11.951"
      ></path>
      <path
        id="dot"
        style="
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 44.2974px;
          stroke-dashoffset: 44.2974px;
        "
        fill="none"
        stroke="#000000"
        stroke-width="5"
        d="M247.003,38.567c-7.423,1.437-11.092,9.883-1.737,11.142c14.692,1.978,13.864-13.66,1.12-8.675"
      ></path>
    </svg>
    <div class="spacer1 s3"></div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";
import gsap from "scrollmagic";
import $ from 'jquery';
export default {
  mounted() {
/*DRAWING SCG**/
    function pathPrepare($el) {
      var lineLength = $el[0].getTotalLength();
      $el.css("stroke-dasharray", lineLength);
      $el.css("stroke-dashoffset", lineLength);
    }

    var $word = $("path#word");
    var $dot = $("path#dot");

    // prepare SVG
    pathPrepare($word);
    pathPrepare($dot);
    // init controller
    const controller = new this.$scrollmagic.Controller();

    // build tween
    var tween = new TimelineMax()
      .add(
        TweenMax.to($word, 0.9, { strokeDashoffset: 0 })
      ) // draw word for 0.9
      .add(
        TweenMax.to($dot, 0.1, { strokeDashoffset: 0 })
      ) // draw dot for 0.1
      .add(
        TweenMax.to("path", 1, { stroke: "#33629c"}),
        0
      ); // change color during the whole thing

    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: 250,
      tweenChanges: true,
      triggerHook: "onLeave",
    })
      .setTween(tween)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);



 /**  MOVING THINGS!! */
    var scene2 = new ScrollMagic.Scene({
      triggerElement: ".container3",
      duration: 1000, // controlled by scroll pixels of vertical scroll
      //duration: window.outerWidth
    })
      .setTween(".circle", 1, {
        right: window.innerWidth,
        backgroundColor: "red",
      }) // trigger a TweenMax.to tween

      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".container",
      duration: 10000,
      triggerHook: "onLeave",
    })
      // trigger a TweenMax.to tween

      .setPin(".text")
      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({ triggerElement: ".container2" })
      // trigger a TweenMax.to tween
      .setTween("#animate1", 0.5, {
        backgroundColor: "white",
        scale: 2.5,
        rotate: 360,
      })
      .addTo(controller);

    var scene2 = new this.$scrollmagic.Scene({
      triggerElement: ".container3",
      duration: 500,
      triggerHook: "onLeave",
    })
      // trigger a TweenMax.to tween
      .setPin("#animate2")
      .setPin(".container3")
      // add indicators (requires plugin)
      .addIndicators({ name: "1 (duration: 300)" })
      .setTween("#animate2", 0.5, { backgroundColor: "white" })
      .setTween(".container3", 1, { backgroundColor: "red" })
      .setTween(".circle", 0.5, { backgroundColor: "green", scale: 60 }) // CIRCULO QUE SE AGRANDA
      .addTo(controller);

    // SEGUNDA PARTE DE SCROLLMAGIC

    var tl = new TimelineMax();
    tl.fromTo(
      "section.panel.turqoise",
      1,
      { yPercent: 100 },
      { yPercent: 0 },
      "+=1"
    );
    tl.fromTo(
      "section.panel.bordeaux",
      1,
      { yPercent: 100 },
      { yPercent: 0 },
      "+=1"
    );
    new ScrollMagic.Scene({
      triggerElement: "#pinMaster",
      triggerHook: "onLeave",
      duration: "100%",
    })
      .setPin("#pinMaster")
      .setTween(tl)
      .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 40,
      })
      .addTo(controller);
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
//DRAW SVG
.spacer1 {
  height: 100vh;
  background-color: #42a6e0;
  position: relative;
  z-index: 2;
}

//TEXT DERECHA
.text-container {
  margin-left: 60vh;
  text-align: left;
  background-color: white;
  width: 600px;
  z-index: 3;
}

.container2 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: salmon;
}

.container3 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: aquamarine;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
//CIRCULO

.circle {
  height: 20px;
  width: 20px;
  background-color: #28526b;
  border-radius: 200%;
  position: relative;
  z-index: 1;
}
//EJEMPLO GREENSOCK
body,
html {
  height: 100%;
  font-weight: normal;
  font-family: "Roboto", sans-serif;
  background-color: #f0f0ee;
  margin: 0px;
  padding: 0;
}

/* #placeholder1 {
  height: 100vh;
  background-color: grey;
} */

#pinContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

section,
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
}
.panel {
  height: 100%;
  width: 100%;
  position: absolute;
}

#pinMaster {
  position: relative;
}

footer {
  height: 100px;
  background-color: gray;
}

.spacer {
  height: 100vh;
  background-color: #42a6e0;
  position: relative;
  z-index: 2;
}

.dark {
  background-color: #262626;
}
.turqoise {
  background-color: #38ced7;
}
.brown {
  background-color: #a66f28;
}
.bordeaux {
  background-color: #953543;
}
</style>
