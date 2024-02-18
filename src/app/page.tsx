"use client"

import Card from "@/components/Card";
import data from "@/data/data.json";
import { Content } from "@/type/types";
import { Category, cat } from "@/type/test";
import usePhoneLink from "@/hooks/usePhoneLink";

const Page = () => {

  const phoneNumber:string = '123456';
  const phoneLink = usePhoneLink(phoneNumber);

  return (
    <>
      <header className="w-full bg-black h-10 p-2 text-white text-right font-bold text-lg ">Lars Gregersen</header>

      {
        Object.keys(data.category).map((category:any, index: number) => (
          <section className="z-0 container mx-auto my-10" key={index}>
            <div className="w-20 bg-black text-white font-bold m-4 text-center rounded-lg md:mx-0 sm:mx-5 lg:mx-2 xl:mx-20 text-xl">
              {category}
            </div>
            <div className="cardwrapper">

              {(data.category[category]) &&
              (data.category[category]).map((item:cat) => (
                <Card key={item.id} data={item} />
              ))}

            </div>
          </section>
        ))
      }

      <footer className="bg-black text-white p-1 text-center">
        mail:manglerbarelige@gmail.com | mobil:{phoneLink}
      </footer>

    </>

  )
}

export default Page;