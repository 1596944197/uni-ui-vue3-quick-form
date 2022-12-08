<template>
  <view class="container">
    <uni-section title="测试数据" type="line">
      <scroll-view scroll-y style="height: 1200px; margin-left: 5%; width: 90%">
        <uni-forms
          ref="form"
          :model="formData"
          :label-width="$props.width"
          :label-position="$props.position"
        >
          <view v-for="item of formData" :key="item.key">
            <uni-forms-item
              :name="item.key"
              :label="item.label"
              :required="item.required"
              :rules="
                item.rules || [
                  {
                    required: item.required,
                    errorMessage: `${item.label}为必填`,
                  },
                ]
              "
              v-if="item.key !== 'id'"
            >
              <uni-data-picker
                v-if="item.type === 'cascade'"
                v-model="item.data"
                :localdata="item.columns"
                :placeholder="item.placeholder"
                return-type="date"
                :clear-icon="item.clearable"
                :disabled="item.disabled"
                hide-second
                @change="onchange3"
              />

              <uni-datetime-picker
                v-else-if="item.type === 'datepicker'"
                :placeholder="item.placeholder || '请输入投放时间'"
                v-model="item.data"
                :disabled="item.disabled"
              />

              <uni-file-picker
                :ref="item.key"
                v-else-if="item.type === 'upload'"
                v-model="item.data"
                :disabled="item.disabled"
                fileMediatype="image"
                mode="grid"
                :auto-upload="false"
                :image-styles="{ height: '160rpx' }"
              />

              <uni-data-select
                v-else-if="item.type === 'dropDown'"
                v-model="item.data"
                :localdata="item.columns"
                :clear="item.clearable"
                :placeholder="item.placeholder"
                @change="onchange"
              ></uni-data-select>

              <uni-data-checkbox
                v-else-if="item.type === 'checkbox'"
                multiple
                v-model="item.data"
                :localdata="item.columns"
                @change="onchange2"
              ></uni-data-checkbox>

              <uni-data-checkbox
                v-else-if="item.type === 'radio'"
                v-model="item.data"
                :localdata="item.columns"
                @change="onchange2"
              ></uni-data-checkbox>

              <view class="tags" v-else-if="item.type === 'tags'">
                <uni-tag
                  style="margin-right: 20rpx; margin-top: 25rpx"
                  v-for="text of item.data"
                  :key="text"
                  :text="text"
                  type="primary"
                  inverted
                ></uni-tag>
              </view>

              <uni-easyinput
                v-else
                :type="item.type || 'text'"
                :disabled="item.disabled"
                v-model="item.data"
                :clearable="item.clearable"
                :placeholder="item.placeholder || '请输入'"
              />
            </uni-forms-item>
          </view>
        </uni-forms>
      </scroll-view>
    </uni-section>
  </view>
</template>

<script setup lang="ts">
import { ref, withDefaults } from "vue";
import type { FormDataType, LabelPositionType, UniFormApi } from "./Type";
import { renderSheetData } from "./utils";

const props = withDefaults(
  defineProps<{
    position?: LabelPositionType;
    width?: string | number;
    modelValue: FormDataType;
  }>(),
  {
    position: "top",
    width: () => 150,
    modelValue: () => [],
  }
);

const form = ref<UniFormApi>().value;

const formData = renderSheetData(props.modelValue);

const onchange = (...args: any[]) => console.log("下拉框", args);
const onchange2 = (...args: any[]) => console.log("多选框", args);
const onchange3 = (...args: any[]) => console.log("级联", args);

defineExpose({
  validate: () => form?.validate(),
});
</script>

<style lang="scss" scoped>
$uni-box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
$uni-border-left: 8rpx solid #2979ff;
$uni-padding-left: 20rpx;
.container {
  background-color: whitesmoke;
  height: 900px;
}

// # 穿透样式到源码
::v-deep .uni-forms-item__label text:first-of-type {
  border-left: $uni-border-left;
  padding-left: $uni-padding-left;
}
</style>
