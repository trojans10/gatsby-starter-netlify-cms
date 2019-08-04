import React from 'react'
import PropTypes from 'prop-types'
import { LoanPostTemplate } from '../../templates/loan-post'

const LoanPostPreview = ({ entry, widgetFor }) => (
  <LoanPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

LoanPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LoanPostPreview
