<template>
  <view class="container">
    <uni-section title="标题" type="line">
      <uni-forms
        ref="form"
        :model="renderSheetData(modelValue)"
        :label-width="$props.width"
        :label-position="$props.position"
      >
        <view
          style="margin-left: 5%; width: 90%"
          v-for="item in renderSheetData(modelValue)"
          :key="item.key"
        >
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
              :clear-icon="false"
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

            <uni-easyinput
              v-else
              :type="item.type || 'text'"
              :disabled="item.disabled"
              v-model="item.data"
              :clearable="false"
              :placeholder="item.placeholder || '请输入'"
            />
          </uni-forms-item>
        </view>
      </uni-forms>
    </uni-section>
  </view>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { FormDataType, LabelPositionType } from "./Type";
import { renderSheetData } from "./utils";
withDefaults(
  defineProps<{
    position?: LabelPositionType;
    width?: string | number;
    modelValue: FormDataType;
  }>(),
  {
    position: "top",
    width: () => 150,
  }
);
defineEmits(["upload:modelValue"]);
</script>

<style lang="scss">
.container {
  background-color: whitesmoke;
}
</style>
