<template>
  <div class="upload-payroll">
    <button class="ui button primary" @click="showCloseForm">
      Nueva nomina
    </button>

    <form
      class="ui form upload-payroll__form"
      :class="{ open: showForm }"
      @submit.prevent="handleSubmit"
    >
      <div class="field">
        <label for="file" class="ui icon button">
          <i class="file icon" />
          Selecciona nomina
          <span v-if="file">{{ file.name }}</span>
        </label>
        <input
          type="file"
          id="file"
          style="display: none"
          @change="uploadFile"
        />
      </div>

      <div class="field">
        <div class="ui calendar">
          <div class="ui input left icon">
            <input type="date" @change="changeDate" :value="date" />
          </div>
        </div>
      </div>

      <button class="ui button positive" :class="{ loading }">Subir</button>

      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import {
  auth,
  storage,
  db,
  storageRef,
  uploadBytes,
  getDownloadURL,
  collection,
  addDoc,
} from "../../utils/firebase";

export default {
  name: "UploadPayroll",
  setup() {
    let showForm = ref(false);
    let file = ref(null);
    let date = ref(null);
    let loading = ref(false);
    let error = ref(null);

    const showCloseForm = () => {
      showForm.value = !showForm.value;
    };

    const uploadFile = (e) => {
      const fileTem = e.target.files[0];
      error.value = null;

      if (fileTem.type === "application/pdf") {
        file.value = fileTem;
      } else {
        error.value = "Fichero no valido";
      }
    };

    const changeDate = (e) => {
      date.value = e.target.value;
    };

    const handleSubmit = async () => {
      if (file.value && date.value) {
        loading.value = true;
        try {
          const nameFile = uuidv4();
          const storageR = storageRef(storage, `${nameFile}.pdf`);

          await uploadBytes(storageR, file.value);
          const payrollUrl = await getDownloadURL(storageR, nameFile);

          await addDoc(collection(db, auth.currentUser.uid), {
            payrollUrl,
            date: new Date(date.value),
            dateString: date.value,
          });
        } catch (error) {
          console.log(error);
        }
        loading.value = false;
        file.value = null;
        date.value = null;
        showForm.value = false;
        error.value = null;
        document.getElementById("file").value = "";
      } else {
        error.value = "Sube un archivo";
      }
    };

    return {
      showForm,
      showCloseForm,
      file,
      date,
      error,
      loading,
      uploadFile,
      handleSubmit,
      changeDate,
    };
  },
};
</script>

<style lang="scss" scoped>
.upload-payroll {
  .ui.button.primary {
    margin-bottom: 30px;
  }
  &__form {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;

    &.open {
      height: 200px;
    }
  }
}
</style>
