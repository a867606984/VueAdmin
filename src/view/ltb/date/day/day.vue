<template>
    <div style="padding:20px;">
      <div class="comtainer">
            <div class="babel vcenter">
           <my-break></my-break>
          </div>
          <div class="input search ">
            <el-row  type="flex">
              <el-col :span="4" >
                <div class="grid-content bg-purple">
                  <el-input  placeholder="用户名"></el-input>
                </div>
                </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple-light">
                  <el-input  placeholder="邮箱"></el-input>
                </div>
              </el-col>
              <el-col :span="4" :offset="1">
                <div class="grid-content bg-purple">
                  <el-input  placeholder="手机号"></el-input>
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
                  <el-select v-model="value5" clearable placeholder="类型">
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
                <div class="grid-content bg-purple-light">
                  <!-- <div class="input-it"> -->
                    <el-input
                      class=""
                      placeholder="请输入搜索内容"
                      prefix-icon="el-icon-search"
                      v-model="input21">
                    </el-input>
                  <!-- </div> -->
                </div>
              </el-col>
              <el-col :span="6" :offset="1">
                <div class="grid-content bg-purple">
                  <el-button  type="primary" icon="el-icon-search" class="serach-btn" @click.native="search">搜索</el-button>
                  <el-button  type="info" icon="el-icon-refresh" class="serach-btn">重置</el-button>
                </div>
              </el-col>
            </el-row>
            <br>
          </div>  
        </div>
        <el-table
          :data="tableData"
          style="width: 100%"
          border
          >
          <el-table-column
            type="index"
            :index="indexMethod"
            align="center"
            >
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            width="180"
            align="center"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
            align="center"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            align="center"
            >
          </el-table-column>
        </el-table>
        <div class="page">
          <!-- <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination> -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="10"
              layout="prev, pager, next, jumper"
              :total="100">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import myBreak from "../../break/break";
export default {
  components: {
    myBreak
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "id"
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
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "公司"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "家"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          tag: "公司"
        }
      ],
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
    },
    indexMethod(index) {
      return index * 2;
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
