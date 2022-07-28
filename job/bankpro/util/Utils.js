import dayjs from 'dayjs'
import forge from 'node-forge'

const isBetween = require('dayjs/plugin/isBetween')
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')

dayjs.extend(isBetween)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

export const random = () => window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32

export const chamelToDash = (input) => input.replace(new RegExp('[A-Z]', 'g'), (m) => `-${m.toLowerCase()}`)

export const renameObjectKeys = (obj, newKeys) => {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = newKeys[key] || key
    return { [newKey]: obj[key] }
  })
  return Object.assign({}, ...keyValues)
}

export const renameObjectKeysOfArray = (originArray = [], newKeys = {}) => (
  originArray.map((object) => renameObjectKeys(object, newKeys))
)

export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj))

export const scrollTop = () => window.scrollTo(0, 0)

// this function has write unit testing
export const numberWithCommas = (number) => {
  let stringNumber = ''
  if (typeof (number) === 'string') stringNumber = number
  else if (typeof (number) === 'number') stringNumber = number.toString()
  else return 'only \'string\' or \'number\' of type'

  const splitedNumber = stringNumber.split('.')
  if (splitedNumber.length > 2) return number

  const [integer, decimal] = splitedNumber
  // String.prototype.replaceAll is not implemented in Node.js (at least as of version v14.15.0).
  // causes occur error when testing with jest
  const parseInteger = parseInt(integer.replace(new RegExp(',', 'g'), ''), 10)
  if (Number.isNaN(parseInteger)) return number

  const integerWithCommas = parseInteger.toLocaleString('en-US')
  const formatDecimal = decimal ? `.${decimal}` : ''
  return `${integerWithCommas}${formatDecimal}`
}

export const amountFormat = (amount, currency) => {
  // 'currency' For Future.
  switch (currency) {
    default:
      return numberWithCommas(amount)
  }
}

export const calculateAllReservationDate = (perDay, startDate, endDate) => {
  const startYear = dayjs(startDate).year()
  const endYear = dayjs(endDate).year()
  const showDateList = []

  for (let currentYear = startYear; currentYear <= endYear; currentYear += 1) {
    for (let currentMonth = 1; currentMonth <= 12; currentMonth += 1) {
      const currentDate = dayjs([currentYear, currentMonth, perDay])
      // dayjs 會把日期無條件進位，例如 2021/01/32 會自動轉成 2021/02/01
      // 如果不是相同月份，就當該月份地月底
      const inSameMonth = currentDate.month() + 1 === currentMonth
      if (inSameMonth) {
        if (currentDate.isBetween(startDate, endDate, 'date', '[]')) {
          showDateList.push(currentDate.format('YYYY/MM/DD'))
        }
      } else {
        const endOfMonth = dayjs([currentYear, currentMonth]).endOf('month')
        if (endOfMonth.isBetween(startDate, endDate, 'date', '[]')) {
          showDateList.push(endOfMonth.format('YYYY/MM/DD'))
        }
      }
    }
  }
  return showDateList
}
export const getYearSelectionList = (length, startYear = '') => {
  const year = startYear || dayjs().year()
  const yearInt = parseInt(year, 10)
  return new Array(length)
    .fill(0)
    .map((_, index) => ({
      id: String(yearInt - index),
      name: String(yearInt - index),
    }))
}

const publicEncrypt = (publicKeyString, data) => {
  const encodeData = forge.util.encodeUtf8(data)
  const encryptData = forge.pki.publicKeyFromPem(publicKeyString).encrypt(encodeData)
  return forge.util.encode64(encryptData)
}

export const certEncrypt = (publicKeyString, data) => {
  const formatTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
  const dataWithTime = deepCopy(data) + formatTime
  return publicEncrypt(publicKeyString, dataWithTime)
}

export const countInteger = (number) => {
  if (typeof (number) !== 'string' && typeof (number) !== 'number') return 0

  const splitedAmount = String(number).split('.')
  return splitedAmount[0].length
}
export const countDecimals = (number) => {
  if (typeof (number) !== 'string' && typeof (number) !== 'number') return 0

  const splitedAmount = String(number).split('.')
  if (splitedAmount[1]) {
    return splitedAmount[1].length
  }
  return 0
}

