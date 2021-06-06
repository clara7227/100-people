<template>
<div>
  <div class="container-scene1 pinContainer1">
        <div class="img-container1">
          <WorldImg :source="'earth2.png'" />
        </div>
        <div class="text-container1">
          <span class="title title1"> What would the world look like... </span>
        </div>  
  </div>
     <div class="trigger1-2">
TRIGGER
    </div>
</div>
</template>

<script>
import { TweenMax, TimelineMax, TimelineLite } from "gsap";
import ScrollMagic from "scrollmagic";
import gsap from "scrollmagic";
import $ from "jquery";
export default {
  mounted() {
    // init controller
    const controller = new this.$scrollmagic.Controller();

     //TEXTO DESAPARECE
     var timeline = new TimelineMax();
      var tween1 = TweenMax.to(".title",1, {
      opacity:0,
      font: 30,
      },0)
      
     var tween2 = TweenMax.to(".text-container1",1, {
      width:0
      },0)
       var tween3 = TweenMax.to(".img-container1",1, {
    imgOpacity:0
      },0)
      
     var scene = new this.$scrollmagic.Scene({
      triggerElement: ".img-container",
      duration: 250,
      triggerHook: "onLeave",
    })
   
      timeline.add(tween1).add(tween2);
      scene.setTween(timeline)
      scene.addTo(controller);
    //Hacer esto mismo pero con timeline max

    // MUNDO SE HACE PEQUEÑO Y SE MUEVE HACIA ARRIBA
    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".pinContainer1",
      duration: 1000,
      triggerHook: "onLeave",
    })
      .setPin(".img-container1")
      .setPin(".pinContainer1")
      .setTween(
        ".img-container1",1, {
        bottom: 100,
        scale: 0.05,
        }
      )
     .addTo(controller);
 // MUNDO ESTANCADO Y APARECE TEXTO
    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".trigger1-2",
      duration: 2000,
      triggerHook: "onLeave",
    })
      .setPin(".img-container1")
       .setPin(".pinContainer1")
      .setPin(".trigger1-2")
      // .setTween(
      //   ".img-container1",1, {
      //   bottom: 100,
      //   scale: 0.05,
      //   }
      // )
     .addTo(controller);
      var tl = new TimelineLite()

tl.to("#redBox", 1, {x:550})
//add second tween at time of 0 seconds
  .to("#blueBox", 1, {rotation:360}, 0)
  
//add a label called "end" at a time of 2 seconds
  .add("end", 2)

// add two tweens at the "end" label
  .to("#redBox", 3, {scale:2, opacity:0}, "end")
  .to("#blueBox", 3, {scale:2, rotation:0, opacity:0}, "end")

  //   //SET PIN CIRCULO
  //   var scene = new this.$scrollmagic.Scene({
  //     triggerElement: ".pinContainer1",
  //     duration: 1000,
  //     triggerHook: "onLeave",
  //   })
  //     .setPin("#pinMaster1")
  //     .addTo(controller);
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
  background: white;
}
//TEXT DERECHA
.text-container1 {
  text-align: center;
  z-index: 3;
  margin: -300px auto auto auto;
  max-width: 300px;
    position: relative;
}
.title1 {
  margin-top: 50px;
  color: white;
}
//IMG WORLD
.img-container1 {
    position: relative;
}


</style>