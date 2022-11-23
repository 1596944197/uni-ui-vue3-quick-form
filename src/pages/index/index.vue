<template>
  <view class="content">
    <QuickFormVue v-model="formData" />
  </view>
</template>

<script setup lang="ts">
import QuickFormVue from "../../components/QuickForm/QuickForm.vue";
import { FormDataType } from "../../components/QuickForm/Type";

const formData: FormDataType = {
  a: {
    label: "标题1",
    key: "ces",
    data: "测试数据",
    required: true,
  },
};
</script>
