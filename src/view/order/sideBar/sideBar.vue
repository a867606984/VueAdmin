<template>
    <div>
        
          <!-- <side-bar></side-bar> -->
            <el-row class="tac">
              <el-col :span="24">
                  <!-- <h5>自定义颜色</h5> -->
                  <el-menu
                  :default-active="$route.path"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  @select="handleSelect"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
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
                  <el-menu-item index="/appMenu/order/unionPay">
                      <i class="el-icon-location"></i>
                      <span slot="title">银行账单</span>
                  </el-menu-item>
                  <el-menu-item index="/appMenu/order/pos">
                      <i class="el-icon-menu"></i>
                      <span slot="title">POS账单</span>
                  </el-menu-item>
                  <el-menu-item index="/appMenu/order/diff" disabled>
                      <i class="el-icon-document"></i>
                      <span slot="title">金额不一致 </span>
                  </el-menu-item>
                  <el-menu-item index="/appMenu/order/diff">
                      <i class="el-icon-setting"></i>
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
      this.$router.push({
        path,
        query: {
          t: +new Date() //保证每次点击路由的query项都是不一样的，确保会重新刷新view
        }
      });
    },
    handleClose() {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
</style>

