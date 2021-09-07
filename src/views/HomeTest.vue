<template>
	<div class="homeTest">
		<LandingSection />
		<WorkSection />
		<ClientsAndTestimonialSection />
		<ServicesSection />
		<ContactSection />
	</div>
</template>

<script>
import ClientsAndTestimonialSection from "../components/ClientsAndTestimonialSection.vue";
import ContactSection from "../components/ContactSection.vue";
import LandingSection from "../components/LandingSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import WorkSection from "../components/WorkSection.vue";

export default {
	name: "HomeTest",
	components: {
		LandingSection,
		WorkSection,
		ClientsAndTestimonialSection,
		ServicesSection,
		ContactSection,
	},
};
</script>
<style>
.homeTest {
	width: 100%;
	height: 100%;
}
</style>
