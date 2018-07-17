<template>
    <div>
        
            <el-breadcrumb separator="/" class="small-menu">
                <el-breadcrumb-item :to="{ path: '/' }">通行业务移动支付日信息统计</el-breadcrumb-item>
                <!-- <el-breadcrumb-item>银行账单</el-breadcrumb-item> -->
                <el-breadcrumb-item v-for="(item,index) in $route.meta.break" :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
        
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>
