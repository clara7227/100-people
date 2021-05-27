<template>
  <div>
    <div class="container">

        <h1 class="title">
          100 people
        </h1>

    </div>
    <div class="container2">
        <span id="animate1">Contenedor 2</span>
    </div>
    <div class="container3">
        <span id="animate2">Contenedor 3</span>
    </div>

  </div>
</template>

<script>
export default {
  mounted(){


    const controller = new this.$scrollmagic.Controller();

    var scene = new this.$scrollmagic.Scene({ triggerElement: '.container2' })
      // trigger a TweenMax.to tween
      .setTween("#animate1", 0.5, {backgroundColor: "white", scale: 2.5, rotate: 360})
      .addTo(controller);

    var scene2 = new this.$scrollmagic.Scene({ triggerElement: '.container3', duration: 300 })
      // trigger a TweenMax.to tween
      .setPin("#animate2")
      // add indicators (requires plugin)
			//.addIndicators({name: "1 (duration: 300)"})
      //.setTween("#animate2", 0.5, {backgroundColor: "white"})
      .addTo(controller);

  }
}
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
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
</style>
