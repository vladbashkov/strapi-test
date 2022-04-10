<template>
  <div 
    class="home"
    :style="{ background: `url(${ this.background }) center/cover no-repeat` }"
  >

    <section
      class="section"
    >
      <h1
        class="title-font"
      >
        <span class="black-bg-font">
          {{ this.pageData.title }}
        </span>
      </h1>
    </section>

    <section class="section">
      <a 
        :href="this.pageData.firstVideoLink"
        class="video-main"
      >
        <img 
          :src="this.firstVideoPicture" 
          class="main-video"
          alt="some">
      </a>
    </section>

    <section class="section">
      <div class="benefits-container">
        <div class="benefits">
          <p class="second-text">
            <span class="accent-text">
              {{ this.pageData.firstListMark }}
            </span>
            {{ this.pageData.firstListText }}
          </p>
        </div>
        <div class="benefits">
          <p class="second-text">
            <span class="accent-text">
              {{ this.pageData.secondListMark }}
            </span>
            {{ this.pageData.secondListText }} 
          </p>
        </div>
        <div class="benefits">
          <p class="second-text">
            <span class="accent-text">
              {{ this.pageData.thirdListMark }}
            </span>
            {{ this.pageData.thirdListText }}
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="row-container else-before">
        <div class="row-text">
          <p class="second-text">
            {{ this.pageData.discountTextTop }}
            <span class="accent-text">
              {{ this.pageData.discountAccentText }}
            </span>
            {{ this.pageData.discountTextBottom }}
          </p>
        </div>
        <a 
          :href="this.pageData.secondVideoLink"
          class="second-video"
        >
          <img 
            :src="this.discountVideoPicture" 
            alt="discountVideoPicture"
          >
        </a>
      </div>
    </section>

    <section class="links-container section">
      <div class="link-buttons">
        <a 
          :href="this.pageData.firstButtonLink"
          class="link-button"
        >
          {{ this.pageData.firstLinkText }}
        </a>
        <a 
          :href="this.pageData.secondButtonLink"
          class="link-button"
        >
          {{ this.pageData.secondLinkText }}
        </a>
        <a 
          :href="this.pageData.thirdButtonLink"
          class="link-button"
        >
          {{ this.pageData.thirdLinkText }}
        </a>
      </div>
      <a 
        :href="this.pageData.fourthButtonLink"
        class="info-link"
      >
        {{ this.pageData.fourthLinkText }}
      </a>
    </section>

    <section class="section bottom-section">
      <p>
        {{ this.pageData.footerText }}
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      pageData: null,
      path: 'https://peaceful-dusk-89785.herokuapp.com', 
      discountVideoPicture: null,
      firstVideoPicture: null,
      background: null
    }
  },
  async created() {
    let response = await fetch(this.$options.URLmixin);
    if(response.ok) {
      let json = await response.json();
      this.pageData = json.data[0].attributes;
      console.log(this.pageData);
      this.background = this.path + this.pageData.background.data.attributes.url;
      this.firstVideoPicture = this.path + this.pageData.firstVideoPicture.data.attributes.url;
      this.discountVideoPicture = this.path + this.pageData.discountVideoPicture.data.attributes.url;
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }
}
</script>

<style lang="scss" scoped>

$title-font-color: #fff;
$text-font-color: #000;
$accent-color: #e51937;
$desktop: 1280px;
$smallDesltop: 1024px;
$tablet: 878px;
$smallTablet: 768px;
$bigPhone: 580px;
$phone: 480px;

.home {
  padding: 5% 0;
}

.section {
	width: 90%;
	margin: 0 auto;
}

.title-font {
	font-size: 70px;
	font-weight: 700;
	text-align: center;
	margin-bottom: 90px;
	line-height: 1.2;

	@media(max-width: $desktop) {
		font-size: 60px;
	}

	@media(max-width: $smallDesltop) {
		font-size: 50px;
	}

	@media(max-width: $bigPhone) {
		font-size: 36px;
		margin-bottom: 45px;
	}
}

.black-bg-font {
	color: $title-font-color;
	background: $text-font-color;
	padding: 10px 30px;
}

.main-video {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 100%;
	height: 520px;

	@media(max-width: $smallTablet) {
		height: 280px;
	}

	@media(max-width: $phone) {
		height: 190px;
	}
}

