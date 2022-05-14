<template>
  <div class="box">
    <!-- 歌单信息海报 -->
    <div class="poster">
      <el-card></el-card>
    </div>
    <!-- 音乐列表 -->
    <div class="list-item">
      <!-- el-icon-video-pause  -->
      <div class="el-icon-video-play play-icon icon"></div>
      <div class="song-name">歌名</div>
      <div class="song-time">04:34</div>
      <div class="singer-name">老皮</div>
      <div class="el-icon-folder-add icon"></div>
      <div class="el-icon-film icon"></div>
      <!-- 分页器 -->
      <el-pagination class="pager" layout="prev,pager,next" :total="14">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topListData: null,
    };
  },
  mounted() {
    this.getTopList();
  },
  methods: {
    getTopList() {
      // "所有榜单"接口
      let url = "http://localhost:3000/toplist";
      this.axios.get(url).then((res) => {
        console.log("list", res);
        this.topListData = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
:not(not) {
  box-sizing: border-box;
}
.box {
  width: 100%;
  height: 695px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
  .poster {
  }
  .list-item {
    width: 98%;
    height: 40px;
    margin: 3px 0;
    // border: 1px solid green;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(168, 168, 168, 0.3);
    box-shadow: 2px 2px 7px 2px rgba($color: #000000, $alpha: 0.5);
    div {
      width: 70px;
      height: 40px;
      font-size: 20px;
      text-align: center;
      line-height: 40px;
      // border: 1px solid green;
      color: #fff;
      font-weight: 100;
    }
    .icon {
      font-size: 35px;
    }
    .pager {
    }
  }
}
</style>