import React from 'react';
import { Fade } from 'react-reveal';

const Blog = () => {
    return (
        <div>
            <div>
                <h2 className="text-2xl text-black mt-6">Featured Blogs</h2>
            </div>
            <div class="accordion w-3/4 mx-auto mt-16 mb-16" id="accordionExample">
                <div class="accordion-item bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="headingOne">
                        <button class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            What is eCommerce logistics?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <Fade right>
                        <div class="accordion-body py-4 px-5">
                            Ecommerce logistics spans everything that happens from the moment your customers click “buy” to the moment they receive their orders —plus when buyers decide to return their
                            items.
                            Below are five major components of the eCommerce logistics web, each of which has its own unique tasks and challenges.
                        </div>
                        </Fade>
                    </div>
                </div>
                <div class="accordion-item bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="headingTwo">
                        <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            Inventory management
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <Fade right>
                            <div class="accordion-body py-4 px-5">
                                Inventory management refers to managing and tracking stock levels, with the goal of having the right products in the right place at the right time. It requires proper demand forecasting—which gets trickier with every new sales channel, audience, and product you add—so that you don’t oversell or undersell. Sellers today also have the added pressure of displaying in-stock statuses directly on their site for customers to see, so you’ll need a system for accurately tracking inventory across all of your channels (including physical locations).
                            </div>
                        </Fade>
                    </div>
                </div>
                <div class="accordion-item bg-white border border-gray-200">
                    <h2 class="accordion-header mb-0" id="headingThree">
                        <button class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            Destination
                        </button>
                    </h2>

                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <Fade right>
                            <div class="accordion-body py-4 px-5">
                                Instead of delivering a truckload or pallet of items to a few retail locations, you’re responsible for coordinating the delivery of multiple (smaller) parcels to billions of potential addresses worldwide
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;