<template>
  <div class="trust-slider-container">
    <div class="fade-mask fade-mask--left"></div>
    <div class="fade-mask fade-mask--right"></div>

    <div class="trust-slider-row">
      <div class="trust-slider">
        <div class="trust-slider-track">
          <div
            v-for="(logo, index) in partnerLogos"
            :key="index"
            class="trust-slide"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="trust-slide__image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partnerLogos: [
        { src: "/images/logo-partners/ideas.svg", alt: "ideas" },
        { src: "/images/logo-partners/time-web.svg", alt: "time-web" },
        { src: "/images/logo-partners/crestbook.svg", alt: "crestbook" },
        { src: "/images/logo-partners/formula.svg", alt: "formula" },
        { src: "/images/logo-partners/knights.svg", alt: "knights" },
        // Дублируем логотипы для бесконечной прокрутки
        { src: "/images/logo-partners/ideas.svg", alt: "ideas" },
        { src: "/images/logo-partners/time-web.svg", alt: "time-web" },
        { src: "/images/logo-partners/crestbook.svg", alt: "crestbook" },
        { src: "/images/logo-partners/formula.svg", alt: "formula" },
        { src: "/images/logo-partners/knights.svg", alt: "knights" },
      ],
    };
  },
};
</script>

<style scoped>
.trust-slider-container {
  width: 100%;
  overflow: visible;
  position: relative;
  --fade-color: 18, 18, 18;
  filter: blur(0.5px);
  -webkit-mask-image: linear-gradient(90deg,
    transparent 0%,
    rgba(18, 18, 18, 0.01) 1%,
    rgba(18, 18, 18, 0.02) 2%,
    rgba(18, 18, 18, 0.03) 3%,
    rgba(18, 18, 18, 0.04) 4%,
    rgba(18, 18, 18, 0.05) 5%,
    rgba(18, 18, 18, 0.06) 6%,
    rgba(18, 18, 18, 0.07) 7%,
    rgba(18, 18, 18, 0.08) 8%,
    rgba(18, 18, 18, 0.09) 9%,
    rgba(18, 18, 18, 0.1) 10%,
    rgba(18, 18, 18, 0.12) 11%,
    rgba(18, 18, 18, 0.14) 12%,
    rgba(18, 18, 18, 0.16) 13%,
    rgba(18, 18, 18, 0.18) 14%,
    rgba(18, 18, 18, 0.2) 15%,
    rgba(18, 18, 18, 0.22) 16%,
    rgba(18, 18, 18, 0.24) 17%,
    rgba(18, 18, 18, 0.26) 18%,
    rgba(18, 18, 18, 0.28) 19%,
    rgba(18, 18, 18, 0.3) 20%,
    rgba(18, 18, 18, 0.32) 21%,
    rgba(18, 18, 18, 0.34) 22%,
    rgba(18, 18, 18, 0.36) 23%,
    rgba(18, 18, 18, 0.38) 24%,
    rgba(18, 18, 18, 0.4) 25%,
    rgba(18, 18, 18, 0.42) 26%,
    rgba(18, 18, 18, 0.44) 27%,
    rgba(18, 18, 18, 0.46) 28%,
    rgba(18, 18, 18, 0.48) 29%,
    rgba(18, 18, 18, 0.5) 30%,
    rgba(18, 18, 18, 0.52) 31%,
    rgba(18, 18, 18, 0.54) 32%,
    rgba(18, 18, 18, 0.56) 33%,
    rgba(18, 18, 18, 0.58) 34%,
    rgba(18, 18, 18, 0.6) 35%,
    rgba(18, 18, 18, 0.62) 36%,
    rgba(18, 18, 18, 0.64) 37%,
    rgba(18, 18, 18, 0.66) 38%,
    rgba(18, 18, 18, 0.68) 39%,
    rgba(18, 18, 18, 0.7) 40%,
    rgba(18, 18, 18, 0.72) 41%,
    rgba(18, 18, 18, 0.74) 42%,
    rgba(18, 18, 18, 0.76) 43%,
    rgba(18, 18, 18, 0.78) 44%,
    rgba(18, 18, 18, 0.8) 45%,
    rgba(18, 18, 18, 0.82) 46%,
    rgba(18, 18, 18, 0.84) 47%,
    rgba(18, 18, 18, 0.86) 48%,
    rgba(18, 18, 18, 0.88) 49%,
    rgba(18, 18, 18, 0.9) 50%,
    rgba(18, 18, 18, 0.92) 51%,
    rgba(18, 18, 18, 0.94) 52%,
    rgba(18, 18, 18, 0.96) 53%,
    rgba(18, 18, 18, 0.98) 54%,
    rgba(18, 18, 18, 1) 50%,
    rgba(18, 18, 18, 1) 51%,
    rgba(18, 18, 18, 1) 52%,
    rgba(18, 18, 18, 1) 53%,
    rgba(18, 18, 18, 1) 54%,
    rgba(18, 18, 18, 1) 55%,
    rgba(18, 18, 18, 1) 56%,
    rgba(18, 18, 18, 1) 57%,
    rgba(18, 18, 18, 1) 58%,
    rgba(18, 18, 18, 1) 59%,
    rgba(18, 18, 18, 1) 60%,
    rgba(18, 18, 18, 1) 61%,
    rgba(18, 18, 18, 1) 62%,
    rgba(18, 18, 18, 1) 63%,
    rgba(18, 18, 18, 1) 64%,
    rgba(18, 18, 18, 1) 65%,
    rgba(18, 18, 18, 1) 66%,
    rgba(18, 18, 18, 1) 67%,
    rgba(18, 18, 18, 1) 68%,
    rgba(18, 18, 18, 1) 69%,
    rgba(18, 18, 18, 1) 70%,
    rgba(18, 18, 18, 1) 71%,
    rgba(18, 18, 18, 1) 72%,
    rgba(18, 18, 18, 1) 73%,
    rgba(18, 18, 18, 1) 74%,
    rgba(18, 18, 18, 1) 75%,
    rgba(18, 18, 18, 1) 76%,
    rgba(18, 18, 18, 1) 77%,
    rgba(18, 18, 18, 1) 78%,
    rgba(18, 18, 18, 1) 79%,
    rgba(18, 18, 18, 1) 80%,
    rgba(18, 18, 18, 0.98) 81%,
    rgba(18, 18, 18, 0.96) 82%,
    rgba(18, 18, 18, 0.94) 83%,
    rgba(18, 18, 18, 0.92) 84%,
    rgba(18, 18, 18, 0.9) 85%,
    rgba(18, 18, 18, 0.88) 86%,
    rgba(18, 18, 18, 0.86) 87%,
    rgba(18, 18, 18, 0.84) 88%,
    rgba(18, 18, 18, 0.82) 89%,
    rgba(18, 18, 18, 0.8) 90%,
    rgba(18, 18, 18, 0.78) 91%,
    rgba(18, 18, 18, 0.76) 92%,
    rgba(18, 18, 18, 0.74) 93%,
    rgba(18, 18, 18, 0.72) 94%,
    rgba(18, 18, 18, 0.7) 95%,
    rgba(18, 18, 18, 0.68) 96%,
    rgba(18, 18, 18, 0.66) 97%,
    rgba(18, 18, 18, 0.64) 98%,
    rgba(18, 18, 18, 0.62) 99%,
    transparent 100%);
  mask-image: linear-gradient(90deg,
    transparent 0%,
    rgba(18, 18, 18, 0.01) 1%,
    rgba(18, 18, 18, 0.02) 2%,
    rgba(18, 18, 18, 0.03) 3%,
    rgba(18, 18, 18, 0.04) 4%,
    rgba(18, 18, 18, 0.05) 5%,
    rgba(18, 18, 18, 0.06) 6%,
    rgba(18, 18, 18, 0.07) 7%,
    rgba(18, 18, 18, 0.08) 8%,
    rgba(18, 18, 18, 0.09) 9%,
    rgba(18, 18, 18, 0.1) 10%,
    rgba(18, 18, 18, 0.12) 11%,
    rgba(18, 18, 18, 0.14) 12%,
    rgba(18, 18, 18, 0.16) 13%,
    rgba(18, 18, 18, 0.18) 14%,
    rgba(18, 18, 18, 0.2) 15%,
    rgba(18, 18, 18, 0.22) 16%,
    rgba(18, 18, 18, 0.24) 17%,
    rgba(18, 18, 18, 0.26) 18%,
    rgba(18, 18, 18, 0.28) 19%,
    rgba(18, 18, 18, 0.3) 20%,
    rgba(18, 18, 18, 0.32) 21%,
    rgba(18, 18, 18, 0.34) 22%,
    rgba(18, 18, 18, 0.36) 23%,
    rgba(18, 18, 18, 0.38) 24%,
    rgba(18, 18, 18, 0.4) 25%,
    rgba(18, 18, 18, 0.42) 26%,
    rgba(18, 18, 18, 0.44) 27%,
    rgba(18, 18, 18, 0.46) 28%,
    rgba(18, 18, 18, 0.48) 29%,
    rgba(18, 18, 18, 0.5) 30%,
    rgba(18, 18, 18, 0.52) 31%,
    rgba(18, 18, 18, 0.54) 32%,
    rgba(18, 18, 18, 0.56) 33%,
    rgba(18, 18, 18, 0.58) 34%,
    rgba(18, 18, 18, 0.6) 35%,
    rgba(18, 18, 18, 0.62) 36%,
    rgba(18, 18, 18, 0.64) 37%,
    rgba(18, 18, 18, 0.66) 38%,
    rgba(18, 18, 18, 0.68) 39%,
    rgba(18, 18, 18, 0.7) 40%,
    rgba(18, 18, 18, 0.72) 41%,
    rgba(18, 18, 18, 0.74) 42%,
    rgba(18, 18, 18, 0.76) 43%,
    rgba(18, 18, 18, 0.78) 44%,
    rgba(18, 18, 18, 0.8) 45%,
    rgba(18, 18, 18, 0.82) 46%,
    rgba(18, 18, 18, 0.84) 47%,
    rgba(18, 18, 18, 0.86) 48%,
    rgba(18, 18, 18, 0.88) 49%,
    rgba(18, 18, 18, 0.9) 50%,
    rgba(18, 18, 18, 0.92) 51%,
    rgba(18, 18, 18, 0.94) 52%,
    rgba(18, 18, 18, 0.96) 53%,
    rgba(18, 18, 18, 0.98) 54%,
    rgba(18, 18, 18, 1) 50%,
    rgba(18, 18, 18, 1) 51%,
    rgba(18, 18, 18, 1) 52%,
    rgba(18, 18, 18, 1) 53%,
    rgba(18, 18, 18, 1) 54%,
    rgba(18, 18, 18, 1) 55%,
    rgba(18, 18, 18, 1) 56%,
    rgba(18, 18, 18, 1) 57%,
    rgba(18, 18, 18, 1) 58%,
    rgba(18, 18, 18, 1) 59%,
    rgba(18, 18, 18, 1) 60%,
    rgba(18, 18, 18, 1) 61%,
    rgba(18, 18, 18, 1) 62%,
    rgba(18, 18, 18, 1) 63%,
    rgba(18, 18, 18, 1) 64%,
    rgba(18, 18, 18, 1) 65%,
    rgba(18, 18, 18, 1) 66%,
    rgba(18, 18, 18, 1) 67%,
    rgba(18, 18, 18, 1) 68%,
    rgba(18, 18, 18, 1) 69%,
    rgba(18, 18, 18, 1) 70%,
    rgba(18, 18, 18, 1) 71%,
    rgba(18, 18, 18, 1) 72%,
    rgba(18, 18, 18, 1) 73%,
    rgba(18, 18, 18, 1) 74%,
    rgba(18, 18, 18, 1) 75%,
    rgba(18, 18, 18, 1) 76%,
    rgba(18, 18, 18, 1) 77%,
    rgba(18, 18, 18, 1) 78%,
    rgba(18, 18, 18, 1) 79%,
    rgba(18, 18, 18, 1) 80%,
    rgba(18, 18, 18, 0.98) 81%,
    rgba(18, 18, 18, 0.96) 82%,
    rgba(18, 18, 18, 0.94) 83%,
    rgba(18, 18, 18, 0.92) 84%,
    rgba(18, 18, 18, 0.9) 85%,
    rgba(18, 18, 18, 0.88) 86%,
    rgba(18, 18, 18, 0.86) 87%,
    rgba(18, 18, 18, 0.84) 88%,
    rgba(18, 18, 18, 0.82) 89%,
    rgba(18, 18, 18, 0.8) 90%,
    rgba(18, 18, 18, 0.78) 91%,
    rgba(18, 18, 18, 0.76) 92%,
    rgba(18, 18, 18, 0.74) 93%,
    rgba(18, 18, 18, 0.72) 94%,
    rgba(18, 18, 18, 0.7) 95%,
    rgba(18, 18, 18, 0.68) 96%,
    rgba(18, 18, 18, 0.66) 97%,
    rgba(18, 18, 18, 0.64) 98%,
    rgba(18, 18, 18, 0.62) 99%,
    transparent 100%);
}

