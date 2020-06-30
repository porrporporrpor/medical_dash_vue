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
              <b-form-group
                id="input-group-1"
                label="อายุ (ปี)"
                label-for="input-1"
                :description="msg_age"
              >
                <b-form-input
                  id="input-1"
                  type="number"
                  min="1"
                  max="39"
                  required
                  placeholder="โปรดระบุอายุของคุณ"
                  v-model="age"
                ></b-form-input>
              </b-form-group>
              <!-- Height -->
              <b-form-group
                id="input-group-2"
                label="ส่วนสูง (เซนติเมตร)"
                label-for="input-2"
                :description="msg_height"
              >
                <b-form-input
                  id="input-2"
                  type="number"
                  required
                  placeholder="โปรดระบุส่วนสูงของคุณ"
                  v-model="height"
                ></b-form-input>
              </b-form-group>
              <!-- Weight -->
              <b-form-group
                id="input-group-3"
                label="น้ำหนัก (เซนติเมตร)"
                label-for="input-3"
                :description="msg_weight"
              >
                <b-form-input
                  id="input-3"
                  type="number"
                  required
                  placeholder="โปรดระบุน้ำหนักของคุณ"
                  v-model="weight"
                ></b-form-input>
              </b-form-group>
              <!-- Muscle -->
              <b-form-group
                id="input-group-4"
                label="มวลกล้ามเนื้อ (กิโลกรัม)"
                label-for="input-4"
                :description="msg_muscle"
              >
                <b-form-input
                  id="input-4"
                  type="number"
                  required
                  placeholder="โปรดระบุมวลกล้ามเนื้อของคุณ"
                  v-model="muscle"
                ></b-form-input>
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
      msg_age: "",
      msg_height: "",
      msg_weight: "",
      msg_muscle: "",
      msg_invalid: "",
      isDisabled: false
    };
  },
  mounted() {
    // if (this.msg_age != '' && this.msg_height != '' || this.msg_weight != '' || this.msg_muscle != '' || (this.msg_age == '' && this.msg_height == '' && this.msg_weight == '' && this.msg_muscle == '')) {
    //   this.disabled = 1
    // } else {
    //   this.disabled = 0
    // }
  },
  watch: {
    age(value) {
      this.age = value;
      this.validateAge(value);
    },
    height(value) {
      this.height = value;
      this.validateHeight(value);
    },
    weight(value) {
      this.weight = value;
      this.validateWeight(value);
    },
    muscle(value) {
      this.muscle = value;
      this.validateMuscle(value);
    }
  },
  methods: {
    validateAge(age) {
      if (age < 1 || age > 39) {
        this.msg_age = "โปรดระบุอายุในช่วง 1 - 39 ปี";
      } else {
        this.msg_age = "";
      }
      if (age == "") {
        this.msg_age = "";
      }
    },
    validateHeight(height) {
      if (height < 20 || height > 250) {
        this.msg_height = "โปรดระบุส่วนสูงในช่วง 20 - 250 เซนติเมตร";
      } else {
        this.msg_height = "";
      }
      if (height == "") {
        this.msg_height = "";
      }
    },
    validateWeight(weight) {
      if (weight < 30 || weight > 200) {
        this.msg_weight = "โปรดระบุน้ำหนักในช่วง 30 - 200 กิโลกรัม";
      } else {
        this.msg_weight = "";
      }
      if (weight == "") {
        this.msg_weight = "";
      }
    },
    validateMuscle(muscle) {
      if (muscle < 30 || muscle > 200) {
        this.msg_muscle = "โปรดระบุมวลกล้ามเนื้อในช่วง 30 - 200 กิโลกรัม";
      } else {
        this.msg_muscle = "";
      }
      if (muscle == "") {
        this.msg_muscle = "";
      }
    },
    submitCalculator() {
      if (
        this.msg_age != "" ||
        this.msg_height != "" ||
        this.msg_weight != "" ||
        this.msg_muscle != "" ||
        (this.age == "" &&
          this.height == "" &&
          this.weight == "" &&
          this.muscle == "")
      ) {
        this.msg_invalid = "กรุณาตรวจสอบข้อมูลให้ถูกต้องและครบถ้วน";
        return;
      }
      this.msg_invalid = "";
      axios
        .post(
          "http://localhost:8000/",
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
          // TO-DO
          // alertbox if err else redirect to result page
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