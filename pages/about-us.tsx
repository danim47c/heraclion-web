import Layout from "components/layout"
import client from "lib/client"
import { hostname } from "os"
import { FC } from "react"

interface AboutUsPageProps {
  about: any
}

const AboutUsPage: FC<AboutUsPageProps> = ({ about }) => {
  return (
    <Layout className="flex items-center justify-center">
      <div className="max-w-screen-sm">
        <p className="px-12 text-lg text-justify text-custom-primary">
          {about.about.aboutUs}
        </p>
      </div>
    </Layout>
  )
}

const GraphQLQuery = `
  query {
    about {
      aboutUs
    }
  }
`

export const getStaticProps = async () => {
  const about = await client.request(GraphQLQuery)

  return {
    revalidate: 1,
    props: {
      about,
    },
  }
}

export default AboutUsPage
