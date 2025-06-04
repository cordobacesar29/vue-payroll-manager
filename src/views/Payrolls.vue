<template>
  <BasicLayout>
    <div class="payrolls">
      <h1>Payroll</h1>
      <UploadPayroll />
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from "@/layouts/BasicLayout.vue";
import UploadPayroll from "@/components/Payrolls/UploadPayroll.vue";
import { ref, onMounted } from "vue";
import { auth, getDocs, db, collection } from "@/utils/firebase";
export default {
  name: "Payrolls",
  components: { BasicLayout, UploadPayroll },
  setup() {
    let payrolls = ref(null);

    onMounted(() => {
      getPayrolls();
    });
    const getPayrolls = async () => {
      const docRef = collection(db, auth.currentUser.uid);

      const res = await getDocs(docRef);
      const result = [];
      res.docs.forEach((document) => {
        const data = document.data();
        data.id = document.id;
        result.push(data);
      });
      payrolls.value = result;
    };
    return {
      payrolls,
      getPayrolls,
    };
  },
};
</script>

<style lang="scss" scoped>
.payrolls {
  margin: 50px 0;
  text-align: center;
}
</style>
