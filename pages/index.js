import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='p-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col gap-8 pt-8'>
            <h1 className='text-4xl font-bold'>Nextjs news app</h1>
            <h2 className='text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              vero vel
            </h2>
            <Link
              href={"/feed/1"}
              className='border-2 self-start py-3 px-8 text-xl rounded-md border-neutral-400 hover:bg-neutral-100 transition'
            >
              Feed
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
