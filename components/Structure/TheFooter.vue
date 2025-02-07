<template>
  <footer
    class="footer pb-10 bg-[url(/images/bg/hero.png)] bg-cover bg-center bg-no-repeat text-whiteColor"
  >
    <UContainer>
      <div
        class="flex flex-col lg:flex-row gap-20 lg:gap-0 flex-wrap justify-between w-full py-20"
      >
        <div class="flex flex-col w-full lg:w-[30%]">
          <Logo width="367" height="57" :logoBig="true" />
          <h3 class="mt-6 text-base font-normal">
            Opening the Door to Financial Knowledge
          </h3>
        </div>

        <div
          class="flex flex-col lg:flex-row gap-10 lg:gap-0 flex-wrap justify-between w-full lg:w-[50%]"
        >
          <div>
            <h4 class="text-base font-bold mb-6">Quick Links</h4>
            <ul class="flex flex-col gap-2">
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about">About Us</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/courses">Courses</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Contact Us</nuxt-link>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-base font-bold mb-6">Legal Information</h4>
            <ul class="flex flex-col gap-2">
              <li>
                <nuxt-link to="/">Terms of Services</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about">Privacy Policy</nuxt-link>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-base font-bold mb-6">Contact Info</h4>
            <ul class="flex flex-col gap-2">
              <li>
                <a href="mailto:support@360.com">support@360.com</a>
              </li>
              <li>
                <a href="tel:+20-12-456-7890">+20 (12) 456-7890</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="w-full border-t border-whiteColor text-sm font-normal border-opacity-50 py-6"
      >
        <div class="flex justify-between items-center">
          <p class="text-sm font-normal">@ 2025. All rights reserved.</p>

          <nuxt-link to="/" class="underline">Cookies Settings</nuxt-link>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<style scoped lang="postcss">
li {
  a {
    @apply text-base font-normal text-whiteColor;
  }
}
</style>
