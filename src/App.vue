<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>
    <router-view @transmit="persistData" :url="url"></router-view>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: ""
  }),

  methods: {
    validUrl(data) {
      this.url = data.url;
    },

    persistData(url) {
      // 
      this.url = url;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