.second-video {
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 460px;
	max-height: 270px;
	width: 50%;
	height: 270px;

	@media(max-width: $tablet) {
		width: 100%;
	}
}

.benefits-container {
	display: flex;
	justify-content: center;
}

.benefits {
	flex: 0 1 30%;
	text-align: center;
	padding-left: 17px;
	margin: 70px 17px;
	border-left: 4px solid $accent-color;

	&:first-child {
		margin: 70px 0 70px 17px;

		@media(max-width: $smallTablet) {
			margin: 50px 0 50px 13px;
		}
	}

	@media(max-width: $smallTablet) {
		margin: 50px 0 50px 13px;
	}

	&:last-child {
		border-left: none;
		padding-left: 0;
		margin: 70px 0 70px 0;

		@media(max-width: $smallTablet) {
			margin: 50px 0 50px 0;
		}
	}
}

.second-text {
	display: flex;
	flex-direction: column;
	font-size: 40px;

	@media(max-width: $smallDesltop) {
		font-size: 30px;
	}

	@media(max-width: $smallTablet) {
		font-size: 22px;
	}

	@media(max-width: $bigPhone) {
		font-size: 18px;
	}
}

.accent-text {
	color: $accent-color;
	font-size: 170px;

	@media(max-width: $desktop) {
		font-size: 150px;
	}

	@media(max-width: $smallDesltop) {
		font-size: 130px;
	}

	@media(max-width: $smallTablet) {
		font-size: 100px;
	}

	@media(max-width: $bigPhone) {
		font-size: 90px;
	}
}

.row-container {
	padding: 55px 30px;
	margin-bottom: 60px;
	border: 4px solid $accent-color;
	display: flex;
	align-items: center;
	position: relative;

	&::before {
		content: 'וגם';
		position: absolute;
		top: -13%;
		right: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 95px;
		height: 95px;
		font-size: 40px;
		color: $title-font-color;
		line-height: .7;
		border-radius: 50%;
		background: $accent-color;

		@media(max-width: $tablet) {
			top: -9%;
			right: 10%;
		}

		@media(max-width: $bigPhone) {
			font-size: 22px;
			width: 60px;
			height: 60px;
			top: -6%;
		}
	}

	@media(max-width: $tablet) {
		flex-direction: column;
	}

	@media(max-width: $smallTablet) {
		margin: 30px 0 40px 0;
	}
}

.row-text {
	width: 50%;
	text-align: center;
	margin-left: 65px;
	font-size: 47px;

	@media(max-width: $tablet) {
		width: 100%;
		margin: 0 0 20px 0;
	}
}

.links-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.link-buttons {
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media(max-width: $tablet) {
		flex-direction: column;
	}
}

.link-button {
	flex: 0 1 25%;
	padding: 25px 15px;
	background: $text-font-color;
	color: $title-font-color;
	font-size: 20px;
	text-align: center;

	@media(max-width: $desktop) {
		font-size: 16px;
	}

	@media(max-width: $smallDesltop) {
		font-size: 14px;
	}

	@media(max-width: $tablet) {
		flex: 0 1 auto;
		margin: 10px 0;
		padding: 15px;
		font-size: 20px;
	}

	@media(max-width: $bigPhone) {
		font-size: 16px;
	}

	@media(max-width: $phone) {
		font-size: 14px;
	}
}

.info-link {
	width: 100%;
	margin: 25px 0;
	border: 4px solid $text-font-color;
	background: $title-font-color;
	padding: 25px 0;
	text-align: center;
	font-size: 28px;
	box-sizing: border-box;

	@media(max-width: $smallTablet) {
		font-size: 20px;
	}

	@media(max-width: $bigPhone) {
		font-size: 18px;
		padding: 15px 0;
	}

	@media(max-width: $bigPhone) {
		font-size: 16px;
	}

	@media(max-width: $phone) {
		font-size: 14px;
	}

	@media(max-width: 400px) {
		font-size: 12px;
	}
}

.play-icon {

	@media(max-width: $bigPhone) {
		width: 55px;
		height: 55px;
	}

}

.bottom-section {
	margin: 80px auto 0;
	text-align: center;
	font-size: 19px;

	@media(max-width: $smallDesltop) {
		font-size: 16px;
		margin: 60px auto 0;
	}

	@media(max-width: $smallTablet) {
		margin: 40px auto 0;
	}

	@media(max-width: $bigPhone) {
		font-size: 14px;
	}
}

</style>