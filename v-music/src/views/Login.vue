<template>
  <div class="app">
    <div class="box">
      <el-container class="container">
        <!-- header部分，头部标题 -->
        <el-header class="header" height="70px">
          <span class="el-icon-back goHome" @click="goHome"></span>
          <span class="title">登录</span>
          <span class="register" @click="goRegister">注册</span>
        </el-header>
        <!-- main部分，输入框 -->
        <el-main class="main">
          <div class="account">
            <el-input
              class="input"
              type="text"
              placeholder="手机号"
              clearable
              size="small"
              v-model="account"
            />
          </div>
          <div class="password">
            <el-input
              class="input"
              type="password"
              placeholder="密码"
              clearable
              show-password
              size="small"
              v-model="password"
            />
          </div>
        </el-main>
        <!-- footer部分，底部按钮 -->
        <el-footer class="footer" height="100px">
          <!-- 登录按钮 -->
          <el-button class="button-login" type="primary" plain @click="login"
            ><span class="el-icon-check"></span
          ></el-button>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 530px;
  height: 500px;
  .container {
    // border: 1px solid blue;
    // margin: 220px 600px;
    // height: 400px;
    // width: 150px;
    border-radius: 10px;
    box-shadow: (2px 2px 8px 5px rgba(0, 0, 0, 0.3));
    // background-color: rgba(192, 192, 192, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
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
        transition: all 0.2s;
        // border: 1px solid red;
        &:hover {
          transition: all 0.2s;
          transform: scale(1.2);
        }
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
        color: #808069;
        font-size: 16px;
        // border: 1px solid red;
        user-select: none;
        transition: all 0.4s;
        &:hover {
          transition: all 0.4s;
          transform: scale(1.2);
          color: #fff;
        }
      }
    }
    .main {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      // padding: 40px 0;
      height: 200px;
      // border: 1px solid red;
      .account,
      .password {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60%;
        height: 34px;
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
          height: 34px;
          width: 100%;
          font-size: 16px;
          // border: 1px solid green;
          transition: all 0.2s ease-out;
          &:hover {
            transition: all 0.2s ease-out;
            transform-style: preserve-3d;
            transform-origin: center;
            transform: perspective(500px) translate3d(0, 0, 50px);
          }
        }
      }
    }
    .footer {
      // border: 1px solid green;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .button-login {
        width: 40%;
        padding: 5px;
        border-radius: 20px;
        background-image: linear-gradient(
          135deg,
          #41dfdd,
          #57e8d1,
          #74f1c2,
          #96f7b1
        );
        // background-color: #dd471f;
        border: none;
        &:active {
          transition: all 0.1s;
          transform: scale(0.6, 0.6);
        }
        span {
          font-size: 25px;
          color: #fff;
        }
      }
    }
  }
}
</style>