<template>
  <div>
    <div
      class="header-section"
      :class="scrollPosition > 100 ? 'header-fixed fadeInUp' : ''"
    >
      <div class="container">
        <div class="header-holder">
          <div
            class="header-primary d-flex flex-wrap justify-content-between align-items-center"
          >
            <div class="brand-logo d-none d-lg-inline-block">
              <div class="logo">
                  <NuxtImg
                    src="/images/logo/the-speakers-logo.png"
                    height="40"
                    alt="The Speakers"
                    @click="navigateTo('/')"
                  />
              </div>
            </div>
            <div class="header-wrapper justify-content-lg-end">
              <div class="mobile-logo d-lg-none">
                  <nuxt-img
                    src="/images/logo/the-speakers-logo.png"
                    height="55"
                    alt="The Speakers"
                    @click="navigateTo('/')"
                  />
              </div>
              <div class="menu-area">
                <ul id="menu" class="menu">
                  <!-- <li class="menu-item-has-children">
                                        <a href="javascript:void(0);">Home</a>
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/" >Home 1</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/home2" >Home 2</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/home3" >
                                                    Home 3
                                                    <span class="badge bg--secondary-color">New</span>
                                                </nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="javascript:void(0);">Project</a>
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/project" >Project 1</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/project-two" >Project 2</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/project/project-details" >Project
                                                    Details</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/apply-project" >Apply for
                                                    Project</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/token" >Tokenomics</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="javascript:void(0);">Stacking</a>
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/stacking" >Stacking</nuxt-link>
                                            </li>
                                            <li>
                                                <a href="/farming" >Farming</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="javascript:void(0);">Pages</a>
                                        <ul class="submenu">
                                            <li>
                                                <nuxt-link to="/roadmap" >Roadmap</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/roadmap-two" >Roadmap 2</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/kyc" >KYC</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/tier" >Tier</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/faq" >FAQ</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/leaderboard"
                                                    >Leaderboard</nuxt-link>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="javascript:void(0);">Team</a>
                                                <ul class="submenu">
                                                    <li>
                                                        <nuxt-link to="/team" >Team</nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/team/team-member" >Team
                                                            member</nuxt-link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="menu-item-has-children">
                                                <nuxt-link to="javascript:void(0);">Account</nuxt-link>
                                                <ul class="submenu">
                                                    <li>
                                                        <nuxt-link to="/account/signup" >Sign
                                                            Up</nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/account/login" >Log
                                                            In</nuxt-link>
                                                    </li>
                                                    <li>
                                                        <nuxt-link to="/account/reset-password"
                                                            >Reset Pass</nuxt-link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <nuxt-link to="/error" >404</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/coming-soon" >Coming
                                                    Soon</nuxt-link>
                                            </li>
                                        </ul>
                                    </li> -->

                  <!-- <li>
                                        <nuxt-link to="/quote" >Quetes</nuxt-link>
                                    </li> -->
                  <li>
                    <span  @click="navigateTo('/contact-us')">Contact</span>
                  </li>
                  <li>
                    <span @click="navigateTo('/account/privacy-policy')">Privacy</span>
                  </li>
                  <li>
                    <span @click="navigateTo('/account/terms-conditions')">Terms</span>
                  </li>
                  <li v-if="authenticated">
                    <span @click="navigateTo('/chat')">Chat</span>
                  </li>
                  <li v-if="authenticated" class="menu-item-has-children">
                    <a href="javascript:void(0);">
                      {{ `${userProfile.FirstName} ${userProfile.LastName}` }}
                    </a>
                    <ul class="submenu">
                      <li>
                        <nuxt-link to="/account/profile" >profile</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link @click="logout">logout</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li v-else>
                    <span @click="navigateTo('/account/login')">Log In</span>
                  </li>
                  
                </ul>

                <!-- <a
                  class="wallet-btn"
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target="#wallet-option"
                >
                  <span>Connect</span>
                  <client-only>
                    <i
                      class="fa-solid fa-wallet px-1"
                      style="font-size: 1.2em"
                    ></i>
                  </client-only>
                </a> -->

                <div id="icon" class="header-bar d-lg-none" @click="toggleMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const { logUserOut } = useAuthStore();
const { authenticated, userProfile } = storeToRefs(useAuthStore());
const router = useRouter();

watch(() => router.value,(value: any) => {
    console.log(value);
  },{ deep: true }
);

const logout = () => {
  logUserOut();
};

const scrollPosition = ref<number>(0);

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
  eventList();
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});

function handleScroll() {
  if (process.client) {
    scrollPosition.value = window.scrollY;
  }
}

function toggleMenu() {
  const element = document.getElementById("menu") as HTMLElement;
  const icon = document.getElementById("icon") as HTMLElement;
  element.classList.toggle("active");
  icon.classList.toggle("active");
}

function closeMenu() {
  const element = document.getElementById("menu") as HTMLElement;
  const icon = document.getElementById("icon") as HTMLElement;
  element.classList.remove("active");
  icon.classList.remove("active");
}

function eventList() {
  const elementList = Array.from(
    document.querySelectorAll(".menu li")
  ) as HTMLElement[];
  if (window.innerWidth)
    for (let i = 0; i < elementList.length; i++) {
      elementList[i].addEventListener("click", function () {
        closeMenu();
        elementList[i].classList.toggle("open");
      });
    }
}
</script>

<style lang="scss">
// .menu li ul {
//     display: none;
// }
</style>
