function getOnlyNumber(value: string): number {
  return Number(
    value
      .replace(/[^0-9.-]+/g, "")
      .replaceAll(".", "")
      .replaceAll(",", "")
  )
}

function sumTotal(subtotal: number): void {
  const taxElement: HTMLParagraphElement = document.getElementById(
    "tax"
  ) as HTMLParagraphElement
  const discountElement: HTMLParagraphElement = document.getElementById(
    "discount"
  ) as HTMLParagraphElement
  const totalElement: HTMLParagraphElement = document.getElementById(
    "total"
  ) as HTMLParagraphElement

  const percentOfSubtotal: (numberOfPercent: number) => number = (
    numberOfPercent: number
  ): number => {
    return (subtotal * numberOfPercent) / 100
  }

  const totalWithDiscount: number =
    subtotal - percentOfSubtotal(getOnlyNumber(discountElement.innerHTML))

  const total: number =
    totalWithDiscount +
    (totalWithDiscount * getOnlyNumber(taxElement.innerHTML)) / 100

  if (total < 0) {
    totalElement.innerHTML = "Rp 0"
  } else {
    totalElement.innerHTML = "Rp " + total.toLocaleString()
  }
}

export default function calculateTotal(): void {
  setInterval((): void => {
    const allAmountElement: NodeListOf<HTMLParagraphElement> =
      document.querySelectorAll<HTMLParagraphElement>("p[id^='amount-']")

    let total: number = 0

    allAmountElement.forEach((element: HTMLParagraphElement): void => {
      total += getOnlyNumber(element.innerHTML)
    })

    const subtotal: HTMLParagraphElement = document.getElementById(
      "subtotal"
    ) as HTMLParagraphElement
    subtotal.innerHTML = total.toLocaleString()

    sumTotal(total)
  }, 500)
}
