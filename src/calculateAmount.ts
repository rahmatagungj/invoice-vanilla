function getOnlyNumber(value: string): number {
  return Number(
    value
      .replace(/[^0-9.-]+/g, "")
      .replaceAll(".", "")
      .replaceAll(",", "")
  )
}

export function recalculateAmount(row: number): void {
  const qty: HTMLParagraphElement = document.getElementById(
    `quantity-${row}`
  ) as HTMLParagraphElement
  const unitPrice: HTMLParagraphElement = document.getElementById(
    `unitprice-${row}`
  ) as HTMLParagraphElement
  const amount: HTMLParagraphElement = document.getElementById(
    `amount-${row}`
  ) as HTMLParagraphElement

  const subTotal: string = (Number(qty.innerText) *
    Number(getOnlyNumber(unitPrice.innerText))) as unknown as string

  amount.innerText = "Rp " + subTotal.toLocaleString()
}

export function recalculateWhenChanged(
  element: HTMLParagraphElement,
  index: number
): void {
  element.addEventListener("input", (): void => {
    recalculateAmount(index + 1)
  })
}

export function updateVisibleQuantity(
  element: HTMLInputElement,
  index: number
): void {
  element.addEventListener("change", (): void => {
    const visibleQuantityElement: HTMLParagraphElement =
      document.getElementById(`quantity-${index + 1}`) as HTMLParagraphElement

    visibleQuantityElement.innerText = element.value
    recalculateAmount(index + 1)
  })
}

function listenWhenInputChange(): void {
  const allQuantityInputElement: NodeListOf<HTMLInputElement> =
    document.querySelectorAll<HTMLInputElement>("input[id^='quantity-input-']")

  allQuantityInputElement.forEach(
    (element: HTMLInputElement, index: number): void => {
      updateVisibleQuantity(element, index)
    }
  )
}

export default function calculateAmount(): void {
  listenWhenInputChange()
  const allQuantityElement: NodeListOf<HTMLParagraphElement> =
    document.querySelectorAll<HTMLParagraphElement>("p[id^='quantity-']")
  const allUnitPriceElement: NodeListOf<HTMLParagraphElement> =
    document.querySelectorAll<HTMLParagraphElement>("p[id^='unitprice-']")

  allQuantityElement.forEach(
    (element: HTMLParagraphElement, index: number): void => {
      recalculateWhenChanged(element, index)
    }
  )

  allUnitPriceElement.forEach(
    (element: HTMLParagraphElement, index: number): void => {
      recalculateWhenChanged(element, index)
    }
  )
}
