<template>
	<div id="landing" class="landing-section-container">
		<div class="landing-section-text-container">
			<div class="landing-section-text-title">
				<span
					>Control your environment</span
				>
			</div>
			<div class="landing-section-text-para">
				<span>
					Create silent zones at your work and home.
				</span>
				<v-btn
					outlined
					rounded
					color="#fff"
					large
					class="landing-section-text-btn"
					@click="gotoAbout"
					>Get on the waitlist</v-btn
				>
			</div>
			<div class="landing-section-image-container">
				<img src="../assets/sound.gif" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		gotoAbout(e) {
			document
				.querySelector("#contact")
				.scrollIntoView({ behavior: "smooth" });
			e.target.blur();
		},
	},
};
</script>

<style>
.landing-section-container {
	display: grid;
	box-sizing: border-box;

	min-height: 728px;
	height: 100vh;
	width: 100%;
	align-items: center;

	position: relative;
}
.landing-section-text-container {
	height: max-content;
	width: 650px;
	box-sizing: border-box;
	position: relative;
	top: 0%;
	left: 50%;
	transform: translateX(-100%);
	margin-left: 0%;
	z-index: 1;
}
.landing-section-text-title {
	color: white;
	font-size: 56px;
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
.landing-section-image-container {
	height: 600px;
	left: 45%;
	width: 1000px;
	top: -100px;
	z-index: -10;
	position: absolute;
	overflow: hidden;
}

.landing-section-image-container img {
	/* height: 100%; */
	max-height: 600px;
	aspect-ratio: 1.7;
}

.landing-section-text-btn {
	position: absolute;
	left: 0;
	top: calc(100% + 50px);
}
@media screen and (max-width: 1300px) {
	.landing-section-container {
		box-sizing: border-box;
		padding-top: 20%;
		align-items: normal;
	}

	.landing-section-image-container {
		display: none;
	}

	.landing-section-text-container {
		transform: translateX(-50%);
		width: 100%;
		text-align: center;
		padding: 24px;
	}

	.landing-section-text-para {
		width: 60vw;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}

	.landing-section-text-container * {
		text-align: center;
	}

	.landing-section-text-btn {
		left: 50%;
		transform: translateX(-50%);
	}

	.landing-section-text-title {
		font-size: 32px;
	}
	.landing-section-text-para {
		font-size: 16px;
	}
}
</style>
