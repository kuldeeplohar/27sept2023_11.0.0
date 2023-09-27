import Link from 'next/link'
import React from 'react'



export default function aside() {
  return (
    <aside className='col-3 h-100 p-0 '>
         
            <ul class="nav flex-column">

                    <Link class="nav-link active" aria-current="page" href="/city">City</Link>

                    <Link class="nav-link" href="/island">Island</Link>

                    <Link class="nav-link" href="/food">Food</Link>

                    <Link class="nav-link " href="/flight" tabindex="-1" aria-disabled="true">flight</Link>
            </ul>
   </aside>
  )
}
