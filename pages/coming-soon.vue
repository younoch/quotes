<template>
  <div
    class="coming-soon"
    style="background-image: url(/images/error/coming.png)"
  >
    <div class="container-fluid">
      <div class="coming-soon__wrapper text-center">
        <div class="coming-soon__content">
          <nuxt-link class="mb-4 d-inline-block" to="/"
            ><img
              src="/images/logo/logo.png"
              height="55"
              alt="The Speakers logo"
          /></nuxt-link>
          <h2>We are Coming soon</h2>
          <p>
            We are almost there ! If your wanna get notify when the website is
            live,<br />
            Subscribe to out mailing list
          </p>
          <div class="mail-collect">
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <button class="default-btn" type="submit">
              <span>Notify Me</span>
            </button>
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
  </div>
</template>

<script>
definePageMeta({
  layout: "blank",
});
export default {};
</script>
