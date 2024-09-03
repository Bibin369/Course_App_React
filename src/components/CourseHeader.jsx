import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const CourseHeader = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Course Application</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Add Course</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="delete">Delete Course</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="search">Search Course</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="view">View All Course</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default CourseHeader