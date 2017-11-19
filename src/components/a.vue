<template>
  <div>
    {{hello}}
    {{myValue}}
    <button @click="emitMyEvent">emit</button>
    <slot>no slot</slot>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props:{
    'my-value': [String]
  },
  data() {
    return {
      hello: "i am component a",
      world: 'i am world'
    }
  },
  methods: {
    emitMyEvent(){
      this.$emit('my-event',this.world)
    }
  }
}
</script>
<style>

</style>
