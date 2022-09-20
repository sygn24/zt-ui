<template>
    <div class="zt-input" :style="styles" @mouseenter="inputWrapperEnter" @mouseleave="inputWrapperLeave">
        <input
            ref="input"
            class="zt-input-self"
            :class="inputClass"
            :style="inputStyle"
            :type="showPassword ? (showPwd ? 'text' : 'password') : type"
            :value="value"
            :name="name"
            :placeholder="placeholder"
            :maxlength="maxlength"
            :disabled="disabled"
            :readonly="readonly"
            :required="required"
            :autofocus="autofocus"
            :autocomplete="autocomplete"
            @input="$emit('input', $event.target.value)"
            @change="$emit('change', $event.target.value)"
            @blur="$emit('blur', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
        />
        <ZtIcon class="zt-input-icon-prefix" :icon="prefixIcon" v-if="prefixIcon !== ''" />
        <ZtIcon class="zt-input-icon-suffix" :icon="suffixIcon" v-if="suffixIcon !== ''" />
        <ZtIcon
            v-if="clearable && showClear && value !== '' && !showPassword"
            class="zt-input-icon-suffix function"
            icon="clear"
            size="12"
            @click="$emit('input', '')"
        />
        <ZtIcon
            v-if="showPassword && (showEye || value !== '')"
            class="zt-input-icon-suffix function"
            :icon="showPwd ? 'eye' : 'eyeoff'"
            color="var(--plac-text)"
            @click="showPwd = !showPwd"
        />
        <span class="zt-input-limit" v-if="maxlength && showLimit && !showClear">{{ value.length }}/{{ maxlength }}</span>
    </div>
</template>

<script>
import ZtIcon from '../Icon'
export default {
    name: 'ZtInput',
    components: { ZtIcon },
    props: {
        type: {
            validator: type => {
                return ['text', 'password', 'number'].includes(type)
            },
            default: 'text'
        },
        placeholder: {
            type: String,
            default: '请输入内容'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        maxlength: {
            type: [String, Number]
        },
        required: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        autocomplete: {
            type: String,
            default: 'off'
        },
        width: {
            type: [String, Number],
            default: 200
        },
        height: {
            type: [String, Number],
            default: 32
        },
        fontSize: {
            type: [String, Number],
            default: 14
        },
        prefixIcon: {
            type: String,
            default: ''
        },
        suffixIcon: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        showLimit: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        styles() {
            return {
                height: `${this.height}px`,
                width: `${this.width}px`,
                lineHeight: `${this.height}px`,
                fontSize: `${this.fontSize}px`
            }
        },
        inputClass() {
            return {
                disabled: this.disabled
            }
        },
        inputStyle() {
            return {
                paddingLeft: this.prefixIcon == '' ? '10px' : '22px',
                paddingRight: this.suffixIcon == '' && !this.clearable && !this.showPassword ? '10px' : '22px'
            }
        }
    },
    data() {
        return {
            showClear: false,
            showPwd: false,
            showEye: false
        }
    },
    methods: {
        inputWrapperEnter() {
            this.clearable && (this.showClear = true)
            this.showPassword && (this.showEye = true)
        },
        inputWrapperLeave() {
            this.clearable && (this.showClear = false)
            this.showPassword && (this.showEye = false)
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
