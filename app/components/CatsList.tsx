'use client'

import React, { useState, useEffect } from 'react';

import CatItem from './CatItem'

const CatsList: React.FC = () => {
  const [catsByGender, setCatsByGender] = useState<{ gender: string; cats: string[] }[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json');
        const data = await response.json();

        // Filter and categorize cat pets based on owner gender
        const filteredCats = data
          .filter((person: any) => person.pets)
          .reduce((acc: any, person: any) => {
            const catNames = person.pets
              .filter((pet: any) => pet.type === 'Cat')
              .map((cat: any) => cat.name);

            if (catNames.length > 0) {
              const existingEntry = acc.find((entry: any) => entry.gender === person.gender);
              if (existingEntry) {
                existingEntry.cats = existingEntry.cats.concat(catNames);
              } else {
                acc.push({ gender: person.gender, cats: catNames });
              }
            }

            return acc;
          }, []);

        setCatsByGender(filteredCats);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex">
      {catsByGender.map((group) => (
        <div key={group.gender} className="px-5 py-4 mx-5 rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 w-full">
          <h2 className='text-3xl font-semibold mb-8'>{group.gender}</h2>
          <ul>
            {group.cats.map((catName) => (
              <li key={catName} className="w-72"><CatItem name={catName}/></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CatsList;

