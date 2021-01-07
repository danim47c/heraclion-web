import Layout from "components/layout"
import client from "lib/client"
import { FC } from "react"

interface TeamPageProps {
  team: any
}

const TeamPage: FC<TeamPageProps> = ({ team }) => {
  return (
    <Layout className="grid max-w-screen-md grid-cols-1 gap-8 py-8 place-items-center sm:grid-cols-2 md:grid-cols-4 h-96">
      {team.allTeams.map((member) => (
        <div
          className="flex flex-col items-center justify-center gap-y-2 "
          key={member.id}
        >
          <img
            className="object-cover w-32 h-32 rounded-full"
            src={member.avatar.url}
          />

          <h4 className="text-xl font-semibold text-custom-primary">
            {member.name}
          </h4>
        </div>
      ))}
    </Layout>
  )
}

const GraphQLQuery = `
  query {
    allTeams {
      id
      name
      avatar {
        url
      }
    }
  }
`

export const getStaticProps = async () => {
  const team = await client.request(GraphQLQuery)

  return {
    revalidate: 1,
    props: {
      team,
    },
  }
}

export default TeamPage
