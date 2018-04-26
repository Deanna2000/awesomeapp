//where: class, ID, element, fragment what: fragment, component
const DomBuilder = (what, where) => {
    document.querySelector(where).appendchild(what)
}

module.exports = DomBuilder