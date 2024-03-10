import type { App } from 'vue'
import type { BlockType } from '@/types/block'
import ButtonBlock from '@/blocks/external/ButtonBlock.vue'
import ChartBlock from '@/blocks/basic/ChartBlock.vue'
import FormBlock from '@/blocks/external/FormBlock.vue'
import HeroTitleBlock from '@/blocks/basic/HeroTitleBlock.vue'
import ImageBlock from '@/blocks/basic/ImageBlock.vue'
import NotesBlock from '@/blocks/external/NotesBlock.vue'
import QuoteBlock from '@/blocks/basic/QuoteBlock.vue'
import ViewBlock from '@/blocks/basic/ViewBlock.vue'
import { defineAsyncComponent } from 'vue'
import { h } from 'vue'

const baseBlocks = [
  {
    type: 'quote',
    material: QuoteBlock
    // material: defineAsyncComponent(() => import("@/blocks/basic/QuoteBlock.vue"))
    // material: h('div', 'hello') jsx方式
  },
  {
    type: 'heroTitle',
    material: HeroTitleBlock
  },
  {
    type: 'view',
    material: ViewBlock
  },
  {
    type: 'chart',
    material: ChartBlock
  },
  {
    type: 'image',
    material: ImageBlock
  }
]
class BlockSuite {
  private blocks = baseBlocks
  constructor() {}
  getBlocksMap() {
    return Object.fromEntries(this.blocks.map((block) => [block.type, block]))
  }
  getBlocks() {
    return this.blocks
  }
  addBlock(block: any) {
    this.blocks.push(block)
  }
  hasBlock(type: BlockType) {
    return !!this.getBlocksMap()[type]
  }
}

const blockSuite = new BlockSuite()

console.log(
  '🚀 ~ file: BlockRenderer.vue:55 ~ blockSuite.hasBlock(button):',
  blockSuite.hasBlock('button')
)

blockSuite.addBlock({
  type: 'button',
  material: ButtonBlock
})
blockSuite.addBlock({
  type: 'form',
  material: FormBlock
})
blockSuite.addBlock({
  type: 'notes',
  material: NotesBlock
})
console.log(
  '🚀 ~ file: BlockRenderer.vue:68 ~ blockSuite.hasBlock(button):',
  blockSuite.hasBlock('button')
)
const blocksMap = blockSuite.getBlocksMap()

export const blocksMapSymbol = Symbol('blocksMap')

export const setup = (app: App<Element>) => {
  const ins = {
    install(app: App<Element>) {
      // 这两个操作基本上是vue3视图相关插件的标配
      app.provide(blocksMapSymbol, blocksMap)
      // provide 之后，我们就可以在任何地方使用inject来获取到这个值
      app.config.globalProperties.$blocksMap = blocksMap
    }
  }

  app.use(ins)
}

// Extensions of Vue types to be appended manually
// https://github.com/microsoft/rushstack/issues/2090
// https://github.com/microsoft/rushstack/issues/1709

// TODO: figure out why it cannot be 'vue'
// @ts-ignore: works on Vue 3, fails in Vue 2
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    /**
     * Access to the application's blocksMap
     */
    $blocksMap: string
  }
}
