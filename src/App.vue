<template>
  <div id="app">
    <nav class="navbar navbar-sticky fixed-top navbar-expand-lg py-2">
      <div class="container">
        <a class="navbar-brand text-dark" href="#">
          <i class="icon icon-layers"></i>
          <strong>Reveal</strong>
        </a>

        <div class="d-flex d-lg-none">
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a
                href="#"
                class="d-flex nav-link toggle-show"
                data-show="cartComponent"
              >
                <div class="px-2 py-1">Cart <sup>3</sup></div>
              </a>
            </li>
            <li class="nav-item">
              <a
                href="#"
                class="d-flex nav-link toggle-show"
                data-show="searchComponent"
              >
                <div class="px-2 py-1">
                  <span class="icon icon-magnifier"></span>
                </div>
              </a>
            </li>
          </ul>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mainNavbar"
            aria-controls="furnitureNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon icon-menu"></span>
          </button>
        </div>

        <!-- Navbar collapse -->

        <div
          class="navbar-collapse collapse navbar-collapse-sidebar"
          id="mainNavbar"
        >
          <!-- Mobile search -->

          <div class="d-block d-lg-none">
            <div class="p-3">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <i class="icon icon-layers"></i>
                  <strong>Reveal</strong>
                </div>
                <button
                  class="btn p-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#mainNavbar"
                  aria-controls="mainNavbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="icon icon-cross font-size-lg"></span>
                </button>
              </div>
            </div>
            <div class="bg-light">
              <div class="form-group form-group-icon">
                <input
                  type="text"
                  class="form-control form-control-simple"
                  placeholder="Search site"
                />
                <button class="btn btn-clean">
                  <i class="icon icon-magnifier"></i>
                </button>
              </div>
            </div>
          </div>

          <ul class="navbar-nav ml-auto align-items-lg-center">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item px-lg-3">
              <a class="nav-link" href="#">Man's</a>
            </li>
            <li class="nav-item px-lg-3">
              <a class="nav-link" href="#">Woman's</a>
            </li>
            <li class="nav-item px-lg-3">
              <a class="nav-link" href="#">Kid's</a>
            </li>
            <li class="nav-item d-none d-lg-inline ml-lg-5">
              <a
                href="#"
                class="nav-link toggle-show"
                data-show="loginComponent"
              >
                <span class="icon icon-user"></span>
              </a>
            </li>
            <li class="nav-item d-none d-lg-inline">
              <a
                href="#"
                class="nav-link toggle-show d-flex"
                data-show="cartComponent"
              >
                <div class="px-2 py-1">
                  <span class="icon icon-cart"></span>
                  <sup>3</sup>
                </div>
              </a>
            </li>
            <li class="nav-item d-none d-lg-inline">
              <a
                href="#"
                class="nav-link toggle-show"
                data-show="searchComponent"
              >
                <span class="icon icon-magnifier"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div>
    <router-view />
    </div>



    <footer class="bg-white">
      <div class="container text-center">
        <div>
          <p><i class="icon icon-layer display-4"></i></p>
          <ul
            class="list-group list-group-horizontal list-group-clean justify-content-center"
          >
            <li class="list-group-item pr-3"><a href="#">Our store</a></li>
            <li class="list-group-item pr-3"><a href="#">Shop</a></li>
            <li class="list-group-item pr-3"><a href="#">Categories</a></li>
            <li class="list-group-item pr-3"><a href="#">Info</a></li>
            <li class="list-group-item pr-3"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="wow fadeIn" data-wow-delay=".8s">
          <p class="text-muted">
            <small>All rights reserved 2020 © Reveal</small>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
