import "./style.css"
import addItemHandler from "./addItemHandler"
import changeLogoHandler from "./changeLogoHandler"
import changeSignatuereHandler from "./changeSignatureHandler"
import changeDateHandler from "./changeDateHandler"
import changeDueDateHandler from "./changeDueDateHandler"
import calculateAmount from "./calculateAmount"
import calculateTotal from "./calculateTotal"
import companyChangeHandler from "./companyChangeHandler"
import companyAddressHandler from "./companyAddressHandler"
import signaturNameHandler from "./SignaturNameHandler"
import messageChangeHandler from "./messageChangeHandler"

document.addEventListener("DOMContentLoaded", (): void => {
  try {
    companyChangeHandler()
    companyAddressHandler()
    signaturNameHandler()
    messageChangeHandler()
    changeLogoHandler()
    addItemHandler()
    changeSignatuereHandler()
    changeDateHandler()
    changeDueDateHandler()
    calculateAmount()
    calculateTotal()
  } catch (error) {
    console.error(error)
    alert("Something went wrong")
  }
})
