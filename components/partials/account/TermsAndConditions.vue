<template>
  <div class="login-section padding-bottom">
    <div class="container">
      <p class="text-center">
        Welcome to The Speakers, a blog where I share my thoughts and opinions
        on various topics1. By accessing or using The Speakers, you agree to be
        bound by these terms and conditions. If you do not agree with these
        terms and conditions, please do not use The Speakers.
      </p>
      <br />
      <p class="fw-bold">Content and Services</p>
      <p class="intend">
        The content and services on The Speakers are provided for your personal
        and non-commercial use only. You may not copy, reproduce, distribute,
        modify, or create derivative works from the content and services on The
        Speakers without my prior written consent. You may not use the content
        and services on The Speakers for any illegal or unauthorized purpose.
        You are solely responsible for your own conduct and any consequences
        arising from your use of The Speakers.
      </p>
      <br />

      <p class="fw-bold">Intellectual Property Rights</p>
      <p class="intend">
        The content and services on The Speakers are protected by intellectual
        property rights, such as copyrights, trademarks, or other proprietary
        rights. I own or have the license to use all the content and services on
        The Speakers. You acknowledge and respect my intellectual property
        rights and do not claim any ownership or interest in the content and
        services on The Speakers.
      </p>
      <br />

      <p class="fw-bold">Disclaimer of Warranties</p>
      <p class="intend">
        The content and services on The Speakers are provided “as is” and “as
        available” without any warranties of any kind, either express or
        implied. I do not warrant that the content and services on The Speakers
        are accurate, complete, reliable, current, error-free, or free of
        viruses or other harmful components. I do not warrant that the content
        and services on The Speakers will meet your requirements or
        expectations, or that the access or use of The Speakers will be
        uninterrupted or secure. You use The Speakers at your own risk and
        discretion.
      </p>
      <br />

      <p class="fw-bold">Limitation of Liability</p>
      <p class="intend">
        To the fullest extent permitted by law, I am not liable for any direct,
        indirect, incidental, consequential, special, exemplary, or punitive
        damages arising out of or in connection with your access or use of The
        Speakers. This includes, but is not limited to, damages for loss of
        profits, goodwill, data, or other intangible losses. This limitation of
        liability applies even if I have been advised of the possibility of such
        damages.
      </p>
      <br />

      <p class="fw-bold">Indemnification</p>
      <p class="intend">
        You agree to indemnify, defend, and hold me harmless from and against
        any claims, liabilities, damages, losses, costs, expenses, or fees
        arising out of or in connection with your access or use of The Speakers.
        This includes, but is not limited to, claims arising from your violation
        of these terms and conditions or any applicable laws or regulations.
      </p>
      <br />

      <p class="fw-bold">Termination</p>
      <p class="intend">
        I reserve the right to terminate your access or use of The Speakers at
        any time and for any reason without notice or liability. I also reserve
        the right to modify or discontinue The Speakers or any part thereof at
        any time and for any reason without notice or liability.
      </p>
      <br />

      <p class="fw-bold">Changes to These Terms and Conditions</p>
      <p class="intend">
        I may change these terms and conditions from time to time to reflect
        changes in The Speakers, legal requirements, or user feedback. I will
        notify you of any material changes by posting a notice on The Speakers
        or sending you an email. You are advised to review these terms and
        conditions periodically for any changes. Your continued access or use of
        The Speakers after any changes to these terms and conditions will
        constitute your acceptance of such changes.
      </p>
      <br />

      <p class="fw-bolder">Contact Me</p>
      <p class="intend">
        If you have any questions or comments about these terms and conditions
        or your access or use of The Speakers, please contact me at:
        admin@the-speakers.com
      </p>
      <p class="intend">Name: John Doe Email: admin@the-speakers.com</p>
      <p class="intend">
        This privacy policy was last updated on October 13, 2023.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.intend {
  text-indent: 3rem;
  @media screen and (max-width: 500px) {
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
