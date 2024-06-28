<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Open sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;

}

.logo {
  width: 150px;
  margin-bottom: -50px;
}

.text {
  color: #0D0D0D;
}

.register input,
.login input,
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #F28F38;
}

.register button,
.login button,
.add button {
  font-family: "Open sans", sans-serif;
  font-weight: bold;
  font-size: 14px;
  width: 320px;
  height: 40px;
  border: 1px solid #F28F38;
  color: #0D0D0D;
  background-color: #F2AE30;
  cursor: pointer;
}
</style>
