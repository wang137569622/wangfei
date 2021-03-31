<template>
  <div id="header">
    <span>昵称：{{$store.state.user.name}}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 60px;
  background-color: aqua;
  text-align: center;
  position: relative;
  line-height: 60px;
  font-size: 18px;
  span {
    position: absolute;
    left: 10px;
    top: 0;
  }
}
</style>