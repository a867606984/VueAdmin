<template>
    <div id="platform">
        <div class="day">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item >首页</el-breadcrumb-item>
                <el-breadcrumb-item><a>日</a></el-breadcrumb-item>
            </el-breadcrumb>
            <my-day></my-day>
        </div>
    </div>
</template>
<script>
import myDay from "@/view/platform/date/day";
export default {
  components: { myDay }
};
</script>
<style scoped>
#platform {
  padding: 0 20px;
}
</style>
