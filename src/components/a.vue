<template>
  <div>
    {{hello}}
    {{numberToDo}}
    <button @click="emitMyEvent">emit</button>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props:['number-to-do'],
  data() {
    return {
      hello: "i am component a"
    }
  },
  methods: {
    emitMyEvent(){
      this.$emit('my-event',this.hello)
    }
  }
}
</script>
<style>

</style>
