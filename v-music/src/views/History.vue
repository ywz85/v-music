<template>
  <div class="app">
    <div class="notic" v-if="this.historyList.length === 0">
      ( •̀ ω •́ )y 您最近播放为0
    </div>
  </div>
</template>

<script>
import api from "../config";
export default {
  data() {
    return {
      historyList: [],
    };
  },
  mounted() {
    this.axios.get(api.record).then((res) => {
      this.historyList = res.data.data.list;
      console.log("历史单曲", this.historyList);
      console.log(this.historyList.length);
    });
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .notic {
    color: #fff;
    height: 30px;
    font-size: 25px;
  }
}
</style>