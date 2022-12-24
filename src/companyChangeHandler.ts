export default function companyChangeHandler(): void {
  const companyNameElement: HTMLHeadingElement = document.getElementById(
    "company-name"
  ) as HTMLHeadingElement

  if (localStorage.getItem("companyName")) {
    companyNameElement.innerText = JSON.parse(
      localStorage.getItem("companyName") as string
    ) as string
  }

  companyNameElement.addEventListener("input", (): void => {
    localStorage.setItem(
      "companyName",
      JSON.stringify(companyNameElement.innerText)
    )
  })
}
