<template>
  <div class="app">
    <div class="box">客官稍等...页面装修中 (✿◡‿◡)</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
:not(not) {
  box-sizing: border-box;
}
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 530px;
  height: 500px;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
  box-shadow: (2px 2px 8px 5px rgba(0, 0, 0, 0.3));
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);
}
</style>