.fade-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 10;
  pointer-events: none;
  filter: blur(1px);
}

.fade-mask--left {
  left: 0;
  background: linear-gradient(to right,
    rgba(18, 18, 18, 0.95) 0%,
    rgba(18, 18, 18, 0.9) 5%,
    rgba(18, 18, 18, 0.85) 10%,
    rgba(18, 18, 18, 0.8) 15%,
    rgba(18, 18, 18, 0.75) 20%,
    rgba(18, 18, 18, 0.7) 25%,
    rgba(18, 18, 18, 0.65) 30%,
    rgba(18, 18, 18, 0.6) 35%,
    rgba(18, 18, 18, 0.55) 40%,
    rgba(18, 18, 18, 0.5) 45%,
    rgba(18, 18, 18, 0.45) 50%,
    rgba(18, 18, 18, 0.4) 55%,
    rgba(18, 18, 18, 0.35) 60%,
    rgba(18, 18, 18, 0.3) 65%,
    rgba(18, 18, 18, 0.25) 70%,
    rgba(18, 18, 18, 0.2) 75%,
    rgba(18, 18, 18, 0.15) 80%,
    rgba(18, 18, 18, 0.1) 85%,
    rgba(18, 18, 18, 0.05) 90%,
    rgba(18, 18, 18, 0.02) 95%,
    transparent 100%);
}

