const getAllRows = () => [...document.querySelectorAll("tr").values()]
const doNTimes = (n, todo) => Array(n).fill(0).forEach(() => todo())

doNTimes(4, () => getAllRows().forEach(row => row.removeChild(row.firstChild)))

let csvRows = getAllRows().map(
  row => {
    var [left, right] = row.children
    return {
      front: left.innerText,
      back: right.innerHTML.trim()
    }
  }
).filter(card =>
  card.front != "control" &&
    card.back.length > 0
).map(card => `${card.front};${card.back}`)

copy(csvRows.join("\n"))