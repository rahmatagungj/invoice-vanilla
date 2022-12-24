export default function companyAddressHandler(): void {
  const companyAddressElement: HTMLHeadingElement = document.getElementById(
    "company-address"
  ) as HTMLHeadingElement

  if (localStorage.getItem("companyAddress")) {
    companyAddressElement.innerText = JSON.parse(
      localStorage.getItem("companyAddress") as string
    ) as string
  }

  companyAddressElement.addEventListener("input", (): void => {
    localStorage.setItem(
      "companyAddress",
      JSON.stringify(companyAddressElement.innerText)
    )
  })
}
