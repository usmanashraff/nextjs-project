import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const DrinksList = ({drinks}) => {
  return (
    <ul className='grid sm:grid-cols-2 gap-6 mt-6'>
        {drinks.map((drink)=>{
            return(
                <li key={drink.idDrink}>
                    <Link href={`/drinks/${drink.idDrink}`}> 
                    <div className="h-48 relative mb-4">
                        <Image src={drink.strDrinkThumb}
                        fill
                        sizes='(max-width:768px) 100vw, max-width(1200px) 50vw'
                        alt={drinks.strDrink}
                        className='rounded-lg object-cover'
                        ></Image>
                    </div>
                    {
                        drink.strDrink
                    }
                     </Link>
                </li>
            );
        })}
    </ul>
  )
}

export default DrinksList