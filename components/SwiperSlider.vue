<template>
  <div class="slider-container">
    <!-- Первая строка -->
    <div class="slider-row">
      <swiper
        :slides-per-view="'auto'"
        :space-between="20"
        :free-mode="true"
        class="science64-slider"
      >
        <swiper-slide style="height: 214px; width: 405px">Привет</swiper-slide>
        <swiper-slide style="height: 180px; width: 405px">Привет</swiper-slide>
        <swiper-slide style="height: 240px; width: 405px">Привет</swiper-slide>
      </swiper>
    </div>

    <!-- Вторая строка -->
    <div class="slider-row">
      <swiper
        :slides-per-view="'auto'"
        :space-between="20"
        :free-mode="true"
        class="science64-slider"
      >
        <swiper-slide style="height: 268px; width: 405px">Привет</swiper-slide>
        <swiper-slide style="height: 268px; width: 405px">Привет</swiper-slide>
        <swiper-slide style="height: 268px; width: 405px">Привет</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'

export default {
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>
.slider-container {
  width: 100%;
  overflow: hidden;
}

.slider-row {
  margin-bottom: 20px; /* Отступ между строками */
}

.science64-slider {
  padding: 20px;
  margin: 0 -20px;
  overflow: visible;
}

.swiper-slide {
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-sizing: border-box;
}
</style>