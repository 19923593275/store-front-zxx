<template>
  <div id="app">
    <TopNavbar />
    <router-view />
  </div>
</template>

<script>
import TopNavbar from "@/components/nav/TopNavbar.vue";

export default {
  name: "home",
  components: {
    TopNavbar
  }
};
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
}

html, body, div, applet, object, iframe, span,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
