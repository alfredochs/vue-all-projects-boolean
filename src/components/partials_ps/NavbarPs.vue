<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-0">
    <div class="container-fluid">
        <img
          src="../../assets/img-ps/play_logo.svg"
          class="navbar-brand"
          href="#"
        />
      <!-- hamburger menu -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarNavDropdown"
      >
<div class="d-flex justify-content-between flex-grow-1">
        <div class="d-flex align-items-center">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hardware</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Servizi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Novità</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Fai Acquisti</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Supporto
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="px-3">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My PlayStation
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <button class="btn btn-dark text-white rounded-pill">
                Accedi
              </button>
            </li>
            <li class="nav-item d-flex ps-2 align-items-center">
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarPlaystation",
  data() {
    return {};
  },
  /**
   *TODO Sistemare ordine del hamburger menu
   */
};
</script>

<style></style>
