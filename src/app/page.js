import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        
        {/*Mesa 1 */}
        <a
          className="bg-lime-600 group rounded-lg border border-transparent px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mesa 1{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Disponible
          </p>
        </a>

        {/*Mesa 2 */}
        <a
          className="bg-red-600 group rounded-lg border border-transparent px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mesa 2{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Ocupado
          </p>
        </a>

        {/*Mesa 3 */}
        <a
          className=" bg-red-600 group rounded-lg border border-transparent px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mesa 3{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Ocupado
          </p>
        </a>


        {/*Mesa 4 */}
        <a
          className="bg-lime-600 group rounded-lg border border-transparent px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Mesa 4{' '}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Disponible
          </p>
        </a>
      </div>
      <div className="mb-32 grid bg-slate-600 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
       <select className="bg-slate-600">
       <option className={`mb-3 bg-slate-600 text-2xl font-semibold`} value="Mesa 1">Mesa 1</option>
       <option className={`mb-3 bg-slate-600 text-2xl font-semibold`} value="Mesa 2">Mesa 2</option>
       <option className={`mb-3 bg-slate-600 text-2xl font-semibold`} value="Mesa 3">Mesa 3</option>
       <option className={`mb-3 bg-slate-600 text-2xl font-semibold`} value="Mesa 4">Mesa 4</option>
       </select>

      </div>
    </main>
  )
}
