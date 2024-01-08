import ztui from '../../packages/index'
import '../../packages/assets/index.css'
import '../components//styles/style.less'
export default async ({ Vue }) => {
    if (typeof process === 'undefined') {
        Vue.use(ztui)
    }
}
