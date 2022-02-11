<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <div v-if="state.token">
      <a @click="logout">Logout</a>
    </div>
    <div v-else>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>

import {reactive} from 'vue'

export default {
  setup() {
    const state = reactive({
      token: ''
    })
    return {
      state
    }
  },
  mounted() {
    this.state.token = this.$store.getters.userToken
    // todo: this.userToken is not getters.userToken
    console.log(this.$store.getters.userToken)
  },
  methods: {
    logout() {
      this.$store.dispatch('logoutAction').then(() => {
        console.log('you have logout')
        this.$router.push({ name: 'Login'})
      })
    }
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
