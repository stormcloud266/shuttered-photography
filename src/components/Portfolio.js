import React from 'react'

const Portfolio = () => (
  <div className="Portfolio wrapper" id="portfolio">
    <p className="Portfolio__title">Portfolio</p>
    <div className="divider"></div>
    <div className="Portfolio__grid">
      <div>
        <img src="https://images.unsplash.com/photo-1507142971731-a48b3889cadd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7f37098d1df76610ac97bb06248c156&auto=format&fit=crop&w=1350&q=80" alt="" className="Portfolio__img one"/>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-0.3.5&s=1d4011177a78377e86a79865dddacf8b&auto=format&fit=crop&w=1350&q=80" alt="" className="Portfolio__img"/>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09e577ba2b6666f4400b99e284d31d37&auto=format&fit=crop&w=700&q=80" alt="" className="Portfolio__img"/>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1472733086270-7936ee56d1f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0f97b4f62446ec31fb286b4b01333ba&auto=format&fit=crop&w=1050&q=80" alt="" className="Portfolio__img"/>
      </div>
    </div>
  </div>
)

export default Portfolio;
