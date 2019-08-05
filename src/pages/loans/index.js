import React from 'react'

import Layout from '../../components/Layout'
import LoanRoll from '../../components/LoanRoll'
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const linky = <FontAwesomeIcon icon={faAngleDoubleRight} />


export default class LoansIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="is-warning">
        </div>
          <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            Student Loans
          </h1>
          </div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <h1 className="title">
                  <strong>Student Loans 101</strong>
                </h1>
                <h3 className="subtitle">
                  Our team of analysts is continually writing and researching answers to questions students and parents have when it comes to their loans. Here is a collection of some of the most in-demand resources on the subject.
                </h3>
              </div>
              <div className="column is-4">
                  <div className="column">{linky} How Do Student Loans Work?</div>
                <div className="column">{linky} How Do Student Loans Work?</div>
                <div className="column">{linky} How Do Student Loans Work?</div>
                <div className="column">{linky} How Do Student Loans Work?</div>
                </div>
              <div className="column is-4">
                <div className="column">{linky} How Do Student Loans Work?</div>
                <div className="column">{linky} How Do Student Loans Work?</div>
                <div className="column">{linky} How Do Student Loans Work?</div>
                <div className="column">{linky} How Do Student Loans Work?</div>
              </div>
            </div>
          </div>
        </section>
        <div className="is-divider" data-content="OR"></div>
        <section className="section">
          <div className="container has-text-centered">
            <h2 className="title">Student Loan Lender Reviews</h2>
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <img className="lender-image lender-image-small"
                       src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                       alt="Earnest Student Loan Refinance"></img>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <img className="lender-image lender-image-small"
                       src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                       alt="Earnest Student Loan Refinance"></img>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <img className="lender-image lender-image-small"
                       src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                       alt="Earnest Student Loan Refinance"></img>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <img className="lender-image lender-image-small"
                       src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                       alt="Earnest Student Loan Refinance"></img>
                </article>
              </div>
            </div>

            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <img className="lender-image lender-image-small"
                       src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                       alt="Earnest Student Loan Refinance"></img>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                    <img className="lender-image lender-image-small"
                         src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                         alt="Earnest Student Loan Refinance"></img>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <img className="lender-image lender-image-small"
                       src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                       alt="Earnest Student Loan Refinance"></img>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <img className="lender-image lender-image-small"
                       src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                       alt="Earnest Student Loan Refinance"></img>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
                <h1 className="title has-text-centered">Latest Student Loan Articles</h1>
              <LoanRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
