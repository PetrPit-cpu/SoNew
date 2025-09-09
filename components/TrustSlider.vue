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
  overflow: hidden;
  position: relative;
}

.fade-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 10;
  pointer-events: none;
}

.fade-mask--left {
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
}

.fade-mask--right {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
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
