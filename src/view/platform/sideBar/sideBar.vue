<template>
    <div id="sideBar" style="height:100%;background-color:#002140">
        
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
                    <el-submenu index="1">
                      <template slot="title">
                         <!-- <i class="el-icon-star-off"></i> -->
                         <icon name="align-left"></icon>
                      <span>日信息统计</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="/appMenu/platform/day">记录</el-menu-item>
                        <el-menu-item index="/appMenu/platform/day2">汇总</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                      <template slot="title">
                         <!-- <i class="el-icon-location"></i> -->
                         <icon name="align-left"></icon>
                      <span>周信息统计</span>
                      </template>
                      <el-menu-item-group>
                        <el-menu-item index="/appMenu/platform/week">记录</el-menu-item>
                        <el-menu-item index="/appMenu/platform/week2">汇总</el-menu-item>
                      </el-menu-item-group>
                    </el-submenu>
                      <el-menu-item index="/appMenu/platform/month">
                        <!-- <i class="el-icon-star-off"></i> -->
                        <icon name="align-left"></icon>
                        <span slot="title">月信息统计</span>
                    </el-menu-item>
                    <el-menu-item index="/appMenu/platform/season">
                        <!-- <i class="el-icon-sold-out"></i> -->
                        <icon name="align-left"></icon>
                        <span slot="title">季度信息统计</span>
                    </el-menu-item>
                    <el-menu-item index="/appMenu/platform/year">
                        <!-- <i class="el-icon-sold-out"></i> -->
                        <icon name="align-left"></icon>
                        <span slot="title">年信息统计</span>
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

