export const guardarEnLocalStorage = (clave, item) => {
    //Conseguir listado previo del local storage
    let elementos = JSON.parse(localStorage.getItem(clave))

    //Comprobar si es un array
    if (Array.isArray(elementos) === true) {
        elementos.push(item)
    } else {
        elementos = [item]
    }

    // Guardamos en el almacenamiento local
    localStorage.setItem(clave, JSON.stringify(elementos))

    // Devuelve objeto guardado
    return item
}