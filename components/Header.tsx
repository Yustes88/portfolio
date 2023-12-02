import {TbBulb} from 'react-icons/tb'

export default function Header() {
  return (
    <header className="max-w-7xl h-[90vh] m-auto test">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-full pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-1 lg:px-8 lg:pb-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-xl">
                <div className="mt-24 sm:mt-32 lg:mt-16">
                  <div className="inline-flex space-x-6">
                    <span className="bulb rounded-full bg-transparent px-3 py-1 text-md font-semibold leading-6 text-amber-300 ring-1 ring-inset ring-amber-300/10">
                      <TbBulb size={34}/>
                    </span>
                  </div>
                </div>
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Frontend developer
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-400">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                  amet fugiat veniam occaecat fugiat aliqua.
                </p>
              
              </div>
            </div>
          </div>

        </div>
        {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" /> */}
      </div>
    </header>
  )
}

