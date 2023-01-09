# uni-ui-vie3-quick-form

数据驱动的表单，用于快速生成表单模板，基于 uni-ui 搭建

## 注意事项

1. 建议使用 pnpm 安装依赖
2. 模板为 vue3+ts 的官方初始模板
3. 适配微信小程序和 h5，其他未测试
4. 适用于简单的表单填充页，可快速通过数据生成表单项
5. 使用方法请查看该文件 src/pages/index/index.vue

```
│   ├── components
│   │   └── QuickForm
│   │       ├── QuickForm.vue // 组件
│   │       ├── Type.ts // 组件定义的类型
│   │       └── utils.ts // 用于填充初始值
```

### 适用于：
- [x] 微信小程序
- [x] H5

