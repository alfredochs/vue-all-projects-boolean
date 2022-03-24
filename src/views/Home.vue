<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
<hello-world></hello-world>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../views/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
