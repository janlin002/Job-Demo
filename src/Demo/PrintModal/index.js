import React, { useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const PrintModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isPrinting, setIsPrinting] = React.useState(false);
  useEffect(() => {
    if (isPrinting) {
      // IE
      const isIE = /* @cc_on!@ */ false || document.documentMode;
      // 打印成網頁
      const printWindow = window.open(window.location.href);
      const originContents = window.document;
      const setPrint = (printWindow) => {
        const printContents = window.document.getElementById("printableArea")
          .innerHTML;
        printWindow.document.body.innerHTML = printContents;

        printWindow.print();
      };
      if (isIE) {
        printWindow.onload = setPrint(printWindow);
        printWindow.onafterprint = printWindow.close();
      } else {
        printWindow.onload = () => {
          setPrint(printWindow);
        };
        printWindow.onafterprint = () => {
          printWindow.document.body.innerHTML = originContents.innerHTML;
          printWindow.close();
          setIsPrinting(false);
        };
      }
    }
  }, [isPrinting]);
  console.log("window", window.document);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
        id="printableArea"
      >
        <button onClick={() => setIsOpen(false)}>close</button>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga sint,
          error, nisi ea recusandae quidem nam harum ullam cumque perferendis
          quod soluta placeat amet perspiciatis illum tempora dignissimos
          aperiam molestiae?
        </div>
        <button onClick={() => setIsPrinting(true)}>打印</button>
      </Modal>
    </div>
  );
};

export default PrintModal;

// 想法: 先將modal打印成頁面，再用瀏覽器原生的方法執行列印
