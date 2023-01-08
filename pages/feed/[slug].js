import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const feed = ({ pageNumber, articles }) => {
  const myLoader = ({ src }) => {
    return src;
  };

  const router = useRouter();

  return (
    <div className='pb-16'>
      <div className='mx-auto max-w-6xl grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center content-center py-14'>
        {articles.map((item, i) => {
          return (
            <Link href={item.url} target='_blank' className='w-80'>
              <div className='bg-white border-2 rounded-md cursor-pointer flex flex-col gap-2 p-2 max-h-96 overflow-hidden'>
                <Image
                  loader={myLoader}
                  src={item.urlToImage}
                  width={300}
                  height={300}
                  className='self-center rounded-md'
                />
                <h4 className='text-2xl font-medium'>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className='flex justify-center gap-8 items-center'>
        <button
          onClick={() => {
            router.push(`/feed/${pageNumber - 1}`);
          }}
          disabled={pageNumber <= 1}
          className={`py-3 border-2 bg-transparent rounded-md text-xl w-32 hover:bg-neutral-100 transition disabled:hover:bg-transparent disabled:cursor-not-allowed`}
        >
          Previous
        </button>
        <p className='text-3xl font-medium'>{pageNumber}</p>
        <button
          onClick={() => {
            router.push(`/feed/${pageNumber + 1}`);
          }}
          disabled={pageNumber >= 5}
          className='py-3 border-2 bg-transparent rounded-md text-xl w-32 hover:bg-neutral-100 transition disabled:hover:bg-transparent disabled:cursor-not-allowed'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}&apiKey=${process.env.NEWS_API_KEY}`
  );

  const res = await apiResponse.json();
  const { articles } = res;

  return {
    props: {
      articles,
      pageNumber: Number(pageNumber),
    },
  };
};

export default feed;
