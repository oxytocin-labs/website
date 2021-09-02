<template>
  <div class="home">
    <LandingSection/>

  </div>
</template>

<script>
import LandingSection from "@/components/LandingSection.vue"


export default {
  name: 'Home',
  components: {
    LandingSection
  },


}
</script>
<style >
.home{
  height:100%;
}
</style>
