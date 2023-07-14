<template>
	<div class="navbar">
		<!--<div class="navbar-logo">
			<img class="navbar-logo-image" src="../assets/whitelogo.png" alt="" />
		</div>-->
		<div class="landing-section-text-container">
			<div class="landing-section-text-title">
				<span>
				General Control
				</span>
			</div>
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
					label: "Problem",
					click: () => {
						document
							.querySelector("#problem")
							.scrollIntoView({ behavior: "smooth" });
					},
				},
				{
					label: "Product",
					click: () => {
						document
							.querySelector("#product")
							.scrollIntoView({ behavior: "smooth" });
					},
				},				
				{
					label: "Facts",
					click: () => {
						document
							.querySelector("#facts")
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
