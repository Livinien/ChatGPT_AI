<?php include 'assets/header.php';?>
    <body class="position-relative d-flex bg-dark text-white" style="min-width: 360px;">
    <!-- SIDE MENU (OFFCANVAS)-->
    <nav id="navbar" class="navbar navbar-expand-md vh-100 col-md-3 col-xl-2">
        <div class="offcanvas offcanvas-bg-color offcanvas-start text-bg-dark w-75" data-bs-backdrop="static" tabindex="-1">
            <div class="offcanvas-header position-absolute end-0 d-md-none">
                <button type="button" class="position-absolute rounded-0 btn-close btn-close-white p-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between vh-100 p-0">
                <div id="newChatBtn" class="p-2">
                    <a href="./index.php" class="d-flex align-items-center text-white btn btn-outline-secondary w-100 d-flex col-align-self-start m-0"><span class="fs-4 ms-1 me-3">+</span><span class="fs-6">New chat</span></a>
                </div>
                
                <div id="nav" class="w-100 p-2">  
                    <hr class="bg-danger border-2 border-top border-dark-subtle">
                    <div class="form-check form-switch align-self-start col-1 ms-1" style="width: fit-content;">
                        <input class="form-check-input" style="cursor: pointer;" type="checkbox" id="debugBox">
                        <label class="form-check-label" for="debugBox">Débug mode</label>
                    </div>
                    <div class="form-check form-switch align-self-start col-1 ms-1" style="width: fit-content;">
                        <input class="form-check-input" style="cursor: pointer;" type="checkbox" id="grootBox">
                        <label class="form-check-label" for="grootBox">Groot mode</label>
                    </div>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i class="bi bi-moon pe-2"></i>Dark mode</a>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i class="bi bi-discord pe-2"></i>OpenAI Discord</a>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i class="bi bi-box-arrow-up-right pe-2"></i>Updates & FAQ</a>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i class="bi bi-box-arrow-right pe-2"></i>Log out</a>
                </div>
            </div>
        </div>
    </nav>
        <main class="bg-primary position-relative col-12 col-md-9 col-xl-10 d-flex flex-column justify-content-between">  
        <div id="main" class="col-12" > 
        </div>
            <section id="chatGpt" class="col-11 col-lg-10 col-xl-8 col-xxl-6 mx-auto mt-sm-5 pt-sm-5">

                <h1 class="text-start text-sm-center m-5 fw-bold">ChatGPT</h1>
                <div class="d-flex justify-content-evenly text-center fs-7">
                    <div class="d-flex flex-column col-4 mb-5 ">  

                        <i class="bi bi-sun fs-4"></i>
                        <h2 class="fs-5 my-3">Examples</h2>
                        <div class="d-inline bg-secondary-subtle m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3">
                            "Explain quantum computing in simple terms" <i class="bi bi-arrow-right"></i>
                        </div>
                        <div class="d-inline bg-secondary-subtle m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3">
                            "Got any creative ideas for a 10 year old's birthday" <i class="bi bi-arrow-right"></i> 
                        </div>
                        <div class="d-inline bg-secondary-subtle m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3">
                            "How do I make an HTTP request in Javascript?" <i class="bi bi-arrow-right"></i>
                        </div>
                    </div>
                    <div class="d-flex flex-column col-4 mb-5">  
                        <i class="bi bi-lightning-charge fs-4"></i>
                        <h2 class="fs-5 my-3">Capabilities</h2>
                        <div class="d-inline bg-secondary-subtle m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3" >
                            Remembers what user said earlier in the conversation
                        </div>
                        <div class="d-inline bg-secondary-subtle m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3">
                            Allows user to provide follow-up corrections
                        </div>
                        <div class="d-inline bg-secondary-subtle m-1 m-md-2 rounded-3 px-1 px-sm-2  py-1 py-sm-3">
                            Trained to decline inappropriate requests                        
                        </div>
                    </div>
                    <div class="d-flex flex-column col-4 mb-5">
                        <i class="bi bi-exclamation-triangle fs-4"></i> 
                        <h2 class="fs-5 my-3">Limitations</h2>
                        <div class="d-inline bg-secondary-subtle m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3">
                            May occasionally generate incorrect information
                        </div>
                        <div class="d-inline bg-secondary-subtle m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3">
                            May occasionally produce harmful instructions or biased content
                        </div>
                        <div class="d-inline bg-secondary-subtle m-1 m-md-2 rounded-3 px-1 px-sm-2 py-1 py-sm-3">
                            Limited knowledge of world and events after 2021
                        </div>
                    </div>
                </div>
            </section>

            <!-- INPUT -->
            <section id="input-section" class="col-11 col-md-10 col-xl-7 d-flex align-items-center justify-content-end flex-column mx-auto">
                <form id="input-container" class="d-flex align-self-center justify-content-between col-12 border-0 rounded-3 bg-secondary-subtle shadow bs-1 p-1 mx-2 mx-sm-0">
                    <input id="input" class="col-11 border-0 h-100 text-light bg-dark bg-transparent fs-6 p-1 p-md-2 border-0">                    
                    <div class="col-1 d-flex ps-0 ps-sm-5 ">
                        <button id="sendBtn" class="border-0 bg-transparent">
                            <svg id="Group_10235" data-name="Group 10235" xmlns="http://www.w3.org/2000/svg" fill="#ffffff8a" width="18" height="18" viewBox="0 0 173.64 149.826">
                                <path id="Path_8370" data-name="Path 8370" d="M163.3,94.537,23.2,36.4A16.767,16.767,0,0,0,.529,56.035L13,104.936H74.053a5.087,5.087,0,0,1,0,10.175H13l-12.47,48.9A16.768,16.768,0,0,0,23.2,183.643l140.1-58.132a16.767,16.767,0,0,0,0-30.974Z" transform="translate(-0.001 -35.111)"/>
                            </svg>
                        </button>
                        
                    </div>
                </form>
                <p class="col-12 text-white-50 m-1 m-lg-2 text-center" style="font-size:13px"><span class="text-decoration-underline">ChatGPT Dec 15 Version</span>. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
            </section>
        </main>
<?php 
include 'assets/modal.php';
include 'assets/footer.php';
?>
