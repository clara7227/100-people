<template>
  <div class="img-world-container">
      <img class="img-world" :src="source" />
    </div>
</template>

<script>
export default {

//IMG
  props: ["source"]

}
</script>

<style lang="scss">
.img-world-container {
  text-align: center;
  z-index: 3;
  // padding-top: 18vh;
  margin: auto auto auto;
  max-width: 400px;
   height: 400px;
  width: 400px;
  border-radius: 100%;
  background-color: $colorblue;
}

.img-world {
  height: 400px;
  width: 400px;
  border-radius: 100%;
  opacity: 1;
}


</style>