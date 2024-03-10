import { defineComponent, h } from "vue";
import { getTagProps, validateTagProp } from "./utils";

import { constants } from "smooth-dnd";

export const SmoothDndDraggable = defineComponent({
    name: "SmoothDndDraggable",
    props: {
        tag: {
            validator: validateTagProp,
            default: 'div'
        }
    },
    render: function () {
        const tagProps = getTagProps(this, constants.wrapperClass)
        return h(tagProps.value, Object.assign({}, tagProps.props), this.$slots?.default?.())
    }
})