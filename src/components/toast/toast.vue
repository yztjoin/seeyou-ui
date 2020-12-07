<template>
  <!-- <div> -->
  <transition :name="transitionName">
    <div v-if="loading" class="seeyou-toast seeyou-toast-loading">
      <ul>
        <li v-for="i in 12" :key="i" :style="{transform:`rotateZ(${i*30}deg) translateX(35px)`, opacity: (0.1*i-0.3)}"></li>
      </ul>
    </div>
    <div v-show="isShow"
         v-else
         class="seeyou-toast"
         :class="toastClass()">
      <span>{{msg}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      msg: '确定',
      loading: false,
      isShow: false,
      delay: 3,
      animation: 'fade',
    }
  },
  components: {},
  created() {},
  mounted() {
    if (this.loading) {
      this.loadStyle()
    } else {
      this.msgStyle()
    }
  },
  methods: {
    loadStyle() {
      this.isShow = true
    },
    msgStyle() {
      let toastDomArr = [...document.getElementsByClassName('seeyou-toast-pop')]
      if (toastDomArr.length > 0) {
        toastDomArr.forEach((value) => {
          value.remove()
        })
      }
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, this.delay * 1000)
    },
    toastClass() {
      return {
        'seeyou-toast-pop': true,
      }
    },
    hander() {
      this.isShow = !this.isShow
    },
  },
  computed: {
    transitionName() {
      return `seeyou-${this.animation}`
    },
  },
  watch: {},
}
</script>
<style lang="less" scoped>
@import './toast.less';
</style>