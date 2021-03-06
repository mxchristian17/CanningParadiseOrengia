import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs, query, where, limit, orderBy } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_sotrageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

  export const getCategories = () => {
    return new Promise((resolve, reject) => {
      const collectionQuery = query(collection(db, 'categories'), orderBy("position", "asc"))
      getDocs(collectionQuery).then(QuerySnapshot => {
        const categories = QuerySnapshot.docs.map(doc => {
          return {id : doc.id, ...doc.data()}
        })
        resolve(categories)
      }).catch(error => {
        reject('Error obteniendo categorias: ', error)
      })
    })
  }

  export const getProducts = (key, operator, value) => {
    return new Promise((resolve, reject) => {
      const collectionQuery = key && operator && value ? 
      query(collection(db, 'items'), where(key, operator, value), limit(50)) :
      collection(db, 'items')
      getDocs(collectionQuery).then(QuerySnapshot => {
        const products = QuerySnapshot.docs.map(doc => {
          return {id : doc.id, ...doc.data()}
        })
        resolve(products)
      }).catch(error => {
        reject('Error obteniendo productos: ', error)
      })
    })
  }