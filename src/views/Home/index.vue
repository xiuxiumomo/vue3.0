<template>
  <div class="home">
    {{num}}
    <div>{{params.name}}</div>
  </div>
</template>

<script>
import { reactive, ref, onMounted, watch, toRefs } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const state = reactive({
      params: {
        name: "jack",
        age: 10,
      },
    });
    const num = ref(0);
    onMounted(() => {
      getList();
    });
    const getList = () => {
      console.log(num.value);
    };

    watch(
      () => state.bannerData,
      () => {}
    );

    return {
      num: 111,
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.slideShow {
  .swiper-container {
    width: 100%;
    height: 200px;
    border: 3px #e9e9e9 solid;
    border-radius: 4px;
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    box-sizing: border-box;
    .swiper-pagination {
      --swiper-theme-color: #a9caed;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    img {
      width: 100%;
      height: 200px;
      border-radius: 4px;
    }
  }
}

.article-list {
  width: 100%;
  max-height: 600px;
  margin-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  background: #fff;
  h2 {
    display: inline-block;
    line-height: 40px;
    color: rgb(78, 78, 78);
    border-bottom: 1px solid #c2bdbd;
  }
  .swiper-slide,
  .swiper-slide-active {
    padding: 0px !important;
  }
  .article-item {
    width: 90%;
    background: #f9f9f9;
    border-radius: 6px;
    margin: 10px auto;
    display: flex;
    padding: 10px;
    .title {
      width: 250px;
      color: #333;
      font-size: 18px;
      font-weight: 700;
      text-align: left;
      line-height: 36px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }
    .content {
      font-size: 14px;
      line-height: 22px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      text-align: left;
      color: rgb(148, 148, 148);
    }
    & > div {
      width: 400px;
      margin-right: 10px;
    }
    & > img {
      width: 100px;
      height: 85px;
    }
  }
}

.article-box {
  .swiper-container {
    width: 100%;
    height: 500px;
  }
  .swiper-slide {
    font-size: 18px;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px;
  }
  .swiper-wrapper {
    transition: all 1s;
  }
}
</style>
