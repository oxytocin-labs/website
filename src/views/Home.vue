<template>
	<div class="home">
		<LandingSection />
		<WorkSection />
		<ClientsAndTestimonialSection />
		<ContactSection />
	</div>
</template>

<script>
import ClientsAndTestimonialSection from "../components/ClientsAndTestimonialSection.vue";
import ContactSection from "../components/ContactSection.vue";
import LandingSection from "../components/LandingSection.vue";
import WorkSection from "../components/WorkSection.vue";

export default {
	name: "Home",
	components: {
		LandingSection,
		WorkSection,
		ClientsAndTestimonialSection,
		ContactSection,
	},
};
</script>
<style>
.home {
	width: 100%;
	height: 100%;
}
</style>
