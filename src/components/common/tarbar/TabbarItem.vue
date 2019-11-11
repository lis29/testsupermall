<template>
  <div class="tabbar-item"
       @click="itemClick">
    <div v-if="!isActive">
      <slot name="tabbar-item-icon"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="tabbar-item-text"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default: "/home"
    },
    textActiveColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.textActiveColor } : {};
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path.indexOf(this.path) == -1) {
        this.$router.replace(this.path);
      }
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin: 3px 2px 0px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>