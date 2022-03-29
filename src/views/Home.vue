<template>
  <div class="container h-100 p-5 my-container mt-5">
    <div class="row">
      <div class="col-12 col-lg-6 m-md-auto">
        <!-- Text Container -->
        <div class="container d-flex flex-column p-0 align-items-baseline">
          <span class="d-block">Ciao, sono</span>
          <span class="my-name text-start">Alfredo Chanta Solis</span>
          <span class="text-start pb-3">
            Sono un Full Stack Developer attualmente in Italia, di origini
            Peruviane. <br />
            Mi considero un fan dei Videogiochi, calcio e sopratutto della
            tecnologia in generale. Ho una passione per la gestione dei dati e
            per la creazione di esperienze minimaliste, intuitive e dinamiche.
            Per me l'organizzazione e la semplicità sono punti fondamentali per
            poter lavorare e sopratutto mantenere e/o migliorare l'esperienza di
            utilizzo.<br />
            Interessato a lavorare con persone appassionate come me, con le
            quali possa imparare nuove tecniche, tecnologie ed esperienze nuove
            in diversi progetti,e anche ad insegnare quello che il mio percorso
            mi ha permesso di imparare. <br />
            <span class="fw-bold">
              Per me una cosa è fondamentale in questo settore e nella vita, non
              dobbiamo mai smettere di imparare per poter migliorare ogni
              singolo giorno.</span
            >
          </span>
        </div>
        <div class="">
          <h6 class="text-start">Find me on:</h6>
          <div class="d-flex gap-3">
            <a
              :href="link.url"
              target="_blank"
              v-for="(link, i) in iconList"
              :key="i"
            >
              <i
                class="text-start text-dark"
                :class="link.icon"
                style="font-size: 40px"
              ></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 mt-5 m-md-auto">
        <img src="../../src/assets/images/cv-photo-2.jpg" alt="" class="w-50" />
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: "HelloWorld",
    data() {
      return {
        iconList: [
          {
            name: "Linkedin",
            icon: "fa-brands fa-linkedin",
            url: "https://www.linkedin.com/in/alfredo-chanta-solis"
          },
          {
            name: "GitHub",
            icon: "fa-brands fa-github-square",
            url: "https://github.com/alfredochs"
          },
          {
            name: "Instagram",
            icon: "fa-brands fa-instagram",
            url: "https://www.instagram.com/alfredochs"
          }
        ]
      };
    },
    props: {
      msg: String
    }
  };
</script>
<style scoped lang="scss">
  .my-name {
    font-size: 40px;
    color: red;
    display: flex;
    flex-wrap: wrap;
  }
  .my-container{
    background-color: #f5f5f5;}
</style>
