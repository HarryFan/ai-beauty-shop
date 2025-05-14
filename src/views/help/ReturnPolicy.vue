<template>
  <div class="help-detail">
    <van-nav-bar title="退換貨政策" fixed placeholder left-arrow @click-left="$router.back()" />
    <van-cell-group class="help-card">
      <van-cell title="7天鑑賞期" value="收到商品後7天內可申請退換貨" />
      <van-cell title="退換貨流程" value="線上申請 > 商家審核 > 物流取回 > 完成退款/換貨" />
      <van-cell title="注意事項" value="商品須保持全新且完整包裝，部分商品不適用退貨" />
    </van-cell-group>
    <van-steps direction="vertical" :active="2" class="help-steps">
      <van-step icon="edit">申請退換貨</van-step>
      <van-step icon="passed">商家審核</van-step>
      <van-step icon="logistics">物流取回</van-step>
      <van-step icon="success">完成退款/換貨</van-step>
    </van-steps>
    <div class="help-footer">
      <van-button type="primary" round block class="help-btn">聯絡客服</van-button>
    </div>
  </div>
</template>

<script setup>
// 無需 script
</script>

<style scoped>
.help-detail {
  background: #f7f8fa;
  min-height: 100vh;
  padding-bottom: 90px;
}
.help-card {
  margin: 20px 12px 0 12px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.help-steps {
  margin: 24px 12px 0 12px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  padding: 18px 0;
}
.help-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 16px;
}
.help-btn {
  width: 90%;
  height: 44px;
  font-size: 15px;
  border-radius: 24px;
  background: #ee4d2d;
  border: none;
}
</style>
