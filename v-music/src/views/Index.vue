<template>
  <div class="app">
    <!-- container容器 -->
    <el-container class="container">
      <el-header class="header" style="height: 100px"><Header /></el-header>
      <el-container class="body">
        <el-aside width="250px" class="aside"><Asider /></el-aside>
        <el-main class="main"><router-view></router-view></el-main>
      </el-container>
    </el-container>
    <Aplayer />
  </div>
</template>

<script>
import Asider from "../components/Asider.vue";
import Header from "../components/Header.vue";
import Aplayer from "../components/Aplayer.vue";
export default {
  components: { Header, Asider, Aplayer },
};
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  height: 800px;
  margin: 60px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 8px 5px rgba(0, 0, 0, 0.5);
  .header {
    border-bottom: 0.1px solid rgba(168, 168, 168, 0.3);
  }
  .aside {
    border-right: 0.1px solid rgba(168, 168, 168, 0.5);
  }
  .main {
    overflow: hidden;
    padding: 0;
    border-radius: 0;
  }
}
</style>