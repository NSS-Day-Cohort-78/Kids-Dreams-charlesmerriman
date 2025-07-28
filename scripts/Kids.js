import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "child") {
            const childId = itemClicked.dataset.id

            for (const child of children) {
                if (child.id === parseInt(childId)) {
                    window.alert(`${child.name}'s wish is ${child.wish}`)
                }
            }
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

