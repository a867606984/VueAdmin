<template>
    <div>
        
        <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            >
            <el-menu-item index="/home/unionPay">
              收费业务对账子系统  
              <!-- <router-link to="/home">处理中心</router-link> -->
            </el-menu-item>
             <el-menu-item index="/platform">
               移动支付平台对账子系统
               <!-- <router-link to="/platform">我的工作台</router-link> -->
            </el-menu-item>
            <el-menu-item index="/order/unionPay">
              对账子系统
              <!-- <router-link to="/order">订单管理</router-link> -->
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/home/unionPay",
      activeIndex2: "/home/unionPay"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
</style>
