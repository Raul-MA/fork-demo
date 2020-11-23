import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const NewComponent = props => {
  return (
    <div>
      <h1>Este es un nuevo componente que deberias de tener</h1>
      <Typography>Este es un typography de material ui</Typography>
    </div>
  )
}

NewComponent.propTypes = {

}

export default NewComponent
