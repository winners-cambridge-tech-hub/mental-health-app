<template>
  <div class="health">
    <SideBar />
    <div class="component">
      <MyHeader />
      <div class="category-container">
        <div class="card">
          <h2 class="title">headline</h2>
          <a href="#">
            <div class="category">
              <div class="headline">
                <h3>Lorem ipsum</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                alt=""
              />
            </div>

            <div class="info">
              <div class="time-stamp">
                <div>3h ago.</div>
                <div>Jesse Lie</div>
              </div>

              <div class="elipsis">
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import MyHeader from "./MyHeader";
import SideBar from "./SideBar";

export default {
  name: "MyHealth",

  components: {
    MyHeader,
    SideBar,
  },
  data() {
    return {
      health: [],
    };
  },

  methods: {
    component() {
      axios
        .get(
          "https://api.nhs.uk/mental-health?subscription-key=1db5c07415594d56a23f8fd1204ac928"
        )
        .then((response) => {
          console.log(response.data);
          this.health = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.component();
  },
};
</script>
<style scoped>
.health {
  display: flex;
}
</style>