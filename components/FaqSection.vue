<template>
  <section class="faq">
    <div class="container">
      <div class="faq__content">
        <div class="faq__info">
          <h2 class="faq__title">Часто задаваемые вопросы</h2>
          <p class="faq__description">
            Мы собрали ответы на самые популярные вопросы о Science64 — от принципов работы до настройки анализа.
            Если вы не нашли нужную информацию, напишите нам!
          </p>
        </div>

        <div class="faq__accordion">
          <AppAccordion
            :items="accordionItems"
            @toggle="handleAccordionToggle"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppAccordion from '@/components/AppAccordion.vue'
import { faqData } from '@/data/faqData'

const accordionItems = ref([...faqData])

const handleAccordionToggle = (index) => {
  accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen
  console.log(`Toggled item at index ${index}`)
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.faq {
  margin-bottom: 150px;

  &__content {
    display: flex;
    gap: 60px;
    align-items: flex-start;
  }

  &__info {
    max-width: 405px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__title {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-ms;
    line-height: 1.2;
    color: c.$white;
    margin: 0;
  }

  &__description {
    font-family: v.$font-primary;
    font-weight: v.$font-weight-medium;
    font-size: v.$font-size-base;
    line-height: 1.4;
    color: c.$grey-description;
    margin: 0;
  }

  &__accordion {
    flex: 1;
    max-width: 600px;
  }
}

@media (max-width: v.$breakpoint-lg) {
  .faq {
    margin-bottom: 120px;

    &__content {
      flex-direction: column;
      gap: 40px;
    }

    &__info {
      max-width: 100%;
    }

    &__accordion {
      max-width: 100%;
      width: 100%;
    }
  }
}

@media (max-width: v.$breakpoint-md) {
  .faq {
    margin-bottom: 100px;

    &__content {
      gap: 50px;
    }

    &__title {
      font-size: v.$font-size-ms-mob;
    }

    &__description {
      font-weight: v.$font-weight-regular;
      font-size: v.$font-size-md;
    }

  }
}

@media (max-width: v.$breakpoint-sm) {
  .faq {
    margin-bottom: 150px;

    &__content {
      gap: 28px;
    }

    &__title {
      font-weight: v.$font-weight-medium;
      font-size: v.$font-size-ms-mob;
      line-height: 1.1;
    }

    &__info {
      gap: 20px;
    }
  }
}
</style>
