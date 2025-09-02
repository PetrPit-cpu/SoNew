<template>
  <div class="page">
    <AppHeader />

    <main class="page__main">
      <HeroSection />
      <InsightsSection />
      <FeaturesSection />
      <StairsSection />
      <HowItWorksSection />
      <PricingSection />
      <CommunitySection />
      <FaqSection />
      <TrustSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import HeroSection from '@/components/HeroSection.vue'
import InsightsSection from '@/components/InsightsSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import StairsSection from '@/components/StairsSection.vue'
import HowItWorksSection from '@/components/HowItWorksSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import CommunitySection from '@/components/CommunitySection.vue'
import FaqSection from '@/components/FaqSection.vue'
import TrustSection from '@/components/TrustSection.vue'
</script>

<style lang="scss" scoped>
@use "~/assets/scss/variables" as v;
@use "~/assets/scss/colors" as c;

.page {
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: c.$black;

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>