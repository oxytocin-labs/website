<template>
  <div class="home">
    <HelloWorld />
    <LandingSection/>

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import LandingSection from "@/components/LandingSection.vue"


export default {
  name: 'Home',
  components: {
    HelloWorld,
    LandingSection
  },


}
</script>
<style >
.home{
  height:100%;
}
</style>
