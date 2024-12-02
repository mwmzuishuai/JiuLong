<template>
  <div class="bigbox">
    <onetitle class="title" />
  </div>
</template>

<script setup>
import key from "./key.vue";
import kzt from "./kzt.vue";
import onetitle from "./onetitle.vue";
const guiClick = () => {
  console.log("123");
};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 800px;
  transform: translateX(0px) translateY(0px);
}

.comment {
  transform: translateY(-114px);
  width: 1920px;

  .xian2 {
    width: 100%;
    height: 4px;
    background-color: rgb(72, 255, 0);
  }

  .guiBigbox {
    display: flex;
    width: 1920px;
    overflow-x: auto;

    .guibox {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 20px;

      .xian3 {
        height: 40px;
        width: 4px;
        background-color: red;
      }

      .xian4 {
        background-color: rgb(72, 255, 0);
      }
    }
  }
}

.bigbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    color: rgb(112, 112, 112);
    font-family: MiSans;
    font-size: 20px;
    font-weight: 500;
    line-height: -1px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 10px;
  }

  .titled {
    position: relative;
    display: flex;
    align-items: center;

    &::after {
      content: "拼接至原有10KV II 段母线 ";
      font-weight: bolder;
      position: absolute;
      left: -200px;
    }
  }

  .duan {
    height: 16px;
    width: 4px;
    background-color: red;
    border-radius: 10px;
  }
}

.x1 {
  width: 500px;
  height: 4px;
  background-color: red;
  border-radius: 10px;
}
</style>
