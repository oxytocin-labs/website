<template>
	<div class="clients-section">
		<div class="clients-section-text">
			<div class="clients-section-text-title">Clients & Testimonials</div>
			<div class="clients-section-text-para">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
				vitae hic debitis velit nulla amet error unde asperiores odio
				minima, eos quas voluptatem dolorem esse beatae minus expedita
				quod voluptatibus?
			</div>
		</div>
		<div class="clients-section-card-container">
			<div
				v-for="card in testimonials"
				:key="card.id"
				class="client-section-card"
			>
				<vs-card
					type="4"
					class="main-card"
					@mouseenter="flip"
					@mouseleave="flipBack"
				>
					<template #img>
						<img src="https://vuesax.com/foto2.jpg" alt="" />
					</template>
					<template #title>
						<h3>{{ card.title }}</h3>
					</template>
					<template #text>
						<p>
							{{ card.content }}
						</p>
					</template>
					<template #interactions>
						<vs-button danger icon>
							<v-icon>mdi-heart</v-icon>
						</vs-button>
					</template>
				</vs-card>
				<div class="card-pocket"></div>
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
				title: "Mark",
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
				vitae hic debitis velit nulla amet error unde asperiores odio
				minima, eos quas voluptatem dolorem esse beatae minus expedita
				quod voluptatibus?`,
			},
			{
				id: "2",
				title: "Adam",
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
				vitae hic debitis velit nulla amet error unde asperiores odio
				minima, eos quas voluptatem dolorem esse beatae minus expedita
				quod voluptatibus?`,
			},
			{
				id: "3",
				title: "Clara",
				content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
				vitae hic debitis velit nulla amet error unde asperiores odio
				minima, eos quas voluptatem dolorem esse beatae minus expedita
				quod voluptatibus?`,
			},
		],
	}),
	methods: {
		flip(e) {
			e.target.offsetParent.style.animation = "flip 1.5s linear forwards";
		},
		flipBack(e) {
			setTimeout(() => {
				e.target.offsetParent.style.animation =
					"rev-flip 1.5s linear forwards";
			}, 1500);
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
	grid-template-rows: 40% 60%;
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
	display: grid;
	grid-template-columns: auto auto auto;
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
	animation: flip 1.5s linear forwards;
	animation-play-state: paused;
	transform-origin: 50% 95%;
}

/* .main-card:hover { */
/* } */

@keyframes flip {
	1% {
		animation-timing-function: ease-in;
	}
	20% {
		transform: translateY(-50%) translateZ(100px) rotateZ(5deg);
		animation-timing-function: ease-in-out;
	}
	25% {
		transform: translateY(-50%) translateZ(100px) rotateX(0deg)
			rotateZ(5deg);
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
}

@keyframes rev-flip {
	1% {
		z-index: 10;
		transform: translateY(-100%) rotateX(180deg) rotateZ(5deg);
		animation-timing-function: linear;
	}

	40% {
		z-index: 10;
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
}

.card-pocket {
	width: 110%;
	height: 60%;
	position: absolute;
	left: 50%;
	background-color: #21242b;
	transform: translateX(-50%);
	bottom: -10%;
	border-top: 2px solid #5058689f;
	z-index: 1;
}

.card-pocket-shadow {
	position: absolute;
	width: 95%;
	transform: translateX(-50%);
	bottom: 10%;
	left: 50%;
	height: 35%;
	z-index: 0;
	box-shadow: 0px -20px 20px 0px #0000008c;
}
</style>
