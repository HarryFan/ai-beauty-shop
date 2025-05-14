<template>
  <div class="help-detail">
    <van-nav-bar title="物流配送" fixed placeholder left-arrow @click-left="$router.back()" />
    <van-cell-group class="help-card">
      <van-cell v-for="item in delivery" :key="item.id" :title="item.title">
        <template #icon>
          <van-icon :name="item.icon" size="22" color="#1989fa" />
        </template>
        <template #label>
          <span class="delivery-desc">{{ item.desc }}</span>
        </template>
      </van-cell>
      <van-cell title="運費" value="滿 699 免運，未滿加收 $60" />
      <van-cell title="時效" value="付款後 1-3 天內出貨" />
    </van-cell-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const delivery = ref([
  { id: 1, title: '宅配', desc: '送貨到府，快速方便', icon: 'logistics' },
  { id: 2, title: '超商取貨', desc: '7-11、全家皆可取貨', icon: 'shop' }
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
.delivery-desc {
  font-size: 13px;
  color: #969799;
}
</style>
