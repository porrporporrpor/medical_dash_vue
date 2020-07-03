<template>
  <section class="calculator-area" id="calculator">
    <div class="container-fluid">
      <div class="row">
        <b-card class="shadow calculator-box">
          <b-card-text>
            <br />
            <h1 class="text-center">โปรแกรมคำนวณ</h1>

            <b-form>
              <!-- Gender -->
              <b-form-group label="เพศ">
                <b-form-radio v-model="selected" name="gender" value="M">ชาย</b-form-radio>
                <b-form-radio v-model="selected" name="gender" value="F">หญิง</b-form-radio>
              </b-form-group>
              <!-- Age -->
              <b-form-group id="input-group-1" label="อายุ (ปี)" label-for="input-1">
                <b-form-input
                  id="input-1"
                  type="number"
                  min="1"
                  max="39"
                  required
                  :state="ageState"
                  placeholder="โปรดระบุอายุของคุณ"
                  v-model="age"
                ></b-form-input>
                <b-form-invalid-feedback id="input-live-feedback">โปรดระบุอายุในช่วง 1 - 39 ปี</b-form-invalid-feedback>
              </b-form-group>
              <!-- Height -->
              <b-form-group id="input-group-2" label="ส่วนสูง (เซนติเมตร)" label-for="input-2">
                <b-form-input
                  id="input-2"
                  type="number"
                  min="20"
                  max="250"
                  required
                  :state="heightState"
                  placeholder="โปรดระบุส่วนสูงของคุณ"
                  v-model="height"
                ></b-form-input>
                <b-form-invalid-feedback
                  id="input-live-feedback"
                >โปรดระบุส่วนสูงในช่วง 20 - 250 เซนติเมตร</b-form-invalid-feedback>
              </b-form-group>
              <!-- Weight -->
              <b-form-group id="input-group-3" label="น้ำหนัก (เซนติเมตร)" label-for="input-3">
                <b-form-input
                  id="input-3"
                  type="number"
                  min="1"
                  max="200"
                  required
                  :state="weightState"
                  placeholder="โปรดระบุน้ำหนักของคุณ"
                  v-model="weight"
                ></b-form-input>
                <b-form-invalid-feedback
                  id="input-live-feedback"
                >โปรดระบุน้ำหนักในช่วง 1 - 200 กิโลกรัม</b-form-invalid-feedback>
              </b-form-group>
              <!-- Muscle -->
              <b-form-group id="input-group-4" label="มวลกล้ามเนื้อ (กิโลกรัม)" label-for="input-4">
                <b-form-input
                  id="input-4"
                  type="number"
                  min="1"
                  max="200"
                  required
                  :state="muscleState"
                  placeholder="โปรดระบุมวลกล้ามเนื้อของคุณ"
                  v-model="muscle"
                ></b-form-input>
                <b-form-invalid-feedback
                  id="input-live-feedback"
                >โปรดระบุมวลกล้ามเนื้อในช่วง 1 - 200 กิโลกรัม</b-form-invalid-feedback>
              </b-form-group>
            </b-form>
          </b-card-text>
          <b-button @click="submitCalculator()" variant="primary" block>คำนวณ</b-button>
          <br />
          <li v-if="msg_invalid">{{ msg_invalid }}</li>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Calculator",
  data() {
    return {
      data: null,
      selected: "M",
      age: "",
      height: "",
      weight: "",
      muscle: "",
      msg_invalid: ""
    };
  },
  computed: {
    ageState() {
      if (this.age == "") {
        return null;
      }
      return this.age < 1 || this.age > 39 ? false : true;
    },
    heightState() {
      if (this.height == "") {
        return null;
      }
      return this.height < 20 || this.height > 250 ? false : true;
    },
    weightState() {
      if (this.weight == "") {
        return null;
      }
      return this.weight < 1 || this.weight > 200 ? false : true;
    },
    muscleState() {
      if (this.muscle == "") {
        return null;
      }
      return this.muscle < 1 || this.muscle > 200 ? false : true;
    }
  },
  methods: {
    submitCalculator() {
      if (
        this.age == "" ||
        this.height == "" ||
        this.weight == "" ||
        this.muscle == "" ||
        this.age < 1 || this.age > 39 ||
        this.height < 20 || this.height > 250 ||
        this.weight < 1 || this.weight > 200 ||
        this.muscle < 1 || this.muscle > 200
      ) {
        this.msg_invalid = "กรุณาตรวจสอบข้อมูลให้ถูกต้องและครบถ้วน";
        return;
      }
      this.msg_invalid = "";
      axios
        .post(
          process.env.VUE_APP_CALCULATE_API_URL,
          {
            gender: this.selected,
            age: this.age,
            height: this.height,
            weight: this.weight,
            muscle: this.muscle
          },
          {
            headers: {
              "Content-Type": "application/json"
            },
            timeout: 900000
          }
        )
        .then(res => {
          console.log(res.data);
          this.data = res.data;
          localStorage.setItem("calculateResult", JSON.stringify(res.data));
          this.$router.push("result");
        });
    }
  }
};
</script>

<style scoped>
.calculator-area {
  padding: 5rem 0;
  background-color: #f4a100;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.calculator-area .calculator-box {
  width: 100%;
  margin: 0 8%;
  padding: 4% 10%;
}
</style>