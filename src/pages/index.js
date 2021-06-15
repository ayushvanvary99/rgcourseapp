import * as React from "react"
import { graphql} from 'gatsby'


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Coursecart from "../components/Cart/Coursecart"
import Bundlecart from "../components/Bundle/Bundlecart"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
    title="I write Code"
    subtitle="Learn Code Online"
    heroclass="hero-background"
    />
    <Infoblock heading="About Us"
      link="/about"/>
    <Coursecart courses={data.courses}/>
    <Bundlecart mybundles={data.mybundles}/>
    <Dualinfoblock heading="Our Team"
  
    img="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
    </Layout>
)

export const query = graphql`
{
 img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid 
      {
        ...GatsbyImageSharpFluid_tracedSVG
      }
      
    }
  }

courses:allContentfulCourses{
  edges{
    node{
      id
      title
      price
      category
      description{
        description
      }
      image{
         fixed(width:200, height:120){
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
}

mybundles:allContentfulBundles{
  edges{
    node{
      id
      title
      price
      image{
         fixed(width:200, height:120){
          ...GatsbyContentfulFixed_tracedSVG
        }
      }
    }
  }
}
}
`

export default IndexPage
