function getItems(){
    return new Promise((resolve, reject) => {
        const product = [
            {
                id: 1,
                name: 'Cerradora semiautomática BL-A',
                description: 'Máquina cerradora semi-automática para latas de refresco. Alimentación manual que permite alcanzar producciones entre 500 y 600 latas/hora. Consulte por sistema opcional de llenado atmosférico.',
                stock: 12,
                initial: 1,
                img: 'maq1.png',
                price: 24.5,
                sold: 1234,
                reviews: 18,
                rateAverage: 4.5
            },
            {
                id: 20,
                name: 'Llenadora isobárica BL-I',
                description: 'Máquina Llenadora Isobárica (contrapresión) automática para latas de refresco con dos cabezales. Producción hasta 300 latas/hora.',
                stock: 23,
                initial: 2,
                img: 'maq2.png',
                price: 15.3,
                sold: 1234,
                reviews: 18,
                rateAverage: 4.5
            },
            {
                id: 30,
                name: 'Cerradora manual BL-M',
                description: 'Máquina cerradora manual para latas de refresco. Alimentación manual que permite alcanzar producciones entre 300 y 400 latas/hora.',
                stock: 34,
                initial: 3,
                img: 'maq3.png',
                price: 5.7,
                sold: 1234,
                reviews: 18,
                rateAverage: 4.5
            },
            {
                id: 40,
                name: 'Línea 100% automática de enlatado BL-LIS6C-EVO',
                description: 'Máquina llenadora isobárica y cerradora de latas, totalmente automática hasta 1800 latas/hora. Con cambios rápidos de formato. Despaletizador, Rinser y Post-lavado de latas opcionales.',
                stock: 45,
                initial: 4,
                img: 'maq4.png',
                price: 75.1,
                sold: 1234,
                reviews: 18,
                rateAverage: 4.5
            }
        ]
        setTimeout(() => resolve(product), 2000)
    })
}

export default getItems;