import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-around border items-center p-4'>
                <div className=''>
                    <p>LOGOO</p>
                </div>
                <div className='border-2'>
                    <div>
                        <input type="text" />
                        <button>search icon</button>
                    </div>
                </div>
                <div className='w-[40.33%] '>
                    <ul className='flex justify-between items-center border-2'>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/note">Notes</Link>
                        </li>
                        <li>
                            <Link href="/subscribe">
                                <button className='border border-black rounded-xl w-[100px] h-[40px] hover:bg-black hover:text-white'>Subscribe</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar
