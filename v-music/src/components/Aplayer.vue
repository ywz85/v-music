<template>
  <div>
    <aplayer :audio="audio" :lrcType="3" fixed mini autoplay />
  </div>
</template>

<script>
export default {
  computed: {
    audio() {
      return {
        name: this.$store.state.songData.name, // 歌曲标题
        artist: this.$store.state.songData.artist, // 歌手
        url: this.$store.state.songData.url, // mp3文件地址
        cover: this.$store.state.songData.cover, // 封面图
        lrc: this.$store.state.songData.lrc, // 歌词文件
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>