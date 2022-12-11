"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  QuickFormVue();
}
const QuickFormVue = () => "../../components/QuickForm/QuickForm.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const formData = {
      a: {
        label: "\u6807\u98981",
        key: "ces",
        data: "\u6D4B\u8BD5\u6570\u636E",
        required: true
      },
      c: {
        label: "\u7EA7\u8054",
        key: "cascade",
        columns: [
          {
            text: "\u4E00\u5E74\u7EA7",
            value: "1-0",
            children: [
              {
                text: "1.1\u73ED",
                value: "1-1"
              },
              {
                text: "1.2\u73ED",
                value: "1-2"
              }
            ]
          },
          {
            text: "\u4E8C\u5E74\u7EA7",
            value: "2-0",
            children: [
              {
                text: "2.1\u73ED",
                value: "2-1"
              },
              {
                text: "2.2\u73ED",
                value: "2-2"
              }
            ]
          },
          {
            text: "\u4E09\u5E74\u7EA7",
            value: "3-0",
            disable: true
          }
        ],
        type: "cascade",
        required: true
      },
      d: {
        label: "\u4E0B\u62C9\u6846",
        key: "drop-down",
        data: "200",
        columns: [
          { value: "100", text: "\u7BEE\u7403" },
          { value: "200", text: "\u8DB3\u7403" },
          { value: "500", text: "\u6E38\u6CF3" }
        ],
        clearable: true,
        type: "dropDown"
      },
      e: {
        label: "\u591A\u9009\u6846",
        key: "duo",
        columns: [
          { value: 0, text: "\u7BEE\u7403" },
          { value: 1, text: "\u8DB3\u7403" },
          { value: 2, text: "\u6E38\u6CF3" }
        ],
        type: "checkbox"
      },
      f: {
        label: "\u5355\u9009\u6846",
        key: "single",
        columns: [
          { value: 0, text: "\u7BEE\u7403" },
          { value: 1, text: "\u8DB3\u7403" },
          { value: 2, text: "\u6E38\u6CF3" }
        ],
        type: "radio"
      },
      g: {
        label: "\u6587\u672C\u57DF",
        key: "area",
        type: "textarea"
      },
      b: {
        label: "\u6587\u4EF6\u9009\u62E9\u6846",
        key: "file",
        data: "",
        type: "upload",
        required: true
      },
      h: {
        label: "\u6807\u7B7E",
        key: "tag",
        type: "tags",
        data: ["\u5BA1\u6838\u4EBA1", "\u5BA1\u6838\u4EBA2"]
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(($event) => formData = $event),
        b: common_vendor.p({
          modelValue: formData
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/code/mini-app/uni-ui-vue3-quick-form/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
