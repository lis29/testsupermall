<template>
  <div>
    <detail-nav-bar class="detail-nav" />
    <scroll :probe-type="3"
            class="content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods } from "network/detail.js";
import DetailNavBar from "./childComps/DetailNavBar";
import Scroll from "components/common/scroll/Scroll";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    console.log("商品iid ", this.iid);
    // 1.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages;
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shop = res.result.shopInfo;
    });
  },
  destroyed() {
    console.log("detail view destroyed");
  },
  /*组件没有keep-alive的时候下面两个方法不执行*/
  activated() {
    console.log("***activated******");
  },
  deactivated() {
    console.log("detail view deactivated");
  }
};
</script>

<style scoped>
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: fff;
}
li {
  height: 59px;
}

.content {
  width: 100vw;
  height: calc(100% - 44px - 49px);
}
</style>