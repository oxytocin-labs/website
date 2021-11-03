<template>
	<div class="clients-section">
		<div class="clients-section-text">
			<div class="clients-section-text-title">Clients & Testimonials</div>
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
									src="data:image/jpeg;base64,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"
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
				title: "Joe Merullo, CEO, ViveFacil",
				content: `Typing...`,
			},
			{
				id: "2",
				title: "Manny Fassihi, CEO, Multitudes",
				content: `Thinking...`,
			},
			{
				id: "3",
				title: "Craig McDonald, EIR, Prism",
				content: `Writing...`,
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
