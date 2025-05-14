<template>
  <div class="help-page">
    <van-nav-bar title="幫助中心" fixed placeholder left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-cell
        v-for="item in helpList"
        :key="item.id"
        :title="item.title"
        is-link
        class="help-card"
        :to="getHelpRoute(item.id)"
        router
      />
    </van-cell-group>
    <van-empty v-if="!helpList.length" description="暫無幫助分類" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const helpList = ref([
  { id: 1, title: '購物流程' },
  { id: 2, title: '付款方式' },
  { id: 3, title: '物流配送' },
  { id: 4, title: '退換貨政策' }
])

/**
 * 根據幫助分類 id 返回對應路由
 * @param {number} id
 * @returns {string}
 */
function getHelpRoute(id) {
  switch (id) {
    case 1:
      return '/help/shopping-flow'
    case 2:
      return '/help/payment-method'
    case 3:
      return '/help/delivery-info'
    case 4:
      return '/help/return-policy'
    default:
      return '/help'
  }
}
</script>

<style scoped>
.help-page {
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 20px;
}
.help-card {
  margin: 8px 12px 0 12px;
  border-radius: 8px;
  background: #fff;
}
:deep(.van-cell__title) {
  font-size: 14px;
  color: #323233;
}
</style>
