import React from 'react';

const services = [
  { name: 'উপজেলা', path: '/upazila', icon: 'upazila-icon.png' },
  { name: 'পৌরসভা', path: '/pourashava', icon: 'pourashava-icon.png' },
  { name: 'ইউনিয়ন', path: '/union', icon: 'union-icon.png' },
];

const emergencyServices = [
  { name: 'ফায়ার সার্ভিস', path: '/fire-service', icon: 'fire-service-icon.png' },
  { name: 'থানা পুলিশ', path: '/police', icon: 'police-icon.png' },
  { name: 'উপজেলা প্রশাসন', path: '/upazila-admin', icon: 'upazila-admin-icon.png' },
];

const healthServices = [
  { name: 'ডাক্তার', path: '/doctor', icon: 'doctor-icon.png' },
  { name: 'এ্যাম্বুলেন্স', path: '/ambulance', icon: 'ambulance-icon.png' },
  { name: 'হাসপাতাল', path: '/hospital', icon: 'hospital-icon.png' },
];

const ServiceSection = ({ title, services }) => (
  <div className="p-4">
    <h2 className="h3 mb-4">{title}</h2>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {services.map(service => (
        <div key={service.name} className="col">
          <Link to={service.path} className="card text-center shadow-sm">
            <img src={service.icon} alt={service.name} className="card-img-top w-50 mx-auto" />
            <div className="card-body">
              <p className="card-text">{service.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const Ten = () => (
  <Router>
    <div className="container my-4">
      <ServiceSection title="ভালুকার পরিচিতি" services={services} />
      <ServiceSection title="জরুরি সেবা" services={emergencyServices} />
      <ServiceSection title="স্বাস্থ্য সেবা" services={healthServices} />

      <Routes>
        <Route path="/upazila" element={<div>উপজেলা পেজ</div>} />
        <Route path="/pourashava" element={<div>পৌরসভা পেজ</div>} />
        <Route path="/union" element={<div>ইউনিয়ন পেজ</div>} />
        <Route path="/fire-service" element={<div>ফায়ার সার্ভিস পেজ</div>} />
        <Route path="/police" element={<div>থানা পুলিশ পেজ</div>} />
        <Route path="/upazila-admin" element={<div>উপজেলা প্রশাসন পেজ</div>} />
        <Route path="/doctor" element={<div>ডাক্তার পেজ</div>} />
        <Route path="/ambulance" element={<div>এ্যাম্বুলেন্স পেজ</div>} />
        <Route path="/hospital" element={<div>হাসপাতাল পেজ</div>} />
      </Routes>
    </div>
  </Router>
);

export default Ten;
