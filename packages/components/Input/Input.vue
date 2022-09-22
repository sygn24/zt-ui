<template>
    <div class="zt-input" ref="inputWrapper" :style="styles" @mouseenter="inputWrapperEnter" @mouseleave="inputWrapperLeave">
        <input
            v-if="type !== 'textarea'"
            ref="input"
            class="zt-input-inner"
            :class="inputClass"
            :style="inputStyle"
            :type="showPassword ? (showPwd ? 'text' : 'password') : type"
            :value="value"
            :disabled="disabled"
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
            @change="$emit('change', $event.target.value)"
            @blur="$emit('blur', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @keyup.enter="$emit('keyupEnter', $event)"
        />
        <textarea
            v-else
            ref="textarea"
            class="zt-input-inner ztextarea"
            :class="inputClass"
            :style="inputStyle"
            type="textarea"
            :value="value"
            :rows="rows"
            :disabled="disabled"
            v-bind="$attrs"
            @input="$emit('input', $event.target.value)"
            @change="$emit('change', $event.target.value)"
            @blur="$emit('blur', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @keyup.enter="$emit('keyupEnter', $event)"
        />
        <ZtIcon v-if="showClearIcon" class="zt-input-icon-suffix function" icon="clear" size="12" @click="$emit('input', '')" />
        <ZtIcon
            v-if="showEyeIcon"
            class="zt-input-icon-suffix function"
            :icon="showPwd ? 'eye' : 'eyeoff'"
            color="var(--plac-text)"
            @click="showPwd = !showPwd"
        />
        <span class="zt-input-limit" :class="limitTextPosition" v-if="showLimitText">{{ value.length }}/{{ $attrs.maxlength }}</span>
        <span class="zt-input-icon-prefix" v-if="$slots.prefix || showPrefixIcon">
            <slot name="prefix" v-if="$slots.prefix" />
            <ZtIcon :icon="prefixIcon" v-if="showPrefixIcon" />
        </span>
        <span class="zt-input-icon-suffix" v-if="$slots.suffix || showSuffixIcon">
            <slot name="suffix" v-if="$slots.suffix" />
            <ZtIcon :icon="suffixIcon" v-if="showSuffixIcon" />
        </span>
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
                return ['text', 'password', 'number', 'textarea', 'url', 'email', 'date', 'tel'].includes(type)
            },
            default: 'text'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        rows: {
            type: Number,
            default: 2
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
                width: this.type == 'textarea' ? '400px' : '200px',
                height: this.type == 'textarea' ? `${this.rows * 32}px` : '32px'
            }
        },
        inputClass() {
            return {
                disabled: this.disabled
            }
        },
        inputStyle() {
            return {
                paddingLeft: this.type == 'textarea' || this.prefixIcon == '' ? '10px' : '22px',
                paddingRight: this.type == 'textarea' || (this.suffixIcon == '' && !this.clearable && !this.showPassword) ? '10px' : '22px',
                paddingTop: this.type == 'textarea' ? '6px' : '0px'
            }
        },
        showPrefixIcon() {
            return this.type !== 'textarea' && this.prefixIcon !== ''
        },
        showSuffixIcon() {
            return this.type !== 'textarea' && this.suffixIcon !== '' && (!this.showClear || this.value == '')
        },
        showClearIcon() {
            return this.type !== 'textarea' && this.clearable && this.showClear && this.value !== '' && !this.showPassword
        },
        showEyeIcon() {
            return this.type !== 'textarea' && this.showPassword && (this.showEye || this.value !== '') && !this.showLimit
        },
        showLimitText() {
            return this.$attrs.maxlength && this.showLimit && (!this.showClear || this.value == '')
        },
        limitTextPosition() {
            return this.type == 'textarea' ? 'bottom' : 'center'
        },
        getInput() {
            return this.$refs.input || this.$refs.textarea
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
        },
        //暴露的方法
        focus() {
            this.getInput.focus()
        },
        blur() {
            this.getInput.blur()
        },
        select() {
            this.getInput.select()
        }
    }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
