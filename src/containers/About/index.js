import React from 'react';
import {Container} from "react-bootstrap";

export default function About() {
  return (
    <>
    <Container>
      <div class="my-5 py-5 fs-1">New & SecondHands</div>
      <div id='about-first' class="d-flex align-items-start mt-5 mb-3 mx-5">
        <div class="d-grid gap-3 text-start" >
            <div  class="p-3 mb-2 bg-secondary text-white text-center">
                <p className="fs-2">Save Your Money and Time!</p>
            </div>

            <div  class="p-3 mb-2 bg-light text-dark">
            <p class="fs-4">Sick of hopping around here and there? Find everything you need here at once. Our service provides convenience that we have never experienced before.</p>
            </div>

            <div  class="p-3 mb-2 bg-light text-dark">
                <p className="fs-4">Don't compromise your time and money! They do matter. </p>
            </div>

            <div className="p-3 mb-2 bg-light text-dark">
                <p className="fs-4">Just start here with us. We've got your back. You can find the best product just by searching once.</p>
            </div>


        </div>
         <img id='about-first-img' src={require('./used-clothes.jpg')} width="500" height="500"/>

      </div>
    </Container>

    <Container>
      <div id='about-second' class="d-flex align-items-start mt-5 mb-3  mx-5" >
        <img id='about-second-img' src={require('./earth.jpg')} width="500" height="500" />

        <div class="d-grid gap-3 text-start">
             <div class="p-3 mb-2 bg-secondary text-white text-center">
                 <p className="fs-2">Save The Mother Earth!</p>
             </div>

             <div class="p-3 mb-2 bg-light text-dark">
                 <p className="fs-4">Why buy new goods when you can purchase used ones at better price?
                 </p>
             </div>

             <div class="p-3 mb-2 bg-light text-dark">
                 <p className="fs-4">Don't know where to start? Here we are to help you choose better.</p>
             </div>

             <div class="p-3 mb-2 bg-light text-dark">
                 <p className="fs-4">The more you shop smart, the less we harm the planet. Don't miss a choice that's only good points. </p>
             </div>


        </div>
      </div>
    </Container>
    </>
  );
}