<template>
  <section
    class="banner"
    id="home"
    style="background-image: url(/images/banner/bg.png)"
  >
    <div class="container">
      <div class="banner__wrapper">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <div
              class="banner__content"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h1 class="text-uppercase">
                WEB 3.0 <br />
                Launchpad <br />for IDO & INO
              </h1>
              <p>
                The next generation gaming ecosystem for IDO's and INO launchpad
                web 3.0 platform
              </p>
              <nuxt-link to="/project" class="default-btn"
                ><span>DiscoverIDO</span></nuxt-link
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="banner__thumb"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/banner/banner-thumb/01.png"
                alt="banner Image"
              />

              <div class="shape-2">
                <img
                  src="/images/banner/banner-thumb/shape3.png"
                  alt="Banner Shape"
                />
              </div>
              <div class="shape-3">
                <img
                  src="/images/banner/banner-thumb/shape1.png"
                  alt="Banner Shape"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
