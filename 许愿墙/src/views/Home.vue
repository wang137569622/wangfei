<template>
  <div>
    <headers>登录</headers>
    <div class="ipt">
      <p>
        名称：
        <input type="text" v-model="form.name" />
      </p>
      <p>
        手机：
        <input type="text" v-model="form.tel" />
      </p>
      <p>
        密码：
        <input type="text" v-model="form.pwd" />
      </p>
      <button :disabled="disabled" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

var reg = /^1[3|5|6|7|8|9]\d{9}$/;
import headers from "@/components/header";
export default {
  name: "",
  data() {
    return {
      disabled: true,
      form: {
        name: "",
        tel: "",
        pwd: "",
      },
    };
  },
  components: {
    headers,
  },
  mounted() {},
  methods: {
    login() {
      if (!reg.test(this.form.tel)) {
        Toast.fail("请填写正确手机号码");
      } else if (this.form.pwd.length < 2) {
        Toast.fail("密码不能少于6位");
      } else {
        this.$store.commit("login", this.form);

        this.$router.push("/about");
      }
    },
  },
  watch: {
    form: {
      deep: true,
      handler(val) {
        if (val.name && val.tel && val.pwd) {
          this.disabled = false;
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.ipt {
  text-align: center;
  margin-top: 50px;
  p {
    margin: 5px 0;
  }
}
</style>
