<template>
  <div>
    <div class="info-title">
      {{goods.title}}
    </div>

    <div class="info-price">
      <div class="info-new-price">{{ goods.newPrice }}</div>
      <div class="info-old-price">{{ goods.oldPrice }}</div>
      <div class="info-discount"
           v-if="isShowGoodsDiscount"
           :style="{'background-color': goods.discountBgColor}">{{ goods.discount }}
      </div>
    </div>

    <div class="info-other">
      <div v-for="(item, index) in goods.colums"
           :key="index"
           class="info-other-item">
        {{item}}
      </div>
    </div>
    <div class="info-services">
      <div class="info-services-item"
           v-for="(item, index) in goods.services"
           :key="index"
           v-if="index < goods.services.length - 1">
        <img :src="item.icon"
             alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailBaseInfo",
  created() {},
  mounted() {},
  computed: {
    showGoodsInfo() {},
    isShowGoodsDiscount() {
      let res = false;
      if (this.goods.discount) {
        res = this.goods.discount.length > 0;
      }
      return res;
    }
  },
  data() {
    return {};
  },
  props: {
    goods: Object,
    default() {
      return {};
    }
  },
  activated() {
    console.log("detaile base info view activate ....");
    console.log(this.goods);
  }
};
</script>

<style scoped>
.info-price {
  overflow: hidden;
}
.info-title {
  font-size: 16px;
  color: black;
  padding: 15px 10px 10px;
}

.info-new-price {
  font-size: 24px;
  color: var(--color-high-text);
  float: left;
  margin-left: 10px;
}
.info-old-price {
  text-decoration: line-through;
  font: 16px;
  float: left;
  margin-left: 10px;
  margin-top: 6px;
  vertical-align: center;
  position: relative;
  top: 3px;
}
.info-discount {
  font-size: 12px;
  color: #fff;
  float: left;
  padding: 2px 5px;
  text-align: center;
  margin-top: 6px;
  margin-left: 10px;
  border-radius: 8px;
  position: relative;
  top: -3px;
}

.info-other {
  display: flex;
  width: calc(100% - 20px);
  padding: 10px 0 15px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  margin-left: 10px;
}
.info-other-item {
  flex: 1;
  text-align: center;
}
.info-other :first-child {
  text-align: left;
}

.info-other :last-child {
  text-align: right;
}

.info-services {
  display: flex;
  width: 100vw;
  padding: 20px 10px;

  border-bottom: 5px solid rgba(100, 100, 100, 0.1);
}

.info-services-item {
  flex: 1;
  text-align: center;
}
.info-services :first-child {
  text-align: left;
}
.info-services :last-child {
  text-align: right;
}
.info-services-item img {
  width: 14px;
}
.info-services-item span {
  font-size: 13px;
  margin-left: 6px;
  position: relative;
  top: -2px;
}
</style>