import React from 'react'

function Login() {
  return (
<div> 
    <div id="section1">
        <nav class="navbar navbar-expand-lg bg-body-dark">
            <div class="container">
                <div class="d-inline-block navbar-brand">
                    <img src="./Logonetflix.png" alt="logo" id="logo" class="mt-2 mx-5" />
                </div>

                <div class="d-inline-flex">
                    <span
                        class="material-symbols-outlined position-absolute fs-6 fw-bold m-2 text-light">translate</span>
                    <select title="lang" class="px-4 py-1 fw-bold bg-dark text-light bg-opacity-75">
                        <option class="bg-light text-dark">English</option>
                        <option class="bg-light text-dark">हिंदी</option>
                    </select>
                    <input type="button" class="ms-4 px-3 fw-bold p-auto btn-danger txt-light btn" value="Sign In" />
                </div>

            </div>
        </nav>

        <div class="position-absolute top-50 start-50 translate-middle w-75 text-light text-center">

            <div class="row">
                <p class="heading fs-1">Unlimited movies, TV shows and more</p>
            </div>

            <div class="row">
                <p class="fs-4">
                    Watch anywhere. Cancel anytime.
                </p>
            </div>

            <div class="row">
                <p class="fs-5">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
            </div>

            <div class="row d-inline-flex w-75">

                <div class="form-floating mb-3 me-0 p-0 w-75 opacity-75" data-bs-theme="dark">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="d-inline-flex w-25 h-50">
                    <input type="button" value="Get Started >" class="px-4 py-3 fw-bold btn-danger btn text-light" />
                </div>
            </div>

        </div>
    </div>

    <hr class="m-0 py-1 bg-secondary opacity-100" />

    <div class="sections">
        <div class="container">
            <div class="row align-items-center">
                {/* <!-- Left section --> */}
                <div class="d-inline-block col-6 text-light align-middle">
                    <p class="heading">Enjoy on your TV</p>
                    <p class="fs-4 text">
                        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                    </p>
                </div>
{/* 
                <!-- Right section -->
                <!-- tv image --> */}
                <div class="d-inline-block col-6 p-4">
                    <img src="./tv.png" alt="tv" class="ps-1" />


                    {/* <!-- tv video --> */}
                    <div class="z-n1 position-absolute top-100 pt-4">
                        <video src="./video-tv-in-0819.m4v" autoplay loop muted
                            class="mt-5 ms-5 p-5"></video>
                    </div>
                </div>
            </div>

        </div>

    </div>



    <hr class="m-0 py-1 bg-secondary opacity-50" />


    <div class="sections">
        <div class="container">
            <div class="row align-items-center">
                {/* <!-- Left section --> */}
                <div class="d-inline-block col-6 p-4">
                    <img src="./mobile-0819.jpg" alt="mobile" />

                    <div class="position-absolute bg-black row border border-2 border-secondary rounded-4 mt-0 box1"
                        style="top: 1450px;">
                        <div class="col-3">
                            <img src="./boxshot.png" alt="" class="h-50 py-2 ms-2" />
                        </div>

                        <div class="col-6">
                            <p class="text-light pt-2 mt-2 fs-6 fw-semibold lh-sm">
                                "Stranger Things"
                                <span class="text-primary fw-normal">Downloading...</span>
                            </p>
                        </div>

                        <div class="col-3">
                            <img src="./download-icon.gif" alt="" class="w-100 py-4" />
                        </div>

                    </div>
                </div>


                <div class="d-inline-block col-6 text-light">
                    <p class="heading">
                        Download your shows to watch offline
                    </p>

                    <p class="fs-4 text">
                        Save your favourites easily and always have something to watch.
                    </p>

                </div>
            </div>
        </div>
    </div>

    <hr class="m-0 bg-secondary opacity-25 py-1" />

    {/* <!-- 4th Section --> */}
    <div class="sections">
        <div class="container">
            <div class="row">
                {/* <!-- Left Section --> */}
                <div class="d-inline-block col-6 text-light align-middle mt-5">
                    <p class="heading pt-5">
                        Watch everywhere
                    </p>
                    <p class="fs-4 text">
                        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                    </p>
                </div>

                {/* <!-- Right Section --> */}

                <div class="col-6 ">

                    <img src="./device-pile-in.png" alt="" />


                    <div class="z-n1 position-absolute mx-5 p-5" style="margin-top: -39%;">
                        <video src="./video-devices-in.m4v" autoplay loop muted class="w-75 m-5 pe-5"></video>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <hr class="m-0 bg-secondary opacity-25 py-1" />


    <div class="sections">
        <div class="container">
            <div class="row align-items-center">
                {/* <!-- Left Section --> */}
                <div class="d-inline-block col-6 p-5">
                    {/* <!-- Mobile Image --> */}
                    <img src="./children.png" alt="" />
                </div>

                {/* <!-- Right Section --> */}
                <div class="d-inline-block col-6 text-light">
                    <p class="heading">
                        Create profiles for kids
                    </p>
                    <p class="fs-4 text">
                        Send children on adventures with their favourite characters in a space made just for them—free
                        with your membership.
                    </p>
                </div>

            </div>

        </div>
    </div>

    <hr class="m-0 bg-secondary opacity-25 py-1" />

    {/* <!-- 4th Section --> */}

    <div class="container d-block">
        {/* <!-- Heading Section --> */}
        <div class="text-light bg-black">
            <p class="heading text-center mt-5 ms-5" style="margin-left: 100px;">Frequently Asked Questions</p>
        </div>

        {/* <!-- Accordion --> */}
        <div class="accordion accordion-flush align-content-center" id="accordionExample" data-bs-theme="dark">
            <div class="accordion-item mt-5 ms-5">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        What is Netflix?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies,
                        anime, documentaries and more-on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want, without a single ad - all for one low
                        monthly price. There's always something new to discover, and new TV shows and movies are added
                        every week!</div>
                </div>
            </div>
            <div class="accordion-item mt-3 ms-5">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How much does Netflix cost?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one
                        fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                    </div>
                </div>
            </div>
            <div class="accordion-item mt-3 ms-5">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Where can I watch?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
                        netflix.com from your personal computer or on any internet-connected device that offers the
                        Netflix app, including smart TVs, smartphones, tablets, streaming media players and game
                        consoles.

                        You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use
                        downloads to watch while you're on the go and without an internet connection. Take Netflix with
                        you anywhere.

                        How do I cancel?
                    </div>
                </div>
            </div>
            <div class="accordion-item mt-3 ms-5">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How do I cancel?
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel
                        your account online in two clicks. There are no cancellation fees-start or stop your account
                        anytime.
                    </div>
                </div>
            </div>
            <div class="accordion-item mt-3 ms-5">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        What can I watch on Netflix?
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                        Netflix originals, and more. Watch as much as you want, anytime you want.
                    </div>
                </div>
            </div>
            <div class="accordion-item mt-3 ms-5">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button"  data-bs-toggle="collapse"
                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Is Netflix good for kids?
                    </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        The Netflix Kids experience is included in your membership to give parents control while kids
                        enjoy family-friendly TV shows and films in their own space.

                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity
                        rating of content kids can watch and block specific titles you don't want kids to see.
                    </div>
                </div>
            </div>
        </div>

        <div class="position-relative mx-5 px-5">
            <div class="row">
                <p class="fs-5 text-bg-black text-light mt-5 text-center">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
            </div>



            <div class="position-relative start-50 w-75 translate-middle text-light text-center">
                <div class="row d-inline-flex w-50 mt-5 me-4">
                    <div class="form-floating mb-3 p-0 w-75 me-0 opacity-75" data-bs-theme="dark">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>


                    </div>
                    <div class="d-inline-flex w-25 h-50">
                        <input type="button" value="Get Started >"
                            class="px-4 py-3 fw-bold p-auto btn-danger txt-light btn" />
                    </div>

                </div>
            </div>
        </div>
    </div>

    <hr class="m-0 bg-secondary opacity-25 py-1" />



    <div class="align-content-center" style="height: 55vh;">


        <div class="container text-light opacity-75 bg-black">
            <div class="mt-5">
                <p>
                    Questions? Call <a class="link-light">000-000-000-0000</a>
                </p>
            </div>
        </div>

        <div class="row text-light opacity-75 m-4">

            <div class="col-3">
                <a class="link-light">FAQ</a>
            </div>

            <div class="col-3">
                <a class="link-light">Help Centre</a>
            </div>

            <div class="col-3">
                <a class="link-light">Account</a>
            </div>

            <div class="col-3">
                <a class="link-light">Media Centre</a>
            </div>

        </div>

        <div class="row text-light opacity-75 m-4">

            <div class="col-3">
                <a class="link-light">Investor Relations</a>
            </div>

            <div class="col-3">
                <a class="link-light">Jobs</a>
            </div>

            <div class="col-3">
                <a class="link-light">Ways to Watch</a>
            </div>

            <div class="col-3">
                <a class="link-light">Terms of Use</a>
            </div>

        </div>

        <div class="row text-light opacity-75 m-4">

            <div class="col-3">
                <a class="link-light">Privacy</a>
            </div>

            <div class="col-3">
                <a class="link-light">Cookie Preferences</a>
            </div>

            <div class="col-3">
                <a class="link-light">Corporate Information</a>
            </div>

            <div class="col-3">
                <a class="link-light">Contact Us</a>
            </div>

        </div>

        <div class="row text-light opacity-75 m-4">

            <div class="col-3">
                <a class="link-light">Speed Test</a>
            </div>

            <div class="col-3">
                <a class="link-light">Legal Notices</a>
            </div>

            <div class="col-3">
                <a class="link-light">Only on Netflix</a>
            </div>

            <div class="col-3">

            </div>

        </div>

        <div class="row txt-light m-4 w-25">


            <span class="material-symbols-outlined position-absolute w-25 fs-6 m-2 px-1 text-light">translate</span>

            <select title="lang" class="ms-1 ps-4 py-1 fw-semibold bg-dark text-light w-50 rounded-1">
                <option class="bg-light text-dark">English</option>
                <option class="bg-light text-dark">हिंदी</option>
            </select>

        </div>

        <div class="row text-light opacity-75 mt-4 ps-5">

            Netflix India

        </div>
    </div>
    



</div>
    
  )
}

export default Login
