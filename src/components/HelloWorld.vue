<template>
	<div class="navbar">
		<div class="navbar-logo">
			<img
				src="../../public/logo.svg"
				alt="--logo--"
				class="navbar-logo-image"
			/>
		</div>
		<div>
			<vs-card type="3" class="nav-actions-card">
				<template #text>
					<div class="nav-actions">
						<!-- <vs-button-group> -->
						<vs-button
							transparent
							dark
							style="margin: 0px"
							size="large"
							v-for="(button, idx) in buttons"
							:key="idx"
							>{{ button.label }}</vs-button
						>
						<!-- </vs-button-group> -->
					</div>
				</template>
			</vs-card>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		msg: String
	},
	data: () => ({
		active: 0,
		buttons: [
			{ label: "Portfolio", action: null },
			{ label: "Services", action: null },
			{ label: "Contact", action: null },
			{ label: "About", action: null }
		]
	})
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
	justify-content: space-between;
	box-sizing: border-box;
	padding: 60px 150px 0px 150px;
}

.navbar-logo-image {
	align-items: center;
	max-height: 3rem;
	padding: 0.5rem 0.75rem;
}
.navbar-logo {
	display: grid;
	place-items: center;
}
.nav-actions {
	display: flex;
	margin: -10px;
}

/* .nav-actions-card > * > vs-card__text {
	border: red 2px solid;
} */
</style>
