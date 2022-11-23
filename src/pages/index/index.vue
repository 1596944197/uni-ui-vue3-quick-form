<template>
  <view class="content">
    <QuickFormVue v-model="formData" />
  </view>
</template>

<script setup lang="ts">
import QuickFormVue from "../../components/QuickForm/QuickForm.vue";

const formData = {
  a: {
    label: "标题1",
    key: "ces",
    data: "测试数据",
  },
};
</script>
