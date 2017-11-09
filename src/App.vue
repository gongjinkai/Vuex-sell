<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <ul>
    <li v-for="item in list" v-text="item.name+'-'+item.price">
      {{item.name}} - {{item.price}}
    </li>
    </ul>
    <button @click="addItem">addItem</button>
    <p v-html="hello"></p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      hello:'<span><img>world</span>',
      list: [
        {
          name:'apple',
          price:15
        },
        {
          name:'banana',
          price:11
        },
        {
          name:'orange',
          price:123
        },
      ]
    }
  },
  methods:{
    addItem(){
      this.list.push({
        name:'orange',
        price:123
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
