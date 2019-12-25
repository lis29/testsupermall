<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners">
        <a :href="item.link">
          <img :src="item.image"
               alt=""
               @load="swiperImageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>


<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperImageLoad() {
      this.$emit("swiperImageLoad");
    }
  }
};
</script>

<style lang="stylus"></style>