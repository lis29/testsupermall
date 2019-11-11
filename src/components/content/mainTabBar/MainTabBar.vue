<template>
  <tab-bar>
    <tab-bar-item path='/home'
                  textActiveColor='deepPink'>
      <img slot="tabbar-item-icon"
           src="~assets/imgs/tabbar/home.svg"
           alt="">
      <img slot="tabbar-item-icon-active"
           src="~assets/imgs/tabbar/home_active.svg"
           alt="">
      <div slot="tabbar-item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category'
                  textActiveColor='deepPink'>
      <img slot="tabbar-item-icon"
           src="~assets/imgs/tabbar/category.svg"
           alt="">
      <img slot="tabbar-item-icon-active"
           src="~assets/imgs/tabbar/category_active.svg"
           alt="">
      <div slot="tabbar-item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/cart'
                  textActiveColor='deepPink'>
      <img slot="tabbar-item-icon"
           src="~assets/imgs/tabbar/shopcart.svg"
           alt="">
      <img slot="tabbar-item-icon-active"
           src="~assets/imgs/tabbar/shopcart_active.svg"
           alt="">
      <div slot="tabbar-item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/profile'
                  textActiveColor='deepPink'>
      <img slot="tabbar-item-icon"
           src="~assets/imgs/tabbar/profile.svg"
           alt="">
      <img slot="tabbar-item-icon-active"
           src="~assets/imgs/tabbar/profile_active.svg"
           alt="">
      <div slot="tabbar-item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tarbar/TabBar.vue";
import TabBarItem from "../../common/tarbar/TabbarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>


<style scoped>
</style>