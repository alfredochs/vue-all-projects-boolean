<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/boolflix">Boolflix</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dischi">Dischi</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/slider">Slider</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/playstation">Playstation</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/pokedex">Pokedex</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
