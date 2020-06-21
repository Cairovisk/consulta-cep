<template>
  <div id="home">
    <Hero/>
    <Content/>
  </div>
</template>

<script>
import Hero from '@/components/Home/Hero.vue'
import Content from '@/components/Home/Content.vue'

export default {
  components: {
    Hero,
    Content
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>
#home {
  padding: 80px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>