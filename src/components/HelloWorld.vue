<template>
	<div class="navbar-container">
		<div class="navbar">
			<div class="navbar-logo">
				<img
					src="../../public/logo.svg"
					alt="--logo--"
					class="navbar-logo-image"
				/>
			</div>
			<!-- <div class="navbar-content">
				<div class="navbar-content-work navbar-content-item">
					<vs-button
						:active="active == 1"
						@click="active = !active"
						transparent
						size="l"
						dark
					>
						Work
					</vs-button>
				</div>
				<div class="nabar-content-team navbar-content-item">
					<vs-button transparent size="l" dark> Team </vs-button>
				</div>
				<div class="navbar-content-get-in-touch navbar-content-item">
					<vs-button transparent size="l" dark>
						Get in Touch
					</vs-button>
				</div>
			</div> -->
			<vs-card>
				<vs-button shadow> <template #title>Hello World</template> </vs-button>
			</vs-card>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		msg: String,
	},
	data: () => ({
		active: 0,
	}),
};
</script>

<style scoped>
.navbar-container {
	padding-top: 60px;
}

.navbar {
	display: flex;
	justify-content: space-between;
	padding: 0px 150px;
}

.navbar-content {
	display: grid;
	place-items: center;
	max-height: 40px;
	border-radius: 40px;
	background-color: #98a4be;
	display: flex;
	justify-content: space-between;
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
.navbar-content-item {
	padding: 1rem 0rem 0.75rem 0rem;
}
.navbar-content.btn {
	font-size: 3rem;
	color: rgb(133, 62, 62);
}
</style>
