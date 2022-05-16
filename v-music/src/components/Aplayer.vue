<template>
  <div>
    <aplayer :audio="audio" :lrcType="3" fixed mini />
  </div>
</template>

<script>
export default {
  props: {
    playProp: {
      name,
      artist,
      url,
      cover,
      lrc,
    },
  },
  data() {
    return {
      audio: {
        name: "东西 (Cover: 林俊杰)", // 歌曲标题
        artist: "纳豆", // 歌手
        url: "https://cdn.moefe.org/music/mp3/thing.mp3", // mp3文件地址
        cover:
          "https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300", // 封面图
        lrc: "https://cdn.moefe.org/music/lrc/thing.lrc", // 歌词文件
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>