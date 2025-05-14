<template>
  <div class="help-detail">
    <van-nav-bar title="購物流程" fixed placeholder left-arrow @click-left="$router.back()" />
    <van-steps direction="vertical" :active="4" class="help-steps">
      <van-step v-for="(step, idx) in steps" :key="idx">
        <template #icon>
          <van-icon :name="step.icon" size="24" color="#1989fa" />
        </template>
        <div class="step-title">{{ step.title }}</div>
        <div class="step-desc">{{ step.desc }}</div>
      </van-step>
    </van-steps>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const steps = ref([
  { title: '選擇商品', desc: '瀏覽並挑選心儀商品', icon: 'shop-o' },
  { title: '加入購物車', desc: '點擊加入購物車', icon: 'cart-o' },
  { title: '填寫訂單資訊', desc: '確認收件人與地址', icon: 'edit' },
  { title: '完成付款', desc: '選擇付款方式並付款', icon: 'passed' },
  { title: '等待出貨', desc: '商家備貨並安排配送', icon: 'logistics' }
])
</script>

<style scoped>
.help-detail {
  background: #f7f8fa;
  min-height: 100vh;
  padding-bottom: 20px;
}
.help-steps {
  margin: 20px 12px 0 12px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  padding: 20px 0;
}
.step-title {
  font-size: 16px;
  font-weight: bold;
  color: #323233;
  margin-bottom: 4px;
}
.step-desc {
  font-size: 14px;
  color: #969799;
  margin-bottom: 16px;
}
</style>
