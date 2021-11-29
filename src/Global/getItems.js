function getItems(){
    return new Promise((resolve, reject) => {
        const product = [
            {
                id: 1,
                name: 'Máquina 1',
                description: 'Description 1',
                stock: 12,
                initial: 1,
                img: 'maq1.png',
                price: 24.5
            },
            {
                id: 20,
                name: 'Máquina 2',
                description: 'Description 2',
                stock: 23,
                initial: 2,
                img: 'maq2.png',
                price: 15.3
            },
            {
                id: 30,
                name: 'Máquina 3',
                description: 'Description 3',
                stock: 34,
                initial: 3,
                img: 'maq3.png',
                price: 5.7
            },
            {
                id: 40,
                name: 'Máquina 4',
                description: 'Description 4',
                stock: 45,
                initial: 4,
                img: 'maq4.png',
                price: 75.1
            }
        ]
        setTimeout(() => resolve(product), 2000)
    })
}

export default getItems;