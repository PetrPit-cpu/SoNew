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
  overflow: hidden;
  position: relative;
}

.fade-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
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
