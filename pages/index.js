import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({resume}) {
  //console.log(resume.database)
  return (
    <div>
      
  {/*::header part start::*/}
<header className="main_menu home_menu">
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-12">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="logo" /> </a>
        </nav>
      </div>
    </div>
  </div>
</header>
  {/* Header part end*/}
  {/* banner part start*/}
  <section className="banner_part">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="banner_text">
            <div className="banner_text_iner">
              <h1>{resume.database[1].judul}</h1>
              <p>{resume.database[1].desc}</p>
              <a href={resume.database[1].url} className="btn_banner">{resume.database[1].button}</a>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner_img">
      <img src={resume.database[1].img} alt="#" className="img-fluid" />
    </div>
  </section>
  {/* banner part start*/}
  {/* product list start*/}
  <section className="single_product_list">
    <div className="container">
      <div className="batas">
        <h2 className="best_seller">{resume.database[2].judul}</h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="single_product_iner">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-sm-6">
                <div className="single_product_img">
                  <img src={resume.database[2].product[0].img1} className="img-fluid" alt="#" />
                  <img src={resume.database[2].product[0].img2} alt="#" className="product_overlay img-fluid" />
                </div>
              </div>
              <div className="col-lg-5 col-sm-6">
                <div className="single_product_content">
                  <h5>{resume.database[2].product[0].harga}</h5>
                  <h2> <a href="single-product.html">{resume.database[2].product[0].nama}</a> </h2>
                  <a href={resume.database[2].product[0].url} className="btn_3">{resume.database[2].product[0].button}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product_iner">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-sm-6">
                <div className="single_product_img">
                  <img src={resume.database[2].product[1].img1} className="img-fluid" alt="#" />
                  <img src={resume.database[2].product[1].img2} alt="#" className="product_overlay img-fluid" />
                </div>
              </div>
              <div className="col-lg-5 col-sm-6">
                <div className="single_product_content">
                  <h5>{resume.database[2].product[1].harga}</h5>
                  <h2> <a href="single-product.html">{resume.database[2].product[1].nama}</a> </h2>
                  <a href={resume.database[2].product[1].url} className="btn_3">{resume.database[2].product[1].button}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="single_product_iner">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6 col-sm-6">
                <div className="single_product_img">
                  <img src={resume.database[2].product[2].img1} className="img-fluid" alt="#" />
                  <img src={resume.database[2].product[2].img2} alt="#" className="product_overlay img-fluid" />
                </div>
              </div>
              <div className="col-lg-5 col-sm-6">
                <div className="single_product_content">
                  <h5>{resume.database[2].product[2].harga}</h5>
                  <h2> <a href="single-product.html">{resume.database[2].product[2].nama}</a> </h2>
                  <a href={resume.database[2].product[2].url} className="btn_3">{resume.database[2].product[2].button}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* product list end*/}
  {/* trending item start*/}
  <section className="trending_items">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section_tittle text-center">
            <h2 className="produk">{resume.database[3].judul}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="single_product_item">
            <div className="single_product_item_thumb">
              <img src={resume.database[3].produk[0].img} alt="#" className="img-fluid" />
            </div>
            <h3> <a href="single-product.html">{resume.database[3].produk[0].text}</a> </h3>
            <a href="#" className="btn_7">{resume.database[3].produk[0].btn}</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single_product_item">
            <img src={resume.database[3].produk[1].img}  alt="#" className="img-fluid" />
            <h3> <a href="single-product.html">{resume.database[3].produk[1].text}</a> </h3>
            <a href="#" className="btn_7">{resume.database[3].produk[1].btn}</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single_product_item">
            <img src={resume.database[3].produk[2].img} alt="#" className="img-fluid" />
            <h3> <a href="single-product.html">{resume.database[3].produk[2].text}</a> </h3>
            <a href="#" className="btn_7">{resume.database[3].produk[2].btn}</a>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section_tittle text-center">
            <h2 className="produk">{resume.database[4].judul}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="single_product_item">
            <div className="single_product_item_thumb">
              <img src={resume.database[4].item[0].img} alt="#" className="img-fluid" />
            </div>
            <h3> <a href="single-product.html">{resume.database[4].item[0].desc} </a> </h3>
            <p>{resume.database[4].item[0].harga} </p>
            <a href="#" className="btn_7">{resume.database[4].item[2].btn}</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single_product_item">
            <img src={resume.database[4].item[1].img}  alt="#" className="img-fluid" />
            <h3> <a href="single-product.html">{resume.database[4].item[1].desc} </a> </h3>
            <p>{resume.database[4].item[1].harga} </p>
            <a href="#" className="btn_7">{resume.database[4].item[1].btn}</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single_product_item">
            <img src={resume.database[4].item[2].img}  alt="#" className="img-fluid" />
            <h3> <a href="single-product.html">{resume.database[4].item[2].desc} </a> </h3>
            <p>{resume.database[4].item[2].harga} </p>
            <a href="#" className="btn_7">{resume.database[4].item[2].btn}</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="single_product_item">
            <div className="single_product_item_thumb">
              <img src={resume.database[4].item[3].img}  alt="#" className="img-fluid" />
            </div>            
            <h3> <a href="single-product.html">{resume.database[4].item[3].desc} </a> </h3>
            <p>{resume.database[4].item[3].harga} </p>
            <a href="#" className="btn_7">{resume.database[4].item[3].btn}</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single_product_item">
            <img src={resume.database[4].item[4].img}  alt="#" className="img-fluid" />
            <h3> <a href="single-product.html">{resume.database[4].item[4].desc} </a> </h3>
            <p>{resume.database[4].item[4].harga} </p>
            <a href="#" className="btn_7">{resume.database[4].item[4].btn}</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="single_product_item">
            <img src={resume.database[4].item[5].img}  alt="#" className="img-fluid" />
            <h3> <a href="single-product.html">{resume.database[4].item[5].desc} </a> </h3>
            <p>{resume.database[4].item[5].harga} </p>
            <a href="#" className="btn_7">{resume.database[4].item[5].btn}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* client review part end */}
  {/* feature part here */}
  <section className="feature_part section_padding">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <div className="feature_part_tittle">
            <h3 className="fitur">{resume.database[5].judul}</h3>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="feature_part_content">
            <p>{resume.database[5].desc}</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-sm-6">
          <div className="single_feature_part">
            <img src={resume.database[5].fitur[0].img} alt="#" />
            <h4 className="warna">{resume.database[5].fitur[0].text}</h4>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single_feature_part">
            <img src={resume.database[5].fitur[1].img} alt="#" />
            <h4 className="warna">{resume.database[5].fitur[1].text}</h4>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="single_feature_part">
            <img src={resume.database[5].fitur[2].img} alt="#" />
            <h4 className="warna">{resume.database[5].fitur[2].text}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* subscribe part end */}
  {/*::footer_part start::*/}
  <footer className="footer_part">
    <div className="copyright_part">
      <div className="container">
        <div className="row ">
          <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8">
              <div className="footer_menu">
                <div className="footer_logo">
                  <a href="index.html"><img src="img/logo.png" alt="#" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="social_icon">
                <a href="#"><i className={resume.database[6].social[0].icon} /></a>
                <a href="#"><i className={resume.database[6].social[1].icon} /></a>
                <a href="#"><i className={resume.database[6].social[2].icon} /></a>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

  )
}
export async function getServerSideProps(context){
  const linkdb = 'https://backendapp-uas.herokuapp.com/';
  const respondb = await fetch(linkdb);
  const datajson = await respondb.json();
  
  return{
    props : {
      resume : datajson
    }
  }
}
