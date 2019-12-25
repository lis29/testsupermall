<template>
  <div>
    <nav-bar>
      <div slot="left"
           class="back"
           @click="backClick">
        <img src="~assets/imgs/common/back.svg"
             alt="">
      </div>
      <div slot="center"
           class="title">
        <div v-for="(item, index) in titles"
             class="title-item"
             :class="{active:
             currentIndex === index}"
             @click="titleItemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      isActive: true
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    titleItemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.back img {
  margin-top: 11px;
}
.title {
  display: flex;
  font-size: 15px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>