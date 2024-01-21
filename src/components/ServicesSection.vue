<template>
	<div id="facts" class="service-section-container">
		<div class="service-section">
			<div class="service-section-left">
				<div class="sticky-boi">
					<div class="sticky-boi-content">
						<div class="left-panel-text">
							Effect of noise on productivity, health
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
								<img :src="service.img" alt="" width="150px" />
							</div>
							<div class="right-panel-section-content-title">
								{{ service.title }}
							</div>
							<div class="right-panel-section-content-para">
								<p v-html=service.content>
									{{  }}
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
					title: "Health",
					img: "https://imgur.com/vPylBfb.png",					
					content:
						`Chronic noise is a largely unrecognized health threat that is increasing the risk of <a href="https://web.archive.org/web/20230609182432/https://academic.oup.com/eurheartj/article/35/13/829/634015">hypertension, stroke and heart attacks</a> worldwide, including for <a href="https://web.archive.org/web/20230609182432/https://apha.org/Policies-and-Advocacy/Public-Health-Policy-Statements/Policy-Database/2022/01/07/Noise-as-a-Public-Health-Hazard">more than 100 million Americans. The WHO <a href="https://web.archive.org/web/20230609182432/https://academic.oup.com/eurheartj/article/35/13/829/634015">estimates</a> that—in western Europeans—annually 45 000 years are lost due to noise-induced cognitive impairment in children, 903 000 due to noise-induced sleep disturbance, 61 000 due to noise-induced cardiovascular disease, and 22 000 due to tinnitus.`,
				},
				{
					id: "2",
					title: "Productivity",
					img: "https://imgur.com/vPylBfb.png",					
					content:
						`Noise is a remarkably insidious form of pollution: a <a href="https://pub.dega-akustik.de/ICA2019/data/articles/000062.pdf">10dB noise increase (from dishwasher to vacuum) drops productivity by 5% </a>. But we don't notice: noise hurts your ability to think, not your effort. You work as hard but do worse. And poorer areas have more noise.`,
				},
				{
					id: "3",
					title: "Creativity",
					img: "https://imgur.com/vPylBfb.png",					
					content:
						`Background music makes you worse at creative tasks with memory or verbal elements in <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/acp.3532">3 experiments</a>. No difference if the music was instrumental, foreign language, or a particular genre. Silence or low-level noise was best. `,
				},
				{
					id: "4",
					title: "Economics",
					img: "https://imgur.com/vPylBfb.png",					
					content:
						`Economists who analyzed health care spending and productivity loss because of heart disease and hypertension have argued that a 5 dB reduction in U.S. noise could result in an <a href="https://web.archive.org/web/20230609182432/https://pubmed.ncbi.nlm.nih.gov/26024562/">annual benefit of $3.9 billion</a>`,
				},
				{
					id: "5",
					title: "Progressive Risk",
					img: "https://imgur.com/vPylBfb.png",					
					content:
						`A study following <a href="https://web.archive.org/web/20230609182432/https://pubmed.ncbi.nlm.nih.gov/34775186/">more than four million people</a> for more than a decade, for example, found that, starting at just 35 dB, the risk of dying from cardiovascular disease increased by 2.9 percent for every 10 dB increase in exposure to road traffic noise.`,
				},
				{
					id: "6",
					title: "Sleep",
					img: "https://imgur.com/vPylBfb.png",					
					content:
						`The W.H.O. has long recommended <a href="https://web.archive.org/web/20230609182432/https://apps.who.int/iris/bitstream/handle/10665/326486/9789289041737-eng.pdf?sequence=1&amp;isAllowed=y">less than </a><a href="https://web.archive.org/web/20230609182432/https://apps.who.int/iris/bitstream/handle/10665/326486/9789289041737-eng.pdf?sequence=1&amp;isAllowed=y">40 dB</a> as an annual average of nighttime noise outside bedrooms to prevent negative health effects, and <a href="https://web.archive.org/web/20230609182432/https://www.who.int/europe/news-room/fact-sheets/item/noise">less than</a><a href="https://web.archive.org/web/20230609182432/https://www.who.int/europe/news-room/fact-sheets/item/noise"> 30 dB</a> of nighttime noise inside bedrooms for high-quality sleep. 

						Nearly a third of the U.S. population lives in areas exposed to noise levels of at least 45 dB, according to a preliminary analysis based on models of road, rail and aircraft noise in 2020 from the Department of Transportation.`,
				}
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
