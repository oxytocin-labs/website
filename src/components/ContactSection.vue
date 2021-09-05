<template>
	<div id="contact" class="contact-section-container">
		<div class="contact-section">
			<div class="contact-section-text">
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Quasi modi corporis facilis delectus libero optio recusandae
					quos voluptas architecto magnam eos atque, quia accusantium
					vero pariatur distinctio. Et, culpa quisquam.
				</p>
			</div>
			<div class="contact-section-form">
				<div class="contact-section-form-items">
					<div class="contact-section-form-items-text">
						Hi, my name is
						<div
							contenteditable="true"
							placeholder="name"
							class="contact-section-form-items-text-input"
							@blur="changeName"
							@keypress="keypress"
						/>
						and my email address is
						<div
							contenteditable="true"
							placeholder="email"
							class="contact-section-form-items-text-input"
							@blur="changeEmail"
						/>
						.
					</div>
					<div
						style="
							display: grid;
							place-items: center;
							margin-top: 32px;
						"
					>
						<vs-button shadow size="large">Get in Touch</vs-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		name: "",
		email: "",
	}),
	methods: {
		changeName(e) {
			this.name = e.target.innerHTML;
		},
		changeEmail(e) {
			this.email = e.target.innerHTML;
		},
		keypress(e) {
			console.log(e.which);
			if (e.which === 13) e.preventDefault();
		},
	},
};
</script>

<style>
.contact-section-container {
	display: grid;
	place-items: center;
	height: 100vh;
	max-width: 100%;
}
.contact-section {
	height: max-content;
	width: 80vw;
	color: white;
	display: flex;
	flex-direction: column;
	grid-template-rows: auto auto;
	box-sizing: border-box;
	padding: 50px;
	max-width: 80vw;
}
.contact-section-text {
	width: 100%;
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	padding: 30px 150px 30px 80px;
	font-size: 28px;
	text-align: left;
	padding: 30px 220px;
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
	place-items: center;
	max-width: 80vw;
}
.contact-section-form-items {
	display: flex;
	flex-direction: column;
	max-width: 80vw;
	width: 100%;
}

.contact-section-form-items-text {
	align-self: center;
	height: max-content;
	width: fit-content;
}

.contact-section-form-items-text-input {
	font-size: 30px;
	/* border-bottom: white 1px solid; */
	color: white;
	outline: none;
	padding: 0px;
	margin: 0px;
	width: max-content;
	max-width: 50vw;
	display: inline-block;
	word-wrap: break-word;
	overflow-wrap: break-word;
}

[contenteditable="true"]:empty:before {
	content: attr(placeholder);
	filter: brightness(0.6);
	pointer-events: none;
}
</style>
