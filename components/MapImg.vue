<template>
  <div class="img-map-container">
      <img class="img-map" :src="source" />
         <!-- <img class="dots asia" src="@/assets/img/asia.svg">
       <img class="dots africa" src="@/assets/img/africa.svg">
       <img class="dots europa" src="@/assets/img/europa.svg">
       <img class="dots nortam" src="@/assets/img/nortam.svg">
       <img  class="dots latam" src="@/assets/img/latam.svg">
       <img class="dots oceania" src="@/assets/img/oceania.svg"> -->
    </div>

</template>

<script>
export default {

//IMG
  props: ["source"]

}
</script>

<style lang="scss">
.img-map-container {
  z-index: 3;
  margin-left: 36px;
  position: relative;
}
.img-map {
  height: auto;
  width: 900px;
padding:42px 0 0 18px;
  object-fit: cover;
  /* background-color: rgb(255, 255, 255); */
  opacity: 1;
  position: absolute;
} 

</style>