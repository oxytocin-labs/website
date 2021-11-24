<template>
	<div class="about">
		<div class="about-content">
			<v-card elevation="12" class="about-card">
				<v-card-title>About us</v-card-title>
				<v-card-text-large>
				In 2021, after hearing three founders tell about their dissapointing or horrifying MVP building experiences, we got thinking.
				<br> 
				MVP or 0 to 1 product building should be very easy and fast compared to the inordinate complexity founders need to deal with to get them made
				<ul>
					<li>Raising funding to build an MVP</li>
					<li>Finding a co founder/ CTO to build an MVP</li>
					<li>Stitching together freelancers from 3-5 sources to build an MVP</li>
					<li>Getting an interim-CTO/ advisor to overlook the MVP</li>
					<li>Taking so much time to build an MVP that MVP building is cancelled</li>
				</ul>
				<br>
				We think we can do all these fast and reliably after building out 10s of products without hiccups for millions of end users.
				<br>
				An easy way to think about what we do is give you the ability to forget about the complexities of building an MVP by transferring them to us.				 
				 </v-card-text-large>
				 

			</v-card>
		</div>
	</div>
</template>

<style scoped>
.about {
	display: grid;
	place-items: center;
	min-height: 100vh;
	width: 100%;
}
.about-content {
	display: grid;
	place-items: center;
	width: 90%;
	height: 90%;
}

.about-card {
	padding: 32px;
}
</style>
