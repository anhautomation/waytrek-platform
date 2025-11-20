<template>
  <n-layout class="min-h-screen">
    <n-layout-header bordered class="bg-white">
      <AppHeader
        :lang="lang"
        :labels="currentMessages.nav"
        :search-placeholder="currentMessages.searchPlaceholder"
        @change-lang="handleChangeLang"
      />
    </n-layout-header>

    <n-layout-content>
      <NewsPage :messages="currentMessages" />
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
import { messages } from './i18n'

export default {
  components: { AppHeader, AppFooter, NewsPage },
  data() {
    return {
      lang: 'vi',
      messages,
    }
  },
  computed: {
    currentMessages() {
      return this.messages[this.lang]
    },
  },
  methods: {
    handleChangeLang(nextLang) {
      this.lang = nextLang
    },
  },
}
</script>
