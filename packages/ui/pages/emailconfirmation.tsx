import { APP_NAME } from 'constants/application'
import Link from 'next/link'

const EmailConfirmation = () => (
  <section className="px-4">
    <div className="bg-secondary flex justify-center h-screen px-52 py-16">
      <div className="w-full bg-white flex justify-center rounded-l-lg h-full py-16 px-10">
        <div className="flex flex-col items-center">
          <div>
            <img src="/subscribe.svg" width={240} height={240} />
          </div>
          <h1 className="text-3xl font-semibold">Almost There!</h1>
          <p className="mt-4 text-xl text-gray-800">
            Please check your inbox for an email from OpenGt
          </p>
          <Link href="/">
            <a
              href="/"
              className="mt-4 text-blue-500 cursor-pointer hover:text-blue-600"
            >
              Resend Link
            </a>
          </Link>
          <span className="px-5 text-2xl mt-4 text-red-600 uppercase my-auto">
            {APP_NAME.slice(0, 4)}
            <span className="inline text-2xl text-blue-900">
              {APP_NAME.slice(4, 6)}
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
)

export default EmailConfirmation
