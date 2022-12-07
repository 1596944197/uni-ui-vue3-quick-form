"use strict";
var common_vendor = require("../../common/vendor.js");
var components_QuickForm_utils = require("./utils.js");
if (!Array) {
  const _easycom_uni_data_picker2 = common_vendor.resolveComponent("uni-data-picker");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_data_picker2 + _easycom_uni_datetime_picker2 + _easycom_uni_file_picker2 + _easycom_uni_data_select2 + _easycom_uni_data_checkbox2 + _easycom_uni_tag2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_section2)();
}
const _easycom_uni_data_picker = () => "../../uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_data_picker + _easycom_uni_datetime_picker + _easycom_uni_file_picker + _easycom_uni_data_select + _easycom_uni_data_checkbox + _easycom_uni_tag + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_section)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  props: {
    position: { type: null, required: false, default: "top" },
    width: { type: [String, Number], required: false, default: () => 150 },
    modelValue: { type: null, required: true, default: () => ({}) },
    buttonStyle: { type: Object, required: false, default: (props) => ({
      isShow: true,
      type: "primary"
    }) }
  },
  emits: ["upload:modelValue"],
  setup(__props) {
    const onchange = (...args) => console.log(args);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(common_vendor.unref(components_QuickForm_utils.renderSheetData)(__props.modelValue), (item, k0, i0) => {
          return common_vendor.e({
            a: item.key !== "id"
          }, item.key !== "id" ? common_vendor.e({
            b: item.type === "cascade"
          }, item.type === "cascade" ? {
            c: "7b0c6873-3-" + i0 + "," + ("7b0c6873-2-" + i0),
            d: common_vendor.o(($event) => item.data = $event),
            e: common_vendor.p({
              localdata: item.columns,
              placeholder: item.placeholder,
              ["return-type"]: "date",
              ["clear-icon"]: item.clearable,
              disabled: item.disabled,
              ["hide-second"]: true,
              modelValue: item.data
            })
          } : item.type === "datepicker" ? {
            g: "7b0c6873-4-" + i0 + "," + ("7b0c6873-2-" + i0),
            h: common_vendor.o(($event) => item.data = $event),
            i: common_vendor.p({
              placeholder: item.placeholder || "\u8BF7\u8F93\u5165\u6295\u653E\u65F6\u95F4",
              disabled: item.disabled,
              modelValue: item.data
            })
          } : item.type === "upload" ? {
            k: common_vendor.sr(item.key, "7b0c6873-5-" + i0 + "," + ("7b0c6873-2-" + i0), {
              "f": 1
            }),
            l: item.key,
            m: "7b0c6873-5-" + i0 + "," + ("7b0c6873-2-" + i0),
            n: common_vendor.o(($event) => item.data = $event),
            o: common_vendor.p({
              disabled: item.disabled,
              fileMediatype: "image",
              mode: "grid",
              ["auto-upload"]: false,
              ["image-styles"]: {
                height: "160rpx"
              },
              modelValue: item.data
            })
          } : item.type === "dropDown" ? {
            q: common_vendor.o(onchange),
            r: "7b0c6873-6-" + i0 + "," + ("7b0c6873-2-" + i0),
            s: common_vendor.o(($event) => item.data = $event),
            t: common_vendor.p({
              localdata: item.columns,
              clear: item.clearable,
              placeholder: item.placeholder,
              modelValue: item.data
            })
          } : item.type === "checkbox" ? {
            w: "7b0c6873-7-" + i0 + "," + ("7b0c6873-2-" + i0),
            x: common_vendor.o(($event) => item.data = $event),
            y: common_vendor.p({
              multiple: true,
              localdata: item.columns,
              modelValue: item.data
            })
          } : item.type === "radio" ? {
            A: "7b0c6873-8-" + i0 + "," + ("7b0c6873-2-" + i0),
            B: common_vendor.o(($event) => item.data = $event),
            C: common_vendor.p({
              localdata: item.columns,
              modelValue: item.data
            })
          } : item.type === "tags" ? {
            E: common_vendor.f(item.data, (text, k1, i1) => {
              return {
                a: text,
                b: "7b0c6873-9-" + i0 + "-" + i1 + "," + ("7b0c6873-2-" + i0),
                c: common_vendor.p({
                  text,
                  type: "primary",
                  inverted: true
                })
              };
            })
          } : {
            F: "7b0c6873-10-" + i0 + "," + ("7b0c6873-2-" + i0),
            G: common_vendor.o(($event) => item.data = $event),
            H: common_vendor.p({
              type: item.type || "text",
              disabled: item.disabled,
              clearable: item.clearable,
              placeholder: item.placeholder || "\u8BF7\u8F93\u5165",
              modelValue: item.data
            })
          }, {
            f: item.type === "datepicker",
            j: item.type === "upload",
            p: item.type === "dropDown",
            v: item.type === "checkbox",
            z: item.type === "radio",
            D: item.type === "tags",
            I: "7b0c6873-2-" + i0 + ",7b0c6873-1",
            J: common_vendor.p({
              name: item.key,
              label: item.label,
              required: item.required
            })
          }) : {}, {
            K: item.key
          });
        }),
        b: common_vendor.sr("form", "7b0c6873-1,7b0c6873-0"),
        c: common_vendor.p({
          model: common_vendor.unref(components_QuickForm_utils.renderSheetData)(__props.modelValue),
          ["label-width"]: _ctx.$props.width,
          ["label-position"]: _ctx.$props.position
        }),
        d: __props.buttonStyle
      }, __props.buttonStyle ? {
        e: __props.buttonStyle.type
      } : {}, {
        f: common_vendor.p({
          title: "\u6D4B\u8BD5\u6570\u636E",
          type: "line"
        })
      });
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7b0c6873"], ["__file", "D:/code/mini-app/uni-ui-vue3-quick-form/src/components/QuickForm/QuickForm.vue"]]);
wx.createComponent(Component);
