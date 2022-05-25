<template>
  <div class="container">
    <div class="mv-box">
      <div class="card-box" v-for="i in mvData" :key="i.id">
        <div class="img-box">
          <el-image class="img" :src="i.cover" fit="contain"></el-image>
        </div>
        <div class="footer-box">
          <span class="name">{{ i.name }}</span>
          <span class="artist">--{{ i.artistName }}</span>
        </div>
      </div>
    </div>
    <Pagination :total="50" @getPage="emitPage" />
  </div>
</template>

<script>
import api from "../config";
import Pagination from "../components/Pagination.vue";

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      mvData: [],
      offset: 0,
    };
  },
  mounted() {
    this.getMvData();
  },
  methods: {
    getMvData() {
      let url = api.mvAll + `?limit=30&offset=${this.offset * 30}`;
      this.axios.get(url).then((res) => {
        console.log("mvAll:", res);
        this.mvData = res.data.data;
      });
    },
    emitPage(page) {
      this.offset = page - 1;
      this.getMvData();
      console.log("mvAll当前偏移量", this.offset);
    },
  },
};
</script>

<style lang="scss" scoped>
:not(not) {
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: 0;
  border-radius: 0;
  background-color: transparent; // 推荐使用这个属性设置背景透明
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
  .mv-box {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 10px 22px;
    .card-box {
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 200px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      border: none;
      overflow: hidden;
      .img-box {
        height: 85%;
        width: 100%;
        .img {
          width: 100%;
          height: 100%;
        }
      }
      .footer-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 15%;
        .name {
          display: inline-block;
          font-size: 16px;
          text-align: center;
          color: #fff;
          width: 70%;
          height: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          line-height: 28px;
        }
        .artist {
          display: inline-block;
          font-size: 8px;
          color: #b1bece;
          width: 30%;
          height: 100%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          cursor: pointer;
          user-select: none;
          line-height: 28px;
        }
      }
    }
  }
}
</style>
