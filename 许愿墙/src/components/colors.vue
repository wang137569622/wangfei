<template>
  <ul>
    <li
      v-for="(item,i) in colors"
      :key="i"
      :style="{background:item}"
      :class="current === i ? 'red' : ''"
      @click="addColor(item, i)"
    ></li>
  </ul>
</template>

<script>
export default {
  name: "",
  props: ["col"],
  data() {
    return {
      colors: ["red", "blue", "black", "pink", "yellow"],
      current: -1,
    };
  },
  components: {},
  mounted() {},
  methods: {
    addColor(color, i) {
      this.current = i;
      this.$emit("send:color", color);
    },
  },
  watch: {
    col(to) {
      if (!this.col) {
        this.current = -1;
      } else {
        this.colors.forEach((item, i) => {
          if (item === to) {
            this.current = i;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  li {
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }
  .red {
    border: 2px solid rgb(15, 238, 52);
  }
}
</style>