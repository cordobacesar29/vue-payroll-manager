<template>
  <BasicLayout>
    <div class="payrolls">
      <h1>Payroll</h1>
      <UploadPayroll :getPayrolls="getPayrolls"/>
      <PayrollList :payrolls="payrolls" :getPayrolls="getPayrolls"/>
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from "@/layouts/BasicLayout.vue";
import UploadPayroll from "@/components/Payrolls/UploadPayroll.vue";
import PayrollList from "@/components/Payrolls/PayrollList.vue";
import { ref, onMounted } from "vue";
import { auth, getDocs, db, collection, query, orderBy } from "@/utils/firebase";
export default {
  name: "Payrolls",
  components: { BasicLayout, UploadPayroll, PayrollList },
  setup() {
    let payrolls = ref(null);

    onMounted(() => {
      getPayrolls();
    });
    const getPayrolls = async () => {
      const docRef = collection(db, auth.currentUser.uid);  //creamos referencia a la colleccion de firestore
      const q = query(docRef,  orderBy("date", "desc"))  // query para ordernar los documentos de manera descendente
      const res = await getDocs(q);
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
