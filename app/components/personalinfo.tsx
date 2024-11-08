import React from 'react';
import Image from 'next/image';

const PersonalInfo = () => {
  const Myinfos = {
    Nama: 'Imas Fitriani',
    'Tempat, Tanggal Lahir': 'Garut, 22 Juni 2002',
    JenisKelamin: 'Perempuan',
    'Tinggi Badan': '165 cm',
    'Berat Badan': '55 kg',
    'Status Pernikahan': 'Belum Menikah',
    Whatsapp: '08814077802',
    Email: 'imasfitriani22@gmail.com',
  };

  return (
    <div className="p-8  text-center mx-auto">
      <Image 
        src="/imas.jpeg" 
        alt="Personal Photo"
        width={150} 
        height={150}
        className="rounded-full object-cover mb-6 mx-auto" 
      />
      
      <p className="text-lg text-gray-700 mb-6">
        Saya adalah seorang mahasiswa yang bercita-cita menjadi Web Developer
      </p>
      
      <h2 className="text-2xl font-semibold mb-6 text-blue-600">Informasi Pribadi</h2>
      
      <ul className="list-none space-y-4 text-left text-gray-800 bg-gray-100 ps-3 pe-3">
        {Object.entries(Myinfos).map(([key, value]) => (
          <li key={key} className="flex justify-between border-b pb-2">
            <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1')}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfo;
