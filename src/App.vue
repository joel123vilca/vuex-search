<template>
  <div id="app">
    <div class="container text-center">
      <UserApp/>
    </div>
  </div>
</template>

<script>
import UserApp from './components/UserApp';

export default {
  name: 'app',
  components: {
    UserApp
  }
}
</script>
