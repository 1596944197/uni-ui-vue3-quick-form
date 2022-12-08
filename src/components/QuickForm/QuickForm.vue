<template>
  <view class="container">
    <uni-section title="测试数据" type="line">
      <scroll-view scroll-y style="height: 100%; margin-left: 5%; width: 90%">
        <uni-forms
          ref="form"
          :model="formData"
          :label-width="props.width"
          :label-position="props.position"
          :validateTrigger="props.validateTrigger"
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
                    errorMessage: `${item.label}为必填项`,
                  },
                ]
              "
              v-if="item.key !== 'id'"
            >
              <uni-data-picker
                v-if="item.type === 'cascade'"
                v-model="item.value"
                :localdata="item.columns"
                :placeholder="item.placeholder"
                return-type="date"
                :clear-icon="item.clearable"
                :disabled="item.disabled"
                hide-second
                @change="onChangeByCascade(item, $event)"
              />

              <uni-datetime-picker
                v-else-if="item.type === 'datepicker'"
                :placeholder="item.placeholder || '请输入投放时间'"
                v-model="item.value"
                :disabled="item.disabled"
                @change="onChangeByDatePicker(item, $event)"
              />

              <uni-file-picker
                :ref="item.key"
                v-else-if="item.type === 'upload'"
                v-model="item.value"
                :disabled="item.disabled"
                fileMediatype="image"
                mode="grid"
                :auto-upload="false"
                :image-styles="{ height: '160rpx' }"
                @select="onFileSelect(item, $event)"
              />

              <uni-data-select
                v-else-if="item.type === 'dropDown'"
                v-model="item.value"
                :localdata="item.columns"
                :clear="item.clearable"
                :placeholder="item.placeholder"
                @change="onchange"
              ></uni-data-select>

              <uni-data-checkbox
                v-else-if="item.type === 'checkbox'"
                multiple
                v-model="item.value"
                :localdata="item.columns"
                @change="onChangeByCheckBox(item, $event)"
              ></uni-data-checkbox>

              <uni-data-checkbox
                v-else-if="item.type === 'radio'"
                v-model="item.value"
                :localdata="item.columns"
                @change="onChangeByCheckBox(item, $event)"
              ></uni-data-checkbox>

              <view class="tags" v-else-if="item.type === 'tags'">
                <uni-tag
                  style="margin-right: 20rpx; margin-top: 25rpx"
                  v-for="text of item.value"
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
                v-model="item.value"
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
import { onMounted, ref, withDefaults } from "vue";
import type {
  CascadeType,
  CheckboxType,
  Fields,
  FormDataType,
  LabelPositionType,
  Rules,
  SelectFileType,
  UniFormApi,
} from "./Type";
import { renderSheetData } from "./utils";

const props = withDefaults(
  defineProps<{
    position?: LabelPositionType;
    width?: string | number;
    modelValue: FormDataType;
    validateTrigger?: Rules[0]["validateTrigger"];
  }>(),
  {
    position: "top",
    width: () => 150,
    modelValue: () => [],
    validateTrigger: () => "submit",
  }
);

defineExpose({
  validate: () => form.value?.validate?.(),
});

const emit = defineEmits<{
  (
    e: "changeByCascade",
    target: Fields,
    event: CascadeType["detail"]["value"]
  ): void;
  (e: "changeByCheckbox", target: Fields, event: CheckboxType["detail"]): void;
  (e: "changeByDatePicker", target: Fields, event: string | string[]): void;
}>();

const form = ref<UniFormApi>();

const formData = renderSheetData(props.modelValue);

onMounted(() => {
  initData();
});

// # 底下都是函数
const setValue = (key: string, value: any) => {
  const t = form.value;
  if (!t) return;
  t.setValue(key, value);
};

const initData = () => {
  const target = form.value;
  if (!target) return;
  const result: AnyObj = {};
  formData.forEach(({ key, value }) => (result[key] = value));
  target.formData = result;
};
const onchange = (...args: any[]) => {};
const onChangeByCheckBox: (target: Fields, event: CheckboxType) => void = (
  target,
  event
) => {
  setValue(target.key, event.detail.value);
  emit("changeByCheckbox", target, event.detail);
};

const onChangeByCascade: (target: Fields, event: CascadeType) => void = (
  target,
  event
) => {
  const v = event.detail.value;
  setValue(target.key, v.length ? v[v.length - 1].value : []);
  emit("changeByCascade", target, v);
};

const onFileSelect: (target: Fields, event: SelectFileType) => void = (
  target,
  { tempFiles: [file] }
) => {
  if (target.value instanceof Array) {
    target.value.push({
      extname: file.extname,
      name: file.name,
      url: file.url,
    });
    setValue(target.key, target.value);
  }
};

const onChangeByDatePicker: (
  target: Fields,
  event: string | string[]
) => void = (target, event) => {
  setValue(target.key, event);
  emit("changeByDatePicker", target, event);
};
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
