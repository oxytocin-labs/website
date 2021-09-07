<template>
	<div class="service-section-container">
		<div class="service-section">
			<div class="service-section-left">
				<div class="sticky-boi">
					<div class="sticky-boi-content">
						<h1>Hello</h1>
					</div>
				</div>
			</div>
			<div class="service-section-right">
				<section class="panel red">ONE</section>
				<section class="panel orange">TWO</section>
				<section class="panel purple">THREE</section>
				<section class="panel green">FOUR</section>
			</div>
		</div>
	</div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
	mounted() {
		gsap.registerPlugin(ScrollTrigger);

		gsap.utils.toArray(".panel").forEach((panel, i) => {
			if (i !== gsap.utils.toArray(".panel").length - 1)
				ScrollTrigger.create({
					trigger: panel,
					start: "top top",
					pin: true,
					pinSpacing: false,
					scrub: true,
					snap: {
						snapTo: 1,
						duration: 0.5,
						delay: 0,
						inertia: false,
						ease: "elastic.out(1,1)",
					},
				});
			else {
				ScrollTrigger.create({
					trigger: panel,
					start: "top top",
					pin: false,
					pinSpacing: true,
				});
			}
		});
	},
};
</script>

<style>
.sticky-boi {
	padding: 24px;
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	position: sticky;
	top: 0px;
}

.sticky-boi-content {
	display: grid;
	place-items: center;
	height: 100%;
	width: 100%;
}

.service-section-container {
	background-color: #f2f2f2;
	height: max-content;
	margin-top: 10px;
	width: 100%;
}
.service-section {
	height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
}
.service-section-right {
	/* display: grid;
	grid-template-columns: 1fr 1fr; */
	box-sizing: border-box;
	height: max-content;
	width: 100%;
	min-height: 100%;
}
.panel {
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 600;
	font-size: 1.5em;
	text-align: center;
	color: white;
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
}

.red {
	background: lightcoral;
}

.orange {
	background: lightsalmon;
}

.purple {
	background: paleturquoise;
}

.green {
	background: lightgreen;
}

@media screen and (max-width: 1300px) {
	.service-section {
		display: flex;
		flex-direction: column;
	}
}
</style>
