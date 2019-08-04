import React from 'react'

import Layout from '../../components/Layout'
import LoanRoll from '../../components/LoanRoll'

export default class LoansIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #4675c3, -0.5rem 0 0 #4675c3',
              backgroundColor: '#c33b10',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <LoanRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
