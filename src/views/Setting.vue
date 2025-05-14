<template>
  <div class="setting-page">
    <van-nav-bar title="設置" fixed placeholder />
    <van-cell-group>
      <van-cell title="推播通知" is-link>
        <template #right-icon>
          <van-switch v-model="pushOn" active-color="#ee4d2d" />
        </template>
      </van-cell>
      <van-cell title="帳號安全" is-link />
      <van-cell title="隱私政策" is-link />
    </van-cell-group>
    <div class="setting-footer">
      <van-button type="danger" round block class="logout-btn">退出登入</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const pushOn = ref(true)
</script>

<style scoped>
.setting-page {
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 90px;
}
.setting-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 16px;
}
.logout-btn {
  width: 90%;
  height: 44px;
  font-size: 15px;
  border-radius: 24px;
}
:deep(.van-cell__title) {
  font-size: 14px;
  color: #323233;
}
:deep(.van-cell) {
  margin: 8px 12px 0 12px;
  border-radius: 8px;
  background: #fff;
}
</style>
