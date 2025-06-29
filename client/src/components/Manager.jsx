import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])

  const copyText = (text) => {
    toast('🦄 Copied to Clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: "Bounce",
    });

    navigator.clipboard.writeText(text)
  }

  const showPassword = () => {
    passwordRef.current.type = 'text'
    if (ref.current.src.includes('/hide.png')) {
      ref.current.src = '/eye.png'
      passwordRef.current.type = 'password'
    } else {
      ref.current.src = '/hide.png'
      passwordRef.current.type = 'text'
    }
  }

  const savePassword = () => {
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log(passwordArray)
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce" />

      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

      <div className="mycontainer">
        <h1 className='text-2xl text font-bold text-center'><span className='text-green-500'>&lt;</span>
          <span>Pass</span>
          <span className='text-green-500'>OP/&gt;</span></h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

        <div className="flex flex-col p-4 text-black gap-6">
          <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-3 py-1' type="text" name='site' />
          <div className='flex w-full justify-between gap-6 items-center'>
            <input value={form.username} onChange={handleChange} placeholder="Enter Username" className='rounded-full border border-green-500 w-full p-3 py-1' type="text" name='username' />

            <div className='relative'>
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder="Enter Password" className='rounded-full border border-green-500 w-full p-3 py-1' type="password" name='password' />
              <span className='absolute top-[3px] right-[1px] cursor-pointer' onClick={showPassword}>
                <img ref={ref} className="p-1" width={29} src="/eye.png" alt="eye" />
              </span>
            </div>

          </div>

          <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 rounded-full px-3 py-1 w-fit hover:border-2 border-green-900'>
            <lord-icon src="https://cdn.lordicon.com/efxgwrkc.json" trigger="hover"></lord-icon>
            Add Password</button>
        </div>

        <div className='passwords'>
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className='bg-green-800 text-white '>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className=' flex item-center justify-center py-2 border-white text-center'>
                    <div className='flex items-center justify-center'>

                      <a href={item.site} target='_blank'>{item.site}</a>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                        <lord-icon
                          style={{
                            "width": "25px",
                            "height": "25px",
                            "paddingTop": "3px",
                            "paddingLeft": "3px",
                          }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"></lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='justify-center py-2 border-white text-center w-32'>
                    <div className='flex items-center justify-center'>
                      <span>{item.username}</span>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                        <lord-icon
                          style={{
                            "width": "25px",
                            "height": "25px",
                            "paddingTop": "3px",
                            "paddingLeft": "3px",
                          }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover">
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='flex items-center justify-center  py-2 border-white text-center w-32'>
                    <div className='flex items-center justify-center'>
                      <span>{item.password}</span>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                        <lord-icon
                          style={{
                            "width": "25px",
                            "height": "25px",
                            "paddingTop": "3px",
                            "paddingLeft": "3px",
                          }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover"></lord-icon>
                      </div>
                    </div>
                  </td>
                </tr>

              })}
            </tbody>
          </table>}
        </div>

      </div>
    </>
  )
}

export default Manager
