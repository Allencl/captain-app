<template>
  <div>
    <div style="height:60px;"></div>

    <img style="width: 120px;height: 120px;" :src="image" alt="">
    <h1 style="color: rgba(0, 0, 0, .87);font-size: 16px;font-family: Roboto, sans-serif;line-height: 1.5;">Oh Captain! My Captain!</h1>
    
    <div style="height:50px;"></div>


    <div style="text-align: center;" @click="changeClick">
      <div v-if="!isopen" style="display: inline-block;width:100px;height:100px;background-color:#CFD8DC;line-height: 100px;border-radius:100%;">
        <span style="font-size: 26px;font-family: Roboto, sans-serif;line-height: 100px;color: #fff;">关闭</span>
      </div>
      <div v-if="isopen" style="display: inline-block;width:100px;height:100px;background-color:#81C784;line-height: 100px;border-radius:100%;">
        <span style="font-size: 26px;font-family: Roboto, sans-serif;line-height: 100px;color: #fff;">打开</span>
      </div>
    </div>
    
    <!-- <h1>{{ time }}</h1> -->
  </div>
</template>

<script>

import moment from 'moment'

export default {
  data: () => ({
    time: "",
    isopen: false,

    image: require('@/assets/logo.png')

  }),
  created(){

    this.$nextTick(()=>{
      if(this.isopen){
        this.initFunc()
      }
    })

  },
  methods:{
    initFunc(){

      const that=this

      //清除interval定时器
      if(window.IntervalItemRight1){
        clearInterval(window.IntervalItemRight1)
      }


      window.IntervalItemRight1=setInterval(()=>{

        const now = new Date();
        const minutes = now.getMinutes();

        if( [13,28,43,58].includes(minutes) ){

          // 消息推送
          if(window.plus){
            plus.push.clear();
            const options = {cover:false};    
            const str = moment().format('HH:mm');   
            plus.push.createMessage(str, "captain", options);  
          }

        }

      },20000)

    },
    changeClick(){
      setTimeout(()=>{
        this.isopen = !this.isopen

        this.$nextTick(()=>{

          if( this.isopen ){

            this.initFunc()

          }else{

            //清除interval定时器
            if(window.IntervalItemRight1){
              clearInterval(window.IntervalItemRight1)
            }

            // 清除消息
            if(window.plus){
              plus.push.clear();
            }
          }


        })

      },300)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
