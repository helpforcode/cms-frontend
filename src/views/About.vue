<template>
  <div class="about">
    <h1>This is an about page</h1>
    <nut-button @click="logout">Logout</nut-button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    logout() {
      this.$store.dispatch('logoutAction').then(() => {
        console.log('you have logout')
        this.$router.push({ name: 'Login'})
      })
    }
  },
  mounted() {
    // this.$http
    //     .get('/get')
    //     .then(response => (console.log(response)))
    //     .catch(function (error) { // 请求失败处理
    //       console.log(error);
    //     });
  }
}
</script>
