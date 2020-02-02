import { computed } from '@vue/composition-api'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { getRuntimeVM } from '@/utils/runtime'


function handleComputed (mappedFn) {
  return computed(() => mappedFn.call(getRuntimeVM()))
}

function handleMethods (mappedFn) {
  console.log(mappedFn)
  return mappedFn.bind(getRuntimeVM())
}

const helpers = {
  'HelperState': { fn: mapState, handler: handleComputed },
  'HelperGetters': { fn: mapGetters, handler: handleComputed },
  'HelperMutations': { fn: mapMutations, handler: handleMethods },
  'HelperActions': { fn: mapActions, handler: handleMethods }
}

/**
 * Create vuex helper like useState | useGetters | useMutations | useActions.
 * @param h Helper key it can be anything from Helpers type.
 */
export default function createVuexHelper(h) {
  const helper = helpers[h]

  return ((...args) => {
    const mapper = (helper.fn)(...args)
    const dictionary = {}
    Object
      .keys(mapper)
      .forEach(
        (key) => {
          dictionary[key] = helper.handler(mapper[key])
        }
      )

    return dictionary
  })
}
