<template>
    <div class="wallet-modal modal fade" id="wallet-option" tabindex="-1" aria-labelledby="choose-wallet"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="choose-wallet">Connect Your Wallet</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Please select a wallet from below to connect for Launching yourIDO's</p>
                    <ul class="wallet__list">
                        <li class="wallet__list-item"><a href="#"> <span><img src="/images/wallet/metamask.svg"
                                        alt="metamask">
                                </span> </a></li>
                        <li class="wallet__list-item"><a href="#"> <span><img src="/images/wallet/coinbase.svg"
                                        alt="coinbase">
                                </span> </a></li>
                        <li class="wallet__list-item"><a href="#"> <span><img src="/images/wallet/bitski.svg"
                                        alt="bitski">
                                </span></a></li>
                        <li class="wallet__list-item"><a href="#"> <span><img src="/images/wallet/venly.svg"
                                        alt="venly Wallet">
                                </span></a></li>
                        <li class="wallet__list-item"><a href="#"> <span><img src="/images/wallet/wallet-connect.svg"
                                        alt=" Wallet connect">
                                </span></a></li>
                    </ul>
                    <p>By connecting your wallet, you agree to our <a href="#">Terms of Service</a> and our <a
                            href="#">Privacy Policy</a> .</p>
                </div>
            </div>
        </div>
    </div>
</template>