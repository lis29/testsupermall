<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

@Component({
  components: {
    MainTabBar
  }
})
export default class App extends Vue {}
</script>

<style>
@import "assets/css/base.css";
</style>
