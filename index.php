<?php include_once './assets/header.php';?>

<body>
    <?php include_once './assets/navbar.php'; include_once './assets/modal.php'; ?>




    <!-- HOME -->

    <div class="container-right col col-lg-10 text-center" id="home">
        <div id="message"></div>

        <div id="title">

            <h1 class="mt-1">ChatGPT</h1>

            <div class="grid text-center">
                <div class="row mt-1">
                    <div class="col">
                        <i class="icone bi bi-brightness-high"></i><br>
                        <h6 class="title">Examples</h6>
                        <p class="subtitle_GPT mt-4">"Explain quantum computing in simple terms" <i
                                class="bi bi-arrow-right"></i></p>
                        <p class="subtitle_GPT mt-4">"Got any creative ideas for a 10 year old's birthday ?" <i
                                class="bi bi-arrow-right"></i></p>
                        <p class="subtitle_GPT mt-4">"How do i make an HTTP request in Javascript ?" <i
                                class="bi bi-arrow-right"></i></p>
                    </div>

                    <div class="col">
                        <i class="icone bi bi-lightning-charge"></i><br>
                        <h6 class="title">Capabilities</h6>
                        <p class="subtitle_GPT mt-4">"Remembers what user said earlier in the conversation"</p>
                        <p class="subtitle_GPT mt-4">"Allows user to provide follow-up corrections"</p>
                        <p class="subtitle_GPT mt-4">"Trained to decline inappropriate requests"</p>
                    </div>

                    <div class="col">
                        <i class="icone bi bi-exclamation-triangle"></i><br>
                        <h6 class="title">Limitations</h6>
                        <p class="subtitle_GPT mt-4">"May occasionally generate incorrect information"</p>
                        <p class="subtitle_GPT mt-4">"May occasionally produce harmful instructions or baised
                            content"</p>
                        <p class="subtitle_GPT mt-4">"Limited knowledge of world and events after 2021"</p>
                    </div>
                </div>
            </div>

            <!-- SEARCH BAR AND SUBTITLE -->

            <div class="input-group right-search mb-5">
                <input type="text" class="form-control input-right" aria-label="Recipient's username"
                    aria-describedby="button-addon2">
                <button class="btn btn-outline-secondary" type="button" id="button"><i class="bi bi-send"></i></button>
            </div>
        </div>

        <p class="subtitle-search"><a href="">ChatGPT Dec 15 Version</a>. Free Reseach Preview. Our goal is to
            make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
    </div>
    </div>
    </div>


    <?php include_once './assets/footer.php'; ?>


</body>

</html>