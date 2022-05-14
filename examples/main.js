import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Ztui from "../packages/index";
import "../packages/assets/index.css";
Vue.use(Ztui);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount("#app");
