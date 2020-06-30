<script>
import bmi_boy_child from "../assets/data/bmi_boy_child.json";
import bmi_girl_child from "../assets/data/bmi_girl_child.json";
import mmi_weight_boy from "../assets/data/mmi_weight_boy.json";
import mmi_weight_girl from "../assets/data/mmi_weight_girl.json";
import muscle_boy from "../assets/data/muscle_boy.json";
import muscle_girl from "../assets/data/muscle_girl.json";

export default {
    name: "CalculatePage",
    data() {
    return {
      bmi_boy_child_df: bmi_boy_child,
      bmi_girl_child_df: bmi_girl_child,
      mmi_weight_boy_df: mmi_weight_boy,
      mmi_weight_girl_df: mmi_weight_girl,
      muscle_boy_df: muscle_boy,
      muscle_girl_df: muscle_girl,
      gender: 'M',
      age: 18,
      height: 160,
      weight: 55.3,
      muscle: 44.1,
    };
  },
  methods: {
    calculate() {
        this.bmi_boy_child = this.bmi_boy_child[this.age],
    }
  }
}
</script>