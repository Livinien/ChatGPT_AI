<body class="position-relative d-flex bg-dark text-white" style="min-width: 360px;">
    <nav id="navbar" class="navbar navbar-expand-md vh-100 col-md-3 col-xl-2">
        <div class="offcanvas offcanvas-bg-color offcanvas-start text-bg-dark w-75" data-bs-backdrop="static"
            tabindex="-1">
            <div class="offcanvas-header position-absolute end-0 d-md-none">
                <button type="button" class="position-absolute rounded-0 btn-close btn-close-white p-2"
                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-between vh-100 p-0">
                <div id="newChatBtn" class="p-2">
                    <a href="./index.php"
                        class="d-flex align-items-center text-white btn btn-outline-secondary w-100 d-flex col-align-self-start m-0"><span
                            class="fs-4 ms-1 me-3">+</span><span class="fs-6">New chat</span></a>
                </div>

                <div id="nav" class="w-100 p-2">
                    <hr class="bg-danger border-2 border-top border-dark-subtle">
                    <div class="form-check form-switch align-self-start col-1 ms-1" style="width: fit-content;">
                        <input class="form-check-input" style="cursor: pointer;" type="checkbox" id="debugBox"
                            onclick="checkboxClicked(this)">
                        <label class="form-check-label" for="debugBox">Débug
                            mode</label>
                    </div>
                    <div class="form-check form-switch align-self-start col-1 ms-1" style="width: fit-content;">
                        <input class="form-check-input" style="cursor: pointer;" type="checkbox" id="grootBox"
                            onclick="checkboxClicked(this)">
                        <label class="form-check-label" for="grootBox">Groot
                            mode</label>
                    </div>
                    <script>
                    //Le mot clé (this) fait référence à l'élément qui a déclenché l'événement (l'élément sur lequel l'écouteur d'événement est attaché) lors de l'appel de la fonction en HTML avec un gestionnaire d'événement onclick. Dans ce cas, cela fait référence à l'élément case à cocher sur lequel vous avez cliqué, vous permettant d'accéder à ses propriétés telles que id et coché.
                    function checkboxClicked(checkbox) {
                        let debugBox = document.getElementById("debugBox");
                        let grootBox = document.getElementById("grootBox");

                        if (checkbox.id === "debugBox") {
                            grootBox.checked = false;
                        } else {
                            debugBox.checked = false;
                        }
                    }
                    </script>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button" id="darkLight"><i
                            class="bi bi-moon pe-2"></i>Light mode</a>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i
                            class="bi bi-discord pe-2"></i>OpenAI Discord</a>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i
                            class="bi bi-box-arrow-up-right pe-2"></i>Updates & FAQ</a>
                    <a class="btn btn-dark d-flex col-align-self-start" href="#" role="button"><i
                            class="bi bi-box-arrow-right pe-2"></i>Log out</a>
                </div>
            </div>
        </div>
    </nav>