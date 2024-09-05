import svgSupervisor from '/images/icon-supervisor.svg'
import svgBuilder from '/images/icon-team-builder.svg'
import svgKarma from '/images/icon-karma.svg'
import svgCalculator from '/images/icon-calculator.svg'

import Grid from './ui/Grid'
import Card from './ui/Card'

function App() {
  return (
    <section className='page'>
      <div className='page__main'>
        <h1 className='page__main__title'>Reliable, efficient delivery</h1>
        <h2 className='page__main__subtitle'>Powered by Technology</h2>
        <p className='page__main__description'>
          Our Artificial Intelligence powered tools use millions of project data points 
          to ensure that your project is successful
        </p>
      </div>

      <Grid>
        <Card 
          color="cyan"
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          img={svgSupervisor}
        />
        <Card 
          color="red"
          title="Team Builder"
          description="Scans our talent network to create the optimal team for your project"
          img={svgBuilder}
        />
        <Card 
          color="orange"
          title="Karma"
          description="Regularly evaluates our talent to ensure quality"
          img={svgKarma}
        />
        <Card 
          color="blue"
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          img={svgCalculator}
        />
      </Grid>
    </section>
  )
}

export default App
