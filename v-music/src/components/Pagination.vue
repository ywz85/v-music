<template>
  <div class="pager-box">
    <el-pagination
      background
      :hide-on-single-page="true"
      :total="total"
      :pager-count="7"
      @current-change="changePage"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: ["total"],
  methods: {
    changePage(page) {
      this.$emit("getPage", page);
    },
  },
};
</script>

<style lang="scss" scoped>
.pager-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}
</style>