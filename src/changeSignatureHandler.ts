export default function changeSignatuereHandler(): void {
  const buttonAddSignature = document.getElementById(
    "upload-signature"
  ) as HTMLInputElement
  const signature = document.getElementById("signature") as HTMLImageElement

  if (localStorage.getItem("signature")) {
    signature.src = JSON.parse(localStorage.getItem("signature") as string)
    signature.style.width = "200px"
  }

  buttonAddSignature.addEventListener("change", (event): void => {
    const file = (event.target as HTMLInputElement).files[0] as File
    const reader = new FileReader()

    reader.onload = (event: ProgressEvent<FileReader>): void => {
      signature.src = event.target.result as string
      signature.style.width = "200px"
      localStorage.setItem(
        "signature",
        JSON.stringify(event.target.result as string)
      )
    }

    reader.readAsDataURL(file)
  })
}
