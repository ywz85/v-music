<template>
  <div class="class-box">
    <div class="module-name">电台分类</div>
    <div class="classify">
      <div class="iconClassify" v-for="i in this.classifyData" :key="i.id">
        <el-image class="img" :src="i.pic56x56Url"></el-image>
        <div>
          {{ i.name }}
        </div>
      </div>
    </div>
    <div class="module-name">推荐电台</div>
    <div class="box">
      <el-card class="box-card" v-for="item in this.radioData" :key="item.id">
        <el-image class="img" :src="item.picUrl" mode="cover"></el-image>
        <div class="title">{{ item.name }}</div>
        <div class="desc">{{ item.copywriter }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioData: null,
      classifyData: null,
    };
  },
  methods: {
    getRadio() {
      let url = "http://localhost:3000/dj/hot";
      this.axios.get(url).then((res) => {
        console.log("电台", res);
        this.radioData = res.data.djRadios;
      });
    },
    getClassify() {
      let url = "http://localhost:3000/dj/catelist";
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
.classify {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  .iconClassify {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    margin: 10px;
    &:hover {
      border: 1px solid #fff;
    }
    div {
      text-align: center;
      font-size: 12px;
      color: white;
    }
  }
}
.box {
  position: relative;
  top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  height: 500px;
  overflow: auto;
  border-top: 0.2px solid rgba(168, 168, 168, 0.5);
  // border: 2px solid red;
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
    margin: 10px 10px 10px 10px;
    width: 200px;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    border: none;
    .img {
      width: 100%;
      transition: all 0.3s;
    }
    .img:hover {
      transform: scale(1.1);
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
    }
    .desc {
      width: 100%;
      font-size: 8px;
      text-align: center;
    }
  }
}
</style>