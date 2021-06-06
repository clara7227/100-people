<template>
  <div>
    <div class="container-scene1 pinContainer1">
      <div class="img-container1">
        <WorldImg :source="'earth2.png'" />
      </div>
      <div class="text-container1">
        <span class="title title1"> What would the  </span>
        <span> </span>
        <span class="title title1"> world look like... </span>
      </div>
      <div class="title title2">...if it was a village of <br><strong>100 people?</strong></div>
      <div class="img-container1-2">
        <Village :source="'village1-wo-bg.png'" />
      </div>
      <div class="section-wipe">
        <span class="circle2"></span>
        <div class="container-text2">
          <div class="title-scene2">
            How would the population be distributed?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax, TimelineLite } from "gsap";
import ScrollMagic from "scrollmagic";
import gsap from "scrollmagic";
import $ from "jquery";
import Village from "./Village.vue";
export default {
  components: { Village },
  mounted() {
    const controller = new this.$scrollmagic.Controller();
    var tl = new TimelineMax();
    tl.to(
      ".title1",
      1,
      {
        duration: 0.25,
        opacity: 0,
      },
      0
    );
    tl.to(
      ".img-container1",
      1,
      {
        scale: 0.10,
        bottom: 150,
      },
      1
    );
          tl.to(
      ".container-scene1",
      1,
      {
      backgroundColor:"white"
      },
      "+=1"
    );
  
     tl.to(
      ".img-world",
      1,
      {
        opacity: 0,
        // scale: 0.15,
      },
     "-=1"
    );
    tl.to(
      ".title2",
      1,
      {
        duration: 0.25,
        color: "#ff3e35",
        opacity: 1
      },
      3
    );
    tl.to(".img-container1-2", 1, {
      marginTop: -300,
    });
    tl.to(
      ".section-wipe",
      1,
      {
        marginTop: -1200,
      },
      "+=1"
    );
    //TRANSICION
    tl.to(".circle2", 1, { opacity: 1 }, "-=0.3");
    tl.to(".circle2", 1, { marginTop: 800, duration: 10 }, "-=0.35");
    tl.to(".circle2", 1, { duration: 10, scale: 30 }, "-=0.75");
    tl.to(".circle2", 1, { duration: 10, scale: 70 });
    tl.to(".circle2", 1, { marginTop: 1900, duration: 6 }, "-=1");

    new ScrollMagic.Scene({
      triggerElement: ".pinContainer1",
      triggerHook: "onLeave",
      duration: 2000,
    })
      .setPin(".pinContainer1")
      .setTween(tl)
      .addTo(controller);
  },
};
</script>

<style lang="scss">
/**SCENE 1**/
.container-scene1 {
  min-height: 100vh;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  // background: white;
    background: darken($colorblue, 1%);
}
//TEXT DERECHA
.text-container1 {
  text-align: center;
  z-index: 3;
  margin: -420px 90px 0 90px;
  // max-width: 300px;
  position: relative;
  display: grid;
  max-height: 600px;
  // grid-template-columns: 2fr 1fr 2fr;
  grid-gap:30px;
}
.title1 {
  // margin-top: 50px;
   color: $colorlightpink;
     text-align: center;
    font-size: 65px;
    position: relative;
    line-height: 0.3em;
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: $colorblue 2px 2px 20px;
}
// IMG WORLD
.img-container1 {
  position: relative;
  margin: 18vh;
 
}

.title2 {
  /* margin-top: 5vh; */
  opacity: 0;
 color:darken($colorred, 30%);
color: $colorred;
      text-align: center;
    font-size: 50px;
    position: relative;
    font-weight: bold;
    text-transform: uppercase;
}

//TRANSICION A ESCENA 2
.section-wipe {
  height: 1100px;
  background-color: $colorblue;
  z-index: 5;
  position: relative;
}

.circle2 {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: $colorlightpink;
  position: absolute;
  top: 0;
  margin-top: -50px;
  margin-left: -30px;
  z-index: 6;
  opacity: 0;
}
.container-text2 {
  display: flex;
  justify-content: center;
  flex-direction: columns;
  text-transform: uppercase;
}
.title-scene2 {
  margin-top: 320px;
  position: relative;
  z-index: 10;
  color: $colorblue;
  font-weight: bold;
  font-size: 50px;
  width: 750px;
  // margin: 2300px;
}
</style>