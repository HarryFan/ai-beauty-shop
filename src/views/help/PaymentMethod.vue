<template>
  <div class="help-detail">
    <van-nav-bar title="付款方式" fixed placeholder left-arrow @click-left="$router.back()" />
    <van-cell-group class="help-card">
      <van-cell v-for="item in payments" :key="item.id" :title="item.title">
        <template #icon>
          <van-icon :name="item.icon" size="22" color="#1989fa" />
        </template>
        <template #label>
          <span class="payment-desc">{{ item.desc }}</span>
        </template>
      </van-cell>
    </van-cell-group>
    <van-notice-bar class="help-note" color="#1989fa" background="#f7f8fa" :scrollable="false">
      請選擇適合您的付款方式，部分方式可能受限於訂單金額或配送方式。
    </van-notice-bar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const payments = ref([
  { id: 1, title: '信用卡', desc: '支援 VISA / Master / JCB', icon: 'credit-pay' },
  { id: 2, title: 'Line Pay', desc: '行動支付，快速安全', icon: 'wechat-pay' },
  { id: 3, title: '超商付款', desc: '7-11、全家皆可取貨付款', icon: 'shop' },
  { id: 4, title: '貨到付款', desc: '收到商品後付款', icon: 'cash-on-deliver' }
])
</script>

<style scoped>
.help-detail {
  background: #f7f8fa;
  min-height: 100vh;
  padding-bottom: 20px;
}
.help-card {
  margin: 20px 12px 0 12px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.payment-desc {
  font-size: 14px;
  color: #646566;
}
.help-note {
  margin: 20px 16px 0 16px;
  border-radius: 8px;
  font-size: 13px;
}
</style>
