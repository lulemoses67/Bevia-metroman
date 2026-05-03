import { useState, useEffect } from 'react';
import { db } from './FirebaseConfig';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

const useFetch = (collectionName, id = null) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        if (id) {
          // 1. Logic for a single document
          const docRef = doc(db, collectionName, id);
          const snapshot = await getDoc(docRef);

          if (snapshot.exists()) {
            setData({ ...snapshot.data(), id: snapshot.id });
          } else {
            throw new Error("That document does not exist");
          }
        } else {
          // 2. Logic for the entire collection (array)
          const colRef = collection(db, collectionName);
          const snapshot = await getDocs(colRef);
          const results = snapshot.docs.map(doc => ({ 
            ...doc.data(), 
            id: doc.id 
          }));
          setData(results);
        }
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error(err.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [collectionName, id]); // Added id to dependency array

  return { data, isPending, error };
};

export default useFetch;