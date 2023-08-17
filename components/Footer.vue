<template>
  <footer class="footer" style="background-image: url(/images/footer/bg.png)">
    <div class="footer__wrapper padding-top padding-bottom">
      <div class="container">
        <div class="footer__content text-center">
          <nuxt-link class="d-inline-block" to="/"
            ><img src="/images/logo/logo2.png"  alt="the speakers"
          /></nuxt-link>
          <div >
            <p class="footer-description">Explore our website and find quotes that inspire, motivate, and empower you to live your best life.</p>
          </div>
          <ul class="social justify-content-center">
            <li class="social__item">
              <a href="#" class="social__link"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li class="social__item">
              <a href="#" class="social__link"
                ><i class="fab fa-discord"></i
              ></a>
            </li>
            <li class="social__item">
              <a href="#" class="social__link"><i class="fab fa-twitch"></i></a>
            </li>
            <li class="social__item">
              <a href="#" class="social__link"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
            <li class="social__item">
              <a href="#" class="social__link"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </li>
            <li class="social__item">
              <a href="#" class="social__link"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <div class="container">
        <div class="text-center py-4">
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
