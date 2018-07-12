<template>
  <div id="app">
      <!-- <header-top></header-top> -->
      <!-- <nav-menu></nav-menu> -->
        <keep-alive>
          <router-view v-if="!!$route.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.keepAlive"/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "App",
  mounted() {
    // this.getData();
    console.log(this.$store.getters.showRouters);
  },
  methods: {
    getData() {
      // this.$http.get("./scr/data.JSON", res => {
      //   console.log(res.data);
      // });
      axios.get("./data.JSON").then(res => {
        console.log(res.data);
      });
    }
  },
  computed: {
    ...mapGetters(["showState", "showRouters"])
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
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  /* background: #fff; */
  /* background: linear-gradient(to bottom, #333, #fff, #fff, #fff); */
}
#app > div {
  /* background: #fff; */
}
* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  outline: none;
  background: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  color: #333;
  font-size: 13px;
}
html,
body {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  color: inhert;
}

.vhcenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vhbetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.vcenter {
  display: flex;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
