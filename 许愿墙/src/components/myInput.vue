<template>
  <div>
    <input type="text" :value="value" @input="ipt" placeholder="讲出你的心愿" />
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    value: "",
  },
  data() {
    return {};
  },
  components: {},
  mounted() {
  },
  methods: {
    ipt(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 80%;
  height: 35px;
  border-radius: 6px;
  outline: none;
  margin: 20px auto;
}
</style>