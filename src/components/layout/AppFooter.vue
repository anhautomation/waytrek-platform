<template>
  <footer class="py-12 bg-[#E3F5EC] mt-20">
    <div class="max-w-6xl mx-auto flex flex-col items-center gap-6">
      <div class="h-10 w-10 bg-emerald-500 rounded-full"></div>

      <nav>
        <ul class="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
          <li>News</li>
          <li>Explore</li>
          <li>Guides</li>
          <li>Food</li>
          <li>Stay</li>
        </ul>
      </nav>

      <p class="text-xs text-gray-500">
        © {{ new Date().getFullYear() }} Waytrek. All rights reserved.
      </p>
    </div>
  </footer>
</template>