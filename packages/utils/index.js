export function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            fn.apply(this, args)
            timer = null
        }, delay)
    }
}
