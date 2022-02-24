const MyNameApp = {
    data(){
        return{
            name: "Lucino",
            language: "VueJS"
        }
    }
}
Vue.createApp(MyNameApp).mount("#app");