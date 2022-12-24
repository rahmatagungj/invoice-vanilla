export default function signaturNameHandler(): void {
  const signaturNameElement: HTMLParagraphElement = document.getElementById(
    "signature-name"
  ) as HTMLParagraphElement

  if (localStorage.getItem("signaturName")) {
    signaturNameElement.innerText = JSON.parse(
      localStorage.getItem("signaturName") as string
    ) as string
  }

  signaturNameElement.addEventListener("input", (): void => {
    localStorage.setItem(
      "signaturName",
      JSON.stringify(signaturNameElement.innerText)
    )
  })
}
