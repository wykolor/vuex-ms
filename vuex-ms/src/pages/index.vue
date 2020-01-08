<template>
  <div class="index">
    <h1>后端首页</h1>
    <p>用户姓名{{ $store.state.userInfo.username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped></style>
