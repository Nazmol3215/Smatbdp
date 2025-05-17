import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Neighborhoods1 = () => {
  const [activeTab, setActiveTab] = useState("জমি বিক্রি");

  // বাটন ক্লিক করলে কোন পেজটি দেখাবে সেটি চেক করার জন্য একটি ফাংশন
  const renderContent = () => {
    switch (activeTab) {
      case "জমি বিক্রি":
        return (


          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4">
          <div className="col">
            <h5>ভালুকা </h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/DetaisPages">ভালুকা</Link>
              </li>
              <li>
                <Link to="/bashundhara">পশ্চিম ভালুকা</Link>
              </li>
              <li>
                <Link to="/uttara">চাঁপড়া</Link>
              </li>
              <li>
                <Link to="/mirpur">খলিলপুর</Link>
              </li>
              <li>
                <Link to="/aftab-nagar">আগলা</Link>
              </li>
              <li>
                <Link to="/badda">কড়চি</Link>
              </li>
              <li>
                <Link to="/badda">কাটুয়ার</Link>
              </li>
            </ul>
          </div>
        
          <div className="col">
            <h5>মল্লিকবাড়ী :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/bayazid">মল্লিকবাড়ী</Link>
              </li>
              <li>
                <Link to="/double-mooring">নয়নপুর</Link>
              </li>
              <li>
                <Link to="/khulshi">আছিরপুর</Link>
              </li>
              <li>
                <Link to="/chawk-bazaar">ভানুগাছ</Link>
              </li>
              <li>
                <Link to="/chandgaon">তীরথপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">ছায়াঘর</Link>
              </li>
              <li>
                <Link to="/chandgaon">পলাশপুর</Link>
              </li>
            </ul>
          </div>
        
          <div className="col">
            <h5>ডাকাতিয়া :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/bayazid">ডাকাতিয়া</Link>
              </li>
              <li>
                <Link to="/double-mooring">দিঘলকান্দি</Link>
              </li>
              <li>
                <Link to="/khulshi">কাচিনা</Link>
              </li>
              <li>
                <Link to="/chawk-bazaar">শ্রীপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">ভেড়াবাড়ী</Link>
              </li>
              <li>
                <Link to="/chandgaon">বালুরচর</Link>
              </li>
              <li>
                <Link to="/chandgaon">বরাহধী</Link>
              </li>
            </ul>
          </div>
        
          <div className="col">
            <h5>উথুরা :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/bayazid">উথুরা</Link>
              </li>
              <li>
                <Link to="/double-mooring">আছিরপুর</Link>
              </li>
              <li>
                <Link to="/khulshi">সান্দালপুর</Link>
              </li>
              <li>
                <Link to="/chawk-bazaar">আঠারো খামার</Link>
              </li>
              <li>
                <Link to="/chandgaon">মন্ডলীপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">বেতবাড়ী</Link>
              </li>
              <li>
                <Link to="/chandgaon">পশ্চিম উথুরা</Link>
              </li>
            </ul>
          </div>
        
          <div className="col">
            <h5>মেদুয়ারী :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/bayazid">মেদুয়ারী</Link>
              </li>
              <li>
                <Link to="/double-mooring">কামালপুর</Link>
              </li>
              <li>
                <Link to="/khulshi">কামালপুর</Link>
              </li>
              <li>
                <Link to="/chawk-bazaar">গোপালপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">গোবিন্দপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">পশ্চিম মেদুয়ারী</Link>
              </li>
              <li>
                <Link to="/chandgaon">শাহবাজপুর</Link>
              </li>
            </ul>
          </div>
        
          <div className="col">
            <h5>ভরাডোবা :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/bayazid">ভরাডোবা</Link>
              </li>
              <li>
                <Link to="/double-mooring">আছিরপুর</Link>
              </li>
              <li>
                <Link to="/khulshi">মণ্ডলী</Link>
              </li>
              <li>
                <Link to="/chawk-bazaar">মাইশা</Link>
              </li>
              <li>
                <Link to="/chandgaon">বাদুরতলা</Link>
              </li>
              <li>
                <Link to="/chandgaon">বালুরচর</Link>
              </li>
              <li>
                <Link to="/chandgaon">পশ্চিম ভরাডোবা</Link>
              </li>
            </ul>
          </div>
        
          <div className="col">
            <h5>ধীতপুর :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/bayazid">ধীতপুর</Link>
              </li>
              <li>
                <Link to="/double-mooring">হালিমপুর</Link>
              </li>
              <li>
                <Link to="/khulshi">মকিমপুর</Link>
              </li>
              <li>
                <Link to="/chawk-bazaar">দাদপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">সিরাজপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">মধুপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">গোলাপপুর</Link>
              </li>
            </ul>
          </div>
        
          <div className="col">
            <h5>বিরুনিয়া :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/bayazid">বিরুনিয়া</Link>
              </li>
              <li>
                <Link to="/double-mooring">সন্নাসি</Link>
              </li>
              <li>
                <Link to="/khulshi">মল্লিকপুর</Link>
              </li>
              <li>
                <Link to="/chawk-bazaar">বনগ্রাম</Link>
              </li>
              <li>
                <Link to="/chandgaon">ইসলামপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">গোবিন্দপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">কালীপুর</Link>
              </li>
            </ul>
          </div>
        
          <div className="col">
            <h5>হবিরবাড়ী :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/bayazid">হবিরবাড়ী</Link>
              </li>
              <li>
                <Link to="/double-mooring">শিয়ালকান্দি</Link>
              </li>
              <li>
                <Link to="/khulshi">চন্দনপুর</Link>
              </li>
              <li>
                <Link to="/chawk-bazaar">রতনপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">আলীনগর</Link>
              </li>
              <li>
                <Link to="/chandgaon">শেরপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">সোনাতলা</Link>
              </li>
            </ul>
          </div>
        
          <div className="col">
            <h5>রাজৈ :</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/bayazid">রাজৈ</Link>
              </li>
              <li>
                <Link to="/double-mooring">আবুল হোসেন</Link>
              </li>
              <li>
                <Link to="/khulshi">গোপালগঞ্জ</Link>
              </li>
              <li>
                <Link to="/chawk-bazaar">হোসেনপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">পীরপাড়া</Link>
              </li>
              <li>
                <Link to="/chandgaon">খালেদপুর</Link>
              </li>
              <li>
                <Link to="/chandgaon">পাচুরিয়া</Link>
              </li>
            </ul>
          </div>
        </div>        

        );
      case "ফ্ল্যাট বিক্রি":
        return (
          <div>
            <h3>For Rent Content</h3>
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
            <div className="col-md-4">
              <h5>ভালুকা ইউনিয়ন</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/DetaisPages">ভালুকা</Link>
                </li>
                <li>
                  <Link to="/bashundhara">পশ্চিম ভালুকা</Link>
                </li>
                <li>
                  <Link to="/uttara">চাঁপড়া</Link>
                </li>
                <li>
                  <Link to="/mirpur">খলিলপুর</Link>
                </li>
                <li>
                  <Link to="/aftab-nagar">আগলা</Link>
                </li>
                <li>
                  <Link to="/badda">কড়চি</Link>
                </li>
                <li>
                  <Link to="/badda">কাটুয়ার</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>মল্লিকবাড়ী :</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/bayazid">মল্লিকবাড়ী</Link>
                </li>
                <li>
                  <Link to="/double-mooring">নয়নপুর</Link>
                </li>
                <li>
                  <Link to="/khulshi">আছিরপুর</Link>
                </li>
                <li>
                  <Link to="/chawk-bazaar">ভানুগাছ</Link>
                </li>
                <li>
                  <Link to="/chandgaon">তীরথপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">ছায়াঘর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">পলাশপুর</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>ডাকাতিয়া ইউনিয়ন:</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/bayazid">ডাকাতিয়া</Link>
                </li>
                <li>
                  <Link to="/double-mooring">দিঘলকান্দি</Link>
                </li>
                <li>
                  <Link to="/khulshi">কাচিনা</Link>
                </li>
                <li>
                  <Link to="/chawk-bazaar">শ্রীপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">ভেড়াবাড়ী</Link>
                </li>
                <li>
                  <Link to="/chandgaon">বালুরচর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">বরাহধী</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>উথুরা ইউনিয়ন:</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/bayazid">উথুরা</Link>
                </li>
                <li>
                  <Link to="/double-mooring">আছিরপুর</Link>
                </li>
                <li>
                  <Link to="/khulshi">সান্দালপুর</Link>
                </li>
                <li>
                  <Link to="/chawk-bazaar">আঠারো খামার</Link>
                </li>
                <li>
                  <Link to="/chandgaon">মন্ডলীপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">বেতবাড়ী</Link>
                </li>
                <li>
                  <Link to="/chandgaon">পশ্চিম উথুরা</Link>
                </li>
              </ul>
            </div>


            <div className="col-md-4">
              <h5>মেদুয়ারী ইউনিয়ন:</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/bayazid">মেদুয়ারী</Link>
                </li>
                <li>
                  <Link to="/double-mooring">কামালপুর</Link>
                </li>
                <li>
                  <Link to="/khulshi">কামালপুর</Link>
                </li>
                <li>
                  <Link to="/chawk-bazaar">গোপালপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">গোবিন্দপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">পশ্চিম মেদুয়ারী</Link>
                </li>
                <li>
                  <Link to="/chandgaon">শাহবাজপুর</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>ভরাডোবা ইউনিয়ন:</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/bayazid">ভরাডোবা</Link>
                </li>
                <li>
                  <Link to="/double-mooring">আছিরপুর</Link>
                </li>
                <li>
                  <Link to="/khulshi">মণ্ডলী</Link>
                </li>
                <li>
                  <Link to="/chawk-bazaar">মাইশা</Link>
                </li>
                <li>
                  <Link to="/chandgaon">বাদুরতলা</Link>
                </li>
                <li>
                  <Link to="/chandgaon">বালুরচর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">পশ্চিম ভরাডোবা</Link>
                </li>
              </ul>
            </div>


            <div className="col-md-4">
              <h5>ধীতপুর ইউনিয়ন:</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/bayazid">ধীতপুর</Link>
                </li>
                <li>
                  <Link to="/double-mooring">হালিমপুর</Link>
                </li>
                <li>
                  <Link to="/khulshi">মকিমপুর</Link>
                </li>
                <li>
                  <Link to="/chawk-bazaar">দাদপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">সিরাজপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">মধুপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">গোলাপপুর</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>বিরুনিয়া ইউনিয়ন:</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/bayazid">বিরুনিয়া</Link>
                </li>
                <li>
                  <Link to="/double-mooring">সন্নাসি</Link>
                </li>
                <li>
                  <Link to="/khulshi">মল্লিকপুর</Link>
                </li>
                <li>
                  <Link to="/chawk-bazaar">বনগ্রাম</Link>
                </li>
                <li>
                  <Link to="/chandgaon">ইসলামপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">গোবিন্দপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">কালীপুর</Link>
                </li>
              </ul>
            </div>


            <div className="col-md-4">
              <h5>হবিরবাড়ী ইউনিয়ন:</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/bayazid">হবিরবাড়ী</Link>
                </li>
                <li>
                  <Link to="/double-mooring">শিয়ালকান্দি</Link>
                </li>
                <li>
                  <Link to="/khulshi">চন্দনপুর</Link>
                </li>
                <li>
                  <Link to="/chawk-bazaar">রতনপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">আলীনগর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">শেরপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">সোনাতলা</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5>রাজৈ ইউনিয়ন:</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/bayazid">রাজৈ</Link>
                </li>
                <li>
                  <Link to="/double-mooring">কালিপুর</Link>
                </li>
                <li>
                  <Link to="/khulshi">শৈলখামার</Link>
                </li>
                <li>
                  <Link to="/chawk-bazaar">চণ্ডিপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">শিমুলতলা</Link>
                </li>
                <li>
                  <Link to="/chandgaon">নূরপুর</Link>
                </li>
                <li>
                  <Link to="/chandgaon">কাঠালকান্দি</Link>
                </li>
              </ul>
            </div>

          </div>
            {/* Rent specific content goes here */}
          </div>
        );
      case "মোবাইল বিক্রি":
        return (
          <div>
            <h3>Plots Content</h3>
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
  <div className="col">
    <h5>ভালুকা </h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/DetaisPages">ভালুকা</Link>
      </li>
      <li>
        <Link to="/bashundhara">পশ্চিম ভালুকা</Link>
      </li>
      <li>
        <Link to="/uttara">চাঁপড়া</Link>
      </li>
      <li>
        <Link to="/mirpur">খলিলপুর</Link>
      </li>
      <li>
        <Link to="/aftab-nagar">আগলা</Link>
      </li>
      <li>
        <Link to="/badda">কড়চি</Link>
      </li>
      <li>
        <Link to="/badda">কাটুয়ার</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মল্লিকবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মল্লিকবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">নয়নপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">ভানুগাছ</Link>
      </li>
      <li>
        <Link to="/chandgaon">তীরথপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ছায়াঘর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পলাশপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ডাকাতিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ডাকাতিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">দিঘলকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">কাচিনা</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">শ্রীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ভেড়াবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বরাহধী</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>উথুরা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">উথুরা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">সান্দালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">আঠারো খামার</Link>
      </li>
      <li>
        <Link to="/chandgaon">মন্ডলীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বেতবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম উথুরা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মেদুয়ারী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/double-mooring">কামালপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">কামালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">গোপালপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/chandgaon">শাহবাজপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ভরাডোবা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ভরাডোবা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মণ্ডলী</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">মাইশা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বাদুরতলা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম ভরাডোবা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ধীতপুর :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ধীতপুর</Link>
      </li>
      <li>
        <Link to="/double-mooring">হালিমপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মকিমপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">দাদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সিরাজপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">মধুপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোলাপপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>বিরুনিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">বিরুনিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">সন্নাসি</Link>
      </li>
      <li>
        <Link to="/khulshi">মল্লিকপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">বনগ্রাম</Link>
      </li>
      <li>
        <Link to="/chandgaon">ইসলামপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">কালীপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>হবিরবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">হবিরবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">শিয়ালকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">চন্দনপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">রতনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">আলীনগর</Link>
      </li>
      <li>
        <Link to="/chandgaon">শেরপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সোনাতলা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>রাজৈ :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">রাজৈ</Link>
      </li>
      <li>
        <Link to="/double-mooring">আবুল হোসেন</Link>
      </li>
      <li>
        <Link to="/khulshi">গোপালগঞ্জ</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">হোসেনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পীরপাড়া</Link>
      </li>
      <li>
        <Link to="/chandgaon">খালেদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পাচুরিয়া</Link>
      </li>
    </ul>
  </div>
</div>

            {/* Plots specific content goes here */}
          </div>
        );
      case "অফিস ভাড়া":
        return (
          <div>
            <h3>Offices Content</h3>
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
  <div className="col">
    <h5>ভালুকা </h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/DetaisPages">ভালুকা</Link>
      </li>
      <li>
        <Link to="/bashundhara">পশ্চিম ভালুকা</Link>
      </li>
      <li>
        <Link to="/uttara">চাঁপড়া</Link>
      </li>
      <li>
        <Link to="/mirpur">খলিলপুর</Link>
      </li>
      <li>
        <Link to="/aftab-nagar">আগলা</Link>
      </li>
      <li>
        <Link to="/badda">কড়চি</Link>
      </li>
      <li>
        <Link to="/badda">কাটুয়ার</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মল্লিকবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মল্লিকবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">নয়নপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">ভানুগাছ</Link>
      </li>
      <li>
        <Link to="/chandgaon">তীরথপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ছায়াঘর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পলাশপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ডাকাতিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ডাকাতিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">দিঘলকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">কাচিনা</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">শ্রীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ভেড়াবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বরাহধী</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>উথুরা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">উথুরা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">সান্দালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">আঠারো খামার</Link>
      </li>
      <li>
        <Link to="/chandgaon">মন্ডলীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বেতবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম উথুরা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মেদুয়ারী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/double-mooring">কামালপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">কামালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">গোপালপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/chandgaon">শাহবাজপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ভরাডোবা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ভরাডোবা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মণ্ডলী</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">মাইশা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বাদুরতলা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম ভরাডোবা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ধীতপুর :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ধীতপুর</Link>
      </li>
      <li>
        <Link to="/double-mooring">হালিমপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মকিমপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">দাদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সিরাজপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">মধুপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোলাপপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>বিরুনিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">বিরুনিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">সন্নাসি</Link>
      </li>
      <li>
        <Link to="/khulshi">মল্লিকপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">বনগ্রাম</Link>
      </li>
      <li>
        <Link to="/chandgaon">ইসলামপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">কালীপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>হবিরবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">হবিরবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">শিয়ালকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">চন্দনপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">রতনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">আলীনগর</Link>
      </li>
      <li>
        <Link to="/chandgaon">শেরপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সোনাতলা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>রাজৈ :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">রাজৈ</Link>
      </li>
      <li>
        <Link to="/double-mooring">আবুল হোসেন</Link>
      </li>
      <li>
        <Link to="/khulshi">গোপালগঞ্জ</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">হোসেনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পীরপাড়া</Link>
      </li>
      <li>
        <Link to="/chandgaon">খালেদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পাচুরিয়া</Link>
      </li>
    </ul>
  </div>
</div>

            {/* Offices specific content goes here */}
          </div>
        );
      case "দোকান ভাড়া":
        return (
          <div>
            <h3>Shops Content</h3>

            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
  <div className="col">
    <h5>ভালুকা </h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/DetaisPages">ভালুকা</Link>
      </li>
      <li>
        <Link to="/bashundhara">পশ্চিম ভালুকা</Link>
      </li>
      <li>
        <Link to="/uttara">চাঁপড়া</Link>
      </li>
      <li>
        <Link to="/mirpur">খলিলপুর</Link>
      </li>
      <li>
        <Link to="/aftab-nagar">আগলা</Link>
      </li>
      <li>
        <Link to="/badda">কড়চি</Link>
      </li>
      <li>
        <Link to="/badda">কাটুয়ার</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মল্লিকবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মল্লিকবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">নয়নপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">ভানুগাছ</Link>
      </li>
      <li>
        <Link to="/chandgaon">তীরথপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ছায়াঘর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পলাশপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ডাকাতিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ডাকাতিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">দিঘলকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">কাচিনা</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">শ্রীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ভেড়াবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বরাহধী</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>উথুরা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">উথুরা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">সান্দালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">আঠারো খামার</Link>
      </li>
      <li>
        <Link to="/chandgaon">মন্ডলীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বেতবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম উথুরা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মেদুয়ারী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/double-mooring">কামালপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">কামালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">গোপালপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/chandgaon">শাহবাজপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ভরাডোবা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ভরাডোবা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মণ্ডলী</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">মাইশা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বাদুরতলা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম ভরাডোবা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ধীতপুর :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ধীতপুর</Link>
      </li>
      <li>
        <Link to="/double-mooring">হালিমপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মকিমপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">দাদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সিরাজপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">মধুপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোলাপপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>বিরুনিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">বিরুনিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">সন্নাসি</Link>
      </li>
      <li>
        <Link to="/khulshi">মল্লিকপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">বনগ্রাম</Link>
      </li>
      <li>
        <Link to="/chandgaon">ইসলামপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">কালীপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>হবিরবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">হবিরবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">শিয়ালকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">চন্দনপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">রতনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">আলীনগর</Link>
      </li>
      <li>
        <Link to="/chandgaon">শেরপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সোনাতলা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>রাজৈ :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">রাজৈ</Link>
      </li>
      <li>
        <Link to="/double-mooring">আবুল হোসেন</Link>
      </li>
      <li>
        <Link to="/khulshi">গোপালগঞ্জ</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">হোসেনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পীরপাড়া</Link>
      </li>
      <li>
        <Link to="/chandgaon">খালেদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পাচুরিয়া</Link>
      </li>
    </ul>
  </div>
</div>

            {/* Shops specific content goes here */}
          </div>
        );
      case "ব্যাবসা":
        return (
          <div>
            <h3>Commercial Content</h3>
           
           
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
  <div className="col">
    <h5>ভালুকা </h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/DetaisPages">ভালুকা</Link>
      </li>
      <li>
        <Link to="/bashundhara">পশ্চিম ভালুকা</Link>
      </li>
      <li>
        <Link to="/uttara">চাঁপড়া</Link>
      </li>
      <li>
        <Link to="/mirpur">খলিলপুর</Link>
      </li>
      <li>
        <Link to="/aftab-nagar">আগলা</Link>
      </li>
      <li>
        <Link to="/badda">কড়চি</Link>
      </li>
      <li>
        <Link to="/badda">কাটুয়ার</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মল্লিকবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মল্লিকবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">নয়নপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">ভানুগাছ</Link>
      </li>
      <li>
        <Link to="/chandgaon">তীরথপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ছায়াঘর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পলাশপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ডাকাতিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ডাকাতিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">দিঘলকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">কাচিনা</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">শ্রীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ভেড়াবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বরাহধী</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>উথুরা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">উথুরা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">সান্দালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">আঠারো খামার</Link>
      </li>
      <li>
        <Link to="/chandgaon">মন্ডলীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বেতবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম উথুরা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মেদুয়ারী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/double-mooring">কামালপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">কামালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">গোপালপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/chandgaon">শাহবাজপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ভরাডোবা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ভরাডোবা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মণ্ডলী</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">মাইশা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বাদুরতলা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম ভরাডোবা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ধীতপুর :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ধীতপুর</Link>
      </li>
      <li>
        <Link to="/double-mooring">হালিমপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মকিমপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">দাদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সিরাজপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">মধুপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোলাপপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>বিরুনিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">বিরুনিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">সন্নাসি</Link>
      </li>
      <li>
        <Link to="/khulshi">মল্লিকপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">বনগ্রাম</Link>
      </li>
      <li>
        <Link to="/chandgaon">ইসলামপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">কালীপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>হবিরবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">হবিরবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">শিয়ালকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">চন্দনপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">রতনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">আলীনগর</Link>
      </li>
      <li>
        <Link to="/chandgaon">শেরপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সোনাতলা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>রাজৈ :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">রাজৈ</Link>
      </li>
      <li>
        <Link to="/double-mooring">আবুল হোসেন</Link>
      </li>
      <li>
        <Link to="/khulshi">গোপালগঞ্জ</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">হোসেনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পীরপাড়া</Link>
      </li>
      <li>
        <Link to="/chandgaon">খালেদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পাচুরিয়া</Link>
      </li>
    </ul>
  </div>
</div>

            {/* Commercial specific content goes here */}
          </div>
        );
      case "Luxury":
        return (
          <div>
            <h3>Luxury Content</h3>



            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
  <div className="col">
    <h5>ভালুকা </h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/DetaisPages">ভালুকা</Link>
      </li>
      <li>
        <Link to="/bashundhara">পশ্চিম ভালুকা</Link>
      </li>
      <li>
        <Link to="/uttara">চাঁপড়া</Link>
      </li>
      <li>
        <Link to="/mirpur">খলিলপুর</Link>
      </li>
      <li>
        <Link to="/aftab-nagar">আগলা</Link>
      </li>
      <li>
        <Link to="/badda">কড়চি</Link>
      </li>
      <li>
        <Link to="/badda">কাটুয়ার</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মল্লিকবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মল্লিকবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">নয়নপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">ভানুগাছ</Link>
      </li>
      <li>
        <Link to="/chandgaon">তীরথপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ছায়াঘর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পলাশপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ডাকাতিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ডাকাতিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">দিঘলকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">কাচিনা</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">শ্রীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ভেড়াবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বরাহধী</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>উথুরা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">উথুরা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">সান্দালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">আঠারো খামার</Link>
      </li>
      <li>
        <Link to="/chandgaon">মন্ডলীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বেতবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম উথুরা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মেদুয়ারী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/double-mooring">কামালপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">কামালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">গোপালপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/chandgaon">শাহবাজপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ভরাডোবা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ভরাডোবা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মণ্ডলী</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">মাইশা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বাদুরতলা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম ভরাডোবা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ধীতপুর :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ধীতপুর</Link>
      </li>
      <li>
        <Link to="/double-mooring">হালিমপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মকিমপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">দাদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সিরাজপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">মধুপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোলাপপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>বিরুনিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">বিরুনিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">সন্নাসি</Link>
      </li>
      <li>
        <Link to="/khulshi">মল্লিকপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">বনগ্রাম</Link>
      </li>
      <li>
        <Link to="/chandgaon">ইসলামপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">কালীপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>হবিরবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">হবিরবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">শিয়ালকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">চন্দনপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">রতনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">আলীনগর</Link>
      </li>
      <li>
        <Link to="/chandgaon">শেরপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সোনাতলা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>রাজৈ :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">রাজৈ</Link>
      </li>
      <li>
        <Link to="/double-mooring">আবুল হোসেন</Link>
      </li>
      <li>
        <Link to="/khulshi">গোপালগঞ্জ</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">হোসেনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পীরপাড়া</Link>
      </li>
      <li>
        <Link to="/chandgaon">খালেদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পাচুরিয়া</Link>
      </li>
    </ul>
  </div>
</div>


            {/* Luxury specific content goes here */}
          </div>
        );
      case "Budget":
        return (
          <div>
            <h3>Budget Content</h3>

            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
  <div className="col">
    <h5>ভালুকা </h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/DetaisPages">ভালুকা</Link>
      </li>
      <li>
        <Link to="/bashundhara">পশ্চিম ভালুকা</Link>
      </li>
      <li>
        <Link to="/uttara">চাঁপড়া</Link>
      </li>
      <li>
        <Link to="/mirpur">খলিলপুর</Link>
      </li>
      <li>
        <Link to="/aftab-nagar">আগলা</Link>
      </li>
      <li>
        <Link to="/badda">কড়চি</Link>
      </li>
      <li>
        <Link to="/badda">কাটুয়ার</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মল্লিকবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মল্লিকবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">নয়নপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">ভানুগাছ</Link>
      </li>
      <li>
        <Link to="/chandgaon">তীরথপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ছায়াঘর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পলাশপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ডাকাতিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ডাকাতিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">দিঘলকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">কাচিনা</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">শ্রীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ভেড়াবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বরাহধী</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>উথুরা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">উথুরা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">সান্দালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">আঠারো খামার</Link>
      </li>
      <li>
        <Link to="/chandgaon">মন্ডলীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বেতবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম উথুরা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মেদুয়ারী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/double-mooring">কামালপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">কামালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">গোপালপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/chandgaon">শাহবাজপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ভরাডোবা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ভরাডোবা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মণ্ডলী</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">মাইশা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বাদুরতলা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম ভরাডোবা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ধীতপুর :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ধীতপুর</Link>
      </li>
      <li>
        <Link to="/double-mooring">হালিমপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মকিমপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">দাদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সিরাজপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">মধুপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোলাপপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>বিরুনিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">বিরুনিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">সন্নাসি</Link>
      </li>
      <li>
        <Link to="/khulshi">মল্লিকপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">বনগ্রাম</Link>
      </li>
      <li>
        <Link to="/chandgaon">ইসলামপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">কালীপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>হবিরবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">হবিরবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">শিয়ালকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">চন্দনপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">রতনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">আলীনগর</Link>
      </li>
      <li>
        <Link to="/chandgaon">শেরপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সোনাতলা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>রাজৈ :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">রাজৈ</Link>
      </li>
      <li>
        <Link to="/double-mooring">আবুল হোসেন</Link>
      </li>
      <li>
        <Link to="/khulshi">গোপালগঞ্জ</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">হোসেনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পীরপাড়া</Link>
      </li>
      <li>
        <Link to="/chandgaon">খালেদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পাচুরিয়া</Link>
      </li>
    </ul>
  </div>
</div>


            {/* Budget specific content goes here */}
          </div>
        );
      case "New Developments":
        return (
          <div>
            <h3>New Developments Content</h3>

            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
  <div className="col">
    <h5>ভালুকা </h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/DetaisPages">ভালুকা</Link>
      </li>
      <li>
        <Link to="/bashundhara">পশ্চিম ভালুকা</Link>
      </li>
      <li>
        <Link to="/uttara">চাঁপড়া</Link>
      </li>
      <li>
        <Link to="/mirpur">খলিলপুর</Link>
      </li>
      <li>
        <Link to="/aftab-nagar">আগলা</Link>
      </li>
      <li>
        <Link to="/badda">কড়চি</Link>
      </li>
      <li>
        <Link to="/badda">কাটুয়ার</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মল্লিকবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মল্লিকবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">নয়নপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">ভানুগাছ</Link>
      </li>
      <li>
        <Link to="/chandgaon">তীরথপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ছায়াঘর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পলাশপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ডাকাতিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ডাকাতিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">দিঘলকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">কাচিনা</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">শ্রীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ভেড়াবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বরাহধী</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>উথুরা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">উথুরা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">সান্দালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">আঠারো খামার</Link>
      </li>
      <li>
        <Link to="/chandgaon">মন্ডলীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বেতবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম উথুরা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মেদুয়ারী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/double-mooring">কামালপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">কামালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">গোপালপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/chandgaon">শাহবাজপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ভরাডোবা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ভরাডোবা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মণ্ডলী</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">মাইশা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বাদুরতলা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম ভরাডোবা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ধীতপুর :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ধীতপুর</Link>
      </li>
      <li>
        <Link to="/double-mooring">হালিমপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মকিমপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">দাদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সিরাজপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">মধুপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোলাপপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>বিরুনিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">বিরুনিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">সন্নাসি</Link>
      </li>
      <li>
        <Link to="/khulshi">মল্লিকপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">বনগ্রাম</Link>
      </li>
      <li>
        <Link to="/chandgaon">ইসলামপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">কালীপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>হবিরবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">হবিরবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">শিয়ালকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">চন্দনপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">রতনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">আলীনগর</Link>
      </li>
      <li>
        <Link to="/chandgaon">শেরপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সোনাতলা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>রাজৈ :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">রাজৈ</Link>
      </li>
      <li>
        <Link to="/double-mooring">আবুল হোসেন</Link>
      </li>
      <li>
        <Link to="/khulshi">গোপালগঞ্জ</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">হোসেনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পীরপাড়া</Link>
      </li>
      <li>
        <Link to="/chandgaon">খালেদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পাচুরিয়া</Link>
      </li>
    </ul>
  </div>
</div>


            {/* New Developments specific content goes here */}
          </div>
        );
      case "Resale":
        return (
          <div>
            <h3>Resale Content</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
  <div className="col">
    <h5>ভালুকা </h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/DetaisPages">ভালুকা</Link>
      </li>
      <li>
        <Link to="/bashundhara">পশ্চিম ভালুকা</Link>
      </li>
      <li>
        <Link to="/uttara">চাঁপড়া</Link>
      </li>
      <li>
        <Link to="/mirpur">খলিলপুর</Link>
      </li>
      <li>
        <Link to="/aftab-nagar">আগলা</Link>
      </li>
      <li>
        <Link to="/badda">কড়চি</Link>
      </li>
      <li>
        <Link to="/badda">কাটুয়ার</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মল্লিকবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মল্লিকবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">নয়নপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">ভানুগাছ</Link>
      </li>
      <li>
        <Link to="/chandgaon">তীরথপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ছায়াঘর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পলাশপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ডাকাতিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ডাকাতিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">দিঘলকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">কাচিনা</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">শ্রীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">ভেড়াবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বরাহধী</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>উথুরা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">উথুরা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">সান্দালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">আঠারো খামার</Link>
      </li>
      <li>
        <Link to="/chandgaon">মন্ডলীপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">বেতবাড়ী</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম উথুরা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>মেদুয়ারী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/double-mooring">কামালপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">কামালপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">গোপালপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম মেদুয়ারী</Link>
      </li>
      <li>
        <Link to="/chandgaon">শাহবাজপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ভরাডোবা :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ভরাডোবা</Link>
      </li>
      <li>
        <Link to="/double-mooring">আছিরপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মণ্ডলী</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">মাইশা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বাদুরতলা</Link>
      </li>
      <li>
        <Link to="/chandgaon">বালুরচর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পশ্চিম ভরাডোবা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>ধীতপুর :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">ধীতপুর</Link>
      </li>
      <li>
        <Link to="/double-mooring">হালিমপুর</Link>
      </li>
      <li>
        <Link to="/khulshi">মকিমপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">দাদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সিরাজপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">মধুপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোলাপপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>বিরুনিয়া :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">বিরুনিয়া</Link>
      </li>
      <li>
        <Link to="/double-mooring">সন্নাসি</Link>
      </li>
      <li>
        <Link to="/khulshi">মল্লিকপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">বনগ্রাম</Link>
      </li>
      <li>
        <Link to="/chandgaon">ইসলামপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">গোবিন্দপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">কালীপুর</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>হবিরবাড়ী :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">হবিরবাড়ী</Link>
      </li>
      <li>
        <Link to="/double-mooring">শিয়ালকান্দি</Link>
      </li>
      <li>
        <Link to="/khulshi">চন্দনপুর</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">রতনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">আলীনগর</Link>
      </li>
      <li>
        <Link to="/chandgaon">শেরপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">সোনাতলা</Link>
      </li>
    </ul>
  </div>

  <div className="col">
    <h5>রাজৈ :</h5>
    <ul className="list-unstyled">
      <li>
        <Link to="/bayazid">রাজৈ</Link>
      </li>
      <li>
        <Link to="/double-mooring">আবুল হোসেন</Link>
      </li>
      <li>
        <Link to="/khulshi">গোপালগঞ্জ</Link>
      </li>
      <li>
        <Link to="/chawk-bazaar">হোসেনপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পীরপাড়া</Link>
      </li>
      <li>
        <Link to="/chandgaon">খালেদপুর</Link>
      </li>
      <li>
        <Link to="/chandgaon">পাচুরিয়া</Link>
      </li>
    </ul>
  </div>
</div>


            {/* Resale specific content goes here */}
          </div>
        );
      default:
        return <div>Select a tab to see content</div>;
    }
  };

  return (
    <div className="container my-5">
      {/* <h1 className="text-center mb-4">জমি , ফ্ল্যাট , মোবাইল বিক্রি, অফিস ভাড়া</h1> */}
      <ul className="nav nav-tabs justify-content-center mb-3">
        {[
          "জমি বিক্রি",
          "ফ্ল্যাট বিক্রি",
          "মোবাইল বিক্রি",
          "অফিস ভাড়া",
          "দোকান ভাড়া",
          "ব্যাবসা",
          "Luxury",
          "Budget",
          "New Developments",
          "Resale",
        ].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <div>{renderContent()}</div>
    </div>
  );
};

export default Neighborhoods1;
