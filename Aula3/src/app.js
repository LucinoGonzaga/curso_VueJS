const MyNameApp = {
    data(){
        return{
            input_name: "",
            name: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            console.log(this.input_name);
            this.name = this.input_name;   
        }
    }
}
Vue.createApp(MyNameApp).mount("#app");