<template>
  <div class="box">
    <div class="ISheader">
      <img src="./assets/br.svg" alt="" class="br_logo">
    </div>
    <userPd />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import autofit from "autofit.js";
import userPd from "./components/userPd.vue";
onMounted(() => {
  autofit.init(
    {
      dh: 1180,
      dw: 1920,
      el: "#app",
      resize: true,
    },
    false
  );
});
</script>

<style lang="scss" scoped>
.box {

  margin: auto;
  .ISheader{
    height: 100px;
    // background-color: aqua;
    .br_logo{
      width: 200px;
    }
  }
}
</style>
