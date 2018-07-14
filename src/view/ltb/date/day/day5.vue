<template>
    <div>
        <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :lg="12">
                <div class="grid-content bg-purple" id="channelChart" ></div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12">
                <div class="grid-content bg-purple" id="storeRateBarChart"></div>
            </el-col>
            </el-row>

            <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :lg="12">
                <div class="grid-content bg-purple" id="bindUserChart"></div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12">
                <div class="grid-content bg-purple" id="paymentChart"></div>
            </el-col>
            </el-row>

            <el-row :gutter="20">
            <el-col :xs="12" :sm="12" :lg="12">
                <div class="grid-content bg-purple" id="moneyChart"></div>
            </el-col>
            <el-col :xs="12" :sm="12" :lg="12">
                <div class="grid-content bg-purple" id="storeRateChart"></div>
            </el-col>
        </el-row>
        
    </div>
</template>
<script>
const echarts = require("echarts/lib/echarts");
// 引入图组件
require("echarts/lib/chart/line");
require("echarts/lib/chart/pie");
require("echarts/lib/chart/bar");

// 引入辅助组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
require("echarts/lib/component/title");

export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const bindUserChart = echarts.init(
        document.getElementById("bindUserChart")
      );
      // 绘制图表
      bindUserChart.setOption({
        title: { text: "日绑卡用户数趋势" },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["5-3", "5-4", "5-5", "5-6", "5-7", "5-8", "5-9"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "绑卡张数",
            type: "line",
            data: [5, 20, 36, 10, 10, 20, 20]
          }
        ]
      });
      // 基于准备好的dom，初始化echarts实例
      const paymentChart = echarts.init(
        document.getElementById("paymentChart")
      );
      // 绘制图表
      paymentChart.setOption({
        title: { text: "日订单笔数趋势" },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["5-3", "5-4", "5-5", "5-6", "5-7", "5-8", "5-9"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "订单笔数",
            type: "line",
            data: [5, 20, 36, 10, 10, 20, 20]
          }
        ]
      });
      // 基于准备好的dom，初始化echarts实例
      const moneyChart = echarts.init(document.getElementById("moneyChart"));
      // 绘制图表
      moneyChart.setOption({
        title: { text: "日订单金额数趋势" },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["5-3", "5-4", "5-5", "5-6", "5-7", "5-8", "5-9"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "订单金额",
            type: "line",
            data: [5, 20, 36, 10, 10, 20, 20]
          }
        ]
      });
      // 基于准备好的dom，初始化echarts实例
      const storeRateChart = echarts.init(
        document.getElementById("storeRateChart")
      );
      // 绘制图表
      storeRateChart.setOption({
        title: { text: "日圈存充值比趋势" },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["5-3", "5-4", "5-5", "5-6", "5-7", "5-8", "5-9"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "圈存充值比",
            type: "line",
            data: [5, 20, 36, 10, 10, 20, 20]
          }
        ]
      });
      // 基于准备好的dom，初始化echarts实例
      const channelChart = echarts.init(
        document.getElementById("channelChart")
      );
      // 绘制图表
      channelChart.setOption({
        title: { text: "充值渠道分布" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: [
            "iOS APP",
            "Android APP",
            "微信服务号",
            "掌贝POS",
            "大手机自助终端"
          ],
          selected: [
            "iOS APP",
            "Android APP",
            "微信服务号",
            "掌贝POS",
            "大手机自助终端"
          ]
        },
        series: [
          {
            name: "充值渠道分布",
            type: "pie",
            radius: ["30%", "90%"],
            avoidLabelOverlap: false,
            data: [
              { value: 335, name: "iOS APP" },
              { value: 310, name: "Android APP" },
              { value: 234, name: "微信服务号" },
              { value: 135, name: "掌贝POS" },
              { value: 1548, name: "大手机自助终端" }
            ]
          }
        ]
      });
      // 基于准备好的dom，初始化echarts实例
      const storeRateBarChart = echarts.init(
        document.getElementById("storeRateBarChart")
      );
      // 绘制图表
      storeRateBarChart.setOption({
        title: { text: "各渠道充值圈存比" },
        xAxis: {
          type: "category",
          data: [
            "iOS APP",
            "Android APP",
            "微信服务号",
            "掌贝POS",
            "大手机自助终端"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [30, 40, 0, 100, 100],
            type: "bar"
          }
        ]
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 300px;
  width: 100%;
  height: 100%;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

