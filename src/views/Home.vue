<template>
  <div>
    <Header />

    <div class="py-3 py-lg-4">
        <div class="container">
            <div class="row">
    
                <!-- Column dropdown -->
    
                <div class="col-md-3">
                    <div class="dropdown mb-2">
    
                        <div class="btn btn-white btn-block dropdown-toggle pr-5" role="button" id="dropdownCheckboxes" data-toggle="dropdown" aria-expanded="false">
                            Checkboxes
                        </div>
    
                        <div class="dropdown-menu p-4 w-100" aria-labelledby="dropdownCheckboxes" style="">
                            <ul class="list-group list-group-clean pt-2 keep-open">
    
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheckGroup1">
                                        <label class="custom-control-label" for="customCheckGroup1">Men</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">14</span>
                                </li>
    
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheckGroup2">
                                        <label class="custom-control-label" for="customCheckGroup2">Woman</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">250</span>
                                </li>
    
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheckGroup3">
                                        <label class="custom-control-label" for="customCheckGroup3">Kid's</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">313</span>
                                </li>
    
                                <li class="list-group-item">
                                    <hr>
                                </li>
    
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheckCategory1">
                                        <label class="custom-control-label" for="customCheckCategory1">Clothing</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">150</span>
                                </li>
    
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheckCategory2">
                                        <label class="custom-control-label" for="customCheckCategory2">Shoes</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">184</span>
                                </li>
    
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheckCategory3">
                                        <label class="custom-control-label" for="customCheckCategory3">Bags</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">164</span>
                                </li>
    
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheckCategory4">
                                        <label class="custom-control-label" for="customCheckCategory4">Accessories</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">212</span>
                                </li>
    
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheckCategory5">
                                        <label class="custom-control-label" for="customCheckCategory5">Collection</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">50</span>
                                </li>
    
                            </ul>
    
                            <div class="pt-2">
                                <div class="btn btn-primary btn-sm btn-block">Update filters</div>
                            </div>
    
                        </div>
                    </div>
                </div>
    
                <!-- Column dropdown -->
    
                <div class="col-md-3">
                    <div class="dropdown mb-2">
    
                        <div class="btn btn-white btn-block dropdown-toggle pr-5" role="button" id="dropdownRadiobuttons" data-toggle="dropdown" aria-expanded="false">
                            Radio buttons
                        </div>
    
                        <div class="dropdown-menu p-4 w-100" aria-labelledby="dropdownRadiobuttons" style="">
                            <ul class="list-group list-group-clean pt-2 keep-open">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-radio">
                                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                                        <label class="custom-control-label" for="customRadio1">In stock</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">1250</span>
                                </li>
    
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-radio">
                                        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                                        <label class="custom-control-label" for="customRadio2">Upcomming</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">245</span>
                                </li>
    
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="custom-control custom-radio">
                                        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                                        <label class="custom-control-label" for="customRadio3">Presale</label>
                                    </span>
                                    <span class="badge badge-light badge-pill">86</span>
                                </li>
    
                            </ul>
    
                            <div class="pt-2">
                                <div class="btn btn-primary btn-sm btn-block">Update filters</div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <!-- Column dropdown -->
    
                <div class="col-md-3">
                    <div class="dropdown mb-2">
    
                        <div class="btn btn-white btn-block dropdown-toggle pr-5" role="button" id="dropdownCheckboxButtons" data-toggle="dropdown" aria-expanded="false">
                            Checkbox buttons
                        </div>
    
                        <div class="dropdown-menu p-4 w-100" aria-labelledby="dropdownCheckboxButtons" style="">
                            <div class="keep-open d-flex justify-content-between">
    
                                <span class="btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-outline-primary btn-sm active">
                                        <input type="checkbox" checked=""> S
                                    </label>
                                </span>
    
                                <span class="btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-outline-primary btn-sm">
                                        <input type="checkbox"> M
                                    </label>
                                </span>
    
                                <span class="btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-outline-primary btn-sm">
                                        <input type="checkbox"> L
                                    </label>
                                </span>
    
                                <span class="btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-outline-primary btn-sm">
                                        <input type="checkbox"> XL
                                    </label>
                                </span>
    
                                <span class="btn-group-toggle" data-toggle="buttons">
                                    <label class="btn btn-outline-primary btn-sm">
                                        <input type="checkbox"> XXL
                                    </label>
                                </span>
                            </div>
                            <div class="pt-2">
                                <div class="btn btn-primary btn-sm btn-block">Update filters</div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <!-- Column dropdown -->
    
                <div class="col-md-3">
                    <div class="dropdown mb-2">
    
                        <div class="btn btn-white btn-block dropdown-toggle pr-5" role="button" id="dropdownSliderRange" data-toggle="dropdown" aria-expanded="false">
                            Slider range
                        </div>
    
                        <div class="dropdown-menu p-4 w-100" aria-labelledby="dropdownSliderRange">
                            <div class="keep-open">
                                <label for="customRange1">Price</label>
                                <input type="range" class="custom-range" id="customRange1" min="0" max="5" step="0.5">
                            </div>
                            <div class="pt-2">
                                <div class="btn btn-primary btn-sm btn-block">Update filters</div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    
    </div>

    <section class="pt-0">
        <div class="container">
            <div class="row gutters-mobile">

                <div class="col-6 col-xl-3">
                    <div class="card card-fill border-0 mb-2 mb-lg-4 shadow-sm">
                        <div class="card-body pb-0 text-center">
                            <h2 class="card-title mb-2 h4">
                                <a href="products-grid.html" class="text-dark">Coretta</a>
                            </h2>
                        </div>
                        <div class="card-image">
                            <a href="products-grid.html" class="d-inline-block">
                                <img src="assets/images//demo/product-1.png" class="card-img-top" alt="Product image">
                            </a>
                        </div>
                        <div class="card-footer text-center pb-5">
                            <small class="text-muted">314 Products</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'

export default {
  name: 'Home',
  components: {
    Header,Banner
  }
}
</script>
