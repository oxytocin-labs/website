<template>
	<div id ="product" class="clients-section">
		<div class="clients-section-text">
			<div class="clients-section-text-title">Product & Technology</div>
			<div class="clients-section-text-para">
				
			</div>
		</div>
		<div class="clients-section-card-container">
			<div
				v-for="card in testimonials"
				:key="card.id"
				class="client-section-card"
			>
				<div
					class="main-card"
					@mouseenter="flip"
					@mouseleave="flipBack"
				>
					<div class="card-backside">
						<vs-card>
							<template #title>
								<h3>{{ card.title }}</h3>
							</template>
							<template #img>
								<img
									:src="card.img"									
									alt=""
								/>
							</template>
							<template #text>
								<p>
									{{ card.content }}
								</p>
							</template>
							<template #interactions>
								<!--- <vs-button class="btn-chat" shadow primary>
									<v-icon style="color: red" color="red"
										>mdi-heart</v-icon
									> 
								</vs-button> --->
							</template>
						</vs-card>
					</div>
					<div class="card-frontside">
						<v-card
							height="100%"
							width="100%"
							style="
								border-radius: 20px;
								padding-top: 20%;
								font-weight: bold;
								font-size: x-large;
								text-align: center;
							"
						>
							{{ card.title }}
						</v-card>
					</div>
				</div>
				<div class="card-pocket"></div>
				<div class="card-pocket-embroidery"></div>
				<div class="card-pocket-shadow"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		testimonials: [
			{
				id: "1",
				img: "",
				title: "Coming Soon",
				content: ``,
			},
		],
	}),
	methods: {
		flip(e) {
			e.target.style.animation = null;
			e.target.style.animation = "flip 0.5s linear forwards";
		},
		flipBack(e) {
			if (
				e.target.style.animation ===
				"0.5s linear 0s 1 normal forwards running flip"
			) {
				setTimeout(() => {
					e.target.style.animation = "rev-flip 0.5s linear forwards";
					setTimeout(() => {
						e.target.style.animation = null;
					}, 500);
				}, 500);
			}
		},
	},
};
</script>

<style>
.clients-section {
	height: 100vh;
	width: 100%;
	box-sizing: border-box;
	padding: 50px 30px 0px 30px;
	display: grid;
}
.clients-section-text {
	width: 100%;
}

.clients-section-text-title {
	padding: 20px;
	padding-bottom: 10px;
	font-size: 48px;
	text-align: left;
	color: white;
}
.clients-section-text-para {
	padding: 20px;
	font-size: 24px;
	text-align: left;
	color: #a2a8b0;
}
.clients-section-card-container {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	box-sizing: border-box;
	place-items: center;
	padding: 0px 30px;
}
.client-section-card {
	position: relative;
	width: max-content;
	height: max-content;
}

.main-card {
	box-shadow: 0px 20px 20px 0px #21242b3b;
	transition: transform 300ms ease-out;
	perspective: 1000px;
	transform-style: preserve-3d;
	position: relative;
	height: max-content;
	width: max-content;
	transform-origin: 50% 95%;
}

/* .main-card:hover {
	transform: translateY(-10%);
}
.main-card:active {
	transform: translateY(0px);
} */

.main-card > * {
	pointer-events: none;
}

.card-backside {
	height: 100%;
	width: 100%;
	position: absolute;
	left: 0px;
	top: 0px;
	z-index: 0;
	border-radius: 20px;
	backface-visibility: hidden;
	transform: rotateX(180deg);
}

.card-frontside {
	height: 400px;
	width: 300px;
	position: relative;
	z-index: 1;
	background: transparent;
	box-sizing: border-box;
	backface-visibility: hidden;
}

