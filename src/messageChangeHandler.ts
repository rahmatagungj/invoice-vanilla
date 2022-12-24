export default function messageChangeHandler(): void {
  const messageElement: HTMLParagraphElement = document.getElementById(
    "message"
  ) as HTMLParagraphElement

  if (localStorage.getItem("message")) {
    messageElement.innerText = JSON.parse(
      localStorage.getItem("message") as string
    ) as string
  }

  messageElement.addEventListener("input", (): void => {
    localStorage.setItem("message", JSON.stringify(messageElement.innerText))
  })
}
