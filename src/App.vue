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
    <input type="text" v-model.lazy="myValue">
    <br>
    {{myValueWithoutNum}}
    {{getMyValWithoutNum()}}
    <input type="text" @keydown.13="onKeydown()">
    <com-a @my-event="onComaMyEvent"></com-a>
    <input type="checkbox" v-model="myBox" value="apple">
    <input type="checkbox" v-model="myBox" value="banana">
    <input type="checkbox" v-model="myBox" value="pinapple">
    {{myBox}}
    <select v-model="selection">
      <option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
    </select>
      {{selection}}
  </div>
</template>

<script>
  import Vue from 'vue'
  import comA from './components/a'
  export default {
    name: 'app',
    data(){
      return{
        selectOption:[
          {
            text: 'apple',
            value: 0
          },
          {
            text: 'banana',
            value: 1
          }
        ],
        selection: null,
        myValue: '',
        myBox:[],
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
    components:{
      comA
    },
    watch:{
      myValue:((val,oldVal)=>{
        console.log(val,oldVal)
      }),
      list:function(){
        this.tellUser()
      }
    },
    computed: {
      myValueWithoutNum () {
        return this.myValue.replace(/\d/g,'')
      }
    },
    methods:{
      addItem(){
        Vue.set(this.list,1,{
          name :'orange',
          price:123
        })
      },
      changeList(){
        Vue.set(this.myList,1,{
          name:"pinapple",
          price:256
        });
        //this.tellUser()
      },
      removeItem(){
        //this.tellUser()
      },
      tellUser(){
        alert('list change')
      },
      toggle(){
        this.isPartA = !this.isPartA
      },
      onKeydown(){
        console.log('on key down')
      },
      onComaMyEvent(parmfromA){
        console.log('onComaMyEvent' + parmfromA)
      },
      getMyValWithoutNum(){
        return this.myValue.replace(/\d/g,'')
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
