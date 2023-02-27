//console.log("Quando inizi le API ma era meglio una IPA");

const { createApp } = Vue;

createApp({
	data() {
		return {
			emailList: [],
		};
	},
	methods: {
		fetchEmail() {
			axios
				.get("https://flynn.boolean.careers/exercises/api/random/mail")
				.then((res) => {
					//console.log(res.data.response);
          const email = res.data.response
          this.emailList.push(email)
				});
		},
	},
  mounted(){
    for(let i = 0; i < 10; i++) {
      this.fetchEmail()
    }
    console.log(this.emailList)
  }
}).mount("#app");
