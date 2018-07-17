<template>
    <div id="sideBar"  class="v-height-bg">
        
          <!-- <side-bar></side-bar> -->
            <el-row class="tac" >
              <el-col :span="24" > 
                  <!-- <h5>自定义颜色</h5> -->
                  <el-menu
                  :default-active="$route.path"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  @select="handleSelect"
                  background-color="#002140"
                  text-color="#fff"
                  active-text-color="#409EFF"
                  router
                  >
                  <el-menu-item index="/appMenu/search/search">
                      <!-- <i class="el-icon-sold-out"></i> -->
                      <icon name="search"></icon>
                      <span slot="title">个人账单</span>
                  </el-menu-item>
                  </el-menu>
              </el-col>
          </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(path) {
      // this.$router.push({
      //   path,
      //   query: {
      //     t: +new Date() //保证每次点击路由的query项都是不一样的，确保会重新刷新view
      //   }
      // });
    },
    handleClose() {},
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
/* #sideBar {
  position: relative;
  width: 100%;
  height: 100%;
}
.tac {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(84, 92, 100);
} */
#sideBar {
  /* margin-top: 10px; */
}
.tac ul {
  background: #fff !important;
}
.tac ul li {
  margin-bottom: 1px;
}
.el-menu-vertical-demo li {
  text-align: left;
}
</style>

