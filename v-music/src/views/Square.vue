<template>
  <div class="container">
    <!-- 轮播图模块 -->
    <el-carousel :interval="3000" type="card" height="400px" class="swiper">
      <el-carousel-item v-for="i in this.swiperdata.result" :key="i.id">
        <el-image :src="i.picUrl" fit="scale-down"></el-image>
        <!-- <h3 class="medium">{{ i.name }}</h3> -->
      </el-carousel-item>
    </el-carousel>
    <!-- 分割线 -->
    <hr />
    <!-- 推荐歌单 -->
    <div class="title">精选歌单</div>
    <div class="box">
      <el-card
        v-for="item in this.listdata.playlists"
        :key="item.id"
        class="box-card"
        shadow="hover"
      >
        <img :src="item.coverImgUrl" alt="" />
        <span class="sl-name">{{ item.name }}</span>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listdata: {}, // 初始数据可以但是不推荐null,因为后台会获取不到数据进而报红
      swiperdata: {},
    };
  },
  mounted() {
    this.getListData();
    this.getSwiperData();
  },
  methods: {
    getListData() {
      let url = "http://localhost:3000/top/playlist?limit=42&order=hot";
      this.axios.get(url).then((res) => {
        console.log("推荐歌单", res);
        this.listdata = res.data;
      });
    },
    getSwiperData() {
      let url = "http://localhost:3000/personalized/newsong";
      this.axios.get(url).then((res) => {
        console.log("轮播图", res);
        this.swiperdata = res.data;
      });
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
  height: 696px;
  overflow: auto;
  margin: 0;
  border-radius: 0;
  background-color: rgba(255, 255, 255, 0.1);
  // backdrop-filter: blur(8px);
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
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
hr {
  width: 100%;
  margin: 0 auto;
  border: 0;
  height: 3px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0)
  );
}
.title {
  font-size: 18px;
  color: #ccc;
}
.box {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
  .box-card {
    margin: 10px 0px 10px 0px;
    width: 200px;
    height: 230px;
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 10px;
    img {
      width: 100%;
      transition: all 0.3s;
    }
    img:hover {
      transform: scale(1.1);
    }
    .sl-name {
      display: block;
      width: 100%;
      text-align: center;
      margin: 10px 0 5px 0;
      color: white;
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
</style>