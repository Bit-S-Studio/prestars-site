import AboutPage from './about/page'
import ForAthletesPage from './athletes/page'
import ForTeamsPage from './teams/page'
export default function Home() {
  return (
    <>
      <ForAthletesPage />
      <ForTeamsPage />
      <AboutPage />
    </>
  )
}