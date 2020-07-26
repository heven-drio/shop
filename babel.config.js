// 这是项目发布阶段需要用到的 babel插件
const prodplugins = []
if (process.env.NODE_ENV === 'production') {
  prodplugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [

    // 发布产品时的数组
    ...prodplugins
  ]
}
