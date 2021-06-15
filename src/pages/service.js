import * as React from "react"
import { graphql} from 'gatsby'


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"


const ServicePage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="Our Services"
    subtitle=""
    heroclass="about-background"
    />
    <Infoblock heading="24x7 Help Support"
    link="/contact"/>
      <Dualinfoblock heading="Quality Courses on Latest Technology"
    img="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    

  </Layout>
)

export const query = graphql`
{
 img: file(relativePath: { eq: "about.png" }) {
    childImageSharp {
      fluid 
      {
        ...GatsbyImageSharpFluid_tracedSVG
      }
      
    }
  }
}
`

export default ServicePage