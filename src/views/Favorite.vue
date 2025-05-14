<template>
  <div class="favorite-page">
    <van-nav-bar title="我的收藏" fixed placeholder />
    <van-list :finished="finished" :immediate-check="false">
      <van-card
        v-for="item in favoriteList"
        :key="item.id"
        :title="item.title"
        :desc="item.desc"
        :price="item.price"
        :thumb="item.image"
        class="favorite-card"
      >
        <template #tags>
          <van-icon name="like" color="#ee4d2d" size="18" />
        </template>
      </van-card>
    </van-list>
    <van-empty v-if="!favoriteList.length" description="暫無收藏商品" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const favoriteList = ref([
  { id: 1, title: '保濕面膜', desc: '深層補水，溫和修護', price: 199, image: '/src/assets/images/simple01.jpeg' },
  { id: 2, title: '亮白精華', desc: '提亮膚色，淡化斑點', price: 399, image: '/src/assets/images/simple02.jpeg' }
])
const finished = ref(true)
</script>

<style scoped>
.favorite-page {
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 20px;
}
.favorite-card {
  margin: 12px 12px 0 12px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
:deep(.van-card__thumb) {
  border-radius: 6px;
  width: 80px;
  height: 80px;
}
:deep(.van-card__title) {
  font-size: 14px;
  color: #323233;
}
:deep(.van-card__desc) {
  font-size: 12px;
  color: #969799;
}
:deep(.van-card__price) {
  font-size: 16px;
  color: #ee4d2d;
  font-weight: 600;
}
</style>
