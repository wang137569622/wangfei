<template>
  <div id="about">
    <headers>许愿墙</headers>
    <my-input v-model="dream"></my-input>
    <colors @send:color="getColor" :col="color"></colors>
    <button class="btn" :disabled="disabled" @click="add">{{text}}</button>

    <div class="box">
      <div
        class="detail"
        v-for="(item,i) in dreams"
        :key="item.id"
        :style="{
          background: item.color,
          left: item.posX,
          top: item.posY
        }"
        @touchstart="touchstart(i,$event)"
        @touchmove="touchmove"
        @touchend="touchend"
      >
        <span class="del" @click="del(i)">X</span>
        <span class="card">{{item.dream}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "@/components/header";
import myInput from "@/components/myInput";
import colors from "@/components/colors";
export default {
  name: "",
  data() {
    return {
      text: "再想想",
      disabled: true, //按钮不能点
      color: "", //选择的颜色
      dream: "",
      dreams: [],
      posX: 0,
      posY: 0,
      i: 0,
    };
  },
  components: { headers, myInput, colors },
  created() {
    this.dreams = JSON.parse(localStorage.getItem("dreams")) || [];
  },
  methods: {
    getColor(color) {
      this.color = color;
    },
    add() {
      let obj = {
        dream: this.dream,
        posX: Math.random() * 260 + "px",
        posY: Math.random() * 247 + 300 + "px",
        id: new Date().getTime(),
        color: this.color,
      };
      this.dreams.push(obj);
      this.color = "";
      this.dream = "";
    },
    touchstart(i, e) {
      this.posX = e.touches[0].pageX - parseFloat(this.dreams[i].posX);
      this.posY = e.touches[0].pageY - parseFloat(this.dreams[i].posY);
      this.i = i;
    },
    touchmove(e) {
      let left = e.touches[0].pageX - this.posX;
      let top = e.touches[0].pageY - this.posY;
      this.dreams[this.i].posX = left + "px";
      this.dreams[this.i].posY = top + "px";
    },
    touchend() {
      localStorage.setItem("dreams", JSON.stringify(this.dreams));
    },
    del(i) {
      this.dreams.splice(i, 1);
    },
  },
  watch: {
    dream(to) {
      if (to && this.color) {
        this.disabled = false;
        this.text = "许愿";
      } else {
        this.disabled = true;
        this.text = "再想想";
      }
    },
    color(to) {
      if (to && this.dream) {
        this.disabled = false;
        this.text = "许愿";
      } else {
        this.disabled = true;
        this.text = "再想想";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#about {
  text-align: center;
  width: 100%;
  .btn {
    padding: 6px 30px;
    border-radius: 6px;
    margin-top: 10px;
    background-color: yellowgreen;
  }
  .btn[disabled] {
    background-color: #ccc;
  }
  .box {
    width: 100%;
    height: calc(100% - 300px);
    .detail {
      position: absolute;
      width: 100px;
      height: 100px;
      color: rgb(21, 233, 56);
      span {
        text-align: center;
        line-height: 80px;
        width: 100px;
      }
      .del {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        line-height: 20px;
        background-color: white;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>