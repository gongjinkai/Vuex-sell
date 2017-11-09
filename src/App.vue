<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <ul>
    <li v-for="item in list" v-text="item.name+'-'+item.price">
      {{item.name}} - {{item.price}}
    </li>
      {{status?'success':'fail'}}
    </ul>
    <button @click="addItem" :style="linkCss">addItem</button>
    <a :href="link" class="link-href" :class="className">to baidu</a>
    <p v-html="hello" :class="[classA,{'red-font':hasError}]"></p>

    <a v-if="isPartA">PartA</a>
    <a v-else>no data</a>
    <a v-show="!isPartA">PartB</a>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'app',
    data(){
      return{
        hello:'<span><img>world</span>',
        link:'www.baidu.com',
        num:1,
        status:true,
        isPartA:true,
        className:{
          'red-font':true,
          'blue-font':false
        },
        linkCss:{
          'color':'red',
          'font-size':'24px'
        },
        classA:'hello',
        hasError:true,
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
        Vue.set(this.list,1,{
          name :'orange',
          price:123
        })
      },
      toggle(){
        this.isPartA = !this.isPartA
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
