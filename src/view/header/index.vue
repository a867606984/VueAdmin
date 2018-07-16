<template>
    <div>
        <header>
            <div class="logo"></div>
            <div class="menu vhbetween">
               <p></p>
               <!-- <el-dropdown split-button type="primary" @click="handleClick" class="down-menu">
                    <router-link :to="{path:'/appMenu/home/unionPay'}" style="color:#fff;">第一页</router-link>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="login">登陆</el-dropdown-item>
                        <el-dropdown-item>注册</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown> -->
                <ul>
                  <!-- <li @mouseover="over" @mouseout="out" :class="{active:isOver}">管理员</li>
                  <li>修改信息</li>
                  <li>修改密码</li>
                  <li>退出</li> -->
                  <li v-for="(item,index) in menuArr" :key="index"  @mouseover="over(index)" @mouseout="out" @click="topMenuClick(index)" :class="{active:isOver&&curIndex==index}">
                    <!-- <i :class="item.icon"></i> -->
                    <icon :name="item.icon" scale="1.2" ></icon> {{item.name}}
                  </li>
                  <li>
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        更多<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>用户管理</el-dropdown-item>
                        <el-dropdown-item divided>用户管理</el-dropdown-item>
                        <el-dropdown-item divided>用户管理</el-dropdown-item>
                        <el-dropdown-item divided>用户管理</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </li>
                </ul>
            </div>
        </header>
        <el-menu
            :default-active="getPath($route.path)"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#002140"
            text-color="#fff"
            active-text-color="#409EFF"
            router
            >
            <el-menu-item index="/appMenu/home">
              <!-- <i class="fas fa-money-check-alt"></i>  -->
              对账系统  
              <!-- <router-link to="/home">处理中心</router-link> -->
            </el-menu-item>
             <el-menu-item index="/appMenu/cross">
              <!-- <i class="fas fa-mobile-alt"></i>  -->
              通行业务移动支付日信息统计
               <!-- <router-link to="/platform">我的工作台</router-link> -->
            </el-menu-item>
            <el-menu-item index="/appMenu/ltb">
              <!-- <i class="fas fa-money-check-alt"></i>  -->
              辽通宝报表分析系统
              <!-- <router-link to="/order">订单管理</router-link> -->
            </el-menu-item>
            <el-menu-item index="/appMenu/platform">
              <!-- <i class="fas fa-money-check-alt"></i>  -->
              支付平台报表分析系统
              <!-- <router-link to="/order">订单管理</router-link> -->
            </el-menu-item>
            <el-menu-item index="/appMenu/settlement">
              <!-- <i class="fas fa-money-check-alt"></i>  -->
              清分结算系统
              <!-- <router-link to="/order">订单管理</router-link> -->
            </el-menu-item>
            <el-menu-item index="/appMenu/search">
              <!-- <i class="fas fa-money-check-alt"></i>  -->
              个人账单查询子系统
              <!-- <router-link to="/order">订单管理</router-link> -->
            </el-menu-item>
            <el-menu-item index="/appMenu/control">
              <!-- <i class="fas fa-money-check-alt"></i>  -->
              风控管理子系统
              <!-- <router-link to="/order">订单管理</router-link> -->
            </el-menu-item>
            <el-menu-item index="/appMenu/returnGoods">
            <!-- <icon name="beer"></icon> -->
              <!-- <icon name="adjust"></icon> -->
              退货管理子系统
              <!-- <router-link to="/order">订单管理</router-link> -->
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
  components: {
    // navMenu
  },

  data() {
    return {
      activeIndex: "/home/unionPay",
      activeIndex2: "/home/unionPay",
      isOver: false,
      menuArr: [
        { name: "管理员", icon: "adjust" },
        { name: "修改信息", icon: "flag" },
        { name: "修改密码", icon: "cogs" },
        { name: "退出", icon: "arrow-circle-right" }
      ],
      curIndex: 0
    };
  },

  methods: {
    over(index) {
      this.isOver = true;
      this.curIndex = index;
    },
    out() {
      this.isOver = false;
    },
    topMenuClick(index) {
      if (index == 3) {
        this.$router.push("/login");
      }
    },
    getPath(path) {
      return `/${path.split("/")[1]}/${path.split("/")[2]}`;
    },
    handleClick() {
      alert("button click");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
header {
  width: 100%;
  overflow: hidden;
  background: rgb(0, 33, 64);
  border-bottom: 0.01rem solid #fff;
}
.el-dropdown {
  vertical-align: top;
  color: #fff;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.logo {
  float: left;
  width: 50%;
  height: 80px;
  /* background: #eee; */
}
.menu {
  float: left;
  width: 50%;
  height: 80px;
  /* background: lightblue; */
}

.menu ul {
  /* width: 100%; */
  /* float: right; */
  overflow: hidden;
  display: inline-block;
  background: #409eff;
  border-radius: 5px;
}
.menu ul li {
  float: left;
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.menu ul li.active {
  background: #7ebeff;
  color: #fff;
}
.down-menu {
  margin-right: 30px;
}
.fas {
  margin-right: 5px;
}
.fa-icon {
  /* 或任意其它字体大小相对值 */
  /* width: auto;
  height: 1em;  */
  /* 要在 Safari 中正常工作，需要再引入如下两行代码 */
  /* max-width: 100%;
  max-height: 100%; */
  vertical-align: middle;
}
</style>
