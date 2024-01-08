import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ztui from "../packages/index";
Vue.use(ztui);
Vue.config.productionTip = false;
new Vue({
	router,
	render: h => h(App),
}).$mount("#app");
