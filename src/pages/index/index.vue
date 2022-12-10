<template>
  <view class="content">
    <QuickFormVue
      ref="quick"
      v-model="formData"
      @file-select="onchange"
      @change-by-cascade="onchange"
      @change-by-checkbox="onchange"
      @change-by-date-picker="onchange"
      @change-by-input="onchange"
      @change-by-select="onchange"
      @delete-file="onchange"
    />
    <button @click="check" plain="true">提交</button>
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
    rules: [
      {
        required: true,
        errorMessage: "必填项",
      },
      {
        minLength: 3,
        maxLength: 5,
        errorMessage: "长度在 {minLength} 到 {maxLength} 个字符",
      },
    ],
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
    value: "1-1",
    type: "cascade",
    required: true,
  },
  {
    label: "下拉框",
    key: "dropDown",
    columns: [
      { value: "100", text: "篮球" },
      { value: "200", text: "足球" },
      { value: "500", text: "游泳" },
    ],
    value: "200",
    clearable: true,
    type: "dropDown",
    required: true,
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
    required: true,
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
    required: true,
  },
  {
    label: "文本域",
    key: "area",
    type: "textarea",
    required: true,
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
    console.log(quick.value?.getData());
    console.log(await quick.value?.validate?.());
  } catch (error) {
    console.warn(error);
  }
};

const onchange = (...args: any[]) => {
  console.log(args);
};
</script>

<style scoped>
.content {
  height: 1800px;
}
</style>
