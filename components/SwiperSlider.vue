<template>
  <div class="slider-container">
    <div class="fade-mask fade-mask--left"></div>
    <div class="fade-mask fade-mask--right"></div>

    <div class="slider-row">
      <div class="science64-slider">
        <div class="slider-track">
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="slider-card"
            :style="{ height: review.height + 'px', width: review.width + 'px' }"
          >
            <div class="user-tag">{{ review.user }}</div>
            <p class="message" v-if="review.message">
              {{ review.message }}
            </p>
            <div class="group-element flex" v-if="review.group">
              <p class="message">{{ review.group.message }}</p>
              <p>{{ review.group.text }}</p>
          </div>
          </div>
          </div>
          </div>
    </div>

    <div class="slider-row">
      <div class="science64-slider">
        <div class="slider-track slider-track--reverse">
          <div
            v-for="(review, index) in reviews"
            :key="'reverse-' + index"
            class="slider-card"
            :style="{ height: review.height + 'px', width: review.width + 'px' }"
          >
            <div class="user-tag">{{ review.user }}</div>
            <p class="message" v-if="review.message">
              {{ review.message }}
            </p>
            <div class="group-element flex" v-if="review.group">
              <p class="message">{{ review.group.message }}</p>
              <p>{{ review.group.text }}</p>
            </div>
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
      reviews: [
        {
          user: "@tagir1",
          message: "«Я знал, что у меня слабый дебют, но не понимал, где именно. Science64 показал конкретные позиции, в которых я стабильно ошибаюсь. Теперь я тренируюсь с пониманием, что прорабатываю ключевые проблемы.»",
          height: 208,
          width: 405
        },
        {
          user: "@Bakhmatov",
          message: "«Science64 экономит мне не только время, но и силы. Больше не нужно вручную искать ошибки — сервис сам показывает их и группирует по темам. Я трачу время на исправление, а не на копание в партиях».",
          height: 190,
          width: 405
        },
        {
          user: "@Karateloru",
          message: "«Рекомендую Science64 своим ученикам. Это экономит мне часы анализа — сервис сам находит повторяющиеся ошибки и показывает, как их исправить. А главное — у детей появляется понимание, а не просто запоминание ходов.»",
          height: 208,
          width: 405
        },
        {
          user: "@Klim_Somov",
          message: "«Science64 помог мне систематизировать тренировки. Раньше я просто просматривал партии и надеялся запомнить ошибки. Теперь у меня есть чёткая статистика по слабым местам, и я могу планировать занятия так, чтобы закрывать конкретные пробелы».",
          height: 208,
          width: 405
        },
        {
          user: "@Artem_V007",
          message: "«Я играю на любительском уровне и всегда считал, что анализ — это для профи. Science64 разрушил этот миф: даже начинающему понятно, где ошибка и как её исправить. А когда видишь свои ошибки в наглядном виде, мотивации становится в разы больше».",
          height: 226,
          width: 405
        },
        {
          user: "@master2876",
          group: {
            message: "«Science64 помог мне выявить ошибки, о которых я даже не подозревал»",
            text: "Я анализировал партии вручную, но не осознавал системных проблем. С этой платформой я увидел повторы в дебютах, из-за которых терял преимущество. Теперь тренирую проблемные места — и результаты уже пошли вверх."
          },
          height: 268,
          width: 405
        },
        {
          user: "@Vladimir503",
          group: {
            message: "«Первый инструмент, который действительно помогает расти»",
            text: "Я пробовал разные движки и базы, но в них легко утонуть и нет целенаправленности. Здесь всё по делу: загрузил партии — получил чёткую картину. Главное — система показывает повторяющиеся ошибки и предлагает, как их исправить. Удобно, быстро и по существу."
          },
          height: 286,
          width: 405
        },
        {
          user: "@humorous03",
          group: {
            message: "«Это больше, чем просто анализ — это обучение мышлению»",
            text: "Я использую Science64 для учеников: они учатся не просто запоминать ходы, а понимать структуру дебюта. Особенно полезна визуализация шахматного дерева — детям стало гораздо проще понимать, почему ход ошибочный и как устроены варианты."
          },
          height: 268,
          width: 405
        },
        {
          user: "@Freeman2376",
          message: "«Я пробовал разные программы, но это первый сервис, который анализирует именно мои партии и предлагает готовые варианты».",
          height: 172,
          width: 405
        },
        {
          user: "@humorous03",
          message: "«Мои ученики часто играют импульсивно и не видят, к чему приводит ошибка. В Science64 мы можем наглядно пройти партию, разобрать дерево ходов и увидеть, где всё пошло не так. Это бесценно для обучения».",
          height: 190,
          width: 405
        }
      ]
    };
  },
};
</script>

<style scoped>
.slider-container {
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


.slider-row {
  margin-bottom: 20px;
}

.science64-slider {
  margin: 0 -20px;
  overflow: hidden;
  padding: 0 120px;
  transform: translateY(10px);
}

.slider-track {
  display: flex;
  animation: scroll 50s linear infinite;
  width: max-content;
  transform: translateY(5px);
}

.slider-track--reverse {
  animation: scroll-reverse 50s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.science64-slider:hover .slider-track {
  animation-play-state: paused;
}

.slider-card {
  background-color: #171717;
  border: 1px solid #272727;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  margin-right: 20px;
  flex-shrink: 0;
  transition: transform 0.3s ease, border-color 0.3s ease, z-index 0.3s ease;
  cursor: grab;
  z-index: 1;
}

.slider-card:active {
  cursor: grabbing;
}

.slider-card:hover {
  border-color: #1d85dd;
  z-index: 100;
}

.user-tag {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0 10px;
}

.message {
  padding: 20px 0 0 0;
  color: #ffffff;
  line-height: 1.4;
}

.group-element {
  flex-direction: column;
}

.group-element p {
  color: #ffffff;
  line-height: 1.4;
  margin: 0;
}
</style>
