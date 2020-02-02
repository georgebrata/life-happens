import Vue from 'vue'

const runtime = {}

/**
 * Get runtime Vue instance.
 */
export function getRuntimeVM() {
    if (runtime.vm) {
        return runtime.vm
    }
    //throw new ReferenceError('[vue-hooks] Not found vue instance.')
}

/**
 * Set runtime Vue instance.
 */
export function setRuntimeVM (_, vue) {
    const vm = _ || vue

    // if (typeof vm.$options.setup === 'function') {
    //     runtime.vm = vm
    // }
}
