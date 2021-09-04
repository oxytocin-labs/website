<template>
	<div class="home">
		<LandingSection />
		<WorkSection />
		<ClientsAndTestimonialSection />
	</div>
</template>

<script>
import ClientsAndTestimonialSection from "../components/ClientsAndTestimonialSection.vue";
import LandingSection from "../components/LandingSection.vue";
import WorkSection from "../components/WorkSection.vue";

export default {
	name: "Home",
	components: {
		LandingSection,
		WorkSection,
		ClientsAndTestimonialSection,
	},
};
</script>
<style>
.home {
	width: 100%;
	height: 100%;
}
</style>
