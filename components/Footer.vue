<template>
  <footer class="footer">
    <div class="footer__wrapper padding-top padding-bottom">
      <div class="container">
        <div class="footer__content text-center">
          <nuxt-img src="/images/logo/logo2.png" alt="the speakers" loading="lazy" @click="navigateTo('/')"
          />
          <div>
            <p class="footer-description">
              Find inspiring quotes on our website that will motivate you to live your best life. Browse by category, author, or topic and share your favorites with others.
            </p>
          </div>
          <ul class="social justify-content-center">
            <li class="social__item">
              <a href="https://twitter.com" class="social__link">
                <nuxt-icon name="brands/twitter"/>
              </a>
            </li>
            <li class="social__item">
              <a href="https://discord.com/" class="social__link">
                <nuxt-icon name="brands/discord-line"/>
              </a>
            </li>
            <li class="social__item">
              <a href="https://www.twitch.tv/" class="social__link">
                <nuxt-icon name="brands/twitch"/>
              </a>
            </li>
            <li class="social__item">
              <a href="https://www.instagram.com/" class="social__link">
                <nuxt-icon name="brands/instagram"/>
              </a>
            </li>
            <li class="social__item">
              <a href="https://www.linkedin.com/" class="social__link">
                <nuxt-icon name="brands/linkedin-fill"/>
            </a>
            </li>
            <li class="social__item">
              <a href="https://www.facebook.com/" class="social__link">
                <nuxt-icon name="brands/facebook"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <div class="container">
        <div class="text-center pb-4 p-2">
          <p class="mb-0">
            The Speakrs © {{ new Date().getFullYear() }} | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-description {
  font-size: 15px;
  font-weight: 300;
}
</style>
