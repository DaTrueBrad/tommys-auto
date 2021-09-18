import React from 'react'
import CreateCard from './CreateCard'
import Header from './Header'


function Home() {
  return (
    <div>
      <Header />
      <main>
        <content>
          <h1>Welcome to Tommy's Auto!</h1>
          <p>We are located in Springville, UT, and serve many customers lcoally and across the nation! We specialize in rebuilt/restored titles of the best quality. Having over 100 years of experience, Tommy's auto has the best team to build a vehicle just for you!</p>
          <p>Below are some fo the vehicles we curently offer! Some vehicles may alraedy have a deposit, but if there is a specific type of truck you are interested in, give us a call anyway! We may just have one coming up on the auction, and it could be yours!</p>
          <section id="card-holder">
          <CreateCard /> 
          </section>
        </content>
      </main>
    </div>
  )
}

export default Home
