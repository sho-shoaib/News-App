import Image from "next/image";

const eom = ({ employee }) => {
  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <>
      <div className='max-w-6xl p-6 mx-auto '>
        <div className='flex lg:flex-row flex-col lg:items-start items-center justify-between gap-8 pt-8'>
          <div className='flex flex-col lg:items-start items-center gap-8 pt-4 sm:w-1/2 w-full'>
            <h1 className='text-4xl font-bold text-center'>
              Employee Of The Month
            </h1>
            <div className='flex gap-4 items-end'>
              <h3 className='text-xl text-center'>{employee.name}</h3>
              <li className='text-md text-center'>{employee.position}</li>
            </div>
            <p className='font-medium'>{employee.description}</p>
            <p className='lg:text-left text-justify sm:px-0 px-3'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto eos earum, nostrum velit necessitatibus ipsa. Delectus
              quidem, consequuntur corporis nesciunt ea fuga laudantium ab
              eveniet quasi, voluptatem ducimus, soluta aspernatur.
            </p>
          </div>
          <Image
            loader={myLoader}
            src={employee.image}
            height={400}
            width={400}
            className='rounded-md'
          ></Image>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );

  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};

export default eom;
