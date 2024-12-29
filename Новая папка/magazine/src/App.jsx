    import { useState } from 'react'
    import viteLogo from '/vite.svg'
    import img1 from './banner/image.png'
    import img2 from './banner/image (1).png'
    import img3 from './banner/image (2).png'
    import img4 from './banner/Vector (6).png'
    import img5 from './bodyimg/image (3).png'
    import img6 from './bodyimg/image (4).png'

    import img7 from './bodyimg/image 3.png'
    import img8 from './bodyimg/image (5).png'
    import img9 from './bodyimg/image (6).png'
    import img10 from './bodyimg/image (7).png'
    import img11 from './bodyimg/image (9).png'
    import img12 from './bodyimg/image (8).png'
    import img13 from './bodyimg/image (10).png'
    import img14 from './bodyimg/image (11).png'
    import img15 from './bodyimg/image (12).png'
    import img16 from './bodyimg/image (13).png'
    import img17 from './bodyimg/image (14).png'
    import img18 from './bodyimg/image (15).png'
    import img19 from './bodyimg/image (16).png'
    import img20 from './bodyimg/image (17).png'
    import img21 from './bodyimg/image (18).png'
    import img22 from './bodyimg/Vector (7).png'
    import img23 from './bodyimg/image (19).png'
    import img24 from './bodyimg/image (20).png'
    import img25 from './bodyimg/Arrow 1.png'
    import img26 from './bodyimg/image (21).png'
    import img27 from './bodyimg/Line 55.png'
    import './App.css'

    function App() {
      const [count, setCount] = useState(0)

      return (
        <>
          <div className='container'>
            <header className='header-container'>
            <div className="container-title">
      {/* Левое меню */}
      <div className="menu-left">
        <h3>WOMEN</h3>
        <h3>MEN</h3>
        <h3>COLLECTIONS</h3>
        <h3>ABOUT</h3>
      </div>
      <h1>SHADOW GEAR</h1>
      {/* Правое меню */}
      <div className="container-title1">
        <h3>SEARCH</h3>
        <h3>WISHLIST</h3>
        <h3>ACCOUNT</h3>
        <h3>BAG (3)</h3>
      </div>
    </div>
            </header>

            <div className="banner">
              <img src={img1} alt=""  className='img1'/>
              <div className="banner-title">
                <h1 className='h1-banner'>WHERE</h1>
              <h1 className='banner-h1'> TREND MEETS</h1>
              <h1 className='banner-h1-title'>COMFORT</h1>
              <img src={img2}  alt="" className='banner-img' />
              <img src={img3} alt="" className='banner-img1'/>
              <p>AW ‘ 21 COLLECTION</p>

              <img src={img4} alt="" className='banner-arrow'/>
              <p className='banner-arrow-text'>shop now shop now shop now shop now</p>
              </div>
            </div>
              <div className="body-container">
                <div className="col-6">
            <div className="body">
              
              <img src={img5} alt="" className='body-img1' />
            </div>
            <img src={img6} alt="" className='body-img2' />

            </div>
      
      <div className="col-6">
              <h1 className='body-title'>CATEGORIES</h1>
              <h2>OVERSIZED AND PUFFY </h2>
              <h2 className='alim-body'>FAXUS FUR JACKETS</h2>
              <h2 className='-body-alim'>QUILTED JACKETS</h2>
              <h2 className='alimm-bbody'>BOMBER AND AVIATOR </h2>
              <h2 className='bbody-alimm'>DENIM JACKETS</h2>
              <h2 className='alim'>LEATHER JACKETS</h2>

            </div>

            </div>
            
            <h1 className='ALIM'>BESTSELLERS</h1>
            <div className="block-container">
      <div className="block">
        <img src={img19} alt="" className="block-container-img" /> 
        <p className="alimm-item">
          <span>MINI  DRESS</span>
          <span>$136.00</span>
        </p>

      </div>
      <div className="block">
        <img src={img20} alt="" className="block-container-img" />
        <p className="alimm-item">
        <span>VELVET BAG</span>
        <span>$257.00</span>
        </p>
      </div>
      <div className="block">
        <img src={img21} alt="" className="block-container-img" />
        <p className="alimm-item">
        <span>VELVET BAG</span>
        <span>$257.00</span>
        </p>
      </div>
    </div>

    <div className="new-collection-container">
      <h1 className='new-collection-title'>NEW COLLECTION</h1>
      <span className='new-collection-span' >/24</span>

    </div>
    <img src={img23} alt="" className='new-collection-img'/>
    <img src={img24} alt="" className='new-collection-img1' />
    <div className="new-collection-text-img">
    <p className='new-collection-text'>SEE MORE</p>
    <img src={img25} alt="" className='new-collection-img2' />
    </div>
    <p className='new-collection-text1'>this season, we redefine winter fashion with a stunning array of puffer jackets, coats, and jackets that seamlessly blend comfort and elegance. The 2024 Collection boasts an exquisite selection of coats that effortlessly marry timeless sophistication with contemporary trends.</p>
              <div className="about-us-contauiner">
                <img src={img26} alt="" className='about-us-img'/>
                <h1 className='about-us-title'>ABOUT US</h1>
                <p className='about-us-text'>We are a growing Russian brand of women's clothing.</p>
                
                <p className='about-us-text1'>2 years of work with jerseys in retail led us to create our own collection, which you can find on this site. The accumulated experience and knowledge gained allowed us to take into account the desires and needs of our customers, to work out the correct proportions and the correct cut of products, to choose high-quality fabrics and fibers for production.</p>
              <p className='about-us-text2'> all presented products are designed and manufactured in Moscow by the daily work of our team: from purchasing raw materials to shipment of a batch.</p>
              <p className='about-us-text3'> Our stores are located in the two largest cities of Russia - Moscow and St. Petersburg (for more details see the "Contacts" section), production and main warehouse are also located in Moscow. We look forward to meeting you!</p>

              <p className='about-us-text4'>READ MORE</p>
              <img src={img25} alt="" className='about-us-img1'/>
              </div>


              <footer className='footer-container'>
                <p className='footer-title'>Product</p>
                <p className='footer-title-1'>Faur Fur jackets</p>
                <p className='footer-title-2'>Quitled Jackets</p>
                <p className='footer-title-3'>Nike Windrunner</p>
                <p className='footer-title-4'>Leather Jackets</p>
                <p className='footer-title-5'>Denim Jackets</p>
              <div class="use-cases-container">
  <p className='footer-title-6'>Use Cases</p>
  <ul>
    <p>Web-designers</p>
    <p>Marketers</p>
    <p>Small Business</p>
    <p>Website Builder</p>
  </ul>


 
</div>
<div className="resurs-container">
    <p>Resources</p>
    <p>Academy</p>
    <p>Blog</p>
    <p>Themes</p>
    <p>Hosting</p>
    <p>Developers</p>
    <p>Support</p>
  </div>

  <div className="company-container">
    <p>Company</p>
    <p>About Us</p>
    <p>Careers</p>
    <p>FAQs</p>
    <p>Teams</p>
    <p>Contact Us</p>
  </div>

  <img src={img27} alt=""  className='line'/>
<h1 className='footer-title111'>Subscribe</h1>
<div className="input-button">
<input placeholder='Enter your email Address' />
<button>Subscribe</button>
<h1 className='footer-title11'>Shadow Gear</h1>
<h1 className=''>Privacy Policy</h1>
<h1>t\</h1>
</div>          
              </footer>
          </div>
      
        </>
      )
    }

    export default App
