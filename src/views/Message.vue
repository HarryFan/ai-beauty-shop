<template>
  <div class="message">
    <van-nav-bar title="消息" fixed placeholder />
    
    <!-- 消息類型選擇器 -->
    <van-tabs v-model:active="activeType" sticky offset-top="46px">
      <van-tab title="通知" name="notice">
        <van-cell-group>
          <van-cell v-for="item in noticeList" :key="item.id" :title="item.title" center>
            <template #icon>
              <van-image
                :src="item.icon"
                width="40"
                height="40"
                radius="20"
                class="message-icon"
              />
            </template>
            <template #label>
              <div class="message-preview">{{ item.preview }}</div>
              <div class="message-time">{{ item.time }}</div>
            </template>
            <template #right-icon>
              <van-badge :content="item.unread" v-if="item.unread" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-tab>

      <van-tab title="互動" name="interaction">
        <van-cell-group>
          <van-cell v-for="item in interactionList" :key="item.id" :title="item.title" center>
            <template #icon>
              <van-image
                :src="item.icon"
                width="40"
                height="40"
                radius="20"
                class="message-icon"
              />
            </template>
            <template #label>
              <div class="message-preview">{{ item.preview }}</div>
              <div class="message-time">{{ item.time }}</div>
            </template>
          </van-cell>
        </van-cell-group>
      </van-tab>
    </van-tabs>

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

const activeTab = ref(2)
const activeType = ref('notice')

// 模擬通知消息列表
const noticeList = ref([
  {
    id: 1,
    icon: '/src/assets/images/simple01.jpeg',
    title: '系統通知',
    preview: '您的訂單已發貨，請注意查收',
    time: '10:30',
    unread: 2
  },
  {
    id: 2,
    icon: '/src/assets/images/simple02.jpeg',
    title: '活動通知',
    preview: '春季特賣活動開始啦！',
    time: '昨天',
    unread: 1
  },
  {
    id: 3,
    icon: '/src/assets/images/simple03.jpeg',
    title: '優惠券到賬',
    preview: '恭喜您獲得新的優惠券',
    time: '週一',
    unread: 0
  }
])

// 模擬互動消息列表
const interactionList = ref([
  {
    id: 1,
    icon: '/src/assets/images/simple01.jpeg',
    title: '商品諮詢',
    preview: '請問這個產品是否有試用裝？',
    time: '09:15'
  },
  {
    id: 2,
    icon: '/src/assets/images/simple02.jpeg',
    title: '售後服務',
    preview: '您的退貨申請已通過',
    time: '昨天'
  }
])
</script>

<style scoped>
.message {
  min-height: 100vh;
  background-color: #f7f8fa;
  padding-top: 46px;
  padding-bottom: 50px;
}

.message-icon {
  margin-right: 12px;
}

.message-preview {
  font-size: 13px;
  color: #646566;
  margin-top: 4px;
}

.message-time {
  font-size: 12px;
  color: #969799;
  margin-top: 4px;
}

:deep(.van-badge) {
  margin-right: 4px;
}

:deep(.van-cell) {
  padding: 12px 16px;
}

:deep(.van-cell__title) {
  font-size: 14px;
  color: #323233;
}

:deep(.van-tabs__line) {
  background-color: #1989fa;
}
</style>
