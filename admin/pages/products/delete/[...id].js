import Layout from '@/components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function deleteProduct() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState();
  const { id } = router.query;


  useEffect(() => {
    if (!id) return;
    axios.get('/api/products?id=' + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);

  function goBackToProducts() {
    router.push('/products');
  }

  async function deleteProduct() {
    await axios.delete('/api/products?id='+id);
    goBackToProducts()
  }

  return (
    <Layout>
      <h1 className='text-center'>Do you really want to delete product &nbsp; "{productInfo?.title}" ?</h1>
      <div className='flex gap-2 justify-center mt-4'>
      <button className='btn-red' onClick={deleteProduct}>Yes</button>
      <button className='btn-default' onClick={goBackToProducts}>No</button>
      </div>
    </Layout>
  );
}
