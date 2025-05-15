<template>
  <div class="profile">
    <van-nav-bar title="我的" fixed placeholder left-arrow @click-left="$router.back()"  />

    <!-- 用戶信息卡片 -->
    <div class="user-card">
      <div class="user-info">
        <van-image
          :src="userInfo.avatar"
          width="70"
          height="70"
          round
          class="user-avatar"
        />
        <div class="user-detail">
          <div class="user-name">{{ userInfo.name }}</div>
          <van-tag type="warning" size="medium" class="user-level">
            {{ userInfo.level }}
          </van-tag>
        </div>
      </div>
    </div>

    <!-- 訂單狀態欄 -->
    <van-grid :column-num="4" :border="false" class="order-status">
      <van-grid-item v-for="item in orderStatus" :key="item.icon" :icon="item.icon" :text="item.text">
        <template #icon>
          <van-badge :content="item.badge" :offset="[0, 4]">
            <van-icon :name="item.icon" :size="24" />
          </van-badge>
        </template>
      </van-grid-item>
    </van-grid>

    <!-- 功能列表 -->
    <van-cell-group title="我的服務" class="feature-group">
      <van-cell v-for="item in features" :key="item.id" :title="item.title" :icon="item.icon" is-link :to="item.to" />
    </van-cell-group>

    <van-cell-group title="其他服務" class="feature-group">
      <van-cell v-for="item in otherFeatures" :key="item.id" :title="item.title" :icon="item.icon" is-link :to="item.to" />
    </van-cell-group>

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

const activeTab = ref(3)

// 用戶信息
const userInfo = ref({
  avatar: '/src/assets/images/simple01.jpeg',
  name: '美麗達人',
  level: 'VIP 會員'
})

// 訂單狀態
const orderStatus = [
  { icon: 'pending-payment', text: '待付款', badge: '2' },
  { icon: 'logistics', text: '待發貨', badge: '1' },
  { icon: 'completed', text: '待評價', badge: '' },
  { icon: 'after-sale', text: '售後', badge: '' }
]

// 功能列表
const features = [
  { id: 1, title: '我的優惠券', icon: 'coupon-o', to: '/coupon' },
  { id: 2, title: '收貨地址', icon: 'location-o', to: '/address' },
  { id: 3, title: '我的收藏', icon: 'star-o', to: '/favorite' }
]

const otherFeatures = [
  { id: 1, title: '幫助中心', icon: 'question-o', to: '/help' },
  { id: 2, title: '設置', icon: 'setting-o', to: '/setting' }
]
</script>

<style scoped>
.profile {
  min-height: 100vh;
  background-color: #f7f8fa;
  padding-bottom: 50px;
}

.user-card {
  margin-top: 46px;
  padding: 20px 16px;
  background: linear-gradient(135deg, #1989fa, #39bbff);
}

.user-info {
  display: flex;
  align-items: center;
}

.user-avatar {
  border: 2px solid #ffffff;
}

.user-detail {
  margin-left: 16px;
}

.user-name {
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 8px;
}

.user-level {
  padding: 0 8px;
}

.order-status {
  margin: 12px 0;
  background-color: #ffffff;
}

.feature-group {
  margin-top: 12px;
}

:deep(.van-grid-item__content) {
  padding: 16px 8px;
}

:deep(.van-grid-item__text) {
  color: #323233;
  font-size: 12px;
  margin-top: 8px;
}

:deep(.van-cell-group__title) {
  padding: 16px 16px 8px;
  font-size: 14px;
  color: #969799;
  background-color: #f7f8fa;
}
</style>
