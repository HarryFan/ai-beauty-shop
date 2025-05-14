<template>
  <div class="app">
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
          :alt="banner.title"
          fit="cover"
          class="banner-image"
        />
      </van-swipe-item>
    </van-swipe>

    <!-- 分類導航區 -->
    <van-grid :column-num="4" :border="false" class="category-nav">
      <van-grid-item
        v-for="category in categories"
        :key="category.id"
        :text="category.name"
        @click="handleCategoryClick(category)"
      />
    </van-grid>

    <!-- 商品展示區 -->
    <div class="products">
      <van-grid :column-num="2" :gutter="10">
        <van-grid-item v-for="product in products" :key="product.id">
          <van-card
            :price="product.price"
            :title="product.name"
            :thumb="product.image"
            class="product-card"
          >
            <template #tags>
              <van-tag v-if="product.isNew" type="danger">新品</van-tag>
            </template>
          </van-card>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 底部導航欄 -->
    <van-tabbar v-model="activeTab" route>
      <van-tabbar-item icon="shop-o" to="/">商城</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分類</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">個人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 排序選項
const sortValue = ref(0)
const sortOptions = [
  { text: '綜合排序', value: 0 },
  { text: '價格由高到低', value: 1 },
  { text: '價格由低到高', value: 2 },
  { text: '最新上架', value: 3 },
]

// 輪播圖數據
const banners = ref([
  { image: '/src/assets/images/banner01.webp', title: '春季特賣' },
  { image: '/src/assets/images/banner02.webp', title: '新品上市' },
])

// 分類數據
const categories = ref([
  { id: 1, name: '唇部' },
  { id: 2, name: '眼影' },
  { id: 3, name: '卸妝' },
  { id: 4, name: '保養' },
])

// 商品數據
const products = ref([
  {
    id: 1,
    name: '精緻保濕唇膏',
    price: '580.00',
    image: '/src/assets/images/simple01.jpeg',
    isNew: true,
  },
  {
    id: 2,
    name: '玫瑰光澤眼影盤',
    price: '980.00',
    image: '/src/assets/images/simple02.jpeg',
  },
  {
    id: 3,
    name: '溫和卸妝精華',
    price: '780.00',
    image: '/src/assets/images/simple03.jpeg',
  },
])

// 當前選中的底部標籤
const activeTab = ref(0)

// 處理分類點擊
const handleCategoryClick = (category) => {
  console.log('點擊分類：', category.name)
}
</script>

<style>
.app {
  min-height: 100vh;
  background-color: #f7f8fa;
  padding-bottom: 50px;
}

.banner {
  margin-bottom: 12px;
}

.banner-image {
  width: 100%;
  height: 160px;
}

@media (min-width: 768px) {
  .banner-image {
    height: 400px;
  }
  .products {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.category-nav {
  background-color: #fff;
  margin-bottom: 12px;
}

.products {
  padding: 12px;
}

.product-card {
  background-color: #fff;
  border-radius: 8px;
}

.van-card__title {
  font-size: 14px;
}

.van-card__price {
  color: #ee0a24;
  font-size: 16px;
  font-weight: bold;
}
</style>
