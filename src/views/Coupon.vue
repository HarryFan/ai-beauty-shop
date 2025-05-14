<template>
  <div class="coupon-page">
    <van-nav-bar title="我的優惠券" fixed placeholder />
    <van-tabs v-model:active="activeTab" sticky offset-top="46px">
      <van-tab title="未使用" name="unused">
        <van-cell-group>
          <van-cell v-for="item in unusedCoupons" :key="item.id" class="coupon-card">
            <template #title>
              <div class="coupon-title">{{ item.title }}</div>
              <div class="coupon-desc">{{ item.desc }}</div>
            </template>
            <template #value>
              <div class="coupon-amount">${{ item.amount }}</div>
              <div class="coupon-date">有效期至 {{ item.expire }}</div>
            </template>
          </van-cell>
        </van-cell-group>
        <van-empty v-if="!unusedCoupons.length" description="暫無可用優惠券" />
      </van-tab>
      <van-tab title="已使用" name="used">
        <van-cell-group>
          <van-cell v-for="item in usedCoupons" :key="item.id" class="coupon-card coupon-used">
            <template #title>
              <div class="coupon-title">{{ item.title }}</div>
              <div class="coupon-desc">{{ item.desc }}</div>
            </template>
            <template #value>
              <div class="coupon-amount">${{ item.amount }}</div>
              <div class="coupon-date">有效期至 {{ item.expire }}</div>
            </template>
          </van-cell>
        </van-cell-group>
        <van-empty v-if="!usedCoupons.length" description="暫無已使用優惠券" />
      </van-tab>
      <van-tab title="已過期" name="expired">
        <van-cell-group>
          <van-cell v-for="item in expiredCoupons" :key="item.id" class="coupon-card coupon-expired">
            <template #title>
              <div class="coupon-title">{{ item.title }}</div>
              <div class="coupon-desc">{{ item.desc }}</div>
            </template>
            <template #value>
              <div class="coupon-amount">${{ item.amount }}</div>
              <div class="coupon-date">有效期至 {{ item.expire }}</div>
            </template>
          </van-cell>
        </van-cell-group>
        <van-empty v-if="!expiredCoupons.length" description="暫無已過期優惠券" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('unused')
const unusedCoupons = ref([
  { id: 1, title: '新用戶專享', desc: '滿100減20', amount: 20, expire: '2025-06-30' }
])
const usedCoupons = ref([])
const expiredCoupons = ref([])
</script>

<style scoped>
.coupon-page {
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 20px;
}
.coupon-card {
  margin: 12px 12px 0 12px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.coupon-title {
  font-size: 14px;
  color: #323233;
}
.coupon-desc {
  font-size: 12px;
  color: #969799;
  margin-top: 4px;
}
.coupon-amount {
  font-size: 22px;
  color: #ee4d2d;
  font-weight: 600;
}
.coupon-date {
  font-size: 12px;
  color: #969799;
  margin-top: 4px;
}
.coupon-used, .coupon-expired {
  opacity: 0.5;
}
</style>
