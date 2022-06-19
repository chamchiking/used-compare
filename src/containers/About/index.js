import React from 'react';
import {Container} from "react-bootstrap";

export default function About() {
  return (
    <>
    <Container>
      <div id='about-first' class="d-flex align-items-start mt-5 mb-3">
        <div class="d-grid gap-3">
            <div  class="p-3 mb-2 bg-secondary text-white">
                <p className="fs-1">Save Your Money and Time!</p>
            </div>

            <div  class="p-3 mb-2 bg-light text-dark">
            <p class="fs-3">Sick of hopping around here and there? Find everything you need here at once.</p>
            </div>

            <div  class="p-3 mb-2 bg-light text-dark">
                <p className="fs-3">Don't compromise your time and money! They do matter. </p>
            </div>

            <div className="p-3 mb-2 bg-light text-dark">
                <p className="fs-3">Just start here with us. We've got your back. </p>
            </div>


        </div>
         <img id='about-first-img' src={require('./used-clothes.jpg')} width="500" height="500"/>

      </div>
    </Container>

    <Container>
      <div id='about-second' class="d-flex align-items-start mt-5 mb-3" >
        <img id='about-second-img' src={require('./earth.jpg')} width="500" height="500" />

        <div class="d-grid gap-3">
             <div class="p-3 mb-2 bg-secondary text-white">
                 <p className="fs-1">Save The Mother Earth!</p>
             </div>

             <div class="p-3 mb-2 bg-light text-dark">
                 <p className="fs-3">Why buy new goods when you can purchase used ones at better price?
                 </p>
             </div>

             <div class="p-3 mb-2 bg-light text-dark">
                 <p className="fs-3">Don't know where to start? Here we are to help you choose better.</p>
             </div>

             <div class="p-3 mb-2 bg-light text-dark">
                 <p className="fs-3">The more you shop smart, the less we harm the planet. </p>
             </div>


        </div>
      </div>
    </Container>
    </>
  );
}