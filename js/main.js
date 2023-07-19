const app = Vue.createApp({
    data() {
        return {
            startMessage: "Registrati!!",
            titleClass: "text-primary display-1 fw-bold",
            userData: " ",
            firstName: "",
            lastName: "",
            email: "",
            container: "bg-light",
            responseClass: "text-succes display-6 ",
            image: 'https://picsum.photos/900/?random=1',
        };
    },
    methods: {
        registrazione: function () {
            this.startMessage = "Congratulazioni " + this.firstName + " " + this.lastName + " ti sei registrato!";
            this.userData = "I dati ineriti sono:"+  this.firstName + ", " + this.lastName + ", " + this.email;
            this.titleClass= "text-primary display-3 text-success";
            this.image ='https://static.vecteezy.com/system/resources/previews/022/935/684/non_2x/confetti-for-the-carnival-background-multicolor-party-ribbon-and-confetti-falling-colorful-confetti-isolated-on-a-transparent-background-festival-elements-birthday-party-celebration-free-png.png';
            this.container = "bg-dark";
        },
    },
});

console.log(app);
app.mount("#app");

