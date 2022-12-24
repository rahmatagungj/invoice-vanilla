export default function changeDueDateHandler(): void {
  const dateDueContent: HTMLSpanElement = document.getElementById(
    "due-date-content"
  ) as HTMLSpanElement
  const dateDueInput: HTMLInputElement = document.getElementById(
    "due-date-input"
  ) as HTMLInputElement

  const TODAY: Date = new Date()
  dateDueContent.innerHTML = new Date().toLocaleDateString("id-ID")
  dateDueInput.valueAsDate = new Date(TODAY.setDate(TODAY.getDate() + 1))

  dateDueInput.addEventListener("change", (): void => {
    dateDueContent.innerHTML = new Date(dateDueInput.value).toLocaleDateString(
      "id-ID"
    ) as string
  })
}
