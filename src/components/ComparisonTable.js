import React from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FiveStar = <div>
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
</div>;

export default function SimpleTable() {

  return (
    <div className="container">
        <h1>Which companies refinance student loans?</h1>
  <div className="panel">
      <div className="panel-block">
        <div className="pricing">

    <div className="table__wrapper">

    <table className="table"

       style={{
         fontSize: '28px',
         textAlign: 'center',
       }}>
  <thead>
  <tr>
    <th>Lender</th>
    <th>Fixed APR</th>
    <th>Variable APR</th>
    <th>Review</th>
    <th></th>
  </tr>
  </thead>
  <tbody>
  <tr className="LenderTable">
    <td>      <div>
      <a id="edu-5-logo-2"
         href="https://www.nerdwallet.com/investing/network-links/337?header_pageViewId=81148bb8-e672-44cf-8f78-a430e1f60cb0&amp;clickHeader_category=EDU%20top%20offers&amp;clickHeader_productId=edu-5&amp;clickHeader_productSlug=earnest&amp;clickHeader_linkType=logo&amp;clickHeader_productInstance=react-landing-top-template&amp;clickHeader_productLocation=refinance&amp;clickHeader_productPosition=1&amp;clickHeader_impressionId=9549f41e-abf4-49d6-97d0-aa672195814e&amp;pos=1"
         role="button" target="_blank"><img className="lender-image lender-image-small"
                                            src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                                            alt="Earnest Student Loan Refinance"></img></a>
    </div>
    </td>
    <td>
 8
    </td>
    <td>99</td>
    <td>{FiveStar}</td>
    <td><a className="button is-link">Check Rates</a></td>
  </tr>
  <tr className="LenderTable">
    <td>      <div>
      <a id="edu-5-logo-2"
         href="https://www.nerdwallet.com/investing/network-links/337?header_pageViewId=81148bb8-e672-44cf-8f78-a430e1f60cb0&amp;clickHeader_category=EDU%20top%20offers&amp;clickHeader_productId=edu-5&amp;clickHeader_productSlug=earnest&amp;clickHeader_linkType=logo&amp;clickHeader_productInstance=react-landing-top-template&amp;clickHeader_productLocation=refinance&amp;clickHeader_productPosition=1&amp;clickHeader_impressionId=9549f41e-abf4-49d6-97d0-aa672195814e&amp;pos=1"
         role="button" target="_blank"><img className="lender-image lender-image-small"
                                            src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                                            alt="Earnest Student Loan Refinance"></img></a>
    </div></td>
    <td>89</td>
    <td>20</td>
    <td>{FiveStar}</td>
    <td><a className="button is-link">Check Rates</a></td>
  </tr>
  <tr className="LenderTable">
    <td>      <div>
      <a id="edu-5-logo-2"
         href="https://www.nerdwallet.com/investing/network-links/337?header_pageViewId=81148bb8-e672-44cf-8f78-a430e1f60cb0&amp;clickHeader_category=EDU%20top%20offers&amp;clickHeader_productId=edu-5&amp;clickHeader_productSlug=earnest&amp;clickHeader_linkType=logo&amp;clickHeader_productInstance=react-landing-top-template&amp;clickHeader_productLocation=refinance&amp;clickHeader_productPosition=1&amp;clickHeader_impressionId=9549f41e-abf4-49d6-97d0-aa672195814e&amp;pos=1"
         role="button" target="_blank"><img className="lender-image lender-image-small"
                                            src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                                            alt="Earnest Student Loan Refinance"></img></a>
    </div></td>
    <td>38</td>
    <td>19</td>
    <td>{FiveStar}</td>
    <td><a className="button is-link">Check Rates</a></td>
  </tr>
  <tr className="LenderTable">
    <td>      <div>
      <a id="edu-5-logo-2"
         href="https://www.nerdwallet.com/investing/network-links/337?header_pageViewId=81148bb8-e672-44cf-8f78-a430e1f60cb0&amp;clickHeader_category=EDU%20top%20offers&amp;clickHeader_productId=edu-5&amp;clickHeader_productSlug=earnest&amp;clickHeader_linkType=logo&amp;clickHeader_productInstance=react-landing-top-template&amp;clickHeader_productLocation=refinance&amp;clickHeader_productPosition=1&amp;clickHeader_impressionId=9549f41e-abf4-49d6-97d0-aa672195814e&amp;pos=1"
         role="button" target="_blank"><img className="lender-image lender-image-small"
                                            src="https://www.nerdwallet.com/cdn/img/Loans/EarnestLogo.svg"
                                            alt="Earnest Student Loan Refinance"></img></a>
    </div>
    </td>
    <td>38</td>
    <td>19</td>
    <td>{FiveStar}</td>
    <td><a className="button is-link">Check Rates</a></td>
  </tr>
  </tbody>
</table>
    </div>
        </div>
      </div>
    </div>
    </div>
  );
}