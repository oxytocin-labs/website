<template>
	<div id="services" class="service-section-container">
		<div class="service-section">
			<div class="service-section-left">
				<div class="sticky-boi">
					<div class="sticky-boi-content">
						<div class="left-panel-text">
							We use brains and fancy machines to create brands, products and experiences 
							that help our clients solve problems and seize opportunities.
						</div>
					</div>
				</div>
			</div>
			<div class="service-section-right">
				<section
					v-for="service in services"
					:key="service.id"
					class="panel right-panel-section"
				>
					<div class="right-panel-section-content-container">
						<div class="right-panel-section-content">
							<div class="right-panel-section-content-svg">
								<img :src="service.img" alt="" width="300px" />
							</div>
							<div class="right-panel-section-content-title">
								{{ service.title }}
							</div>
							<div class="right-panel-section-content-para">
								<p>
									{{ service.content }}
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import DevelopmentSVG from "../assets/SVG components/DevelopmentSVG.vue";
export default {
	components: {
		
	},
	data() {
		return {
			svg: "",
			services: [
				{
					id: "1",
					title: "The right applications",
					img: "https://imgur.com/bj6nvLt.jpg",					
					content:
						"We leverage our years of agile experience to build software you need.",
				},
				{
					id: "2",
					title: "Carefully crafted",
					img: "https://i.imgur.com/tgwRwIw.jpg",					
					content:
						"Because beautifully designed and engineered software makes all the difference in the world.",
				},
				{
					id: "3",
					title: " And delivered.",
					img: "https://i.imgur.com/DQ0NzQp.jpg",					
					content:
						"On time. Because your business, your time and our reputation is at stake.",
				},
			],
		};
	},
	beforeDestroy() {
		ScrollTrigger.getAll().forEach((t) => t.kill());
	},
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
						ease: "power4.out",
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
	created() {
		this.svg = require(`../assets/development.svg`);
	},
};
</script>

<style>
.sticky-boi {
	padding: 48px;
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	position: sticky;
	top: 0px;
}

.sticky-boi-content {
	display: grid;
	box-sizing: border-box;
	padding: 36px;
	/* place-items: center; */
	height: 100%;
	width: 100%;
}
.left-panel-text {
	font-size: 64px;
	font-weight: 500;
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
	/* justify-content: center; */
	/* align-items: center; */
	font-weight: 600;
	font-size: 1.5em;
	text-align: center;
	color: black;
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
}

/* .right-panel-section {
	border: solid 1px black;
} */
.right-panel-section-content-container {
	display: flex;
	flex-direction: column;
	border: solid 1px black;
	position: relative;
	width: 100%;
	height: 100vh;
	background-color: #f1efe9;
}
.right-panel-section-content {
	margin-top: auto;
	position: relative;
	box-sizing: border-box;
	padding: 48px;
}
.right-panel-section-content-title {
	font-weight: 600;
	text-align: left;
	font-size: 36px;
	padding: 10px 0px;
}
.right-panel-section-content-para {
	color: #2c3e50;
	word-spacing: 6px;
	font-weight: 400;
	line-height: 1.5;
	text-align: left;
	font-size: 20px;
	padding: 10px 0px;
}
.right-panel-section-content-svg {
	margin-bottom: 48px;
	height: 50%;
	width: 50%;
}
@media screen and (max-width: 1300px) {
	.service-section {
		display: flex;
		flex-direction: column;
	}
	.sticky-boi {
		height: max-content;
	}
	.sticky-boi-content {
		height: max-content;
	}
	.left-panel-text {
		font-size: 24px;
	}

	.right-panel-section-content-container {
		justify-content: center;
	}
	.right-panel-section-content {
		box-sizing: border-box;
		padding: 8px;
		margin-top: 0px;
	}
	.right-panel-section-content-svg {
		height: max-content;
	}
}
</style>
