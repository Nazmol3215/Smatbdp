import React, { useEffect } from 'react';

const PropertyLocationMap = () => {
  useEffect(() => {
    // Google Maps API কলব্যাক ফাংশন
    const initMap = () => {
      // নির্দিষ্ট প্রপার্টির লোকেশন (অক্ষাংশ এবং দ্রাঘিমাংশ)
      const propertyLocation = { lat: 23.8103, lng: 90.4125 };
      
      // ম্যাপ তৈরি করা
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 15,  // জুম লেভেল
        center: propertyLocation,  // প্রপার্টির লোকেশন ম্যাপের কেন্দ্রে সেট করা
      });

      // প্রপার্টির লোকেশনে একটি পিন যোগ করা
      new window.google.maps.Marker({
        position: propertyLocation,
        map: map,
        title: "This is the property location",
      });
    };

    // Google Maps API লোড করা
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap;  // initMap কে গ্লোবাল বানিয়ে দেওয়া
      document.head.appendChild(script);
    };

    if (!window.google) {
      loadGoogleMapsScript();  // যদি Google Maps API লোড না হয়ে থাকে, তাহলে স্ক্রিপ্ট লোড করা হবে
    } else {
      initMap();  // যদি Google Maps API ইতিমধ্যে লোড করা থাকে, সরাসরি ম্যাপ ইন্সট্যান্স তৈরি করা হবে
    }
  }, []); // একবারই রান হবে

  return (
    <div>
      <h3>Property Location</h3>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default PropertyLocationMap;
