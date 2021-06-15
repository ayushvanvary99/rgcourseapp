import React, { Component } from 'react'
import Heading from '../Reusable/Heading'
import Img from "gatsby-image"

const getCaty = items =>{
let holdItems= items.map(items=>{
    return items.node.category
})
let holdCategories = new Set(holdItems)
let categories = Array.from(holdCategories)
categories = ["all", ...categories]
return categories
}



export default class Courses extends Component {
    constructor(props) {
        super(props)
        this.state={
            courses:props.courses.edges,
            mycourses:props.courses.edges,
            mycategories: getCaty(props.courses.edges)
        }
    }

    catyClicked = category => {
        let keepitsafe =[...this.state.courses]

        if(category==='all'){
            this.setState(()=>{
            return { mycourses: keepitsafe}
            })
        }
        else {
            let holdme = keepitsafe.filter(({node})=>node.category=== category)
            this.setState(()=>{
                return {mycourses: holdme}
            })
        }
    }

    render() {
        return (
            <section className="  py-5">
                <Heading title="Courses"/>
                <div className="row my-3">
                    <div className="col-10 mx-auto text-center">
                        {this.state.mycategories.map((category, index)=>{
                          return(
                              <button
                              type="button"
                              className="btn btn-warning m-3 px-3"
                              key={index}
                              onClick={()=>{
                                  this.catyClicked(category)
                              }}
                              >
                              {category}
                              </button>
                          )
                        })

                        }
                    </div>
                </div>
               <div className="container  bg-theme2">
                   
                   <div className="row">
                      {this.state.mycourses.map(({node})=>{
                        return(
                            <div
                                key={node.id}
                                className="col-11 col-md-6 d-flex my-3 mx-auto"
                            >
                                <Img fixed={node.image.fixed}/>
                                <div className="flex-grow-1 px-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-0">{node.title}</h6>
                                        <h6 className="mb-0 text-success">$ {node.price}</h6>
                                    </div>
                                    <p className="text-muted">
                                        <small>{node.description.description}</small>
                                        
                                    </p>
                                    <button 
                                     data-item-id={node.id}
                                     data-item-name={node.title}
                                     data-item-price={node.price}
                                     data-item-url="https://ecommproject.netlify.app/"
                                     data-item-image={node.image.fixed.src}
                                    className="btn btn-warning snipcart-add-item">Join Now</button>
                                </div>
                            </div>
                        )
                      })

                      } 
                   </div>
               </div>
            </section>
        )
    }
}
