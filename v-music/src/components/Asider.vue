<template>
  <div>
    <el-container class="recommended asider-default">
      <el-header class="asider-header">推荐</el-header>
      <el-main class="asider-main">
        <div @click="toPage('/square')">
          <span class="el-icon-headset"> 音乐广场</span>
        </div>
        <div @click="toPage('/radio')">
          <span class="el-icon-wind-power"> 电台</span>
        </div>
        <div @click="toPage('/mv')">
          <span class="el-icon-view"> MV</span>
        </div>
        <div @click="toPage('/list')">
          <span class="el-icon-data-line"> 排行榜</span>
        </div>
      </el-main>
    </el-container>
    <el-container class="mine asider-default">
      <el-header class="asider-header">我的</el-header>
      <el-main class="asider-main">
        <div @click="toPage('/myradio')">
          <span class="el-icon-service"> 我的电台</span>
        </div>
        <div @click="toPage('/mylist')">
          <span class="el-icon-folder-opened"> 我的歌单</span>
        </div>
        <div @click="toPage('/history')">
          <span class="el-icon-time"> 最近播放</span>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    toPage(address) {
      this.$router.push(address);
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.asider-default {
  width: 100%;
  // border: 1px solid white;
  .asider-header {
    font-size: 20px;
    padding-left: 15px;
    line-height: 60px;
    color: #fff;
  }
  .asider-main {
    padding: 0;
    width: 100%;
    font-size: 15px;
    color: white;
    .router-link-active {
      text-decoration: none;
      color: #5e9ed7;
      color: #ad2860;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
    span {
      // display: inline-block;
      margin: 0 15px;
    }
    div {
      width: 70%;
      margin: 15px 0 15px 20px;
      padding: 10px;
      border-radius: 22px;
      user-select: none;
    }
    .active {
      background-color: rgba(0, 0, 0, 0.5);
    }
    div:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
