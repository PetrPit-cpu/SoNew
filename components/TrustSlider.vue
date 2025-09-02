<template>
  <div class="trust-slider-container">
    <div class="fade-mask fade-mask--left"></div>
    <div class="fade-mask fade-mask--right"></div>

    <div class="trust-slider-row">
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="40"
        :free-mode="{ enabled: true, sticky: false }"
        :mousewheel="{ forceToAxis: true }"
        :autoplay="{ delay: 2000, disableOnInteraction: false, reverseDirection: false }"
        :grab-cursor="true"
        class="trust-slider"
      >
        <swiper-slide
          v-for="(logo, index) in partnerLogos"
          :key="index"
          style="height: 80px; width: 200px"
        >
          <div class="trust-slide">
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="trust-slide__image"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [FreeMode, Mousewheel, Autoplay],
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
  overflow: visible;
  padding: 0 120px;
}

.trust-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: grab;
}

.trust-slide:active {
  cursor: grabbing;
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

.trust-slider .swiper-wrapper {
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.swiper-slide:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .trust-slider {
    padding: 0 60px;
  }

  .fade-mask {
    width: 60px;
  }

  .swiper-slide {
    width: 150px !important;
    height: 60px !important;
  }
}

@media (max-width: 576px) {
  .trust-slider {
    padding: 0 40px;
  }

  .fade-mask {
    width: 40px;
  }

  .swiper-slide {
    width: 120px !important;
    height: 50px !important;
  }
}
</style>
