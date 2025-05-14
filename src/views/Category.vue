<template>
  <div class="category">
    <van-nav-bar title="分類" fixed placeholder />
    
    <div class="category-container">
      <!-- 左側分類導航 -->
      <div class="category-nav">
        <div
          v-for="(category, index) in categories"
          :key="category.id"
          class="category-nav-item"
          :class="{ active: activeCategory === index }"
          @click="activeCategory = index"
        >
          {{ category.name }}
        </div>
      </div>

      <!-- 右側商品分類展示 -->
      <div class="category-content">
        <div class="category-title">{{ categories[activeCategory].name }}</div>
        <van-grid :column-num="3" :border="false" :gutter="8">
          <van-grid-item v-for="item in categories[activeCategory].items" :key="item.id">
            <template #icon>
              <van-image
                :src="item.image"
                width="60"
                height="60"
                radius="4"
              />
            </template>
            <template #text>
              <span class="grid-text">{{ item.name }}</span>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

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

const activeTab = ref(1)
const activeCategory = ref(0)

// 模擬分類數據
const categories = ref([
  {
    id: 1,
    name: '唇妆',
    items: [
      { id: 11, name: '潔面乳', image: '/src/assets/images/simple01.jpeg' },
      { id: 12, name: '精華液', image: '/src/assets/images/simple02.jpeg' },
      { id: 13, name: '面膜', image: '/src/assets/images/simple03.jpeg' },
      { id: 14, name: '紅唇膏', image: '/src/assets/images/simple01.jpeg' },
      { id: 15, name: '眼影', image: '/src/assets/images/simple02.jpeg' },
      { id: 16, name: '粉底液', image: '/src/assets/images/simple03.jpeg' }
    ]
  },
  {
    id: 2,
    name: '眼部',
    items: [
      { id: 21, name: '睡眠面膜', image: '/src/assets/images/simple02.jpeg' },
      { id: 22, name: '眼霜', image: '/src/assets/images/simple03.jpeg' },
      { id: 23, name: '眼部精華', image: '/src/assets/images/simple01.jpeg' }
    ]
  },
  {
    id: 3,
    name: '膠原蛋白',
    items: [
      { id: 31, name: '保濕霜', image: '/src/assets/images/simple03.jpeg' },
      { id: 32, name: '精華液', image: '/src/assets/images/simple01.jpeg' },
      { id: 33, name: '精華液', image: '/src/assets/images/simple02.jpeg' }
    ]
  },
  {
    id: 4,
    name: '卸妝',
    items: [
      { id: 41, name: '卸妝液', image: '/src/assets/images/simple01.jpeg' },
      { id: 42, name: '卸妝油', image: '/src/assets/images/simple02.jpeg' },
      { id: 43, name: '卸妝乳', image: '/src/assets/images/simple03.jpeg' }
    ]
  }
])
</script>

<style scoped>
.category {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.category-container {
  display: flex;
  padding-top: 46px;
  padding-bottom: 50px;
}

.category-nav {
  width: 25vw;
  height: calc(100vh - 96px);
  overflow-y: auto;
  background-color: #f7f8fa;
}

.category-nav-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 45px;
  padding: 0 12px;
  font-size: 14px;
  color: #323233;
  cursor: pointer;
}

.category-nav-item.active {
  background-color: #ffffff;
  color: #1989fa;
}

.category-nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  width: 3px;
  height: 100%;
  background-color: #1989fa;
}

.category-content {
  flex: 1;
  height: calc(100vh - 96px);
  overflow-y: auto;
  background-color: #ffffff;
  padding: 0 8px;
}

.category-title {
  padding: 12px 0;
  font-size: 16px;
  font-weight: 500;
  color: #323233;
}

.grid-text {
  font-size: 12px;
  color: #646566;
}
</style>
