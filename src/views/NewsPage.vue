<template>
  <main>
    <!-- Hero banner -->
    <section class="relative h-[420px] w-full">
      <img
        src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 flex items-center">
        <div class="max-w-6xl mx-auto px-4">
          <div class="max-w-xl text-white space-y-4">
            <p class="text-sm font-semibold tracking-wide text-emerald-200">
              WAYTREK • TRAVEL EXPERIENCE ENGINE
            </p>
            <h1 class="text-4xl font-semibold leading-snug">
              Không chỉ là điểm đến, mà là hành trình khám phá của riêng bạn.
            </h1>
            <p class="text-sm opacity-90">
              Tìm những trải nghiệm độc đáo, cung đường ít người biết và hành trình được tạo riêng cho bạn – bắt đầu từ Việt Nam, vươn ra thế giới.
            </p>
            <n-button type="primary" size="large" class="mt-2">
              Khám phá ngay
            </n-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <NewsList :items="latestNews" />
  </main>
</template>

<script>
import { latestNews } from '../data/news'
import NewsList from '../components/news/NewsList.vue'

export default {
  components: { NewsList },
  data() {
    return {
      latestNews
    }
  }
}
</script>
