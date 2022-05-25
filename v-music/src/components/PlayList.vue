<template>
  <div class="container">
    <!-- 曲目列表 -->
    <div class="slist firstline">
      <span
        class="sindex"
        style="color: rgba(255, 255, 255, 0.5); font-size: 14px"
        >序号</span
      >
      <span
        class="sname"
        style="
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          margin-left: 40px;
        "
        >歌曲</span
      >
      <span
        class="sartist"
        style="color: rgba(255, 255, 255, 0.5); font-size: 14px"
        >歌手</span
      >
      <span
        class="salbum"
        style="color: rgba(255, 255, 255, 0.5); font-size: 14px"
        >专辑</span
      >
      <span
        class="stime"
        style="color: rgba(255, 255, 255, 0.5); font-size: 14px"
        >时长</span
      >
    </div>
    <!-- 曲目列表 -->
    <div class="slist" v-for="item in this.listdata" :key="item.index">
      <span class="sindex">{{ listdata.indexOf(item) + 1 }}</span>
      <span class="sname">
        <i
          class="el-icon-video-play"
          @click="songPlay(item.id, item.name, item.ar[0].name, item.al.picUrl)"
        ></i
        >{{ item.name }}
      </span>
      <span class="sartist">{{ item.ar[0].name }}</span>
      <span class="salbum">《{{ item.al.name }}》</span>
      <span class="stime">{{ getDuration(item.dt) }}</span>
    </div>
    <!-- 分页器组件 -->
    <Pagination :total="listdata.length" @getPage="emitPage" />
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import api from "../config";

export default {
  // 传递过来的数据
  props: ["listdata"],
  // 注册组件
  components: { Pagination },
  // 数据
  data() {
    return {
      songData: {
        name: "",
        artist: "",
        url: "",
        cover: "",
        lrc: "",
      },
    };
  },
  methods: {
    songPlay(id, name, artname, picUrl) {
      const url = api.songUrl + "?id=" + id;
      const lyric = api.lyric + "?id=" + id;
      this.axios.get(url).then((res) => {
        console.log("单曲id:", id);
        this.songData.name = name;
        this.songData.artist = artname;
        this.songData.url = res.data.data[0].url;
        this.songData.cover = picUrl;
      });
      this.axios.get(lyric).then((res) => {
        this.songData.lrc = res.data.lrc.lyric;
      });
      this.$store.dispatch("changeData", this.songData);
    },
    emitPage(page) {
      this.$emit("getPage", page);
    },
    // 将毫秒时间戳转换为分:秒格式
    getDuration(stamp) {
      let secstamp = stamp / 1000;
      let m =
        Math.floor(secstamp / 60) < 10
          ? "0" + Math.floor(secstamp / 60)
          : Math.floor(secstamp / 60);
      let s =
        Math.floor(secstamp % 60) < 10
          ? "0" + Math.floor(secstamp % 60)
          : Math.floor(secstamp % 60);
      return m + ":" + s;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.3);
    opacity: 0.2;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 25px;
  }
  .slist {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    border: none;
    span {
      text-align: left;
      vertical-align: middle;
      height: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #fff;
      font-size: 16px;
      line-height: 32px;
    }
    &:not(:nth-child(1)):hover {
      background-color: rgba(0, 0, 0, 0.2);
      span .el-icon-video-play {
        visibility: visible;
      }
    }
    .sindex {
      width: 50px;
      margin-left: 5px;
    }
    .sname {
      width: 350px;
      .el-icon-video-play {
        margin-right: 10px;
        visibility: hidden;
        font-size: 20px;
      }
    }
    .sartist {
      width: 250px;
    }
    .salbum {
      width: 300px;
    }
    .stime {
      width: 70px;
    }
  }
}
</style>