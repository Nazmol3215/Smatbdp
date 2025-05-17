import React from 'react'

export default function ScrollingText() {
  return (
    <div>
      <marquee 
        behavior="scroll" 
        direction="left" 
        scrollamount="6" 
        style={{
          fontSize: '20px', 
          color: 'blue', 
          backgroundColor: 'white', 
          padding: '10px', 
          width: '100%', 
          zIndex: '1000', 
          bootom: '10',
          border : '2px solid green'
        }}
      >
        এই ওয়েবসাইটে ভালুকার সকল তথ্য পাওয়া যায়। আপনার সম্পর্কে লিস্ট করতে আমাদেরকে মেসেজ করুন।      </marquee>
    </div>
  )
}
