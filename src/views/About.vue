<template>
	<div class="about">
		<div class="about-content">
			<v-card elevation="12" class="about-card">
				<v-card-title>About us</v-card-title>
				<v-card-text>We know you are busy, so we’ll get straight to the point. We are a group of clever people in Mexico City and Delhi. 
				We use brains and fancy machines to create brands, products and experiences that help our clients solve problems and seize opportunities. More coming soon here!</v-card-text>

			</v-card>
		</div>
	</div>
</template>

<style scoped>
.about {
	display: grid;
	place-items: center;
	min-height: 100vh;
	width: 100%;
}
.about-content {
	display: grid;
	place-items: center;
	width: 90%;
	height: 90%;
}

.about-card {
	padding: 32px;
}
</style>
