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
                rateAverage: 4.5,
                categoryId: "cerradoras"
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
                rateAverage: 4.5,
                categoryId: "isobaricas"
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
                rateAverage: 4.5,
                categoryId: "cerradoras"
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
                rateAverage: 4.5,
                categoryId: "lineas"
            },
            {
                id: 50,
                name: 'Lata 12oz',
                description: 'Lata lisa de refresco con capacidad de 12 onzas (354ml).',
                stock: 45,
                initial: 4,
                img: 'can12.png',
                price: 0.1,
                sold: 1234,
                reviews: 18,
                rateAverage: 5.0,
                categoryId: "latas"
            },
            {
                id: 60,
                name: 'Lata 16oz',
                description: 'Lata lisa de refresco con capacidad de 16 onzas (473ml).',
                stock: 145,
                initial: 4,
                img: 'can16.png',
                price: 0.15,
                sold: 1234,
                reviews: 18,
                rateAverage: 5.0,
                categoryId: "latas"
            },
            {
                id: 70,
                name: 'Oximetro',
                description: 'Oximetro para medición de oxigeno disuelto en bebidas carbonatadas',
                stock: 5,
                initial: 1,
                img: 'oxymeter.png',
                price: 1000.0,
                sold: 124,
                reviews: 18,
                rateAverage: 3.0,
                categoryId: "oximetros"
            },
            {
                id: 80,
                name: 'Inspector de cierre',
                description: 'Equipo para la inspección automática de cierres.',
                stock: 15,
                initial: 1,
                img: 'seaminspect.png',
                price: 100.0,
                sold: 14,
                reviews: 18,
                rateAverage: 3.3,
                categoryId: "controlcierre"
            },
            {
                id: 90,
                name: 'Medidor de carbonatación',
                description: 'Equipo para la medición de carbonatación en latas de bebidas carbonatadas.',
                stock: 10,
                initial: 1,
                img: 'noimage.png',
                price: 50.0,
                sold: 14,
                reviews: 18,
                rateAverage: 4.4,
                categoryId: "controlcarbonatacion"
            },
            {
                id: 100,
                name: 'Medidor de presión',
                description: 'Equipo para la medición de presión de cierre en máquinas cerradoras.',
                stock: 35,
                initial: 1,
                img: 'noimage.png',
                price: 50.0,
                sold: 143,
                reviews: 182,
                rateAverage: 4.7,
                categoryId: "controlpresion"
            }
        ]
        setTimeout(() => resolve(product), 2000)
    })
}

export default getItems;