import eslintConfig from "@antfu/eslint-config"

export default eslintConfig({
  jsonc: false,
  yaml: false,
  toml: false,
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: false,
  },
  vue: {
    overrides: {
      // 强制 <script setup> 中的宏排序
      "vue/define-macros-order": ["error", {
        order: [
          "defineOptions",
          "defineModel",
          "defineProps",
          "defineEmits",
          "defineSlots",
        ],
        defineExposeLast: true, // defineExpose 必须在最后
      }],
      // 强制 Vue 文件中的块顺序
      "vue/block-order": ["error", {
        order: [
          "template",
          "script[setup]",
          "style",
        ],
      }],
    },
  },
  ignores: [
    "dist/**",
    "node_modules/**",
  ],
}, { files: ["*.ts"], rules: {} }, { files: ["*.js"], rules: {} })
