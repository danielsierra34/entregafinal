import { getFirestore } from './index';




export const getCollection = (collectionName) => {
    let data=[]
    const db=getFirestore() 
    const itemCollection=db.collection(collectionName)
    itemCollection.get().then((response)=>{
        data=response.docs.map((doc) => doc.data())
    }).catch(
        (error) => console.error ('Firestore Error: ', error)
    )
    console.log(data)
    return data
}