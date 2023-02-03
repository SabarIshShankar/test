export default function Home() {
  return (
    <div className="container flex p-4 mx-auto min-h-screen justify-center">
      <main>
        {/*check */}
        <div className="w-screen px-60">
          <div className="text-sm font-medium text-center text-neutral-500 border-b border-neutral-200">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-2">
                <p
                  
                  className="inline-block p-4 border-b-2 border-transparent text-blue-600 border-b-2 border-blue-600  rounded-t-lg "
                >
                  US Contractors
                </p>
              </li>
              <li className="mr-2">
                <p
                  className="inline-block p-4 rounded-t-lg active hover:text-neutral-600 hover:border-neutral-300"
                  aria-current="page"
                >
                  Non US Contractors
                </p>
              </li>
            </ul>
          </div>
           
          <div className="flex gap-4">
            <div className="block w-full p-6 bg-white border border-neutral-200 rounded-lg">
              <h5 className="mb-2 text-xl font-medium text-neutral-900">
                1099-NEC Forms
              </h5>
              <div className="flex gap-4">
              <div className="border border-neutral-200 p-4 rounded-lg">
                <img
                  className="h-auto max-w-full"
                  src="/image 5.png"
                  alt="image description"
                />
                <div className="flex mt-2 gap-4">
                  <div>
                    <p className="text-base font-medium text-neutral-800">4</p>
                    <p className="text-sm font-normal text-neutral-500">
                      US Contractors
                    </p>
                  </div>
                  <div>
                    <p className="text-base font-medium text-neutral-800">4</p>
                    <p className="text-sm font-normal text-neutral-500">
                      Contractors Eligible
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-neutral-200 p-4 rounded-lg w-36">
                <img
                  className="h-auto max-w-full"
                  src="/check.svg"
                  alt="image description"
                />
                <div className="flex mt-2 gap-4">
                  <div>
                    <p className="text-base font-medium text-neutral-800">1</p>
                    <p className="text-sm font-normal text-neutral-500">
                      Filed Already
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-neutral-200 p-4 rounded-lg w-36 border-red-200 bg-red-50">
                <img
                  className="h-auto max-w-full"
                  src="/unfiled.svg"
                  alt="image description"
                />
                <div className="flex mt-2 gap-4">
                  <div>
                    <p className="text-base font-medium text-neutral-800">2</p>
                    <p className="text-sm font-normal text-neutral-500">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
          
<div className="w-full p-5 bg-white border border-neutral-200 rounded-lg mt-4">
  <div className="flex autolayout mb-2">
  <img
                  className="h-auto max-w-full"
                  src="/warning.svg"
                  alt="image description"
                />
    <h5 className="ml-2 text-base font-normal text-neutral-900">Non-US contractors are required to file W-8 forms to the IRS</h5>
    </div>
    <p className="text-base thera-blue text-neutral-500">Learn more</p>
</div>

          <div className="flex gap-4 mt-4">
            
            <div className="block w-full p-6 bg-white border border-neutral-200 rounded-lg">
              <h5 className="mb-2 text-xl font-medium text-neutral-900">
              W-8 Forms
              </h5>
              <div className="flex gap-4">
              <div className="border border-neutral-200 p-4 rounded-lg">
                <img
                  className="h-auto max-w-full"
                  src="/nonuscontract.svg"
                  alt="image description"
                />
                <div className="flex mt-2 gap-4">
                  <div>
                    <p className="text-base font-medium text-neutral-800">4</p>
                    <p className="text-sm font-normal text-neutral-500">
                      2 International Contractors
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-neutral-200 p-4 rounded-lg w-36">
                <img
                  className="h-auto max-w-full"
                  src="/check.svg"
                  alt="image description"
                />
                <div className="flex mt-2 gap-4">
                  <div>
                    <p className="text-base font-medium text-neutral-800">1</p>
                    <p className="text-sm font-normal text-neutral-500">
                      Filed Already
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-neutral-200 p-4 rounded-lg w-36 border-red-200 bg-red-50">
                <img
                  className="h-auto max-w-full"
                  src="/unfiled.svg"
                  alt="image description"
                />
                <div className="flex mt-2 gap-4">
                  <div>
                    <p className="text-base font-medium text-neutral-800">2</p>
                    <p className="text-sm font-normal text-neutral-500">
                      Pending
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
