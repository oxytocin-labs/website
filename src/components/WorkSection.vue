<template>
	<div id ="problem" class="work-section">
		<div class="work-section-card">
			<div class="work-section-text-container">
				<div class="work-section-text-title">Problem</div>
				<div class="work-section-text-para">
					Anyone who lives in a noisy environment may feel they have adapted to the cacophony. But <a href="https://web.archive.org/web/20230609182432/https://www.nytimes.com/interactive/2023/06/09/health/noise-exposure-health-impacts.html?smid=nytcore-ios-share&referringSource=articleShare">data</a> shows the opposite: Prior noise exposure primes the body to overreact, amplifying the negative effects.
					It is a largely unrecognized health threat that is increasing the risk of hypertension, stroke and heart attacks worldwide, including for more than 100 million Americans.
				</div>
			</div>
			<div class="right-panel">
				<div class="work-section-carousel">
					<!-- TODO: make this a component -->
					<div style="position: relative">
						<div
							v-for="card in cards"
							:key="card.id"
							class="item"
							v-on:click = "clickAction"
							@mouseenter="pause"
							@mouseleave="play"
						>
							<vs-card style="width: 300px">
								<template #title>
									<h3>{{ card.title }}</h3>
								</template>
								<template #img>
									<img :src="card.img" alt="" />
								</template>
								<template #text>
									<p class="card-content">
										{{ card.content }}
									</p>
								</template>
							</vs-card>
						</div>
						<div
							ref="carousel-item"
							v-for="card in cards"
							:key="card.id + '_dup'"
							class="item"
							v-on:click = "clickAction"
							@mouseenter="pause"
							@mouseleave="play"
						>
							<vs-card style="width: 300px">
								<template #title>
									<h3>{{ card.title }}</h3>
								</template>
								<template #img>
									<img :src="card.img" alt="" />
								</template>
								<template #text>
									<p class="card-content">
										{{ card.content }}
									</p>
								</template>
							</vs-card>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		stopScroll: false,
		cards: [
			{
				id: "1",
				title: "Traffic in Brooklyn, New York",
				website: "https://vivefacil.com.mx/",
				services: "UI/UX, Development",
				timeframe: "August - September 2021",
				content: ``,
				img: "https://imgur.com/iGowNJm.gif",
			},
			{
				id: "2",
				title: "Plane over Bankers Hill, San Diego",
				website: "https://app.multitudes.space/",
				timeframe: "August - October 2021",
				services: "UI/UX, Development, Strategy",
				content: ``,
				img: "https://imgur.com/a7yKEda.gif",
			},
			{
				id: "3",
				title: "Train near D’Lo, Miss.",
				website: "",
				timeframe: "",
				services: "UI/UX, Development, Strategy",				
				timeframe: "October 2021 -",
				content: "",
				img: "https://imgur.com/nVhmT1z.gif",
			},			
			
		],
	}),
	methods: {
		clickAction(e){
			console.log(e);
		},
		pause(e) {
			e.target.offsetParent.style.animationPlayState = "paused";
		},
		play(e) {
			e.target.offsetParent.style.animationPlayState = null;
		},
	},
};
</script>

<style>
.work-section {
	width: 100%;
	min-height: 100vh;
	height: max-content;
	border-radius: 16px;
	display: grid;
	place-items: center;
}
.work-section-card {
	display: grid;
	height: 85%;
	width: 95%;
	align-items: center;
	background-color: #f2f2f2;
	grid-template-columns: 40% 60%;
	border-radius: 16px;
}
.work-section-text-container {
	box-sizing: border-box;
	padding: 50px;
	padding-right: 30px;
	text-align: left;
}

.right-panel {
	overflow-x: scroll;
	height: 95%;
	width: 98%;
	display: grid;
	align-items: center;
	background: #2c3e50;
	justify-content: right;
	overflow: hidden;
	border-radius: 14px;
	box-shadow: inset 0px 0px 20px 7px rgb(0 0 0 / 20%);
}

.work-section-carousel {
	display: grid;
	align-items: center;
	height: min-content;
	width: 100%;
	overflow: hidden;
}

.work-section-text-title {
	font-size: 60px;
	font-weight: 700;
	padding: 20px;
	padding-left: 10px;
}
.work-section-text-para {
	font-size: 20px;
	padding: 10px;
	padding-top: 28px;
}
.work-section-carousel > div {
	display: flex;
	align-items: center;
	height: 500px;
	min-width: 300px;
	width: max-content;
	align-items: center;
	animation: slick 10s linear infinite;
}

.item {
	margin: 0px 25px;
	transition: all 300ms cubic-bezier(0.66, 0.29, 0.16, 1.5);
}
.item:hover {
	margin-right: 16px;
	transform: scale(1.1);
	margin: 0px 50px;
	z-index: 100;
}

.card-content {
	height: 100px;
	width: 80%;
}

@keyframes slick {
	100% {
		transform: translateX(-50%);
	}
}

@media screen and (max-width: 1300px) {
	.work-section {
		width: 100%;
		height: max-content;
	}
	.work-section-text-container {
		border-radius: 0px;
	}

	.work-section-text-title {
		font-size: 32px;
	}
	.work-section-text-para {
		font-size: 16px;
	}

	.work-section-card {
		border-radius: 0px;
		display: flex;
		flex-direction: column;
		height: max-content;
		width: 100%;
		align-items: center;
		background-color: #f2f2f2;
		grid-template-columns: 100%;
		grid-template-rows: auto auto;
	}
	.right-panel {
		border-radius: 0px;
		height: 100%;
		width: 100%;
	}

	.item:hover {
		z-index: 100;
		transform: scale(1);
	}
}
</style>
