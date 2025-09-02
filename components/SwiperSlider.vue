<template>
  <div class="slider-container">
    <div class="fade-mask fade-mask--left"></div>
    <div class="fade-mask fade-mask--right"></div>

    <div class="slider-row">
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="20"
        :free-mode="{ enabled: true, sticky: false }"
        :mousewheel="{ forceToAxis: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false, reverseDirection: false }"
        :grab-cursor="true"
        class="science64-slider"
      >
        <swiper-slide style="height: 208px; width: 405px">
          <div class="slider-card flex">
            <div class="user-tag">@tagir1</div>
            <p class="message">
              «Я знал, что у меня слабый дебют, но не понимал, где именно.
              Science64 показал конкретные позиции, в которых я стабильно
              ошибаюсь. Теперь я тренируюсь с пониманием, что прорабатываю
              ключевые проблемы.»
            </p>
          </div>
        </swiper-slide>
        <swiper-slide style="height: 190px; width: 405px">
          <div class="slider-card flex">
            <div class="user-tag">@Bakhmatov</div>
            <p class="message">
              «Science64 экономит мне не только время, но и силы. Больше не
              нужно вручную искать ошибки — сервис сам показывает их и
              группирует по темам. Я трачу время на исправление, а не на копание
              в партиях».
            </p>
          </div>
        </swiper-slide>
        <swiper-slide style="height: 208px; width: 405px">
          <div class="slider-card flex">
            <div class="user-tag">@Karateloru</div>
            <p class="message">
              «Рекомендую Science64 своим ученикам. Это экономит мне часы
              анализа — сервис сам находит повторяющиеся ошибки и показывает,
              как их исправить. А главное — у детей появляется понимание, а не
              просто запоминание ходов.»
            </p>
          </div>
        </swiper-slide>
        <swiper-slide style="height: 208px; width: 405px">
          <div class="slider-card flex">
            <div class="user-tag">@Klim_Somov</div>
            <p class="message">
              «Science64 помог мне систематизировать тренировки. Раньше я просто
              просматривал партии и надеялся запомнить ошибки. Теперь у меня
              есть чёткая статистика по слабым местам, и я могу планировать
              занятия так, чтобы закрывать конкретные пробелы».
            </p>
          </div>
        </swiper-slide>
        <swiper-slide style="height: 226px; width: 405px">
          <div class="slider-card flex">
            <div class="user-tag">@Artem_V007</div>
            <p class="message">
              «Я играю на любительском уровне и всегда считал, что анализ — это
              для профи. Science64 разрушил этот миф: даже начинающему понятно,
              где ошибка и как её исправить. А когда видишь свои ошибки в
              наглядном виде, мотивации становится в разы больше».
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="slider-row">
      <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :space-between="20"
        :free-mode="{ enabled: true, sticky: false }"
        :mousewheel="{ forceToAxis: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false, reverseDirection: true }"
        :grab-cursor="true"
        class="science64-slider"
      >
        <swiper-slide style="height: 268px; width: 405px">
          <div class="slider-card flex">
            <div class="user-tag">@master2876</div>
            <div class="group-element flex">
              <p class="message">
                «Science64 помог мне выявить ошибки, о которых я даже не
                подозревал»
              </p>
              <p>
                Я анализировал партии вручную, но не осознавал системных
                проблем. С этой платформой я увидел повторы в дебютах, из-за
                которых терял преимущество. Теперь тренирую проблемные места — и
                результаты уже пошли вверх.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          style="height: 286px; width: 405px"
          class="negative-margin-slide"
        >
          <div class="slider-card flex">
            <div class="user-tag">@Vladimir503</div>
            <div class="group-element flex">
              <p class="message">
                «Первый инструмент, который действительно помогает расти»
              </p>
              <p>
                Я пробовал разные движки и базы, но в них легко утонуть и нет
                целенаправленности. Здесь всё по делу: загрузил партии — получил
                чёткую картину. Главное — система показывает повторяющиеся
                ошибки и предлагает, как их исправить. Удобно, быстро и по
                существу.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide style="height: 268px; width: 405px">
          <div class="slider-card flex">
            <div class="user-tag">@humorous03</div>
            <div class="group-element flex">
              <p class="message">
                «Это больше, чем просто анализ — это обучение мышлению»
              </p>
              <p>
                Я использую Science64 для учеников: они учатся не просто
                запоминать ходы, а понимать структуру дебюта. Особенно полезна
                визуализация шахматного дерева — детям стало гораздо проще
                понимать, почему ход ошибочный и как устроены варианты.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide style="height: 172px; width: 405px">
          <div class="slider-card flex">
            <div class="user-tag">@Freeman2376</div>
            <p class="message">
              «Я пробовал разные программы, но это первый сервис, который
              анализирует именно мои партии и предлагает готовые варианты».
            </p>
          </div>
        </swiper-slide>
        <swiper-slide style="height: 190px; width: 405px">
          <div class="slider-card flex">
            <div class="user-tag">@humorous03</div>
            <p class="message">
              «Мои ученики часто играют импульсивно и не видят, к чему приводит
              ошибка. В Science64 мы можем наглядно пройти партию, разобрать
              дерево ходов и увидеть, где всё пошло не так. Это бесценно для
              обучения».
            </p>
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
  overflow: visible;
  padding: 0 120px;
}

.swiper-slide {
  background-color: #171717;
  border: 1px solid #272727;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: grab;
}

.swiper-slide:active {
  cursor: grabbing;
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

.slider-card {
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.negative-margin-slide {
  margin-top: -18px;
}

/* Улучшенная прокрутка */
.science64-slider .swiper-wrapper {
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

/* Hover эффекты */
.swiper-slide:hover {
  transform: translateY(-2px);
  border-color: #1d85dd;
}
</style>
