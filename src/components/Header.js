import React from 'react'

// const Header = () => {
//     return (
//         <div>
//             <nav class="navbar navbar-dark bg-secondary">

//             <nav class="navbar navbar-light bg-info">
//   <a class="navbar-brand" href="#">
//     <img src="https://cdn.pixabay.com/photo/2020/11/14/19/01/elderly-5743157_1280.png" width="100" height="50" class="d-inline-block align-center" alt=""/>
//     Pension
//   </a>
//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <a class="navbar-brand" href="#">Navbar</a>

//   <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
//     <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav>
// </nav>
// <div class="pos-f-t">
//   <div class="collapse" id="navbarToggleExternalContent">
//     <div class="bg-dark p-4">
//       <h5 class="text-danger h4">Collapsed content</h5>
//       <span class="text-muted">Toggleable via the navbar brand.</span>
//     </div>
//   </div>
//   <nav class="navbar navbar-dark bg-dark">
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//   </nav>
// </div>


// </nav>


//    </div>
//     )
// }

// export default Header



const Header = () => {

    return (
        <header class="header sticky-top">
            <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-secondary">
                <div class="container">
                    <span className="navbar-brand" to="/">
                        <img src="https://cdn.pixabay.com/photo/2020/11/14/19/01/elderly-5743157_1280.png"
                            height="24px" alt="Pension" />Pension
                    </span>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li className="nav-item">
                                <span className="nav-link" to="/hello" >Bank</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" to="/emp" >Personal</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" to="/spring" >Pension</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" to="/register" >About</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
