import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import WithPublicRoute from '../components/Shared/WithPublicRoute'
import { routes } from '../config/route-config'

const Custom404: NextPage = () => {
  const router = useRouter()
  return (
    <Fragment>
      <div className="mx-auto flex items-center justify-center w-full h-screen">
        <div className=" mx-auto flex flex-col h-max items-centers">
          <Image
            className="mt-2 mb-2"
            src="/404 illustration.svg"
            layout="responsive"
            alt="404 image"
            height={350}
            width={500}
          />
          <h1 className="mt-5 self-center text-green">Oops! Page not found</h1>
          <p className="mt-5 italic font-light">{`Sorry we can't find the page you're looking for. Please reload your page`}</p>
          <button
            onClick={() => router.push(routes.login.url)}
            className="self-center text-white text-xs font-black rounded max-w-fit px-20 py-3 bg-[#00A082] mt-5 flex justify-between items-center gap-4">
            {`Back to Home`} <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default WithPublicRoute(Custom404)
