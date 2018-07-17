<template>
    <div class="v-height">
      <el-container>
        <el-aside width="200px" class="v-padding">
          <side-bar></side-bar>
        </el-aside>
        <el-main class="main">
          <happy-scroll color="rgba(0,0,0,0)" size="2">
            <transition name="fade">
              <router-view/>
            </transition>
          </happy-scroll>
        </el-main>
      </el-container>
    </div>
</template>
<script>
import sideBar from "./sideBar/sideBar";
export default {
  components: { sideBar },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.search {
  width: 100%;
  /* background: rgba(0, 0, 0, .2) */
  overflow: hidden;
  padding: 0 20px;
  /* justify-content: space-between; */
}
.small-menu {
  float: left;
}
.input {
  float: right;
}
.input-it {
  /* float: left; */
  padding: 0 30px;
}
.serach-btn {
  /* float: left;

  margin-left: 10px; */
}

.el-input {
  /* width: 200px; */
}

.data {
  /* float: left; */
  /* margin-right: 10px; */
}
.main {
  padding: 10px;
}
.comtainer {
  border: 1px solid #ccc;
}
.babel {
  padding: 20px;
}

.content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.content .left {
  float: left;
  width: 15%;
  height: 100%;
}
.content .right {
  float: right;
  width: 85%;
  height: 100%;
}
</style>
