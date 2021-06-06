<template>
<div>
  <div class="container2">
    <div class="img-container2">
      <MapImg :source="'map1.png'" />
      <img class="dots asia" src="@/assets/img/asia.svg" />
      <img class="dots africa" src="@/assets/img/africa.svg" />
      <img class="dots europe" src="@/assets/img/europa.svg" />
      <img class="dots nortam" src="@/assets/img/nortam.svg" />
      <img class="dots latam" src="@/assets/img/latam.svg" />
      <img class="dots oceania" src="@/assets/img/oceania.svg" />
    </div>
    <div class="text-container2">
      <div class="text2 t-nortam">
        <p>In our global village, only 5 people would live in North America</p>
      </div>
      <div class="text2 t-latam">
        <p>9 would hail from Latin America and the Caribbean</p>
      </div>
      <div class="text2 t-europe"><p>10 would come from Europe</p></div>
      <div class="text2 t-africa"><p>16 from Africa</p></div>
      <div class="text2 t-asia">
        <p>And a whooping 60 people would be from Asia</p>
      </div>
      <div class="text2 t-oceania">
        <p>The Oceanic population wouldn’t even add up to one person</p>
      </div>
    </div>
  </div>
  <div class="section-wipe2">
        <div class="container-text3">
          <div class="title-scene3">
           How many people would follow each religion?
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
    var tl2 = new TimelineMax();
    tl2.to(".nortam", 1, { opacity: 1, yPercent: 7 }, 0);
     tl2.to(".t-nortam", 1, { opacity: 1},0);
 tl2.to(".t-nortam", 1, { top: 250});
     tl2.to(".t-nortam", 1, { top: 1000},"+=2");

    tl2.to(".latam", 1, { opacity: 1, yPercent: 7 }, "-=0.5");
     tl2.to(".t-latam", 1, { opacity: 1},0);
     tl2.to(".t-latam", 1, { top: 250});
     tl2.to(".t-latam", 1, { top: 1000},"+=2");

    tl2.to(".europe", 1, { opacity: 1, yPercent: 7 }, "-=0.5");
        tl2.to(".t-europe", 1, { opacity: 1},0);
    tl2.to(".t-europe", 1, { top: 250});
     tl2.to(".t-europe", 1, { top: 1000},"+=2");

    tl2.to(".africa", 1, { opacity: 1, yPercent: 7 }, "-=0.5");
        tl2.to(".t-africa", 1, { opacity: 1},0);
     tl2.to(".t-africa", 1, { top: 250});
     tl2.to(".t-africa", 1, { top: 1000},"+=2");

    tl2.to(".asia", 1, { opacity: 1, yPercent: 7 }, "-=0.5");
        tl2.to(".t-asia", 1, { opacity: 1},0);
     tl2.to(".t-asia", 1, { top: 250});
     tl2.to(".t-asia", 1, { top: 1000},"+=2");

    tl2.to(".oceania", 1, { opacity: 1, yPercent: 7 }, "-=0.5");
        tl2.to(".t-oceania", 1, { opacity: 1},0);
     tl2.to(".t-oceania", 1, { top: 250});
     tl2.to(".t-oceania", 1, { top: 1000},"+=2");
    //  tl.to(
    //   ".oceania", 1,
    //   {opacity:0,
    //     },
    //  "+=2"
    // );
    new ScrollMagic.Scene({
      triggerElement: ".container2",
      triggerHook: "onLeave",
      duration: 3000,
    })
      .setPin(".container2")
      .setTween(tl2)
      .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: ".section-wipe2",
      triggerHook: "onLeave",
      duration: 500,
    })
      .setPin(".title-scene3")
      .addTo(controller);
  },
  
};
</script>

<style lang="scss">
.container2 {
  padding-top: 50px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 65% 1fr;
  background: $colorlightpink;
  width: 100%;
  margin-top: -60px;
}
//IMG CONTINENTS
.dots {
    width: 970px;
    position: absolute;
    margin-top: -43px;
    margin-left: 38px;
}
.africa {
    opacity: 0;
    fill: $colorred;
}

.nortam{
    opacity: 0;
}
.asia {
    opacity: 0;
}
.latam {
    opacity: 0;
}
.europe {
    opacity: 0;
}
.oceania {
    opacity: 0;
}
//TEXT
.text-container2 {
  width: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: right;
  max-width: 400px;
  text-align: left;
}
.text2 {
  position: relative;
  z-index:2;
  font-size: 30px;
  margin-right: 90px;
  text-transform: uppercase;
  color: $colorblue;
  font-weight: bold;
}
.t-europe {
  position: absolute;
  top: -120px;
  opacity: 0;
}
.t-africa {
  position: absolute;
  top: -120px;
  opacity: 0;
}
.t-latam {
  position: absolute;
  top: -120px;
  opacity: 0;
}
.t-nortam {
  position: absolute;
  top: -120px;
  opacity: 0;
}
.t-asia {
  position: absolute;
  top: -120px;
  opacity: 0;
}
.t-oceania {
  position: absolute;
  top: -120px;
  opacity: 0;
}
// TRANSICIÓN A ESCENA 3 
.section-wipe2 {
   width: 100%;
   height: 90vh;
   background-color: $colorred;

   position: relative;
   z-index: 9;
}
.container-text3 {
display:flex;
justify-content: center;
flex-direction: columns;
text-align: center;
}
.title-scene3 {
  margin-top:200px;
  position: relative;
  z-index: 7;
  // color: black;
  font-size: 50px;
  width: 750px;
  // margin: 2300px;
  text-transform: uppercase;
  color: $colorlightpink;
  font-weight: bold;
}


</style>