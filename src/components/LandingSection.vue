<template>
	<div class="landing-section-container">
		<div class="landing-section-text-container">
			<div class="landing-section-text-title">
				<span
					>Imagine Exponential Engineers Who care about your
					project</span
				>
			</div>
			<div class="landing-section-text-para">
				<span>
					We've consistently and meticulously executed on the most
					complex systems within FinTech, Social, Ecommerce for
					millions of users backed by the principles of simplicity,
					performance, and security.
				</span>
		<vs-button border size="xl" class="landing-section-text-btn">Get in Touch</vs-button>
			</div>
		</div>
		<img
			src="https://loka.com/images/hero-3.png"
			alt=""
			class="landing-section-image"
		/>
	</div>
</template>

<script>
export default {};
</script>

<style>
.landing-section-container {
	display: grid;
	box-sizing: border-box;
	padding-top: 100px;
	grid-template-rows: 100%;
	height: 100%;
	align-items: center;
	grid-template-columns: auto;
	position: relative;
}
.landing-section-text-container {
	height: max-content;
	width: 650px;
	box-sizing: border-box;
	position: relative;
	top:-8%;
	margin-left: 150px;
	z-index: 1;
}
.landing-section-text-title {
	color: white;
	font-size: 64px;
	text-align: left;
	height: max-content;
	margin-bottom: 50px;
	font-weight: 700;
}
.landing-section-text-para {
		color: white;
	text-align: left;
	font-size: 24px;
	margin: 0px;
}
.landing-section-image {
	right: 10%;
	z-index: -1;
	position: absolute;
}
.landing-section-text-btn{
	position: absolute !important;
	left: 0;
	top: calc(100% + 30px);
}
</style>