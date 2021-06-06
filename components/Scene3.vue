<template>
  <div>
    <div class="container3">
      <div class="img-container3">
        <img class="dots2 christian" src="@/assets/img/christian.png" />
        <img class="dots2 muslim" src="@/assets/img/muslim.png" />
        <img class="dots2 no-religion" src="@/assets/img/no-religion.png" />
        <img class="dots2 hindu" src="@/assets/img/hindu.png" />
        <img class="dots2 others" src="@/assets/img/others.png" />
        <img class="dots2 buddhism" src="@/assets/img/buddhism.png" />
      </div>
      <div class="text-container3">
        <div class="text3 t-intro">
          <p>Our 100 villagers would hold many different religious beliefs</p>
        </div>
        <div class="text3 t-christian">
          <p>There would be 31 Christians</p>
        </div>
        <div class="text3 t-muslim">
          <p>23 Muslims</p>
        </div>
        <div class="text3 t-no-religion">
          <p>16 people wouldn't identify with any particular religion</p>
        </div>
        <div class="text3 t-hindu"><p>There would be 13 Hindus</p></div>
        <div class="text3 t-others">
          <p>Other religions would be represented by 8 people</p>
        </div>
        <div class="text3 t-buddhism">
          <p>And there would be 7 buddhists</p>
        </div>
      </div>
    </div>
    <div class="spacer3"> <p> To be continued... </p></div>
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
    var tl3 = new TimelineMax();

    tl3.to(".t-intro", 1, { top: 250, opacity: 1 }, "+=3");
    //    tl3.to(".t-intro", 1, { ,0);
    tl3.to(".t-intro", 1, { top: 1000 }, "+=2");
    tl3.to(".t-intro", 1, { opacity: 0 }, "-=1");

    tl3.to(".christian", 1, { yPercent: 200 }, "+=2");
    tl3.to(".t-christian", 1, { opacity: 1 }, 1);
    tl3.to(".t-christian", 1, { top: 260 });
    tl3.to(".t-christian", 1, { top: 1000 }, "+=2");
    tl3.to(".t-christian", 1, { opacity: 0 }, "-=1");

    tl3.to(".muslim", 1, { yPercent: 283 }, "-=0.5");
    tl3.to(".t-muslim", 1, { opacity: 1 }, 0);
    tl3.to(".t-muslim", 1, { top: 320 });
    tl3.to(".t-muslim", 1, { top: 1000 }, "+=2");
    tl3.to(".t-muslim", 1, { opacity: 0 }, "-=1");

    tl3.to(".no-religion", 1, { yPercent: 399 }, "-=0.5");
    tl3.to(".t-no-religion", 1, { opacity: 1 }, 0);
    tl3.to(".t-no-religion", 1, { top: 325 });
    tl3.to(".t-no-religion", 1, { top: 1000 }, "+=2");
    tl3.to(".t-no-religion", 1, { opacity: 0 }, "-=1");

    tl3.to(".hindu", 1, { yPercent: 437 }, "-=0.5");
    tl3.to(".t-hindu", 1, { opacity: 1 }, 0);
    tl3.to(".t-hindu", 1, { top: 355 });
    tl3.to(".t-hindu", 1, { top: 1000 }, "+=2");
    tl3.to(".t-hindu", 1, { opacity: 0 }, "-=1");

    tl3.to(".others", 1, { yPercent: 685 }, "-=0.5");
    tl3.to(".t-others", 1, { opacity: 1 }, 0);
    tl3.to(".t-others", 1, { top: 350 });
    tl3.to(".t-others", 1, { top: 1000 }, "+=2");
    tl3.to(".t-others", 1, { opacity: 0 }, "-=1");

    tl3.to(".buddhism", 1, { yPercent: 800 }, "-=0.5");
    tl3.to(".t-buddhism", 1, { opacity: 1 }, 0);
    tl3.to(".t-buddhism", 1, { top: 370 });
    tl3.to(".t-buddhism", 1, { top: 1000 }, "+=2");
    tl3.to(".t-buddhism", 1, { opacity: 0 }, "-=1");
    //  tl.to(
    //   ".oceania", 1,
    //   {opacity:0,
    //     },
    //  "+=2"
    // );
    new ScrollMagic.Scene({
      triggerElement: ".container3",
      triggerHook: "onLeave",
      duration: 3000,
    })
      .setPin(".container3")
      .setTween(tl3)
      .addTo(controller);
  },
};
</script>

<style lang="scss">
.container3 {
  //   padding-top: 50px;
  min-height: 100vh;
  display: flex;
  display: grid;
  grid-template-columns: 65% 1fr;
  background: $colorred;
  width: 100%;
  margin-top: -100px;
  position: relative;
  z-index: 7;
}
.img-container3 {
  margin-top: -600px;
  margin-left: 40px;
  margin-bottom: 400px;
}
//IMGS
.dots2 {
  max-width: 300px;
  border-radius: 100%;
  margin-right: 20px;
  margin-top: 300px;
  // position: absolute;
}
.christian {
  height: 240px;
  width: 240px;
}
.muslim {
  height: 170px;
  width: 170px;
}
.no-religion {
  height: 120px;
  width: 120px;
}
.hindu {
  height: 110px;
  width: 110px;
}
.others {
  height: 70px;
  width: 70px;
}
.buddhism {
  height: 60px;
  width: 60px;
}
//TEXT
.text-container3 {
  width: 100vh;
  flex-direction: column;
  display: flex;
  flex-wrap: nowrap;
  justify-content: right;
  max-width: 400px;
  text-align: left;
  margin-left: 30px;
  color:white;
}
.text3 {
  position: relative;
  z-index: 2;
  font-size: 30px;
  margin-right: 90px;
  text-transform: uppercase;
  color: $colorlightpink;
  font-weight: bold;
}
// .t-intro {

// }
.t-intro {
  position: absolute;
  top: -120px;
  opacity: 0;
}
.t-christian {
  position: absolute;
  top: -90px;
  opacity: 0;
}
.t-muslim {
  position: absolute;
  top: -90px;
  opacity: 0;
}
.t-no-religion {
  position: absolute;
  top: -120px;
  opacity: 0;
}
.t-hindu {
  position: absolute;
  top: -90px;
  opacity: 0;
}
.t-others {
  position: absolute;
  top: -120px;
  opacity: 0;
}
.t-buddhism {
  position: absolute;
  top: -90px;
  opacity: 0;
}
// TRANSICIÓN A ESCENA 3
.section-wipe3 {
  width: 100%;
  height: 100vh;
  background-color: blue;
  position: relative;
  z-index: 9;
}
.container-text3 {
  display: flex;
  justify-content: center;
  flex-direction: columns;
  text-align: center;

}

.spacer3 {
  position: relative;
  z-index: 10;
  background: $colorlightpink;
  height: 700px;
  display: flex;
  justify-content: center;
  padding-top: 300px;
   p {
     font-size: 30px;
  color: $colorblue;
  text-transform: uppercase;
  font-weight: bold;
  }
}
</style>