import { getHomePageInfo } from "@/db/home"

export default async function Home() {
  const homeInfo = (await getHomePageInfo())[0]

  return (
    <>
      <h1 className="text-2xl font-bold">
        WELCOME TO THE BRANTFORD CHESS CLUB CELEBRATING OVER 100 YEARS OF CHESS!
      </h1>
      <h2 className="text-xl font-bold">
        We Are Located At{" "}
        <a
          href={homeInfo?.locationUrl}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          {homeInfo?.location}
        </a>
      </h2>
      <p className="whitespace-pre-wrap">{homeInfo?.content}</p>
    </>
  )
}
