import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const PrintModal = () =>{
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  const setPrint = (printWindow) => {
    const printContents = window.document.getElementById('printableArea').innerHTML
    const docBody = printWindow.document.body
    docBody.innerHTML = printContents
    // 沒有延遲的話，網頁圖片會印不出來
    setTimeout(() => {
      printWindow.print()
    }, 300)
  }

  const printTagArea = async () => {
    // IE
    const isIE = /* @cc_on!@ */false || !!document.documentMode
    // 打印成網頁
    const printWindow = window.open(window.location.href)

    if (isIE) {
      printWindow.onload = setPrint(printWindow)
      printWindow.onafterprint = printWindow.close()
    } else {
      printWindow.onload = () => { setPrint(printWindow) }
      printWindow.onafterprint = () => { printWindow.close() }
    }
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        id='printableArea'
      >
        <button onClick={closeModal}>close</button>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sint, error, nisi ea recusandae quidem nam harum ullam cumque perferendis quod soluta placeat amet perspiciatis illum tempora dignissimos aperiam molestiae?</div>
        <button onClick={printTagArea}>打印</button>
      </Modal>
    </div>
  )
}

export default PrintModal

// 想法: 先將modal打印成頁面，再用瀏覽器原生的方法執行列印