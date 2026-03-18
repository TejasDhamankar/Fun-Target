import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fun Target Timer - Download</title>
        <meta name="description" content="Casino Wheel with admin panel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen w-full bg-black flex items-center justify-center px-4'>
        <div className='text-white text-center w-full max-w-xl'>
          <h1 className='text-4xl font-bold font-fun mb-4'>Fun Target Timer</h1>

          <div className='bg-white rounded-md p-4'>
            <p className='text-black font-bold p-4'>
              Download the Windows (exe) or mobile-friendly APK to install
              <br />
              <span className='text-red-500 animate-pulse font-bold'>Fun Target Timer</span>.
            </p>

            <div className='flex justify-center flex-wrap gap-3'>
              <a href='/FunTargetTimer 1.0.0.msi' download>
                <div className='bg-yellow-500 text-white px-4 py-2 rounded-md'>Download for Windows</div>
              </a>
              <a href='/FunTargetTimer.apk' download>
                <div className='bg-red-500 text-white px-4 py-2 rounded-md'>Download APK</div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
