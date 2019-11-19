import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production"

const vuexlocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: null,
    user: [],
    reconnect: false,
    activeRoom: null,
    rooms: [],
    users: [],
    messages: [],
    userTyping: null
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    hasError: state => state.error ? true : false
  },
  plugins: [vuexlocal.plugin],
  strict: debug
});
