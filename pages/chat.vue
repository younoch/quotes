<template>
  <section class="contact padding-bottom">
    <div class="container">
      <div class="section-header section-header--middle">
        <div class="section-header__content">
          <div class="section-header__titlebar">
            <h2 class="section__header__title">Get In Touch</h2>
          </div>
        </div>
      </div>
      <div class="contact__wrapper">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <form @submit.prevent="submitForm" class="form">
              <div class="row">
                <div class="col-md-6">
                  <input
                    v-model="formData.name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    v-model="formData.email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div class="col-12">
                  <input
                    v-model="formData.subject"
                    type="text"
                    placeholder="Subject *"
                    required
                  />
                </div>
                <div class="col-12">
                  <textarea
                    v-model="formData.message"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="default-btn">
                  <span>Send Your Message</span>
                </button>
              </div>
            </form>
            <h3>{{ message }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { io, Socket } from "socket.io-client";

const socket : Socket = io("http://localhost:5000/nmsp1", {
  reconnectionDelayMax: 100000000,
  transports: ["websocket"],
});


const formData: contact = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

/* function submitForm() {
  socket.send(formData);
  socket.emit('myEvent', formData);
} */
const message = ref("");

 /* socket.on("message", (data) => {
   message.value = data
 }); */
/* socket.on("myEvent", (data) => {
  message.value = data;
}); */
/* socket.on("MyBrodCast", (data) => {
  message.value = data;
}); */
/* socket.on("connect", () => {
  console.log("connected");
}); */

/* socket.on("disconnect", () => {
  console.log("disconnected");
}); */

/* socket.on('connect_error', (err) => {
  console.error('Connection Error:', err);
}); */
</script>

<style></style>
