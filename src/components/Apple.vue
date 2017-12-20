<template>
  <div class="apple">
    <h1>{{msg}}</h1>
    <p>{{$route.params.color}}</p>
    <p>{{$route.params.type}}</p>
    <button @click="getParam">获取</button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        msg: "i am apple"
      }
    },
    methods: {
      getParam () {
        console.log(this.$route.params)
      }
    }
  }
</script>
<style>

</style>