/* @keyframes flip {
	0% {
		animation-timing-function: ease-in;
	}
	20% {
		transform: translateY(-50%) rotateZ(5deg);
		animation-timing-function: ease-in-out;
	}
	25% {
		transform: translateY(-50%) rotateX(0deg) rotateZ(5deg);
		z-index: 0;
	}
	50% {
		z-index: 10;
		transform: translateY(-80%) rotateX(180deg) rotateZ(0deg);
		animation-timing-function: cubic-bezier(0.47, 0.52, 0.13, 1.7);
	}
	80% {
		transform: translateY(-100%) rotateX(180deg) rotateZ(5deg);
	}
	100% {
		z-index: 10;
		transform: translateY(-100%) rotateX(180deg) rotateZ(5deg);
	}
} */

/* @keyframes rev-flip {
	0% {
		z-index: 10;
		transform: translateY(-100%) rotateX(180deg) rotateZ(5deg);
		animation-timing-function: linear;
	}

	40% {
		z-index: 0;
		transform: translateY(-80%) rotateZ(5deg);
	}
	50% {
		transform: translateY(-50%) translateZ(100px) rotateX(0deg)
			rotateZ(5deg);
		z-index: 0;
		animation-timing-function: cubic-bezier(0.47, 0.52, 0.13, 1.7);
	}

	80% {
		transform: translateY(-50%) translateZ(100px);
		animation-timing-function: ease-in-out;
	}
	100% {
		animation-timing-function: ease-in;
	}
} */

@keyframes flip {
	0% {
		animation-timing-function: linear;
	}
	20% {
		transform: translateY(-50%);
	}
	25% {
		transform: translateY(-50%) rotateX(0deg);
		z-index: 0;
	}
	50% {
		z-index: 10;
		transform: translateY(-100%) rotateX(180deg);
	}
	80% {
		z-index: 10;
		transform: translateY(-100%) rotateX(180deg);
	}
	100% {
		z-index: 10;
		transform: translateY(-100%) rotateX(180deg);
	}
}

@keyframes rev-flip {
	0% {
		z-index: 10;
		transform: translateY(-100%) rotateX(180deg);
		animation-timing-function: linear;
	}

	40% {
		z-index: 0;
		transform: translateY(-80%);
	}
	50% {
		transform: translateY(-50%) rotateX(0deg);
		z-index: 0;
		animation-timing-function: linear;
	}

	80% {
		transform: translateY(0%);
	}
	100% {
		animation-timing-function: ease-in;
	}
}

.card-pocket {
	width: 110%;
	height: 80%;
	position: absolute;
	left: 50%;
	background-color: #21242b;
	transform: translateX(-50%);
	bottom: -10%;
	border-top: 2px solid #a1a1a19f;
	z-index: 2;
}

.card-pocket-embroidery {
	width: 110%;
	height: 78%;
	transform: translateX(-50%);
	position: absolute;
	left: 50%;
	bottom: -10%;
	z-index: 3;
	border-top: 2px dashed #3d43509f;
}

.card-pocket-shadow {
	position: absolute;
	width: 95%;
	transform: translateX(-50%);
	bottom: 10%;
	left: 50%;
	height: 55%;
	z-index: 1;
	box-shadow: 0px -20px 20px 0px #0000008c;
}

@media screen and (max-width: 1300px) {
	.card-pocket,
	.card-pocket-shadow,
	.card-pocket-embroidery {
		display: none;
	}

	.clients-section-card-container {
		display: grid;
		/* flex-direction: column; */
		align-items: center;
		gap: 24px;
	}

	.clients-section-text-title {
		text-align: center;
		font-size: 32px;
	}

	.clients-section-text-para {
		text-align: center;
		font-size: 16px;
	}

	.main-card {
		transform-origin: 50% 50%;
	}

	.main-card:hover {
		transform: translateY(0%);
	}
	.main-card:active {
		transform: translateY(0%);
	}

	.clients-section {
		padding: 0px;
		height: max-content;
	}

	@keyframes flip {
		from {
			transform: rotateX(0deg);
		}
		30% {
			transform: rotateX(180deg);
		}
		100% {
			transform: rotateX(180deg);
		}
	}
	@keyframes rev-flip {
		from {
			transform: rotateX(180deg);
		}
		50% {
			transform: rotateX(0deg);
		}
		100% {
			transform: rotateX(0deg);
		}
	}
}
</style>
