<template>
  <div class="shop-info">
    <div class="shop-info-top">
      <img :src="shop.shopLogo"
           alt="">
      <span class="shop-name">{{ shop.name }}</span>
    </div>
    <div class="shop-info-mid">
      <div class="left">
        <div class="info-item">
          <div>{{ shop.cSells | sellCountFilter }}</div>
          <span>总销量</span>
        </div>
        <div class="info-item">
          <div>{{ shop.cGoods }}</div>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="right"></div>
      <button></button>
    </div>
    {{ shop }}
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  data() {
    return {};
  },
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter(values) {
      if (values < 10000) return values;
      return (values / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped>
.shop-info-top {
  margin: 10px;
}
.shop-info-top img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.shop-info-top span {
  margin-left: 10px;
  position: relative;
  top: -20px;
}

.shop-info-mid {
  display: flex;
  width: 100%;
  height: 80px;
}
.shop-info-mid .left,
.right {
  flex: 1;
}

.shop-info-mid .left {
  border-right: 1px solid rgba(100, 100, 100, 0.3);
  display: flex;
  width: 50%;
  align-items: center;
}
.shop-info-mid .left .info-item {
  flex: 1;
  text-align: center;
  color: #333;
}
.shop-info-mid .left .info-item div {
  margin-bottom: 6px;
  font-size: 18px;
}
.shop-info-mid .left .info-item span {
  font-size: 14px;
}
</style>