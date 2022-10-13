import { jsPDF } from "jspdf"
import html2canvas from 'html2canvas'

const handleClickPdf = () =>{
  const doc = new jsPDF()

  doc.text('Hello world!', 10, 10)
  doc.save('helloworld.pdf')
}

export default handleClickPdf