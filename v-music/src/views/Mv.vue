<template>
  <div class="mv-box">
    <el-card class="card-box" v-for="i in mvData" :key="i.id">
      <img class="img" :src="i.cover" alt="" />
      <span class="name">{{ i.name }}</span>
      <span class="artist">--{{ i.artistName }}</span>
    </el-card>
  </div>
</template>

<script>
import api from "../config";
export default {
  data() {
    return {
      mvData: null,
    };
  },
  mounted() {
    this.getMvData();
  },
  methods: {
    getMvData() {
      // let url = "http://localhost:3000/mv/first?limit=28";
      let url = api.mvFirst + "?limit=28";
      this.axios.get(url).then((res) => {
        console.log("mv", res);
        this.mvData = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
:not(not) {
  box-sizing: border-box;
}
.mv-box {
  height: 694px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 0.2;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 25px;
  }
  .card-box {
    width: 270px;
    height: 180px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    border: none;
    margin: 10px;
    .img {
      width: 230px;
      height: 130px;
    }
    .name {
      display: inline-block;
      font-size: 14px;
      color: #fff;
      margin-top: 5px;
      max-width: 70%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      // border: 1px solid #fff;
    }
    .artist {
      color: #b1bece;
      font-size: 10px;
      margin-top: 5px;
      margin-left: 10px;
    }
  }
}
</style>
