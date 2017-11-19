<template>
  <div>
    {{hello}}
    {{myValue}}
    <button @click="emitMyEvent">emit</button>
    <slot name="header">no header</slot>
    <slot name="content">luan qi ba zao </slot>
    <slot name="footer">no footer</slot>
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
