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
                  <!-- <el-submenu index="1">
                      <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>银行账单</span>
                      </template>
                      <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                      </el-menu-item-group>
                      <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                      </el-menu-item-group>
                      <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                      </el-submenu>
                  </el-submenu> -->
                  <el-menu-item index="/appMenu/home/unionPay">
                      <!-- <i class="el-icon-star-off"></i> -->
                      <icon name="university"></icon>
                      <span slot="title">银行账单</span>
                  </el-menu-item>
                  <!-- <el-menu-item index="/appMenu/home/pos">
                      <i class="el-icon-menu"></i>
                      <span slot="title">POS账单</span>
                  </el-menu-item> -->
                  <el-submenu index="/appMenu/home/pos">
                    <template slot="title">
                      <!-- <i class="el-icon-printer"></i> -->
                      <icon name="map"></icon>
                      <span>POS账单</span>
                    </template>
                    <el-menu-item-group>
                      <template slot="title"></template>
                      <el-menu-item index="/appMenu/home/pos" >选项1</el-menu-item>
                      <el-menu-item index="/appMenu/home/pos1">选项2</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu> 
                  <el-menu-item index="/appMenu/home/diff">
                      <!-- <i class="el-icon-sold-out"></i> -->
                      <icon name="credit-card"></icon>
                      <span slot="title">金额不一致</span>
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

