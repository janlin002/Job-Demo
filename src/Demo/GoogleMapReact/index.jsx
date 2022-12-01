import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'

// 標記點
const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
)

const Index = () => {
  // 預設位置
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    </div>
  )

}

export default Index

AnyReactComponent.propTypes = {
  text: PropTypes.instanceOf(Object).isRequired,
}
