<template>
	<div class="navbar">
		<div class="navbar-logo">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2000 2000"
				class="navbar-logo-image"
			>
				<g fill="white">
					<path
						d="M965.81 0h59.92c37.59 2.47 75.25 4.7 112.59 10 127.82 18 252.47 60.5 363.62 126.26-25.58 20.33-53 38.21-79.23 57.66C1245.4 320.83 1068.53 448.4 891 575c-14.38-11.92-26.84-25.91-40.48-38.62-40.52-38.8-79.9-78.74-120.76-117.08-14.9 5.38-28.5 13.64-42.4 21.11-92.75 51.75-171.68 127.17-229.15 216.33C383.39 562.31 311.68 465.43 240.89 368c-2.22-3.25-4.2-6.62-6.22-10a970.52 970.52 0 0 1 86.1-90.39C474 125 673 31.92 881.17 7.52 909.27 3.7 937.64 3 965.81 0zM1451.67 373.94c62.74-47.32 125.58-94.54 189.83-139.77 131.87 109.7 234.21 254.41 294.66 414.83 76.59 201.43 84.37 427.9 22.78 634.31a986.68 986.68 0 0 1-89 208.6c-5.87-5-10-11.6-14.58-17.64l-363.19-479.8c-23.51-31.42-47.71-62.31-70.85-94 53-56.93 108.28-111.87 161.46-168.68a645.32 645.32 0 0 0-155.94-210.36c-25.86-23.55-54.36-43.82-83.16-63.52 35.1-29.08 71.86-56.15 107.99-83.97M70.19 633.61c18-44.53 38.07-88.5 63-129.61 35.25 44.38 68.91 90.06 103.5 135q164.51 215.48 328.87 431c7.18 9.46 14.9 18.52 21.07 28.7-55.34 57.76-112.11 114.16-167.22 172.15 13.29 31.4 31.29 60.6 50.08 89a646.31 646.31 0 0 0 99.37 114.52c27 25.23 57.15 46.69 87.46 67.72-26.41 22.19-54.28 42.59-81.52 63.72Q502 1661.53 428 1715.67c-23.34 16.53-45.72 34.44-69.79 49.91-155.26-129.79-269.54-307.77-322.63-503C14 1185.21 3.5 1105.16 0 1025v-50c1.16-17.33 2.24-34.67 3.45-52a993.8 993.8 0 0 1 66.74-289.39zM1476.16 1429.79c24.75-26.77 45.9-56.5 66.54-86.44 22.33 27.47 43.63 55.8 65.28 83.82 53.63 70.49 106.72 141.38 158.06 213.53-14.65 20.43-32.78 38.14-50 56.43-143.68 147.9-334 250-537.14 286.57-48 9.21-96.85 13.11-145.62 16.3h-72.43c-21.48-2.72-43.15-3.17-64.63-5.64-139.72-14.69-276.66-58.76-397.63-130.36 41.42-31.57 83.43-62.36 125.05-93.71q238.29-177.74 476.41-355.75c26.94 24.83 52.37 51.27 78.88 76.6 31 29.66 60.8 60.73 92.45 89.76 77.69-35.54 147.36-87.99 204.78-151.11"
					/>
				</g>
			</svg>
		</div>
		<div class="nav-actions-card-container">
			<vs-card type="3" class="nav-actions-card">
				<template #text>
					<div class="nav-actions">
						<vs-button
							transparent
							dark
							style="margin: 0px"
							size="large"
							v-for="button in buttons"
							:key="button.label"
							@click="button.click"
							>{{ button.label }}</vs-button
						>
					</div>
				</template>
			</vs-card>
		</div>
		<div class="nav-button">
			<vs-button
				transparent
				class="nav-button-icon"
				@click="openMenu = !openMenu"
			>
				<div>
					<v-btn v-if="!openMenu" fab small>
						<v-icon>mdi-menu</v-icon>
					</v-btn>
					<v-btn v-if="openMenu" fab small>
						<v-icon>mdi-window-close</v-icon>
					</v-btn>
				</div>
			</vs-button>

			<transition name="slide">
				<div v-if="openMenu" class="nav-menu">
					<vs-card type="3" class="nav-actions-card">
						<template #text>
							<div class="nav-actions">
								<vs-button
									transparent
									dark
									style="margin: 0px"
									size="large"
									v-for="(button, idx) in buttons"
									:key="idx"
									@click="button.click"
									>{{ button.label }}</vs-button
								>
							</div>
						</template>
					</vs-card>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			openMenu: false,
			buttons: [],
			homePageButtons: [
				{
					label: "Portfolio",
					click: () => {
						document
							.querySelector("#portfolio")
							.scrollIntoView({ behavior: "smooth" });
					},
				},
				{
					label: "Services",
					click: () => {
						let ele = document.getElementById("contact");
						ele.scrollIntoView;
					},
				},
				{
					label: "Contact",
					click: () => {
						document
							.querySelector("#contact")
							.scrollIntoView({ behavior: "smooth" });
					},
				},
				{
					label: "About",
					click: () => {
						this.$router.push("about");
					},
				},
			],
		};
	},

	beforeMount() {
		if (this.$route.path === "/") {
			this.buttons = this.homePageButtons;
		} else {
			this.buttons = [
				{
					label: "Back",
					click: () => {
						this.$router.push("/");
					},
				},
			];
		}
	},
	computed: {
		curRoute() {
			return this.$route.path;
		},
	},
	watch: {
		curRoute() {
			if (this.$route.path === "/") {
				this.buttons = this.homePageButtons;
			} else {
				this.buttons = [
					{
						label: "Back",
						click: () => {
							this.$router.push("/");
						},
					},
				];
			}
		},
	},
};
</script>

<style scoped>
.navbar-container {
	padding-top: 60px;
}

.navbar {
	display: flex;
	position: fixed;
	width: 100%;
	max-width: 1440px;
	justify-content: space-between;
	box-sizing: border-box;
	left: 50%;
	transform: translateX(-50%);
	top: 0;
	padding: 60px 150px 0px 150px;
	align-items: center;
	z-index: 10;
}

.navbar-logo-image {
	position: relative;
	align-items: center;
	max-height: 3rem;
	padding: 0.5rem 0.75rem;
	height: 62px;
	width: 62px;
	stroke: white;
	fill: white;
}
.navbar-logo {
	display: grid;
	place-items: center;
}
.nav-actions {
	display: flex;
	margin: -10px;
	transition: 0.3s;
	width: max-content;
}

.nav-actions-card {
	position: relative;
	width: max-content;
}
.nav-button {
	display: none;
	width: max-content;
}
.nav-menu {
	display: none;
	position: absolute;
	top: 100%;
	right: 12px;
	/* transform: translateX(-50%); */
	/* right: 0%; */
}

.slide-enter-active,
.slide-leave-active {
	transition: 300ms ease-out;
}

.slide-enter,
.slide-leave-to {
	transform: translateX(100%);
	opacity: 0;
}

.nav-button-icon:active div {
	transition: all 300ms;
	transform: scaleY(0.7) scaleX(1.2);
}

@media screen and (max-width: 1300px) {
	.nav-menu {
		display: block;
	}
	.navbar {
		justify-content: space-between;
		padding: 0px;
	}
	.nav-actions-card-container {
		display: none;
	}

	.nav-button {
		display: block;
	}
}
</style>
