import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Dualinfoblock({heading,img}) {
  return (
    <section className="my-4 py-5 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
          <p className="lead text-white mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            expedita voluptates est esse! Nobis cupiditate harum ipsam molestiae
            tempora, ullam laboriosam expedita minima eos ipsa, ratione odit
            asperiores quisquam dolore, ea consequatur iste placeat iure.
            Sapiente exercitationem qui dolor, itaque unde quod neque voluptate
            facere, labore soluta provident fuga reprehenderit temporibus sit
            distinctio numquam voluptas excepturi! Qui sed placeat consequatur
            nihil, nulla sequi maxime fugit culpa quia explicabo, omnis
            dignissimos, voluptatem odit debitis? Temporibus inventore vero
            libero quisquam numquam voluptas necessitatibus atque quod illo
            placeat.Provident corrupti temporibus eum, quis incidunt voluptates
            velit, hic at quibusdam enim nemo dolorum reiciendis.
          </p>
          </div>
          <div className="col-4">
            <div class="card bg-dark">
              <img  src={img} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title text-success">Just Click Photos</h5>
                <p class="card-text text-white" >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                  vero modi nisi animi iusto! Quos fuga, obcaecati neque
                  exercitationem suscipit quod beatae, delectus, debitis ullam
                  magni labore eos incidunt maiores?
                </p>
                   <Link to="/about">
                       <button className="btn btn-warning btn-block">{heading}</button>
                   </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  )
}
