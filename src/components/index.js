import toast from './toast/index'

const install = function(Vue) {
  if(install.isInstall == true) return;
  install.isInstall = true
  Vue.prototype.$toast = toast
}
export default {
  install
}