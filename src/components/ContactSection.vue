<template>
	<div id="contact" class="contact-section-container">
		<div class="contact-section">
			<div class="contact-section-text">
			 	<!--- <p>Hello. We’ve been expecting you. Got a project? Let’s talk</p> --->
				<p>
					OK, let's go! First we'll have a quick chat about your idea. Our engineers will create a cost-free engineering plan of your project that you can share with your team. What's your name?
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
						/>.					
					</div>
					<div class="contact-section-form-items-text">
						I'm working on
						<div
							contenteditable="true"
							placeholder="a breakthrough idea in the creative AdTech space"
							class="contact-section-form-items-text-input"
							@blur="changeProjectDescription"
						/>.
						
					</div>					
					<div
						style="
							display: grid;
							place-items: center;
							margin-top: 32px;
						"
					>
						<vs-button shadow size="large" @click="sendMail"
							>Get in Touch</vs-button
						>
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
		project_description: "",
	}),
	methods: {
		changeName(e) {
			this.name = e.target.innerHTML;
		},
		changeEmail(e) {
			this.email = e.target.innerHTML;
		},
		changeProjectDescription(e) {
			this.project_description = e.target.innerHTML;
		},		
		keypress(e) {
			if (e.which === 13) e.preventDefault();
		},
		sendMail() {
			let subject = `It's Time To Build!`;
			let body = `${this.name}
			${this.name}`;
			document.location = `mailto:rnjai.lamba@oxytocin.is?subject=${subject}&body=${body}`;
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
	width: 100%;
	height: 100%;
	color: white;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	padding: 50px;
	max-width: 80vw;
	justify-content: center;
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
	max-width: 1366px;
}
.contact-section-form-items {
	display: flex;
	flex-direction: column;
	max-width: 1366px;
	width: 100%;
}

.contact-section-form-items-text {
	display: block;
	max-width: 1440px;
	align-self: center;
	height: max-content;
	width: 100%;
}

.contact-section-form-items-text-input {
	font-size: 30px;
	color: white;
	outline: none;
	padding: 0px;
	margin: 0px;
	width: max-content;
	max-width: 100%;
	display: inline-block;
	word-wrap: break-word;
	overflow-wrap: break-word;
}

[contenteditable="true"]:empty:before {
	content: attr(placeholder);
	filter: brightness(0.6);
	pointer-events: none;
}

@media screen and (max-width: 1300px) {
	.contact-section {
		padding: 0px;
		padding-top: 100px;
		min-height: 100%;
	}
	.contact-section-text {
		padding: 0px;
	}
	.contact-section-form {
		padding: 0px;
	}

	.contact-section-text {
		text-align: center;
		font-size: 24px;
	}
	.contact-section-container {
		display: flex;
		flex-direction: column;
	}
	.contact-section-form {
		margin-top: auto;
		margin-bottom: auto;
	}
	.contact-section-form-items-text {
		text-align: center;
		font-size: 24px;
	}
	.contact-section-form-items-text-input {
		font-size: 24px;
	}
}
</style>
