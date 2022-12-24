export default function changeLogoHandler(): void {
  const logo = document.getElementById("logo") as HTMLImageElement

  if (localStorage.getItem("logo")) {
    logo.src = JSON.parse(localStorage.getItem("logo") as string)
    logo.style.width = "200px"
  }

  const buttonChangeLogo = document.getElementById(
    "upload-logo"
  ) as HTMLInputElement

  buttonChangeLogo.addEventListener("change", (event): void => {
    const file = (event.target as HTMLInputElement).files[0] as File
    const reader = new FileReader()

    reader.onload = (event: ProgressEvent<FileReader>): void => {
      logo.src = event.target.result as string
      logo.style.width = "200px"
      localStorage.setItem(
        "logo",
        JSON.stringify(event.target.result as string)
      )
    }

    reader.readAsDataURL(file)
  })
}
