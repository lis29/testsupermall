<template>
  <div id='tabbar'>
    <slot></slot>
  </div>
</template>


<script>
import TabBarItem from "./TabbarItem";
export default {
  name: "Tarbar",
  components: {
    TabBarItem
  }
};
</script>

<style scoped>
#tabbar {
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #f6f6f6;
  height: 49px;

  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
}
</style>