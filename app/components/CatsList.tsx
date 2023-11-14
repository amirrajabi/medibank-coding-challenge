'use client'

import React, { useState, useEffect } from 'react';

interface DataItem {
  name: string;
  gender: string;
  age: string;
}

const CatsList: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json');
        const json: DataItem[] = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>
          <p>{item.gender}</p>
          <p>{item.age}</p>
        </div>
      ))}
    </div>
  );
};

export default CatsList;
