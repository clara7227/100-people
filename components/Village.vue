<template>
    <div class="img-village-container">
      <img class="img-village" :src="source" />
    </div>
</template>

<script>
export default {

//IMG
  props: ["source"]

}
</script>

<style>
.img-village-container {
  text-align: center;
  position: relative;
  z-index: 4;
  margin:  auto auto auto;

}
.img-village {
 width: 100%;
opacity: 1;
}

</style>