<template>
  <div class="sign-form">
    <router-link to="/" class="close close--white">
      <span class="visually-hidden">Закрыть форму авторизации</span>
    </router-link>
    <div class="sign-form__title">
      <h1 class="title title--small">Авторизуйтесь на сайте</h1>
    </div>
    <form @submit.prevent="login">
      <div class="sign-form__input">
        <label class="input">
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="example@mail.ru"
            ref="emailRef"
            v-model="email"
          />
        </label>
      </div>

      <div class="sign-form__input">
        <label class="input">
          <span>Пароль</span>
          <input
            type="password"
            name="pass"
            placeholder="***********"
            v-model="password"
          />
        </label>
      </div>
      <button type="submit" class="button">Авторизоваться</button>
    </form>
  </div>
</template>

<script>
import validator from "@/common/mixins/validator";

export default {
  name: "Login",
  mixins: [validator],
  data() {
    return {
      email: "",
      password: "",
      validations: {
        email: {
          error: "",
          rules: ["required", "email"],
        },
        password: {
          error: "",
          rules: ["required"],
        },
      },
    };
  },
  watch: {
    email() {
      this.$clearValidationErrors();
    },
    password() {
      this.$clearValidationErrors();
    },
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
  methods: {
    async login() {
      if (
        !this.$validateFields(
          { email: this.email, password: this.password },
          this.validations
        )
      ) {
        return;
      }

      this.$emit("login");

      await this.$router.push("/orders");
    },
  },
};
</script>
