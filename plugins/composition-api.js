import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { setRuntimeVM } from '@/utils/runtime'

Vue.use(VueCompositionApi)
//Vue.mixin({ beforeCreate: setRuntimeVM })

export default {}