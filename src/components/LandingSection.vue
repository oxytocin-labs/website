<template>
	<div class="landing-section-container">
		<div class="landing-section-text-container">
			<div class="landing-section-text-title">
				<span
					>Imagine Exponential Engineers Who care about your
					project</span
				>
			</div>
			<div class="landing-section-text-para">
				<span>
					We've consistently and meticulously executed on the most
					complex systems within FinTech, Social, Ecommerce for
					millions of users backed by the principles of simplicity,
					performance, and security.
				</span>
			</div>
		</div>
        <!-- <img src="https://loka.com/images/hero-3.png" alt="" class="landing-section-image"> -->
	</div>
</template>

<script>
export default {};
</script>

<style>
.landing-section-container {
    display: grid;
    position: absolute;
    grid-template-columns: auto;


}
.landing-section-text-container {

	height: 100%;
    width: 100%;
	width: 40%;
	margin-top: 50px;
	margin-left: 150px;
	/* background-color: grey; */
    z-index: 1;
    
}
.landing-section-text-title {
	font-size: 60px;
    text-align: left;
    height: max-content;
    margin-bottom: 50px;
}
.landing-section-text-para{
    text-align: left;
    font-size: 30px;
    margin: 0px;
}
.landing-section-image{
    position: relative;
    top: 0;
    right: 10px;
}
</style>