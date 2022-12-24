import {
  recalculateWhenChanged,
  updateVisibleQuantity,
} from "./calculateAmount"

function getTotalItemInTable(): number {
  const table = document.getElementById("table") as HTMLTableElement

  return table.rows.length - 1
}

enum CellPosition {
  LEFT = `class="text-left"`,
  CENTER = `class="text-center"`,
  RIGHT = `class="text-right"`,
}

function cellTemplate(
  value: string,
  position: CellPosition,
  contenteditable = true
): string {
  return `<p ${
    contenteditable ? "contenteditable" : ""
  } ${position}>${value}</p>`
}

export default function addItemHandler(): void {
  const buttonAddItem = document.getElementById("add-item") as HTMLButtonElement

  buttonAddItem.addEventListener("click", (): void => {
    const table = document.getElementById("table") as HTMLTableElement

    const row: HTMLTableRowElement = table.insertRow(-1)

    const numberCell: HTMLTableCellElement = row.insertCell(0)
    const nameCell: HTMLTableCellElement = row.insertCell(1)
    const quantityCell: HTMLTableCellElement = row.insertCell(2)
    quantityCell.classList.add("text-center")
    const priceCell: HTMLTableCellElement = row.insertCell(3)
    const amountCell: HTMLTableCellElement = row.insertCell(4)
    const actionCell: HTMLTableCellElement = row.insertCell(5)

    numberCell.innerHTML = getTotalItemInTable().toString()
    nameCell.innerHTML = cellTemplate("Item", CellPosition.LEFT)
    quantityCell.innerHTML = cellTemplate("1", CellPosition.CENTER)
    const quantityVisible: HTMLParagraphElement =
      quantityCell.getElementsByTagName("p")[0]
    quantityVisible.classList.add("print-show")
    quantityVisible.style.display = "none"
    quantityCell.appendChild(
      document.createElement("input")
    ).outerHTML = `<center><input type="number" class="form-control print-hidden" id="quantity-input-${getTotalItemInTable()}" value="1" min="1" style="width: 60px"/></center>`
    quantityCell
      .getElementsByTagName("p")[0]
      .setAttribute("id", `quantity-${getTotalItemInTable()}`)

    updateVisibleQuantity(
      quantityCell.getElementsByTagName("input")[0],
      getTotalItemInTable() - 1
    )

    priceCell.innerHTML = cellTemplate("Rp 0", CellPosition.CENTER)
    priceCell
      .getElementsByTagName("p")[0]
      .setAttribute("id", `unitprice-${getTotalItemInTable()}`)

    amountCell.innerHTML = cellTemplate("Rp 0", CellPosition.CENTER, false)
    amountCell
      .getElementsByTagName("p")[0]
      .setAttribute("id", `amount-${getTotalItemInTable()}`)
    actionCell.innerHTML = `<button class="btn btn-danger mx-auto w-100 print-hidden btn-emoji" id="button-delete-item">✖️</button>`

    actionCell.classList.add(
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "print-hidden"
    )

    recalculateWhenChanged(
      quantityCell.getElementsByTagName("p")[0],
      getTotalItemInTable() - 1
    )

    recalculateWhenChanged(
      priceCell.getElementsByTagName("p")[0],
      getTotalItemInTable() - 1
    )

    const buttonDelete: NodeListOf<HTMLButtonElement> =
      actionCell.querySelectorAll<HTMLButtonElement>("#button-delete-item")

    buttonDelete.forEach((button: HTMLButtonElement): void => {
      button.addEventListener("click", (): void => {
        const table = document.getElementById("table") as HTMLTableElement

        table.deleteRow(row.rowIndex)

        const rows: HTMLCollectionOf<HTMLTableRowElement> = table.rows

        for (let i: number = 1; i < rows.length; i++) {
          const row: HTMLTableRowElement = rows[i]

          row.cells[0].innerHTML = i.toString()
        }
      })
    })
  })
}
