```js
import React from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import createIntlObject from 'Util/Intl'

import FormFormat from 'Components/form/FormFormat'

import {
  permissions,
} from 'Redux/selectors'

export const NoDataPage = () => {
  const intl = useIntl()
  const noDataMessage = intl.formatMessage({ id: 'form.common.message.no-data' })
  return (
    <div className="d-flex justify-content-center" style={{ height: '20vh', width: '100%' }}>
      <h2 className="text-muted align-self-center text-center">
        <p>
          {noDataMessage}
        </p>
      </h2>
    </div>
  )
}

export const ApiErrorMessagePage = ({ messages }) => {
  const intl = useIntl()
  const defaultMessage = intl.formatMessage({ id: 'form.common.error-message.system-occur-problem' })
  return (
    <div className="py-5">
      <div className="mb-5 text-center text-danger">
        <h5 className="p-3">
          <i className="fas fa-exclamation-triangle" />
          <span className="ml-2">{messages || defaultMessage}</span>
        </h5>
      </div>
    </div>
  )
}

export const CaptchaImgApiErrorMessagePage = () => (
  <div className="text-center" title="error">
    <i className="fas fa-exclamation-circle fa-2x text-danger" />
  </div>
)

ApiErrorMessagePage.defaultProps = {
  messages: null,
}
ApiErrorMessagePage.propTypes = {
  messages: PropTypes.string,
}

const MULTIPLE_RESULT_PAGE_ID = 'form.common.multiple-result-page'
const initTableHeaders = [
  'transactionContent',
  'resultDescription',
]

const linkList = {
  'ntd-transfer-status': '/ntd-payment/ntd-transfer/ntd-transfer-status',
  'pay-salary-status': '/ntd-payment/ntd-salary-transfer/pay-salary-status',
  'payment-inquiry': '/collection-service/tax-public-fee/payment-inquiry',
  'transfer-histroy': '/foreign-payment/foreign-transfer/transfer-histroy',
  'loc-inquiry': '/import-export-trade/loc-application/loc-inquiry',
}

export const MultipleResultPage = ({
  tableMessages,
  buttonAction,
  statesSearchText,
}) => {
  const intlTableHeaders = createIntlObject(
    initTableHeaders,
    `${MULTIPLE_RESULT_PAGE_ID}.table-header`,
  )

  const intl = useIntl()
  const history = useHistory()

  const defaultButtonText = intl.formatMessage({ id: 'form.common.button.backFunctionHome' })

  const operationList = useSelector(permissions)

  return (
    <form>
      <div className="table-responsive">
        <table className="table table-data table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">
                {intlTableHeaders.transactionContent}
              </th>
              <th scope="col">
                {intlTableHeaders.resultDescription}
              </th>
            </tr>
          </thead>
          <tbody>
            <For index="idx" each="item" of={tableMessages}>
              <tr key={idx}>
                <td data-title={intlTableHeaders.transactionContent}>
                  <For index="idx" each="contentText" of={item.transactionContent.split('<br/>')}>
                    <p key={idx} className="m-0 text-left">{contentText}</p>
                  </For>
                </td>
                <td data-title={intlTableHeaders.resultDescription}>
                  {item.resultDescription}
                </td>
              </tr>
            </For>
          </tbody>
        </table>
      </div>
      <div className="form-actions">
        <button
          type="button"
          className="btn btn-lg btn-primary text-wrap"
          onClick={buttonAction}
        >
          {defaultButtonText}
        </button>
        <If condition={
          statesSearchText !== ''
          && operationList.level3.find((item) => item.name === statesSearchText)
          }
        >
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={() => history.push({ pathname: `${linkList[statesSearchText]}`, hash: '' })}
          >
            {intl.formatMessage({ id: `menu.menu-item.${statesSearchText}` })}
          </button>
        </If>
      </div>
    </form>
  )
}

MultipleResultPage.defaultProps = {
  statesSearchText: '',
}

MultipleResultPage.propTypes = {
  tableMessages: PropTypes.arrayOf(PropTypes.shape({
    transactionContent: PropTypes.string,
    resultDescription: PropTypes.string,
  })).isRequired,
  buttonAction: PropTypes.func.isRequired,
  statesSearchText: PropTypes.string,
}

const ResultPage = ({
  isError,
  statusMessage,
  detailMessage,
  buttonAction,
  buttonDownload,
  statesSearchText,
  saveDraftState,
}) => {
  const intl = useIntl()
  const history = useHistory()

  const defaultResultLabel = intl.formatMessage({ id: 'form.common.label.result' })
  const defaultDetailLabel = intl.formatMessage({ id: 'form.common.label.detail' })
  const defaultButtonText = intl.formatMessage({ id: 'form.common.button.backFunctionHome' })
  const defaultButtonDownload = intl.formatMessage({ id: 'form.common.button.download-loc-request' })
  const defaultSuccessText = intl.formatMessage({ id: 'form.result.success' })
  const defaultErrorText = intl.formatMessage({ id: 'form.result.error' })
  const statusText = statusMessage || isError ? defaultErrorText : defaultSuccessText

  const operationList = useSelector(permissions)

  return (
    <form>
      <div className="form-body">
        <div className="form-bordered">
          <FormFormat
            labelSection={
              <span>
                {defaultResultLabel}
              </span>
              }
            valueSection={
              <div className="form-group form-text ml-2">
                <Choose>
                  <When condition={isError}>
                    <span className="text-danger">{statusText}</span>
                  </When>
                  <Otherwise>
                    <span>{statusText}</span>
                  </Otherwise>
                </Choose>
              </div>
            }
          />
          <If condition={detailMessage}>
            <FormFormat
              labelSection={
                <span>
                  {defaultDetailLabel}
                </span>
              }
              valueSection={
                <div className="form-group form-text ml-2">
                  <For each="item" index="idx" of={detailMessage.split('<br/>')}>
                    <p key={idx} className="mb-0">{item}</p>
                  </For>
                </div>
              }
            />
          </If>
        </div>
      </div>
      <div className="form-actions">
        <button
          type="button"
          className="btn btn-lg btn-primary"
          onClick={buttonAction}
        >
          {defaultButtonText}
        </button>
        <If condition={buttonDownload !== null && saveDraftState === false}>
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={() => buttonDownload()}
          >
            {defaultButtonDownload}
          </button>
        </If>

        <If condition={
          statesSearchText !== ''
          && operationList.level3.find((item) => item.name === statesSearchText)
          }
        >
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={() => history.push({ pathname: `${linkList[statesSearchText]}`, hash: '' })}
          >
            {intl.formatMessage({ id: `menu.menu-item.${statesSearchText}` })}
          </button>
        </If>
      </div>
    </form>
  )
}
ResultPage.defaultProps = {
  statusMessage: '',
  detailMessage: '',
  buttonDownload: null,
  statesSearchText: '',
  saveDraftState: null,
}
ResultPage.propTypes = {
  isError: PropTypes.bool.isRequired,
  statusMessage: PropTypes.string,
  detailMessage: PropTypes.string,
  buttonAction: PropTypes.func.isRequired,
  buttonDownload: PropTypes.func,
  statesSearchText: PropTypes.string,
  saveDraftState: PropTypes.bool,
}

export default ResultPage
```