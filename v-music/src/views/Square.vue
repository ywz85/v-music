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
    <div class="flex-box">
      <div class="gird-box">
        <el-card
          v-for="item in this.listdata.playlists"
          :key="item.id"
          class="box-card"
          shadow="hover"
        >
          <div class="img-box">
            <img :src="item.coverImgUrl" alt="" @click="goPlayList(item.id)" />
          </div>
          <span class="sl-name" @click="goPlayList(item.id)">{{
            item.name
          }}</span>
        </el-card>
      </div>
      <!-- 分页器组件 -->
      <Pagination :total="50" @getPage="emitPage" />
    </div>
  </div>
</template>

<script>
import api from "../config";
import Pagination from "../components/Pagination.vue";

export default {
  components: { Pagination },
  data() {
    return {
      listdata: {}, // 初始数据可以但是不推荐null,因为后台会获取不到数据进而报红
      swiperdata: {},
      offset: 0,
    };
  },
  mounted() {
    this.getListData();
    this.getSwiperData();
  },
  methods: {
    // 点击歌单跳转方法
    goPlayList(id) {
      let url = "/player?id=" + id;
      this.$router.push(url);
    },
    // 通过点击分页器获得当前页面偏移量offset
    emitPage(page) {
      this.offset = page - 1;
      this.getListData();
      console.log("square当前偏移量", this.offset);
    },
    // 请求歌单数据
    getListData() {
      // let url = "http://localhost:3000/top/playlist?limit=42&order=hot";
      let url =
        api.topPlayList + `?limit=50&offset=${this.offset * 50}&order=hot`;
      this.axios.get(url).then((res) => {
        console.log("推荐歌单", res);
        this.listdata = res.data;
      });
    },
    // 请求轮播图数据
    getSwiperData() {
      // let url = "http://localhost:3000/personalized/newsong";
      let url = api.personalized;
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
  height: 100%;
  overflow: auto;
  margin: 0;
  padding: 0;
  border-radius: 0;
  background-color: transparent;
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
  border: none;
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
.flex-box {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  .gird-box {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 10px 7px;
    .box-card {
      width: 200px;
      height: 230px;
      background-color: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 10px;
      .img-box {
        width: 160px;
        height: 160px;
        img {
          width: 100%;
          transition: all 0.3s;
        }
        img:hover {
          transform: scale(1.1);
        }
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
}
</style>