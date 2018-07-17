<template>
    <div style="padding:20px;">
      <div>
          <div class="babel vcenter">
            <my-break></my-break>
          </div>
          <div class="input search ">
            <el-row  type="flex">
              <el-col :span="4" >
                <div class="grid-content bg-purple">
                  <el-input  placeholder="商户编号"></el-input>
                </div>
                </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple-light">
                  <el-select v-model="value5" clearable placeholder="类型(必选)">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple">
                  <el-input  placeholder="卡号"></el-input>
                </div>
              </el-col>
              <el-col :span="6" :offset="1">
                <div class="grid-content bg-purple">
                  <!-- <el-input  placeholder="用户名"></el-input> -->
                  <!-- <div class="data"> -->
                    <!-- <div class="block"> -->
                      <!-- {{value6}} -->
                      <el-date-picker
                        v-model="value6"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                      </el-date-picker>
                    <!-- </div> -->
                  <!-- </div> -->
                  </div>
                </el-col>
            </el-row>
            <br>
            <el-row type="flex">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <el-input  placeholder="原始交易金"></el-input>
                </div>
              </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple-light">
                  <!-- <div class="input-it"> -->
                    <el-input
                      class=""
                      placeholder="检索参考号"
                      prefix-icon="el-icon-search"
                      v-model="input21">
                    </el-input>
                  <!-- </div> -->
                </div>
              </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple-light">
                  <!-- <div class="input-it"> -->
                    <el-input
                      class=""
                      placeholder="退货资金支付途径"
                      v-model="input21">
                    </el-input>
                  <!-- </div> -->
                </div>
              </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple-light">
                  <!-- <div class="input-it"> -->
                    <el-input
                      class=""
                      placeholder="联系人"
                      v-model="input21">
                    </el-input>
                  <!-- </div> -->
                </div>
              </el-col>
            </el-row>
            <br>
            <el-row type="flex">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <el-input  placeholder="联系电话"></el-input>
                </div>
              </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple-light">
                  <!-- <div class="input-it"> -->
                    <el-input
                      class=""
                      placeholder="申请原因"
                      v-model="input21">
                    </el-input>
                  <!-- </div> -->
                </div>
              </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple-light">
                  <!-- <div class="input-it"> -->
                    <el-input
                      class=""
                      placeholder="机构编号"
                      v-model="input21">
                    </el-input>
                  <!-- </div> -->
                </div>
              </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple-light">
                  <!-- <div class="input-it"> -->
                    <el-input
                      class=""
                      placeholder="劳类型"
                      v-model="input21">
                    </el-input>
                  <!-- </div> -->
                </div>
              </el-col>
            </el-row>
            <br>
            <el-row type="flex">
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <el-input  placeholder="扣款渠暹"></el-input>
                </div>
              </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple-light">
                  <!-- <div class="input-it"> -->
                    <el-input
                      class=""
                      placeholder="商户退货订单号"
                      v-model="input21">
                    </el-input>
                  <!-- </div> -->
                </div>
              </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple-light">
                  <!-- <div class="input-it"> -->
                    <el-input
                      class=""
                      placeholder="备注"
                      v-model="input21">
                    </el-input>
                  <!-- </div> -->
                </div>
              </el-col>
              <el-col :span="6" :offset="1">
                <div class="grid-content bg-purple">
                  <el-button  type="primary"  class="serach-btn" @click.native="search">录入</el-button>
                  <el-button  type="info" icon="el-icon-refresh" class="serach-btn">重置</el-button>
                </div>
              </el-col>
            </el-row>
            <br>
          </div>  
        </div>

    </div>
</template>
<script>
import myBreak from "./break/break";
export default {
  components: {
    myBreak
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "消费"
        },
        {
          value: "选项2",
          label: "地址"
        },
        {
          value: "选项3",
          label: "pos"
        },
        {
          value: "选项4",
          label: "银行"
        }
      ],
      value5: "",

      input21: "",
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value6: "",
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      currentPage3: 1
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    search() {
      // Loading.service(options);
      // alert(3);
      this.$loading({
        body: true,
        text: "加载中",
        background: "rgba(0, 0, 0, .8 )"
      });
      setTimeout(() => {
        this.$loading().close();
      }, 2000);
    }
  }
};
</script>
<style scoped>
.block {
  float: right;
  padding: 30px;
}
.page {
  padding: 30px;
}
.babel {
  padding: 20px;
}
</style>
