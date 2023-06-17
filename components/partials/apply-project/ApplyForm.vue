<template>
    <section class="apply-project padding-top padding-bottom">
        <div class="container">
            <div class="section-header section-header--middle">
                <div class="section-header__content">
                    <div class="section-header__titlebar">
                        <h2 class="section__header__title">Please fill the form</h2>
                    </div>
                </div>
            </div>
            <div class="apply-project__wrapper">
                <form @submit="submit" class="apply-project__form">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8">

                            <!-- ========= Contact Info============= -->
                            <div class="apply-project__block mb-4">
                                <div class="apply-project__block-header">
                                    <h4>Contact Information</h4>
                                </div>
                                <div class="apply-project__block-content">

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="applyinfo-name"
                                            placeholder="Full Name" required>
                                        <label for="applyinfo-name">Full Name*</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="applyinfo-mail"
                                            placeholder="name@example.com" required>
                                        <label for="applyinfo-mail">Email*</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="applyinfo-title" placeholder="title"
                                            required>
                                        <label for="applyinfo-title">Title*</label>
                                    </div>
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="applyinfo-telegram"
                                            placeholder="Telegram user" required>
                                        <label for="applyinfo-telegram">Telegram User</label>
                                    </div>
                                </div>
                            </div>

                            <!-- =========== Project Info ========= -->
                            <div class="apply-project__block mb-5">
                                <div class="apply-project__block-header">
                                    <h4>Project Information</h4>
                                </div>
                                <div class="apply-project__block-content">

                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="project-name"
                                            placeholder="Project Name" required>
                                        <label for="project-name">Project Name*</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" placeholder="Project Description"
                                            id="project-description" required></textarea>
                                        <label for="project-description">Project Description *</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" placeholder="Project token" id="project-token"
                                            required></textarea>
                                        <label for="project-token">Token Information *</label>
                                    </div>

                                    <div class="form-floating mb-5">
                                        <input type="text" class="form-control" id="project-raise"
                                            placeholder="Project Raised ammount" required>
                                        <label for="project-raise">Target Raise Ammount *</label>
                                    </div>

                                    <div class="row g-3 mb-5">
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <select class="form-select" id="blockchain-select">
                                                    <option selected>BSC</option>
                                                    <option>Solana</option>
                                                    <option>Ethereum</option>
                                                    <option>Polkadot</option>
                                                    <option>Polygon</option>
                                                </select>
                                                <label for="blockchain-select">Select Chain</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <select class="form-select" id="status-select">
                                                    <option selected>Ready to launch</option>
                                                    <option>In early development</option>
                                                    <option>Idea with White Paper</option>
                                                    <option>Just an initial idea</option>
                                                </select>
                                                <label for="status-select">Project Status</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <select class="form-select" id="raised-fund">
                                                    <option selected>No</option>
                                                    <option>Yes</option>
                                                </select>
                                                <label for="raised-fund">Raised before ?</label>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-floating">
                                                <select class="form-select" id="project-type">
                                                    <option selected>IGO</option>
                                                    <option>IGO</option>
                                                    <option>IDO</option>
                                                    <option>IncubatedIDO</option>
                                                </select>
                                                <label for="project-type">Project Type</label>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- optional properties -->
                                    <div class="form-floating mb-3">
                                        <input type="url" class="form-control" id="project-website"
                                            placeholder="Website URL">
                                        <label for="project-website">Website URL </label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="url" class="form-control" id="project-whitepaper"
                                            placeholder="Whitepaper url">
                                        <label for="project-whitepaper"> Whitepaper URL</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="url" class="form-control" id="project-twitter"
                                            placeholder="Project Twitter">
                                        <label for="project-twitter"> Project Twitter</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="url" class="form-control" id="project-telegram"
                                            placeholder="Project Telegram">
                                        <label for="project-telegram"> Project Telegram</label>
                                    </div>

                                    <div class="form-floating mb-3">
                                        <input type="url" class="form-control" id="project-github"
                                            placeholder="Project github">
                                        <label for="project-github"> Project Github</label>
                                    </div>


                                </div>
                            </div>

                            <div class="text-center">
                                <button class="default-btn" type="submit"> <span>Submit Project</span> </button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </section>
</template>