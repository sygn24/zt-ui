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
            :disabled="isDisabled"
            v-bind="$attrs"
            @input="handleEvent($event, 'input')"
            @change="handleEvent($event, 'change')"
            @blur="handleEvent($event, 'blur')"
            @focus="$emit('focus', $event.target.value)"
            @keyup.enter="$emit('keyupEnter', $event.target.value)"
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
            :disabled="isDisabled"
            v-bind="$attrs"
            @input="handleEvent($event, 'input')"
            @change="handleEvent($event, 'change')"
            @blur="handleEvent($event, 'blur')"
            @focus="$emit('focus', $event.target.value)"
            @keyup.enter="$emit('keyupEnter', $event.target.value)"
        />
        <ZtIcon v-if="showClearIcon" class="zt-input-icon-suffix function" icon="clear" size="14" @click="clearValue" />
        <ZtIcon
            v-if="showEyeIcon"
            class="zt-input-icon-suffix function"
            :icon="showPwd ? 'eye' : 'eyeoff'"
            size="16"
            @click="showPwd = !showPwd"
        />
        <span class="zt-input-limit" :class="limitTextPosition" v-if="showLimitText">{{ value.length }}/{{ $attrs.maxlength }}</span>
        <span class="zt-input-icon-prefix" v-if="$slots.prefix || showPrefixIcon">
            <slot name="prefix" />
            <ZtIcon :icon="prefixIcon" v-if="showPrefixIcon" />
        </span>
        <span class="zt-input-icon-suffix" v-if="$slots.suffix || showSuffixIcon">
            <slot name="suffix" />
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
                width: this.type == 'textarea' ? '400px' : '240px',
                height: this.type == 'textarea' ? `${this.rows * 40}px` : '40px'
            }
        },
        inputClass() {
            return {
                disabled: this.isDisabled,
                validate: this.validate
            }
        },
        inputStyle() {
            return {
                paddingLeft: this.type == 'textarea' || (!this.$slots.prefix && this.prefixIcon == '') ? '10px' : '22px',
                paddingRight:
                    this.type == 'textarea' || (!this.$slots.suffix && this.suffixIcon == '' && !this.clearable && !this.showPassword)
                        ? '10px'
                        : '22px',
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
            return this.type !== 'textarea' && this.clearable && this.showClear && this.value !== ''
        },
        showEyeIcon() {
            return (
                this.type !== 'textarea' &&
                this.showPassword &&
                (this.showEye || this.value !== '') &&
                !(this.clearable && this.value !== '') &&
                !this.showLimit
            )
        },
        showLimitText() {
            return this.$attrs.maxlength && this.showLimit && (!this.showClear || this.value == '')
        },
        limitTextPosition() {
            return this.type == 'textarea' ? 'bottom' : 'center'
        },
        getInput() {
            return this.$refs.input || this.$refs.textarea
        },
        parent() {
            return this.$parent.$options.name === 'ZtFormItem'
        }
    },
    data() {
        return {
            isDisabled: this.disabled,
            showClear: false,
            showPwd: false,
            showEye: false,
            validate: false
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
        handleEvent(e, eventName) {
            this.$emit(eventName, e.target.value)
            if (this.parent && this.$parent.getTrigger === eventName) {
                this.$parent.startValidate()
            }
        },
        clearValue() {
            this.$emit('input', '')
            if (this.parent) {
                this.$parent.startValidate()
            }
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
