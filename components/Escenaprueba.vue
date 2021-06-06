<template>
<div>
  <h1>tweens run in parallel</h1>


<div class="demo">
  <div class="box red" id="redBox"></div>
  <div class="box blue" id="blueBox"></div>
</div>
<div class="nav">
  <button id="restart">restart</button> 
</div>
</div>
</template>

<script>
import { TweenMax, TimelineMax, TimelineLite } from "gsap";
import $ from "jquery";
export default {
      mounted() {
var tl = new TimelineLite()

tl.to("#redBox", 1, {x:550})
//add second tween at time of 0 seconds
  .to("#blueBox", 1, {rotation:360}, 0)
  
//add a label called "end" at a time of 2 seconds

  .add("end", 2)

// add two tweens at the "end" label
  .to("#redBox", 3, {scale:2, opacity:0}, 0)
  .to("#blueBox", 3, {scale:2, rotation:0, opacity:0}, )


$("#restart").on("click", function() {
  tl.restart();
})
      }
}
</script>

<style>
body {
  font-family:sans-serif;
}

h1 {
  margin: 5px 0;
}
h3 {
  margin:0;
  font-size:16px;
}
.demo {
  width:600px;
  height:120px;
  background-color:black;
}

.box {
  width:50px;
  height:50px;
  position:relative;
  margin-bottom:2px;
}

.red {
  background-color:red;
}

.blue {
  background-color:blue;
}

.nav {
  width:600px;
  background-color:#ccc;
  text-align:right;
}

button {
  padding:10px;
  margin:10px;
}
</style>