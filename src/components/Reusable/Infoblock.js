import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"
export default function Infoblock({ heading,link }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading tittle={heading} />
        <div className="row">
          <div className=".col-10 colm-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eum veniam quod in esse quis consequatur laboriosam
              vitae quisquam sequi vel animi ut reiciendis architecto, doloribus
              eos facilis suscipit iusto.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur eum veniam quod in esse quis consequatur laboriosam
              vitae quisquam sequi vel animi ut reiciendis architecto, doloribus
              eos facilis suscipit iusto.
            </p>
            <Link to={link}>
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
