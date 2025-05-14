<template>
  <div class="address-page">
    <van-nav-bar title="收貨地址" fixed placeholder left-arrow @click-left="$router.back()" />
    <van-cell-group>
      <van-cell v-for="item in addressList" :key="item.id" class="address-card">
        <template #title>
          <div class="address-header">
            <span class="address-name">{{ item.name }}</span>
            <span class="address-phone">{{ item.phone }}</span>
            <van-tag v-if="item.default" type="primary" class="address-tag">預設</van-tag>
          </div>
          <div class="address-detail">{{ item.detail }}</div>
        </template>
        <template #right-icon>
          <van-icon name="edit" size="18" class="address-edit" />
          <van-icon name="delete-o" size="18" class="address-delete" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-empty v-if="!addressList.length" description="暫無地址" />
    <div class="address-footer">
      <van-button type="primary" round block class="add-btn">新增地址</van-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const addressList = ref([
  { id: 1, name: '王小明', phone: '0912-345678', detail: '台北市信義區市府路45號', default: true },
  { id: 2, name: '林美麗', phone: '0987-654321', detail: '新北市板橋區文化路100號', default: false }
])
</script>

<style scoped>
.address-page {
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 70px;
}
.address-card {
  margin: 12px 12px 0 12px;
  border-radius: 8px;
  background: #fff;
}
.address-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #323233;
}
.address-phone {
  font-size: 13px;
  color: #969799;
}
.address-detail {
  font-size: 12px;
  color: #646566;
  margin-top: 4px;
}
.address-tag {
  margin-left: 8px;
  font-size: 12px;
}
.address-edit, .address-delete {
  color: #c8c9cc;
  margin-left: 8px;
}
.address-footer {
  position: fixed;
  left: 0;
  bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.add-btn {
  width: 90%;
  height: 44px;
  font-size: 15px;
  border-radius: 24px;
  background: #ee4d2d;
  border: none;
}
</style>
