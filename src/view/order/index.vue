<template>
    <div>
      <el-container>
        <el-aside width="200px">
          <side-bar></side-bar>
        </el-aside>
        <el-main>
          
          <router-view/>
        </el-main>
      </el-container>
    </div>
</template>
<script>
import sideBar from "./sideBar/sideBar";
export default {
  components: { sideBar }
};
</script>
<style scoped>
</style>
