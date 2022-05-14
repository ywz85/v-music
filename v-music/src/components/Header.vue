<template>
  <div class="header">
    <span class="left">
      <span class="el-icon-arrow-left" @click="backto"></span>
      <span class="el-icon-arrow-right" @click="goto"></span>
      <span class="el-icon-house" @click="home"></span>
      <span class="el-icon-refresh" @click="refresh"></span>
    </span>

    <span class="search">
      <el-input
        class="input"
        placeholder="搜索"
        prefix-icon="el-icon-search"
        suffix-icon="el-icon-close"
        size="medium"
      >
      </el-input>
    </span>
    <span class="right">
      <span class="el-icon-bell"></span>
      <span class="el-icon-user" @click="login"></span>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    goto() {
      this.$router.go(1);
    },
    backto() {
      this.$router.go(-1);
    },
    refresh() {
      // 刷新
      this.$router.go(0);
    },
    home() {
      this.$router.push("/square");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 30px;
  line-height: 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  // border: 1px solid white;
  span {
    margin: 0 20px;
  }
  .el-icon-arrow-left:hover,
  .el-icon-arrow-right:hover,
  .el-icon-house:hover,
  .el-icon-bell:hover,
  .el-icon-user:hover {
    transition: all 0.3s;
    transform: scale(1.3);
  }
  .el-icon-refresh:hover {
    transition: all 0.3s;
    transform: rotate(1.5turn) scale(1.2);
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: space-between;
  }
  .search {
    display: inline-block;
    width: 30% !important;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: space-between;
  }
}
</style>