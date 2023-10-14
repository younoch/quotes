<template>
  <div class="login-section padding-bottom">
    <div class="container">
      <p class="text-center">
        Welcome to The Speakers, a blog where I share my thoughts and
        opinions on various topics. This privacy policy explains how I collect,
        use, and protect your personal information when you visit The Speakers.
        Please read this privacy policy carefully before using The Speakers or
        submitting any personal information to me. What Information Do I
        Collect?
      </p>
      <br />
      <p>
        When you visit the speakers, I may collect two types of information from
        you:
      </p>
      <ul>
        <li>
          <span class="fw-bold">Personal information</span>
          that you voluntarily provide to me, such as your name, email address,
          or other contact details. For example, you may provide me with your
          personal information when you subscribe to my newsletter, leave a
          comment on the speakers posts, contact me via email or social media,
          or participate in any surveys, contests, or promotions that I may
          offer.
        </li>
        <li>
          <span class="fw-bold">Non-personal information</span>
          that is automatically collected by the speakers or third-party
          services that I use, such as your IP address, browser type, device
          type, operating system, referring website, pages viewed, time spent,
          and other statistical data. For example, I use Google Analytics to
          help me analyze and improve the speakers performance and user
          experience.
        </li>
      </ul>
      <br />
      <p class=" fw-bold">How Do I Use Your Information?</p>
      <p>I use your personal information for the following purposes:</p>
      <ul>
        <li>
          To provide you with the content and services that you request or
          subscribe to.
        </li>
        <li>To monitor and analyze the speakers traffic and user behavior.</li>
        <li>
          To measure and report on the effectiveness of the speakers and
          marketing campaigns.
        </li>
        <li>
          To personalize and enhance your user experience on the speakers.
        </li>
      </ul>
      <br />
      <p class="intend">
        We may use cookies and other tracking technologies to collect and store
        your information. Cookies are small files that are stored on your device
        when you visit a website. They help us to remember your preferences,
        improve our performance, and deliver relevant ads to you. You can manage
        your cookie preferences or block or delete cookies through your browser
        settings.
      </p>
      <p class="fw-bolder">How Do I Link to Other Websites?</p>
      <p class="intend">
        the speakers may contain links to other websites that are not operated
        by me. These links are provided for your convenience and reference only.
        I do not endorse or control these websites and I am not responsible for
        their content or privacy practices. You should review the privacy
        policies of these websites before engaging with them.
      </p>
      <p class="fw-bolder">How Do I Update This Privacy Policy?</p>
      <p class="intend">
        I may update this privacy policy from time to time to reflect changes in
        the speakers, legal requirements, or user feedback. I will notify you of
        any material changes by posting a notice on the speakers or sending you
        an email. You are advised to review this privacy policy periodically for
        any changes. Your continued use of the speakers after any changes to
        this privacy policy will constitute your acceptance of such changes.
      </p>
      <p class="fw-bolder">How Do You Contact Me?</p>
      <p class="intend">
        If you have any questions or comments about this privacy policy or your
        personal information, please contact me at:
      </p>
      <p class="intend">Name: John Doe Email: admin@the-speakers.com</p>
      <p class="intend">This privacy policy was last updated on October 12, 2023.</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
 .intend{
  text-indent: 3rem;
  @media screen and ( max-width: 500px) {
    text-indent: 2rem;
  }
}
ul {
  list-style-type: none;
}
li {
  &:before {
    content: "●";
    font-size: 130%;
    color: #28dbd1;
    margin-right: 10px;
    transition: color 0.5s;
  }

  &:hover {
    &:before {
      color: #02121d;
    }
  }
}
</style>
