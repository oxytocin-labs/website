<template>
	<div class="contact-section">
		<div class="contact-section-text">
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
				modi corporis facilis delectus libero optio recusandae quos
				voluptas architecto magnam eos atque, quia accusantium vero
				pariatur distinctio. Et, culpa quisquam.
			</p>
		</div>
		<div class="contact-section-form">
			<div class="contact-section-form-items">
				<div
					style="height: max-content; width: max-content"
					class="contact-section-form-items-text"
				>
					Hi, my name is &nbsp;
					<!-- <v-text-field
						dark
						single-line
						class="contact-section-form-items-text-name"
					></v-text-field
					>&nbsp;and my email address is &nbsp;<br /> -->
					<input
						v-model="name"
						type="text"
						class="contact-section-form-items-text-name"
						:style="{
							width:
								name.length !== 0
									? `${(name.length - 4) * 32}px`
									: `${4 * 32}px`,
						}"
					/>
					<v-text-field
						type="email"
						dark
						single-line
						class="contact-section-form-items-text-email"
					></v-text-field
					>&nbsp;.
				</div>
				<div>
					<vs-button border size="large">Get in Touch</vs-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		name: "",
	}),
};
</script>

<style>
.contact-section {
	height: 100vh;
	width: 100%;
	color: white;
	display: grid;
	grid-template-rows: 20% 50%;
	box-sizing: border-box;
	padding: 50px;
}
.contact-section-text {
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	padding: 30px 150px 30px 80px;
	font-size: 28px;
	text-align: left;
}
.contact-section-form {
	display: flex;
	flex-direction: row;
	justify-content: center;
	box-sizing: border-box;
	padding: 30px 220px;
	font-size: 32px;
	line-height: 2;
	text-align: left;
	place-items: initial;
}
.contact-section-form-items {
	display: flex;
	flex-direction: column;
}
.contact-section-form-items-text {
	display: flex;
	flex-wrap: wrap;
}
.contact-section-form-items-text-name {
	font-size: 32px;
	border-bottom: white 1px solid;
	color: white;
	padding-bottom: 0px;
}
</style>
