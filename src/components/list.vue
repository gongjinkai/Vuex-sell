<template>
  <div class="list">
    <div>这是第{{id}}个路由规则</div>
  </div>
</template>
<script>

  /**
   * 等同于下面的写法
   * @type {{name: string, data: (function())}}
   */
  let com = {
    name: 'xiaoxiao',
    data () {
      return {
        msg: "welcome to Your Vue.js App"
      }
    }
  };
  export { com }
  export default {
    data () {
      return {
        id: ''
      }
    },
    mounted () {
      this.id = this.$route.params.id;
      console.log(this.id)
    },
  }
</script>
<style>

</style>