.fade-mask--right {
  right: 0;
  background: linear-gradient(to left,
    rgba(18, 18, 18, 0.95) 0%,
    rgba(18, 18, 18, 0.9) 5%,
    rgba(18, 18, 18, 0.85) 10%,
    rgba(18, 18, 18, 0.8) 15%,
    rgba(18, 18, 18, 0.75) 20%,
    rgba(18, 18, 18, 0.7) 25%,
    rgba(18, 18, 18, 0.65) 30%,
    rgba(18, 18, 18, 0.6) 35%,
    rgba(18, 18, 18, 0.55) 40%,
    rgba(18, 18, 18, 0.5) 45%,
    rgba(18, 18, 18, 0.45) 50%,
    rgba(18, 18, 18, 0.4) 55%,
    rgba(18, 18, 18, 0.35) 60%,
    rgba(18, 18, 18, 0.3) 65%,
    rgba(18, 18, 18, 0.25) 70%,
    rgba(18, 18, 18, 0.2) 75%,
    rgba(18, 18, 18, 0.15) 80%,
    rgba(18, 18, 18, 0.1) 85%,
    rgba(18, 18, 18, 0.05) 90%,
    rgba(18, 18, 18, 0.02) 95%,
    transparent 100%);
}

.trust-slider-row {
  margin-bottom: 0;
}

.trust-slider {
  margin: 0 -20px;
  overflow: hidden;
  padding: 0 120px;
}

.trust-slider-track {
  display: flex;
  animation: scroll 40s linear infinite;
  width: max-content;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.trust-slider:hover .trust-slider-track {
  animation-play-state: paused;
}

.trust-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 200px;
  flex-shrink: 0;
  margin-right: 40px;
  transition: transform 0.3s ease;
}

.trust-slide:hover {
  transform: translateY(-2px);
}

.trust-slide__image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.7);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.trust-slide:hover .trust-slide__image {
  filter: grayscale(0%) brightness(1);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .trust-slider {
    padding: 0 60px;
  }

  .fade-mask {
    width: 60px;
  }

  .trust-slide {
    width: 150px;
    height: 60px;
    margin-right: 30px;
  }
}

@media (max-width: 576px) {
  .trust-slider {
    padding: 0 40px;
  }

  .fade-mask {
    width: 40px;
  }

  .trust-slide {
    width: 120px;
    height: 50px;
    margin-right: 20px;
  }
}
</style>
