<template>
  <div id="app">
    <button @click="hander">asd</button>
    <button @click="close">close</button>
    <button @click="msg">msg</button>
    <toast/>
  </div>
</template>
<script>
import toast from '@/components/toast/toast'
export default {
  data() {
    return {

    }
  },
  components:{
    toast
  },
  methods: {
    hander() {
      this.$toast.loading()
    },
    close() {
      this.$toast.close()
    },
    msg() {
      this.$toast.msg('这是一个提示字符')
    }
  }
}
</script>
<style>

</style>
