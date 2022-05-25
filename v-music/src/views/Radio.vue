<template>
  <div class="class-box">
    <div class="class-list">
      <div class="module-name">电台分类</div>
      <div class="classify">
        <div class="iconClassify" v-for="i in this.classifyData" :key="i.id">
          <el-image class="img" :src="i.pic56x56Url"></el-image>
          <div class="img-name">
            {{ i.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="radio-list">
      <div class="module-name">推荐电台</div>
      <div class="box">
        <el-card class="box-card" v-for="item in this.radioData" :key="item.id">
          <div class="img-box">
            <el-image
              class="img"
              :src="item.picUrl"
              mode="cover"
              @click="goPlayList(item.id)"
            ></el-image>
          </div>
          <div class="title">{{ item.name }}</div>
          <div class="desc">{{ item.copywriter }}</div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../config";
export default {
  data() {
    return {
      radioData: null,
      classifyData: null,
    };
  },
  methods: {
    goPlayList(id) {
      console.log("电台id", id);
      let url = api.djProgram + `?id=${id}&limit=30&offset=0`;
      this.axios.get(url).then((res) => {
        console.log("电台节目:", res);
      });
    },
    getRadio() {
      let url = api.djHot;
      this.axios.get(url).then((res) => {
        console.log("电台", res);
        this.radioData = res.data.djRadios;
      });
    },
    getClassify() {
      let url = api.djCateList;
      this.axios.get(url).then((res) => {
        console.log("分类", res);
        this.classifyData = res.data.categories;
      });
    },
  },
  mounted() {
    // 调用getRadio方法
    this.getRadio();
    this.getClassify();
  },
};
</script>

<style lang="scss" scoped>
:not(not) {
  box-sizing: border-box;
}
.module-name {
  margin: 8px;
  font-size: 18px;
  color: #fff;
}
.class-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  .class-list {
    height: 20%;
    .classify {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .iconClassify {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        margin: 10px;
        transition: all 0.2s;
        &:hover {
          transition: all 0.2s;
          transform-style: preserve-3d;
          transform-origin: center;
          transform: perspective(500px) translate3d(0, 0, 30px);
          box-shadow: (2px 2px 8px 3px rgba(72, 59, 59, 0.3));
        }
        .img {
          width: 50px;
          height: 50px;
        }
        .img-name {
          text-align: center;
          font-size: 12px;
          color: white;
        }
      }
    }
  }
  .radio-list {
    height: 80%;
    .box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      height: 515px;
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
      .box-card {
        margin: 10px 0;
        width: 200px;
        height: 250px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        border: none;
        .img-box {
          width: 160px;
          height: 160px;
          .img {
            width: 100%;
            transition: all 0.3s;
          }
          .img:hover {
            transform: scale(1.1);
          }
        }
        .title {
          width: 100%;
          margin: 5px 0 3px 0;
          text-align: center;
          font-size: 16px;
          color: white;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          user-select: none;
          cursor: pointer;
        }
        .desc {
          width: 100%;
          font-size: 8px;
          text-align: center;
          user-select: none;
          cursor: pointer;
        }
      }
    }
  }
}
</style>