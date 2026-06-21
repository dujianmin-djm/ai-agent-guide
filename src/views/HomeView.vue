<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import ConceptSection from '@/components/ConceptSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>


<template>
  <div class="min-h-screen bg-white">
    <SiteHeader />
    <main>
      <HeroSection />
      <ConceptSection />
    </main>
    <SiteFooter />
  </div>
</template>
