<template>
  <div class="home">
    <!-- 頂部導航區 -->
    <van-nav-bar
      title="春季特賣"
      fixed
      placeholder
    >
      <template #right>
        <van-dropdown-menu>
          <van-dropdown-item v-model="sortValue" :options="sortOptions" />
        </van-dropdown-menu>
      </template>
    </van-nav-bar>

    <!-- 輪播廣告區 -->
    <van-swipe class="banner" :autoplay="3000" indicator-color="#1989fa">
      <van-swipe-item v-for="(banner, index) in banners" :key="index">
        <van-image
          :src="banner.image"
          width="100%"
          height="160"
          fit="cover"
        />
      </van-swipe-item>
    </van-swipe>

    <!-- 分類導航區 -->
    <van-grid :column-num="3" :border="false">
      <van-grid-item v-for="category in categories" :key="category.id" :text="category.name">
        <template #icon>
          <van-icon :name="category.icon" :size="28" />
        </template>
      </van-grid-item>
    </van-grid>

    <!-- 商品展示區 -->
    <div class="products">
      <van-card
        v-for="product in products"
        :key="product.id"
        :price="product.price"
        :title="product.title"
        :thumb="product.image"
      >
        <template #tags>
          <van-icon name="like-o" size="20" />
        </template>
      </van-card>
    </div>

    <!-- 底部導航欄 -->
    <van-tabbar v-model="activeTab" route>
      <van-tabbar-item icon="home-o" to="/">商城</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分類</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 排序選項
const sortValue = ref(0)
const sortOptions = [
  { text: '默認排序', value: 0 },
  { text: '價格排序', value: 1 },
  { text: '人氣排序', value: 2 },
  { text: '最新上架', value: 3 }
]

// 底部標籤頁
const activeTab = ref(0)

// 輪播圖數據
const banners = ref([
  { image: '/src/assets/images/banner01.webp' },
  { image: '/src/assets/images/banner02.webp' }
])

// 分類數據
const categories = ref([
  { id: 1, name: '唇膏', icon: 'gift-o' },
  { id: 2, name: '眼影', icon: 'eye-o' },
  { id: 3, name: '卸妝', icon: 'clear' }
])

// 商品數據
const products = ref([
  {
    id: 1,
    title: '玫瑰金絲絨唇膏',
    price: '299.00',
    image: '/src/assets/images/simple01.jpeg'
  },
  {
    id: 2,
    title: '星空眼影盤',
    price: '399.00',
    image: '/src/assets/images/simple02.jpeg'
  },
  {
    id: 3,
    title: '溫和卸妝水',
    price: '199.00',
    image: '/src/assets/images/simple03.jpeg'
  }
])
</script>

<style scoped>
.home {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-bottom: 50px;
}

.banner {
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
}

.products {
  padding: 10px;
}

.van-card {
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #fff;
}

:deep(.van-card__title) {
  font-size: 14px;
}

:deep(.van-card__price) {
  color: #ee0a24;
  font-size: 16px;
}
</style>
