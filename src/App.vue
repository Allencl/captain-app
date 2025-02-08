<template>
  <div>
    <h1>111</h1>
    <h1>{{ time }}</h1>
  </div>
</template>

<script>

import moment from 'moment'

export default {
  data: () => ({
    time: ""
  }),
  created(){

    this.$nextTick(()=>{
      this.initFunc()
    })

  },
  methods:{
    initFunc(){

      //清除interval定时器
      if(window.IntervalItemRight1){
        clearInterval(window.IntervalItemRight1)
      }


      window.IntervalItemRight1=setInterval(()=>{

        if (!window.plus) return

        const now = new Date();
        const minutes = now.getMinutes();

        // if( [0,15,30,45].includes(minutes) ){
        //   console.log(  minutes );
        // }

        // console.log( )


        const options = {cover:false};    
        const str = moment().format('HH:mm');   
        plus.push.createMessage(str, "captain", options);  


      },3000)

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
