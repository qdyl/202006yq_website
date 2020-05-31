<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
ul,ol,li{
  list-style: none;
}
@font-face {
  font-family: 'font1';
  src: url(../src/assets/fonts/fonts1.ttf);
}
body{
  width: 100vw;
  min-width: 1200px;
  height: 100vh;
  // background: url(../src/assets/img/bgimg0.jpg) no-repeat fixed left center/1200px 100%;
  background: url(../src/assets/img/bgimg2.jpg) no-repeat fixed left center/100% 100%;
  // filter:brightness(0.6);//设置亮度值，范围：0-1
}
#app {
  // width: 1200px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
