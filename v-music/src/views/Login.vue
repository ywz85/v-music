<template>
  <div class="app">
    <div class="box">
      <el-container class="container">
        <!-- header部分，头部标题 -->
        <el-header class="header" height="70px">
          <span class="el-icon-aim goHome" @click="goHome"></span>
          <span class="title">登录</span>
          <span class="register" @click="goRegister">注册</span>
        </el-header>
        <!-- main部分，输入框 -->
        <el-main class="main">
          <div class="account">
            <div class="text">账号:</div>
            <el-input
              class="input"
              type="text"
              placeholder="手机号"
              clearable
              v-model="account"
            />
          </div>
          <div class="password">
            <div class="text">密码:</div>
            <el-input
              class="input"
              type="password"
              placeholder="密码"
              clearable
              show-password
              v-model="password"
            />
          </div>
        </el-main>
        <!-- footer部分，底部按钮 -->
        <el-footer class="footer" height="100px">
          <el-button class="button-login" type="primary" round @click="login"
            >登录</el-button
          >
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
      uid: "",
    };
  },
  methods: {
    goHome() {
      this.$router.push("/square");
    },
    goRegister() {
      this.$router.push("/register");
    },
    login() {
      const url = "http://localhost:3000/login/cellphone";
      this.axios
        .post(url, {
          phone: this.account,
          password: this.password,
        })
        .then((res) => {
          console.log("登录:", res);
          this.uid = res.data.account.id;
          this.$router.push({
            path: "/square",
            query: { uid: this.uid },
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
:not(not) {
  box-sizing: border-box;
}
.app {
  height: 100%;
}
.box {
  border: 3px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    // border: 1px solid green;
    margin: 220px 600px;
    height: 500px;
    width: 300px;
    border-radius: 10px;
    box-shadow: (2px 2px 8px 5px rgba(0, 0, 0, 0.5));
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    .header {
      // border: 1px solid green;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .goHome {
        display: inline-block;
        text-align: left;
        width: 50px;
        font-size: 30px;
        color: #fff;
        // border: 1px solid red;
      }
      .title {
        display: inline-block;
        text-align: left;
        width: 55px;
        font-size: 25px;
        color: #fff;
      }
      .register {
        display: inline-block;
        text-align: center;
        width: 50px;
        color: #ccc;
        font-size: 16px;
        // border: 1px solid red;
        user-select: none;
      }
    }
    .main {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .account,
      .password {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 60%;
        height: 35px;
        // border: 1px solid black;
        .text {
          // border: 1px solid red;
          height: 100%;
          width: 50px;
          font-size: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
        }
        .input {
          height: 40px;
          width: 100%;
          font-size: 16px;
        }
      }
    }
    .footer {
      // border: 1px solid green;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .button-login {
        width: 50%;
      }
    }
  }
}
</style>