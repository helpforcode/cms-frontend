<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted() {
    this.$http
        .get('/get')
        .then(response => (console.log(response)))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
  }
}
</script>
