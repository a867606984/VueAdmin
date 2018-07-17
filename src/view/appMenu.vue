<template>
    <div id="appMenu">
      <header-top></header-top>
      <router-view/>
    </div>
</template>
<script>
import headerTop from "@/view/header/index";

export default {
  components: {
    // navMenu,
    headerTop
  }
};
</script>
<style scoped>
#appMenu {
  /* padding: 0 30px 30px; */
  height: 100%;
}
/* reset element-ui css */
.login-container .el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}

.login-container .el-input input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #eee;
  height: 47px;
  -webkit-box-shadow: 0 0 0px 1000px #2d3a4b inset !important;
  -webkit-text-fill-color: #fff !important;
}

.login-container .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
}

.login-container .login-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 520px;
  padding: 35px 35px 15px 35px;
  margin: 120px auto;
}

.login-container .tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;
}
.login-container .tips span:first-of-type {
  margin-right: 16px;
}
.login-container .svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}
.login-container .title {
  font-size: 26px;
  font-weight: 400;
  color: #eee;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}
.login-container .show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: #889aa4;
  cursor: pointer;
  user-select: none;
}
</style>
