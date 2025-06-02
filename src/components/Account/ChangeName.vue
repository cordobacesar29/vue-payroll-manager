<template>
  <form action="" class="ui form change-name" @submit.prevent="onChangeName">
    <input
      type="text"
      placeholder="Nombre y apellido"
      v-model="name"
      :class="{ error: formError }"
    />
    <button type="submit" class="ui button primary" :class="{ loading }">
      Actualizar
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import * as Yup from "yup";
import { auth, updateProfile } from "@/utils/firebase";
import { useStore } from "vuex";

export default {
  name: "ChangeName",
  setup() {
    const store = useStore();
    let name = ref("");
    let formError = ref(false);
    let loading = ref(false);

    const schemaChangeNameForm = Yup.object().shape({
      name: Yup.string().min(6, true).required(true),
    });
    const onChangeName = async () => {
      loading.value = true;
      formError.value = false;
      try {
        await schemaChangeNameForm.validate(
          { name: name.value },
          { abortEarly: false }
        );

        try {
          await updateProfile(auth.currentUser, {
            displayName: name.value
          })
          store.dispatch("reloadUserName")
        } catch (error) {
          console.log(error)
        }
      } catch (err) {
        err.inner.forEach((error) => {
          formError.value = error.message;
        });
      }
      loading.value = false;
    };

    return {
      name,
      onChangeName,
      formError,
      loading
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.form.change-name {
  text-align: center;

  input.error {
    border-color: #faa;
    background-color: #ffeded;
  }

  .ui.button {
    margin-top: 20px;
  }
}
</style>
