import React from 'react'


export default function aside() {
  return (
    <aside className='col-3 h-100 p-0 '>
         
            <ul class="nav flex-column">
                  <li class="nav-item">
                    <link class="nav-link active" aria-current="page" href="/city">City</link>
                  </li>
                  <li class="nav-item">
                    <link class="nav-link" href="/island">Island</link>
                  </li>
                  <li class="nav-item">
                    <link class="nav-link" href="food">Food</link>
                  </li>
                  <li class="nav-item">
                    <link class="nav-link " href="flight" tabindex="-1" aria-disabled="true">flight</link>
                  </li>
            </ul>
   </aside>
  )
}
