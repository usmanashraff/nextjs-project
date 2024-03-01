import Image from "next/image";
import Link from "next/link";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const fetchSingleDrink = async (id) =>{
  const res = await fetch(`${url}${id}`);
  if(!res.ok)
  {
    throw new Error('error in fetching single drink..');
  }
  const data = await res.json();
  return data;
}

const SingleDrinkPage = async ({params}) => {
 const data = await fetchSingleDrink(params.id)
 const title = data?.drinks[0]?.strDrink;
 const img = data?.drinks[0]?.strDrinkThumb;
 const text = data?.drinks[0]?.strInstructions
 console.log(text)
  return (
    <div>
      <Link className='btn btn-primary my-6' href='/drinks'>
        back to drinks
      </Link>
      <h1 className='text-xl font-bold'> {title} </h1>

      <Image src={img} width={300} height={300} className='w-48 h-48 rounded-lg shadow-lg my-4' priority alt={title} />
      <p>
        {text}
      </p>


    </div>
  )
}

export default SingleDrinkPage