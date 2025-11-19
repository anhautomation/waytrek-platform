<template>
  <n-layout class="min-h-screen">
    <n-layout-header bordered class="bg-white">
      <AppHeader />
    </n-layout-header>

    <n-layout-content>
      <NewsPage />
    </n-layout-content>

    <n-layout-footer>
      <AppFooter />
    </n-layout-footer>
  </n-layout>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import NewsPage from './views/NewsPage.vue'

export default {
  components: { AppHeader, AppFooter, NewsPage }
}
</script>
