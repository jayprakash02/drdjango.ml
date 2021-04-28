<template>
  <section class="bg-white py-3">
    <div class="container" style="border-top-width: 100px; margin-top: 100px">
      <div class="row align-items-lg-center">
        <!-- Product gallery -->

        <div class="col-lg-7 col-xl-8 pb-5">
          <div
            class="owl-carousel owl-loaded owl-drag"
            data-items="1"
            data-nav="false"
            data-margin="15"
            data-dots="true"
          >
            <div class="owl-stage-outer">
              <div
                class="owl-stage"
                style="
                  transform: translate3d(-1490px, 0px, 0px);
                  transition: all 0s ease 0s;
                  width: 5215px;
                "
              >
                <div
                  class="owl-item cloned"
                  style="width: 730px; margin-right: 15px"
                >
                  <img
                    :src="image"
                    alt="Product image"
                  />
                </div>
                <div
                  class="owl-item cloned"
                  style="width: 730px; margin-right: 15px"
                >
                  <img
                    :src="image"
                    alt="Product image"
                  />
                </div>
                <div
                  class="owl-item active"
                  style="width: 730px; margin-right: 15px"
                >
                  <img
                    :src="image"
                    alt="Product image"
                  />
                </div>
                <div class="owl-item" style="width: 730px; margin-right: 15px">
                  <img
                    :src="image"
                    alt="Product image"
                  />
                </div>
                <div class="owl-item" style="width: 730px; margin-right: 15px">
                  <img
                    :src="image"
                    alt="Product image"
                  />
                </div>
                <div
                  class="owl-item cloned"
                  style="width: 730px; margin-right: 15px"
                >
                  <img
                    src="assets/images/demo/product-1.png"
                    alt="Product image"
                  />
                </div>
                <div
                  class="owl-item cloned"
                  style="width: 730px; margin-right: 15px"
                >
                  <img
                    src="assets/images/demo/product-1b.png"
                    alt="Product image"
                  />
                </div>
              </div>
            </div>
            <div class="owl-nav ">
              <button type="button" role="presentation" class="owl-prev">
                <span class="icon icon-chevron-left"></span></button
              ><button type="button" role="presentation" class="owl-next">
                <span class="icon icon-chevron-right"></span>
              </button>
            </div>
            <div class="owl-dots">
              <button role="button" class="owl-dot active"><span></span></button
              ><button role="button" class="owl-dot"><span></span></button
              ><button role="button" class="owl-dot"><span></span></button>
            </div>
          </div>
        </div>

        <!-- Product info -->

        <div class="col-lg-5 col-xl-4">
          <div class="bg-light shadow-sm br-sm p-3 p-lg-4">
            <!-- Product order -->

            <div class="clearfix">
              <!-- Product price -->

              <div class="h2 mb-0">
                <span>{{ price }}</span>
                <small>
                  <del>{{ price }}</del>
                </small>
              </div>

              <hr />

              <!-- Product brand -->

              <div class="row">
                <div class="col-6 col-lg-12">
                  <div class="row mb-2">
                    <div class="col-xl-4">
                      <span class="text-muted">Shipping</span>
                    </div>
                    <div class="col-xl-8">
                      <i class="icon icon-checkmark-circle"></i> Free shipping
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-12">
                  <div class="row mb-2">
                    <div class="col-xl-4">
                      <span class="text-muted">Availability</span>
                    </div>
                    <div class="col-xl-8">
                      <i class="icon icon-checkmark-circle"></i> In stock
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <!-- Product size -->

              <div class="mb-2">
                <div class="text-muted pre-label mb-2">
                  <small>Choose size</small>
                </div>
                <div class="btn-group-toggle w-100" data-toggle="buttons">
                  <label
                    class="btn btn-outline-primary btn-icon btn-icon-sm p-1 active"
                  >
                    <input
                      type="radio"
                      name="options"
                      id="size-option1"
                      checked="checked"
                    />
                    XS
                  </label>
                  <label
                    class="btn btn-outline-primary btn-icon btn-icon-sm p-1"
                  >
                    <input type="radio" name="options" id="size-option2" />
                    &nbsp;S&nbsp;
                  </label>
                  <label
                    class="btn btn-outline-primary btn-icon btn-icon-sm p-1"
                  >
                    <input type="radio" name="options" id="size-option3" />
                    &nbsp;M&nbsp;
                  </label>
                  <label
                    class="btn btn-outline-primary btn-icon btn-icon-sm p-1"
                  >
                    <input type="radio" name="options" id="size-option4" />
                    &nbsp;L&nbsp;
                  </label>
                  <label
                    class="btn btn-outline-primary btn-icon btn-icon-sm p-1"
                  >
                    <input type="radio" name="options" id="size-option5" />
                    &nbsp;XL&nbsp;
                  </label>
                  <label
                    class="btn btn-outline-primary btn-icon btn-icon-sm p-1"
                  >
                    <input type="radio" name="options" id="size-option6" />
                    XXL&nbsp;
                  </label>
                </div>
              </div>

              <hr />

              <!-- Product colors -->

              <div class="mb-2">
                <div class="text-muted pre-label mb-2">
                  <small>Avilable color</small>
                </div>
                <div class="btn-group-toggle w-100" data-toggle="buttons">
                    
                  <label class="btn btn-color my-1" v-bind="color" >
                   <input type="radio" name="options" id="color-option" />
                 
                  </label>
                </div>
              </div>

              <hr />

              <!-- Product quantity -->

              <div class="mb-2">
                <div class="row">
                  <div class="col-5">
                    <input type="number" class="form-control mr-2" value="1" />
                  </div>
                  <div class="col-7">
                    <button class="btn btn-block btn-primary">
                      <i class="icon icon-cart"></i> Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <hr />
            </div>

            <!-- Add to basket -->

            <div class="btn-group w-100">
              <span
                class="btn btn-sm btn-outline-primary"
                data-toggle="button"
                aria-pressed="false"
                autocomplete="off"
              >
                <span class="show"><i class="fa fa-heart-o"></i> Whish</span>
                <span class="hide"><i class="fa fa-heart"></i> Whislisted</span>
              </span>
              <span
                class="btn btn-sm btn-outline-primary"
                data-toggle="button"
                aria-pressed="false"
                autocomplete="off"
              >
                <span class="show"><i class="fa fa-eye-slash"></i> Watch</span>
                <span class="hide"><i class="fa fa-eye"></i> Watching</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: Number,
    category: String,
    name: String,
    rating: Number,
    image: String,
    description: String,
    available: Boolean,
    size: Array,
    condition: String,
    color: String,
    price: Number,
    keywords: Array,
    discount: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
