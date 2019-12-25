<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :tabControlItems="tabControlItems"
                 ref="tabControl1"
                 class="tab-control"
                 @tabClick="tabClick"
                 v-show="isShowTabControl" />
    <scroll ref="scroll"
            @scroll="contentScroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp="pullingUp">
      <home-swiper :banners="banners"
                   class="home-swiper"
                   @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <featuer-view />
      <tab-control :tabControlItems="tabControlItems"
                   ref="tabControl2"
                   class="tab-control"
                   @tabClick="tabClick" />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backToTop"
              v-show="isShowBackTop" />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home.js";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComp/HomeSwiper";
import RecommendView from "./childComp/RecommendView";
import FeatuerView from "./childComp/FeatuerView";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatuerView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      tabControlItems: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false,
      isShowTabControl: false,
      tabOffsetTop: 0,
      scrollY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  destory() {
    console.log("destory");
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(this.scrollY);
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY();
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //1.图片加载完成的事件监听
    this.$bus.$on("itemLoadImage", () => {
      if (this.$refs.scroll) this.$refs.scroll.refresh();
    });
  },
  methods: {
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].page = res.data.page;
        this.goods[type].list.push(...res.data.list);
        this.$refs.scroll.finishPullUp();
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backToTop() {
      this.$refs.scroll.scrollToTopAnimated(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isShowTabControl = -position.y > this.tabOffsetTop;
    },
    pullingUp() {
      this.getHomeGoods(this.currentType);
    },
    // 获取tabControl的offsetTop
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  }
};
</script>

<style scoped>
.home {
  margin-bottom: 49px;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: relative;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
