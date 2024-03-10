import {blocks as blocksData} from '@/mocks/blocks';
import { defineStore } from 'pinia';
import {ref} from 'vue';

export const useAppEditorStore = defineStore('appEditor', () => {
    const currentBlockId = ref<string | null>(null)
    const blocks = ref(blocksData);

    function selectBlock(id: string) {
        currentBlockId.value = id;
    }

    function updateBlocks(newBlocks: typeof blocksData) {
        blocks.value = newBlocks;
    }

    return { currentBlockId, blocks, selectBlock, updateBlocks }
})