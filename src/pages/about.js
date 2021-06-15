import * as React from "react"
import { graphql} from 'gatsby'


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="About Learn Code Online"
    subtitle=""
    heroclass="about-background"
    />
     <Dualinfoblock heading="Message From CEO"
    img="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    <Infoblock heading="Our Vision"
    link="/about"/>
    <Teamphotosection/>
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

export default AboutPage
