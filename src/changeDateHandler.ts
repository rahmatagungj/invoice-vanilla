export default function changeDateHandler(): void {
  const dateContent: HTMLSpanElement = document.getElementById(
    "date-content"
  ) as HTMLSpanElement
  const dateInput: HTMLInputElement = document.getElementById(
    "date-input"
  ) as HTMLInputElement

  const TODAY: Date = new Date()
  dateContent.innerHTML = TODAY.toLocaleDateString("id-ID")
  dateInput.valueAsDate = new Date(TODAY.setDate(TODAY.getDate() + 1))

  dateInput.addEventListener("change", (): void => {
    dateContent.innerHTML = new Date(dateInput.value).toLocaleDateString(
      "id-ID"
    ) as string
  })
}
