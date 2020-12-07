import Vue from 'vue'
import SeeyouToast from './toast.vue'

const toastConstructor = Vue.extend(SeeyouToast)
function toast (opation) {
  if (typeof opation === 'string') {
    opation = {
      text: opation
    }
  }
  const toastInstence = new toastConstructor({
    data: opation
  })
  toastInstence.vm = toastInstence.$mount()
  document.body.appendChild(toastInstence.vm.$el)
}
class MyToast {
  msg (opation) {
    if (typeof opation === 'string') {
      opation = {
        msg: opation
      }
    }
    const toastInstence = new toastConstructor({
      data: opation
    })
    toastInstence.vm = toastInstence.$mount()
    document.body.appendChild(toastInstence.vm.$el)
  }
  loading () {
    const toastInstence = new toastConstructor({
      data: {
        loading: true
      }
    })
    toastInstence.vm = toastInstence.$mount()
    console.log(toastInstence.vm)
    document.body.appendChild(toastInstence.vm.$el)
  }
  close () {
    let toastDomArr = [...document.getElementsByClassName('seeyou-toast-loading')]
    console.log(toastDomArr)
    if (toastDomArr.length > 0) {
      toastDomArr.forEach((value) => {
        value.remove()
      })
    }
    // document.body.appendChild(toastInstence.vm.$el)
  }
}
export default new MyToast