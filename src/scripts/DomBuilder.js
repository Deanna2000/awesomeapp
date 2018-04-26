const DomBuider = (what, where) => {  //where: class, ID, element, fragment what: fragment, component
    document.querySelector(where).appendchild(what)

}

module.exports = DomBuilder