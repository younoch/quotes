<template>
  <div>
    <div>
      <!-- ================> Leaderboard section  start here <================== -->
      <section class="leaderboard padding-top padding-bottom">
        <div class="container">
          <div class="leaderboard__wrapper">
            <div class="table-responsive">
              <table class="table table-borderless leaderboard__table">
                <thead>
                  <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Rank</th>
                    <th scope="col">Project Name</th>
                    <th scope="col">Public Key</th>
                    <th scope="col">Locked</th>
                    <th scope="col">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in leaderList"
                    :key="index"
                    class="leaderboard__item"
                  >
                    <td>
                      <div
                        v-if="item.status === 0"
                        class="leaderboard--level-freez"
                      >
                        <client-only>
                          <i class="fa-solid fa-minus"></i>
                        </client-only>
                      </div>
                      <div v-if="item.status > 0" class="leaderboard--level-up">
                        +{{ item.status }}
                        <client-only>
                          <i class="fa-solid fa-angle-up"></i>
                        </client-only>
                      </div>
                      <div
                        v-if="item.status < 0"
                        class="leaderboard--level-down"
                      >
                        -{{ item.status }}
                        <client-only>
                          <i class="fa-solid fa-angle-down"></i>
                        </client-only>
                      </div>
                    </td>
                    <th scope="row">{{ item.rank.padStart(2, "0") }}</th>
                    <td>
                      <div class="lead-project position-relative">
                        <div class="lead-project__thumb">
                          <img :src="item.img" alt="Project Image" />
                        </div>
                        <div class="lead-project__content">
                          <h6>
                            <a class="stretched-link" href="/project_details">{{
                              item.name
                            }}</a>
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>{{ item.publicKey }}</td>
                    <td>{{ item.locked }} Days</td>
                    <td>${{ item.balance }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul class="pagination mt-5 justify-content-center">
              <li class="page-item disabled">
                <span class="page-link"
                  ><i class="fa-solid fa-angle-left"></i
                ></span>
              </li>
              <li class="page-item active" aria-current="page">
                <span class="page-link">1</span>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#"
                  ><i class="fa-solid fa-angle-right"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- ================> Leaderboard section  end here <================== -->
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const leaderList = [
      {
        rank: "1",
        status: 0,
        img: "/images/igo/author/1.png",
        name: "Battle Ground",
        publicKey: "0x95e441....ddd953454",
        locked: 135,
        balance: 39300090,
      },
      {
        rank: "2",
        status: 1,
        img: "/images/igo/author/2.png",
        name: "Frozen city",
        publicKey: "0x95e441....ddd953454",
        locked: 235,
        balance: 39300090,
      },
      {
        rank: "3",
        status: -1,
        img: "/images/igo/author/3.png",
        name: "Monster Squad",
        publicKey: "0x95e441....ddd953454",
        locked: 55,
        balance: 230090,
      },
      {
        rank: "4",
        status: -0,
        img: "/images/igo/author/4.png",
        name: "RobotX Ply",
        publicKey: "0x65e441....ddd9534353",
        locked: 90,
        balance: 5300090,
      },
      {
        rank: "5",
        status: 2,
        img: "/images/igo/author/5.png",
        name: "SpeeDEXIDO",
        publicKey: "0x95e441....ddd953454",
        locked: 65,
        balance: 600090,
      },
      {
        rank: "6",
        status: -1,
        img: "/images/igo/author/6.png",
        name: "TorkBall Cup",
        publicKey: "0x95e441....ddd953454",
        locked: 95,
        balance: 930090,
      },
      {
        rank: "7",
        status: -2,
        img: "/images/igo/author/7.png",
        name: "NinJa Hattori",
        publicKey: "0x95e441....ddd953454",
        locked: 5,
        balance: 300090,
      },
      {
        rank: "8",
        status: 3,
        img: "/images/igo/author/8.png",
        name: "The Speakers XoX",
        publicKey: "0x95e441....ddd955412",
        locked: 120,
        balance: 300090,
      },
      {
        rank: "9",
        status: -1,
        img: "/images/igo/author/9.png",
        name: "GamFier DeF",
        publicKey: "0x95e441....ddd953454",
        locked: 25,
        balance: 50090,
      },
    ];

    return {
      leaderList,
    };
  },
};
</script>
