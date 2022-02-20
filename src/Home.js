import Counter from "./Counter";
import Mintbtn from "./mintbtn.js";
import "@google/model-viewer"
import modelfile from "./images/apartment.glb"
import plot from "./images/plot.png"
import voucher from "./images/voucher.png"
import land from "./images/land.png"
import rob from "./images/rob.png"
import rue from "./images/rue.png"
import ben from "./images/ben.png"
import logo from "./images/footlogo.png"
import telegram from "./images/telegram.png"
import instagram from "./images/instagram.png"
import btc from "./images/btc.png"
import m1 from "./images/1.png"
import m2 from "./images/2.png"
import m3 from "./images/3.png"
import m4 from "./images/4.png"
import s1 from "./images/s1.png"
import s2 from "./images/s2.png"
import s3 from "./images/s3.png"
import s4 from "./images/s4.png"
import applevoucher from "./images/applevoucher.png"
import metamaskguide from "./images/METAMASKWALLET.pdf"
import howto from "./images/howto.pdf"

const endDate = new Date("December 19, 2021 16:00:00").getTime();
const today = new Date().getTime();
const timeDiff = endDate - today;
// console.log(timeDiff);

function Home(){
  return(
    <div>
      <div className="hero">
        <div className="mynavbar mb-3">
          <img className="topleftlogo pb-1 mx-md-0x d-block" src={logo} />
        </div>
        <div className="container">
        <Counter />
          {
            timeDiff < 0 ? <Mintbtn /> : ''
          }
          {/* <Mintbtn /> */}
          <model-viewer src={modelfile} camera-controls auto-rotate class="modelviewer"></model-viewer>
        </div>
      </div>
      <div className="roadcontainer">
        <div className="container pt-5 pb-5 text-white">
          <div className="row introrow mx-auto">
            <div className="col-12 col-md-12 pt-3 herotext">
              <h1 className="headtext text-md-left0 text-center">
                Welcome to Decentraland Property 3D NFTs
              </h1>
              <p className="paratext text-md-left0 text-center">
                We create 3D NFT Properties which you can Place on a Decentraland plot or Sandbox plot. Decentraland Property has greater ambitions and NFT holders will be participants in this journey.
              </p>
            </div>
          </div>
          <div className="row socials">
            <div className="col-3 text-right"><a href="https://t.me/decentralandproperty"><img className="footicon" src={telegram} /></a></div>
            <div className="col-3 text-left"><a href="https://www.instagram.com/decentralandpropertynft/?hl=en"><img className="footicon" src={instagram} /></a></div>
          </div>
          <div className="row mt-5">
            <div className="col-12 mt-5">
              <h1 className="headtext text-center">Roadmap</h1><br /><br />
            </div>
          </div>
          <div className="row milestone">
            <div className="col-5 rightText"><img src={plot} /></div>
            <div className="col-1">
              <div className="mdiv mx-auto"></div>
              <div class="mdev mx-auto"></div>
            </div>
            <div className="col-5">
              <h3>10th of December 2021</h3>
              Mint on opensea.io <br />
              Then list your NFT 3D property on your Decentraland.org plot or estate
            </div>
          </div>
          <div className="row milestone">
            <div className="col-5 rightText">
              <h3>@ 10% minting</h3>
              25 free crypt course vouchers <br /> face to face meetups
            </div>
            <div className="col-1">
              <div className="mdiv mx-auto"></div>
              <div class="mdev mx-auto"></div>
            </div>
            <div className="col-5"><img src={voucher} /></div>
          </div>
          <div className="row milestone">
            <div className="col-5 rightText"><img src={applevoucher} /></div>
            <div className="col-1">
              <div className="mdiv mx-auto"></div>
              <div class="mdev mx-auto"></div>
            </div>
            <div className="col-5">
              <h3>@ 30% minting</h3>
              5 x iphone 12’s
            </div>
          </div>
          <div className="row milestone">
            <div className="col-5 rightText">
              <h3>@ 50 minting</h3>
              1 x bitcoin
            </div>
            <div className="col-1">
              <div className="mdiv mx-auto"></div>
              <div class="mdev mx-auto"></div>
            </div>
            <div className="col-5"><img src={btc} /></div>
          </div>
          <div className="row milestone">
            <div className="col-5 rightText"><img src={land} /></div>
            <div className="col-1">
              <div className="mdiv mx-auto"></div>
              <div class="mdev mx-auto"></div>
            </div>
            <div className="col-5">
              <h3>@ 100% minting</h3>
              Upon 100% NFT sales, we will acquire a land plots in the Decentraland and Sandbox Metaverses. 10 x Lucky NFT  holders will get to own 49% of 1 full plot of land.
              <br />
              The remaining land and 51% will be owned by the provider, who will rent out the land and pay a distribution to all NFT holders, quarterly or annually.
            </div>
          </div>
        </div>
      </div>
      <div className="faqs">
        <div className="container pt-5 pb-5 text-white">
          <div className="row">
            <div className="col-12">
              <h1 className="headtext text-center">FAQ</h1><br />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div class="accordion accordion-flush mb-4">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      <h5><b>How much is a Decentraland Property NFT</b></h5>
                    </button>
                  </h2>
                  <div id="faq1" class="accordion-collapse collapse">
                    <div class="accordion-body">A Decentraland Property NFT 3D is 0.5 Ether ( priced in matic )</div>
                  </div>
                </div>
              </div>
              <div class="accordion accordion-flush mb-4">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      <h5><b>What can I do with my Decentraland Property NFT</b></h5>
                    </button>
                  </h2>
                  <div id="faq2" class="accordion-collapse collapse">
                    <div class="accordion-body">You can collect them and resell them on www.opensea.io If you own land on http://www.Decentraland.org , you can place this property, and like in the Metaverse, you can live in it and interact with it on Decentraland and other Virtual worlds that allow you to install our NFTs</div>
                  </div>
                </div>
              </div>
              <div class="accordion accordion-flush mb-4">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      <h5><b>When can I mint NFT 3D properties?</b></h5>
                    </button>
                  </h2>
                  <div id="faq3" class="accordion-collapse collapse">
                    <div class="accordion-body">The pre-sale starts 7th of December so register and the minting is live on Friday the 10th of December 2021</div>
                  </div>
                </div>
              </div>
              <div class="accordion accordion-flush mb-4">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      <h5><b>What are the Royalties for NFT Decentraland properties?</b></h5>
                    </button>
                  </h2>
                  <div id="faq4" class="accordion-collapse collapse">
                    <div class="accordion-body">15% paid to Decentraland Property and 85% to the property owner</div>
                  </div>
                </div>
              </div>
              <div class="accordion accordion-flush mb-4">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                      <h5><b>What are plots, land or Virtual Land?</b></h5>
                    </button>
                  </h2>
                  <div id="faq5" class="accordion-collapse collapse">
                    <div class="accordion-body">You can buy virtual land on www.decentraland.org or The Sandbox Game – User-Generated Crypto & Blockchain Games And many other virtual worlds</div>
                  </div>
                </div>
              </div>
              <div class="accordion accordion-flush mb-4">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                      <h5><b>Which Wallets and coins can I pay with ?</b></h5>
                    </button>
                  </h2>
                  <div id="faq6" class="accordion-collapse collapse">
                    <div class="accordion-body">We suggest you use either <br />
                      1) https://metamask.io <br />
                      2) www.trustwallet.com <br />
                      they support NFTs
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion accordion-flush mb-4">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7">
                      <h5><b>Who are the creators?</b></h5>
                    </button>
                  </h2>
                  <div id="faq7" class="accordion-collapse collapse">
                    <div class="accordion-body">Decentraland property are not related to Decentraland.org, we are 3D property builders who specialise in 3D property development, NFT and crypto projects</div>
                  </div>
                </div>
              </div>
              <div class="accordion accordion-flush mb-4">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq8">
                      <h5><b>METAMASK WALLET SETUP FOR NFTS POLYGON (MATIC) FUNDING?</b></h5>
                    </button>
                  </h2>
                  <div id="faq8" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <div className="container">
                        <div className="row">
                          <div className="col-6 col-md-3">
                            <img src={m1}  className="faqsnap " />
                          </div>
                          <div className="col-6 col-md-3">
                            <img src={m2}  className="faqsnap " />
                          </div>
                          <div className="col-6 col-md-3">
                            <img src={m3}  className="faqsnap " />
                          </div>
                          <div className="col-6 col-md-3">
                            <img src={m4}  className="faqsnap " />
                          </div>
                        </div>
                      </div>
                      <a href={metamaskguide} className="d-block text-center text-white text-decoration-none mt-3 mint-btn mx-auto mb-3" target="_blank">Download Metamask Guide</a>
                  </div>
                  </div>
                </div>
              </div>
              <div class="accordion accordion-flush mb-4">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq9">
                      <h5><b>HOW TO LOAD UP YOUR DECENTRALAND PROPERTY 3D NFT</b></h5>
                    </button>
                  </h2>
                  <div id="faq9" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <div className="container">
                          <div className="row">
                            <div className="col-6 col-md-3">
                              <img src={s1}  className="faqsnap " />
                            </div>
                            <div className="col-6 col-md-3">
                              <img src={s2}  className="faqsnap " />
                            </div>
                            <div className="col-6 col-md-3">
                              <img src={s3}  className="faqsnap " />
                            </div>
                            <div className="col-6 col-md-3">
                              <img src={s4}  className="faqsnap " />
                            </div>
                          </div>
                        </div>
                      <a href={howto} className="d-block text-center text-white text-decoration-none mt-3 mint-btn mx-auto mb-3" target="_blank">Download Property Guide</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container pt-5 pb-5 text-white">
          <div className="row">
            <div className="col-12">
              <h1 className="headtext text-center">THE TEAM</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 pt-5">
              <img src={rob} className="teamimg" />
              <h4 className="text-center pt-3"><b>Rob Joseph</b></h4>
              <h6 className="text-center"><b>Founder, Crypto Creator, Educator and Investor</b></h6>
            </div>
            <div className="col-sm-4 pt-5">
              <img src={rue} className="teamimg" />
              <h4 className="text-center pt-3"><b>Designer Rue C</b></h4>
              <h6 className="text-center"><b>All round creative genius and fun guy</b></h6>
            </div>
            <div className="col-sm-4 pt-5">
              <img src={ben} className="teamimg" />
              <h4 className="text-center pt-3"><b>Ben Seal</b></h4>
              <h6 className="text-center"><b>Communications and Media</b></h6>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        
        <img className="footlogo pt-4 mx-auto d-block" src={logo} />
        <small className="text-center text-off-white d-block pt-2 pb-2">DECENTRALAND PROPERTY IS A 3D NFT Property Creator 2,000 3D NFTS MINTABLE ON OPENSEA using a Metamask or Trust wallet with polygon network enabled.</small>
      </div>
    </div>
  );
}

export default Home;