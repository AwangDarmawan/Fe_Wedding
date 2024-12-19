import React from 'react'

function Tujuh() {
  return (
    <>
       {/* bayar */}
    <div className="flex flex-col items-center px-4 py-8 lg:px-20 bg-white dark:bg-slate-900">
  <h2 className="text-gold  text-2xl font-bold mb-4 font-Montserrat">Give a Gift</h2>
  <p className="text-gray-600 text-center mb-8 font-Montserrat dark:text-darkgold">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, ipsum erat pretium.
  </p>

  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-full max-w-5xl">
    {/* <!-- Digital Wallet Section --> */}
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h3 className="text-gold font-Montserrat text-xl font-semibold mb-4">Digital Wallet</h3>
      <div className="space-y-4">
        {/* <!-- Account 1 --> */}
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
          <div>
            <p className="text-gray-700 font-semibold font-Montserrat">Reja Jafar</p>
            <p className="text-gray-700 dark:text-gold font-Montserrat font-semibold text-sm">009 - 0222 2444 21</p>
          </div>
          {/* <button class="text-pink-600">
            <i className="bi bi-clipboard"></i>
          </button> */}
        </div>
        {/* <!-- Account 2 --> */}
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
          <div>
            <p className="text-gray-700  font-semibold font-Montserrat ">Evi Amanda</p>
            <p className="text-sm text-gray-700  dark:text-gold font-Montserrat font-semibold ">009 - 0222 2444 21</p>
          </div>
          {/* <button class="text-pink-600">
            <i className="bi bi-clipboard"></i>
          </button> */}
        </div>
      </div>
    </div>

    {/* <!-- Offline Gift Section --> */}
    <div className="bg-white shadow-md p-6 rounded-lg dark:bg-slate-900 ">
      <h3 className="text-gold text-xl font-semibold mb-4">Offline Gift</h3>
      <p className="text-gray-700 font-semibold dark:text-darkgold mb-4 font-Montserrat">
        Jl. Kp.Halimun RT 003 RW 004 Desa.Warudoyong Kecamatan Cikalongkulon
      </p>
      <button className="bg-darkgold text-white px-4 py-2 rounded-lg font-Montserrat">
        <i className="bi bi-geo-alt"></i> Open Map
      </button>
    </div>
  </div>
</div>
    </>
  )
}

export default Tujuh
