<template>
  <div class="box">
    <!-- listdata数据格式见getSongList()中的res.data.songs -->
    <PlayList :listdata="listdata" @getPage="usePage" />
  </div>
</template>

<script>
import api from "../config";
import PlayList from "../components/PlayList.vue";
export default {
  components: { PlayList },
  data() {
    return {
      id: 0, // 歌单id
      offset: 0, // 偏移量(页码-1)
      listdata: [], // 歌单中的曲目数据
    };
  },
  mounted() {
    this.getSongList();
  },
  methods: {
    usePage(page) {
      this.offset = page - 1;
      this.getSongList();
      console.log("Player当前偏移量", this.offset);
    },
    getSongList() {
      // 保存点击歌单的id
      this.id = this.$route.query.id;
      console.log("歌单id:", this.id);
      // 异步请求歌单id的歌单数据
      const url = `${api.slTrack}?id=${this.id}&limit=40&offset=${this.offset}`;
      this.axios.get(url).then((res) => {
        this.listdata = res.data.songs;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>