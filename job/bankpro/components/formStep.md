```js
import React from 'react'
import PropTypes from 'prop-types'

import IntlMessages from 'Util/IntlMessages'

const FormSteps = ({ steps, currentStep, intlId }) => {
  const isActive = (step) => (step === currentStep ? 'active' : '')
  const isDone = (index) => (index < steps.indexOf(currentStep) ? 'done' : '')
  const generateClass = (index, step) => isActive(step) || isDone(index)
  return (
    <div className="progress-wrap">
      <div className="line-progress-bar">
        <ul className="progressbar">
          <For each="step" index="index" of={steps}>
            <li key={step} className={generateClass(index, step)} style={{ width: `${100 / steps.length}%` }}>
              <IntlMessages id={`${intlId}.${step}`} />
            </li>
          </For>
        </ul>
      </div>
    </div>
  )
}

FormSteps.propTypes = {
  steps: PropTypes.instanceOf(Array).isRequired,
  currentStep: PropTypes.string.isRequired,
  intlId: PropTypes.string.isRequired,
}

export default FormSteps
```