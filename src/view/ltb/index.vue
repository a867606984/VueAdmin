<template>
    <div class="v-height">
      <el-container>
        <el-aside width="200px" class="v-padding">
          <side-bar></side-bar>
        </el-aside>
        <el-main class="main">
          <!-- <transition name="fade"> -->
            <router-view/>
          <!-- </transition> -->
        </el-main>
      </el-container>
    </div>
</template>
<script>
import sideBar from "./sideBar/sideBar";
export default {
  components: { sideBar },
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
      }
    };
  },
  methods: {
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
.search {
  width: 100%;
  /* background: rgba(0, 0, 0, .2) */
  overflow: hidden;
  padding: 0 20px;
  /* justify-content: space-between; */
}
.small-menu {
  float: left;
}
.input {
  float: right;
}
.input-it {
  /* float: left; */
  padding: 0 30px;
}
.serach-btn {
  /* float: left;

  margin-left: 10px; */
}

.el-input {
  /* width: 200px; */
}

.data {
  /* float: left; */
  /* margin-right: 10px; */
}
.main {
  padding: 10px;
}
.comtainer {
  border: 1px solid #ccc;
}
.babel {
  padding: 20px;
}
</style>
