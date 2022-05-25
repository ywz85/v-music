<template>
  <div class="header">
    <span class="left">
      <span class="el-icon-arrow-left icon" @click="backto"></span>
      <span class="el-icon-arrow-right icon" @click="goto"></span>
      <span class="el-icon-house icon" @click="home"></span>
      <span class="el-icon-refresh icon" @click="refresh"></span>
    </span>

    <span class="search">
      <el-input
        class="input"
        type="text"
        placeholder="搜索"
        prefix-icon="el-icon-search"
        clearable
        v-model="searchText"
        size="medium"
        @change="search(searchText)"
      >
      </el-input>
    </span>
    <span class="right">
      <!-- 用户消息 -->
      <el-badge :value="12" class="badge" type="primary">
        <span class="el-icon-bell icon"></span>
      </el-badge>
      <!-- 用户按钮 -->
      <span class="el-icon-user icon" @click="login"></span>
    </span>
  </div>
  <!-- <div class="searchResult" v-if="searchText.length > 0">
      <div class="resultItem" v-for="item in songs" :key="item.id">
        {{ item.name }}
      </div>
    </div> -->
</template>

<script>
import api from "../config";
export default {
  data() {
    return {
      searchText: "",
      songs: [],
    };
  },
  methods: {
    search(txt) {
      console.log("搜索关键词", txt);
      let url = api.search + `?keywords=${txt}&limit=30&offset=0`;
      console.log(url);
      this.axios.get(url).then((res) => {
        console.log("搜索结果", res);
        this.songs = res.data.result.songs;
      });
    },
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
  border: none;
  span {
    margin: 0 20px;
  }
  .el-icon-arrow-left,
  .el-icon-arrow-right,
  .el-icon-house,
  .el-icon-bell,
  .el-icon-refresh,
  .el-icon-user {
    transition: all 0.3s;
  }
  .el-icon-arrow-left:hover,
  .el-icon-arrow-right:hover,
  .el-icon-house:hover,
  .el-icon-bell:hover,
  .el-icon-user:hover {
    transition: all 0.3s;
    transform: scale(1.2);
  }
  .el-icon-refresh:hover {
    transition: all 0.3s;
    transform: rotate(1.5turn) scale(1.2);
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search {
    display: inline-block;
    position: relative;
    width: 20% !important;
    .searchResult {
      z-index: 999999;
      position: absolute;
      top: 40px;
      display: flex;
      flex-direction: column;
      height: 500px;
      overflow: auto;
      border: 1px solid red;
      .resultItem {
        font-size: 16px;
        height: 20px;
        width: 100px;
        line-height: 18px;
        color: #ccc;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .right {
    display: flex;
    // border: 1px solid red;
    width: 15%;
    justify-content: space-around;
    align-items: center;
    .badge {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      padding: 0;
    }
  }
}
</style>