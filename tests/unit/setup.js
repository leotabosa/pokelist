import fs from 'fs'
import path from 'path'
import Vue from 'vue'

const baseComponentFiles = fs
  .readdirSync(path.join(__dirname, '../../src/components/base'))
  .filter((file) => /^Base.+\.vue$/.test(file))

for (const file of baseComponentFiles) {
  const component = import('../../src/components/base/' + file)
  Vue.component(file.split('.')[0], () => component)
}
