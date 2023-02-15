const app = Vue.createApp({
  data() {
    return {
      isDisabled: false, //BSA
      number: 0,
      text: "Hoş Geldiniz!",
      imgLink: "",
    };
  },

  methods: {
    handleClick() {
      //BSA BUTTON
      this.isDisabled = true;
      setTimeout(() => {
        this.isDisabled = false;
      }, 2000);
    },
    saveSaru() {
      //button
      var cantSave = new Audio("audio/cantSave.mp3");
      cantSave.play();
      this.text = "SARU KURTARILAMAZ";
    },
    restart() {
      //restartbutton
      this.number = this.number - this.number;
      this.text = "";
      this.imgLink = "";
    },
    doSaru() {
      //DoSaruButton
      this.number = this.number + 1;
      //Start
      if (this.number === 01) {
        this.text = "Hoş Geldin";
        this.imgLink = "images/none.jpg";
      }
      //DURAN
      if (this.number === 02) {
        this.text = "Saru kaçışın yok!!!";
        alert("Duran lobiye katiliyor");
        var duran = new Audio("audio/duran.mp3");
        duran.play();
        setTimeout(() => {
          this.imgLink = "images/1duran.jpg";
        }, 1000);
      }
      //ENES
      if (this.number === 03) {
        this.text = "Bu adam gerçekten o mu?";
        alert("Enes lobiye katiliyor");
        var saru = new Audio("audio/saru.mp3");
        saru.play();
        setTimeout(() => {
          this.imgLink = "images/2enes.jpg";
        }, 1000);
      }
      //EREN
      if (this.number === 04) {
        this.text = "Bazen Saru için üzülüyorum";
        alert("Eren lobiye katiliyor");
        var eren = new Audio("audio/eren.mp3");
        eren.play();
        setTimeout(() => {
          this.imgLink = "images/3eren.jpg";
        }, 1000);
      }
      //OSMAN **needVpice
      if (this.number === 05) {
        this.text = "(evet gerçekten kaçmalısın)";
        alert("Osman lobiye katiliyor");
        var osman = new Audio("audio/osman.mp3");
        osman.play();
        setTimeout(() => {
          this.imgLink = "images/4osman.jpg";
        }, 1000);
      }
      //SHACO
      if (this.number === 06) {
        this.text = "Eğlenceye hazırlan!";
        alert("Shaco lobiye katiliyor");
        var shaco = new Audio("audio/shacoBass.mp3");
        shaco.play();
        setTimeout(() => {
          this.imgLink = "images/5shaco.jpg";
        }, 1000);
      }
      if (this.number === 07) {
        this.restart();
      }
    },

  },
});
app.mount("#events");

//**********************//
//                      //
//                      //
//    code              //
//        by            //
//          Enes        //
//                      //
//                      //
//********************* //


//    Thanks FOR playing
//    sorry for bass xd
