import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='text-5xl mb-8 px-8 font-bold'>
      Next.JS App <br/> <p className='text-sm font-normal py-5'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt maiores amet autem nam, consequatur porro quae maxime? Voluptate ad perspiciatis iste quasi libero vitae aut repellendus temporibus magnam ipsum cum dolores veritatis voluptas doloribus at consequatur consectetur, fugit eligendi dolore.
      </p>
      <Link href='/clients' className='btn btn-accent'> Get started !</Link>
    </div>
  );
}
