import { useEffect, useState } from 'react';
import { MindMap } from '../../components/MindMap';
import { getServerSideProps } from '../../utils/helpers';

export default function MindMapPage({ initialData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    async function fetchData() {
      const response = await getServerSideProps();
      setData(response);
    }

    if (!initialData) {
      fetchData();
    }
  }, [initialData]);

  return (
    <div>
      <MindMap data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const initialData = await getServerSideProps(context);
  return { props: { initialData } };
}