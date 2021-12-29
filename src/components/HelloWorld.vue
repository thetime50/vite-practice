<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <div class="test1">
    hello test1
    <div class="test">
      hello test
    </div>
  </div>
  <div class="title">
    this is title
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style scoped lang="scss">
@import url('@/assets/style/test.scss');
a {
  color: #42b983;
}
.test1{
  color: #aaffaa;
  .test{
    color: #aaffff;
  }
}
</style>