export const setPrint = (printWindow) => {
  const printContents = window.document.getElementById('printableArea').innerHTML
  const docBody = printWindow.document.body
  docBody.innerHTML = printContents
  // 沒有延遲的話，網頁圖片會印不出來
  setTimeout(() => {
    printWindow.print()
  }, 300)
}

export const printTagArea = async () => {
  // Internet Explorer 6-11
  const isIE = /* @cc_on!@ */false || !!document.documentMode
  const printWindow = window.open(`${PROJECT_ROOT}print`)

  if (isIE) {
    printWindow.onload = setPrint(printWindow)
    printWindow.onafterprint = printWindow.close()
  } else {
    printWindow.onload = () => { setPrint(printWindow) }
    printWindow.onafterprint = () => { printWindow.close() }
  }
}

const matchMIMEType = (name) => {
  const extension = name.split('.').pop()

  switch (extension) {
    case 'pdf':
      return 'application/pdf'
    case 'csv':
      return 'text/csv'
    case 'zip':
      return 'application/zip'
    case 'dot':
    case 'doc':
      return 'application/msword'
    case 'docx':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    case 'xls':
    case 'xlt':
    case 'xla':
      return 'application/vnd.ms-excel'
    case 'xlsx':
      return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    case 'xltx':
      return 'application/vnd.openxmlformats-officedocument.spreadsheetml.template'
    case 'xlsm':
      return 'application/vnd.ms-excel.sheet.macroEnabled.12'
    case 'xltm':
      return 'application/vnd.ms-excel.template.macroEnabled.12'
    case 'xlam':
      return 'application/vnd.ms-excel.addin.macroEnabled.12'
    case 'xlsb':
      return 'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
    default:
      return 'application/pdf'
  }
}

// 下載檔案
export const downloadFile = (response, name) => {
  const { data, headers } = response
  const fileName = name || headers['content-disposition']?.split('filename=')[1].replaceAll('"', '')
  const MIMEType = matchMIMEType(fileName)
  const url = window.URL.createObjectURL(new Blob([data]), {
    type: MIMEType,
  })
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// 不可有連續5碼遞增/遞減或完全相同的英數字
export const pscodeVaildCheck = (value) => {
  const checkCounts = 5 // 檢查字元數量

  if (value.length < checkCounts) return true // 符合字元數量後才開始檢查

  const limitCounts = checkCounts - 1 // 累積上限
  const noNeedDoCounts = checkCounts - 1 // 尾數少於需要的字元數量時不必做

  let isSameCheckVaild = true
  let isIncrementCheckVaild = true
  let isDecreaseCheckVaild = true

  for (let index = 0; index < value.length - noNeedDoCounts; index += 1) {
    let sameCounts = 0 // 相同累積次數
    let incrementCounts = 0 // 遞增累積次數
    let decreaseCounts = 0 // 遞減累積次數

    // 每次從完整字串取5個字元比對
    const partString = value.slice(index, checkCounts + index)
    for (let partStringIndex = 0; partStringIndex < partString.length - 1; partStringIndex += 1) {
      const current = partString.charCodeAt(partStringIndex)
      const next = partString.charCodeAt(partStringIndex + 1)
      if (current - next === 1) {
        incrementCounts += 1
      }
      if (current - next === 0) {
        sameCounts += 1
      }
      if (current - next === -1) {
        decreaseCounts += 1
      }
    }

    // 5個字元兩兩相比最終得出4個結果, 累積4次表示該組字元符合遞增遞減或相同
    if (sameCounts === limitCounts) {
      isSameCheckVaild = false
      break
    }
    if (incrementCounts === limitCounts) {
      isIncrementCheckVaild = false
      break
    }
    if (decreaseCounts === limitCounts) {
      isDecreaseCheckVaild = false
      break
    }
  }
  return isSameCheckVaild && isIncrementCheckVaild && isDecreaseCheckVaild
}

export const detectOS = () => {
  const { userAgent } = window.navigator
  const { platform } = window.navigator
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']
  const iosPlatforms = ['iPhone', 'iPad', 'iPod']

  let os = ''
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS'
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS'
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows'
  } else if (/Android/.test(userAgent)) {
    os = 'Android'
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux'
  }
  return os
}
