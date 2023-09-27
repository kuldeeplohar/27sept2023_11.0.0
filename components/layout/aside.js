import React from 'react'


export default function aside() {
  return (
    <aside className='col-3 h-100 p-0 '>
         
            <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/city">City</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/island">Island</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="food">Food</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="flight" tabindex="-1" aria-disabled="true">flight</a>
                  </li>
            </ul>
   </aside>
  )
}
