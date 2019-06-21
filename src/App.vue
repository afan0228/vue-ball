<template>
  <div id="app">
    <!-- <ScrollBall color="red" :value='pos1' :target='500' @setP="setP">红球</ScrollBall> -->
    <!-- <ScrollBall color="red" v-model='pos1' :target='500'>红球</ScrollBall> -->
    <!-- <ScrollBall color="red" :value='pos1' :target='500' @update:value="input">红球</ScrollBall> -->
    <ScrollBall color="red" :value.sync='pos1' :target='500' ref="ball">红球</ScrollBall>
    <ScrollBall color="green" :pos='pos2' :target='500'>绿球</ScrollBall>
    
    <button @click="getP">获取球的位置</button>
    <button @click="stop">停止滚动</button>
    <button @click="start">开始运滚动</button>
    <button @click="rstart">重新滚动</button>
  </div>
</template>

<script>
import ScrollBall from './components/ScrollBall.vue'
import { close } from 'fs';

export default {
  name: 'app',
  data(){
    return{
      pos1:50,
      pos2:100
    }
  },
  methods:{
    stop(){
      this.$refs.ball.stop()
    },
    start(){
      this.$refs.ball.start()
    },
    rstart(){
      this.$refs.ball.rstart()
    },
    getP(){
      console.log(this.pos1)
    },
    input(value){
      this.pos1=value
    }
  },
  components: {
    ScrollBall
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{margin: 0; padding: 0;}
</style>
