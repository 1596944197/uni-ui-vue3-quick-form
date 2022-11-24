<template>
  <view class="container">
    <uni-section title="测试数据" type="line">
      <scroll-view scroll-y style="height: 1800px; margin-left: 5%; width: 90%">
        <uni-forms
          ref="form"
          :model="renderSheetData(modelValue)"
          :label-width="$props.width"
          :label-position="$props.position"
        >
          <view v-for="item in renderSheetData(modelValue)" :key="item.key">
            <uni-forms-item
              :name="item.key"
              :label="item.label"
              :required="item.required"
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
              ></uni-data-checkbox>

              <uni-data-checkbox
                v-else-if="item.type === 'radio'"
                v-model="item.data"
                :localdata="item.columns"
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

        <button v-if="buttonStyle" :type="buttonStyle.type" plain="true">
          提交
        </button>
      </scroll-view>
    </uni-section>
  </view>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import type { FormDataType, LabelPositionType } from "./Type";
import { renderSheetData } from "./utils";
withDefaults(
  defineProps<{
    position?: LabelPositionType;
    width?: string | number;
    modelValue: FormDataType;
    buttonStyle?: Partial<{
      isShow: boolean;
      type: "primary" | "warn" | "default";
    }>;
  }>(),
  {
    position: "top",
    width: () => 150,
    modelValue: () => ({}),
    buttonStyle: (props) => ({
      isShow: true,
      type: "primary",
    }),
  }
);
defineEmits(["upload:modelValue"]);

const onchange = (...args: any[]) => console.log(args);
</script>

<style lang="scss" scoped>
$uni-box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
$uni-border-left: 8rpx solid #2979ff;
$uni-padding-left: 20rpx;
.container {
  background-color: whitesmoke;
}

// # 穿透样式到源码
::v-deep .uni-forms-item__label text:first-of-type {
  border-left: $uni-border-left;
  padding-left: $uni-padding-left;
}
</style>
