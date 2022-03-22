<template>
  <div class="container bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-2">
      <div class="d-flex align-items-center justify-items-between">
        <div>
          <a class="navbar-brand" href="#">Portfolio</a>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="row">
      <div class="col-6 bg-dark m-auto">
        <!-- Text Container -->
        <div class="container d-flex flex-column p-0 align-items-baseline">
          <span class="d-block">Ciao, sono</span>
          <span class="my-name">Alfredo</span>
          <span class="my-name">Chanta Solis</span>
          <span
            >A young UI / UX designer appasinate for web & mobile design.</span
          >
          <span>Full Stack Developer.</span>
        </div>
        <div class="">
          <ul class="list-unstyled d-flex">
            <li><font-awesome-icon icon="fa-solid fa-user-secret" /></li>
            <li>Icona 1</li>
            <li>Icona 2</li>
            <li>Icona 3</li>
            <li>Icona 4</li>
          </ul>
        </div>
      </div>
      <div class="col-6">
        <img src="../../src/assets/images/cv-photo-2.jpg" alt="" class="w-50">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String
    }
  };
</script>
<style scoped lang="scss">
  .my-name {
    font-size: 60px;
    color: red;
    display: flex;
    flex-wrap: wrap;
  }
</style>
