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
  c: {
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
  d: {
    label: "下拉框",
    key: "drop-down",
    data: "200",
    columns: [
      { value: "100", text: "篮球" },
      { value: "200", text: "足球" },
      { value: "500", text: "游泳" },
    ],
    clearable: true,
    type: "dropDown",
  },
  e: {
    label: "多选框",
    key: "duo",
    columns: [
      { value: 0, text: "篮球" },
      { value: 1, text: "足球" },
      { value: 2, text: "游泳" },
    ],
    type: "checkbox",
  },
  f: {
    label: "单选框",
    key: "single",
    columns: [
      { value: 0, text: "篮球" },
      { value: 1, text: "足球" },
      { value: 2, text: "游泳" },
    ],
    type: "radio",
  },
  g: {
    label: "文本域",
    key: "area",
    type: "textarea",
  },
  b: {
    label: "文件选择框",
    key: "file",
    data: "",
    type: "upload",
    required: true,
  },
  h: {
    label: "标签",
    key: "tag",
    type: "tags",
    data: ["审核人1", "审核人2"],
  },
};
</script>
