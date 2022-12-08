<template>
  <view class="content">
    <QuickFormVue ref="quick" v-model="formData" />
    <button @click="check" type="primary" plain="true">提交</button>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import QuickFormVue from "../../components/QuickForm/QuickForm.vue";
import { FormDataType } from "../../components/QuickForm/Type";

const formData = reactive<FormDataType>([
  {
    label: "标题1",
    key: "ces",
    value: "测试数据",
    required: true,
  },
  {
    label: "时间选择",
    key: "timer",
    type: "datepicker",
    required: true,
  },
  {
    label: "级联",
    key: "cascade",
    columns: [
      {
        text: "一年级",
        value: "1-0",
        children: [
          {
            text: "1.1班",
            value: "1-1",
          },
          {
            text: "1.2班",
            value: "1-2",
          },
        ],
      },
      {
        text: "二年级",
        value: "2-0",
        children: [
          {
            text: "2.1班",
            value: "2-1",
          },
          {
            text: "2.2班",
            value: "2-2",
          },
        ],
      },
      {
        text: "三年级",
        value: "3-0",
        disable: true,
      },
    ],
    type: "cascade",
    required: true,
  },
  {
    label: "下拉框",
    key: "drop-down",
    columns: [
      { value: "100", text: "篮球" },
      { value: "200", text: "足球" },
      { value: "500", text: "游泳" },
    ],
    clearable: true,
    type: "dropDown",
  },
  {
    label: "多选框",
    key: "duo",
    columns: [
      { value: 0, text: "篮球" },
      { value: 1, text: "足球" },
      { value: 2, text: "游泳" },
    ],
    type: "checkbox",
  },
  {
    label: "单选框",
    key: "single",
    columns: [
      { value: 0, text: "篮球" },
      { value: 1, text: "足球" },
      { value: 2, text: "游泳" },
    ],
    type: "radio",
  },
  {
    label: "文本域",
    key: "area",
    type: "textarea",
  },
  {
    label: "文件选择框",
    key: "file",
    type: "upload",
    required: true,
  },
  {
    label: "标签",
    key: "tag",
    type: "tags",
    value: ["审核人1", "审核人2"],
  },
]);

const quick = ref<InstanceType<typeof QuickFormVue>>();

const check = async () => {
  try {
    console.log(await quick.value?.validate?.());
  } catch (error) {
    console.warn(error);
  }
};
</script>

<style scoped>
.content {
  height: 1800px;
}
</style>
