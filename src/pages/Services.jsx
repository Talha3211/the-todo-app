import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="text-blue-600 text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: '🔋', // Replace with an appropriate icon or SVG
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
    },
    {
      icon: '🛠️', // Replace with an appropriate icon or SVG
      title: 'Sed ut perspici',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    },
    {
      icon: '📅', // Replace with an appropriate icon or SVG
      title: 'Magni Dolores',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
    },
    {
      icon: '📶', // Replace with an appropriate icon or SVG
      title: 'Nemo Enim',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">SERVICES</h2>
        <div className="flex items-center justify-center mt-3 mb-7">
        <div className="w-12 h-[1px] bg-black mt-2"></div>
        <div className="w-12 h-[3px] bg-blue-400 mt-2"></div>
        <div className="w-12 h-[1px] bg-black mt-2"></div>
        </div>
        <p className="text-black mt-2">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
      <div className="mt-16 bg-custom-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-20 flex items-center justify-center gap-5">
            <div>
          <h3 className="text-2xl font-bold mb-2">Call To Action</h3>
          <p className="text-gray-200 mb-6 text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur <br/> sint occaecat  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          <button className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-blue-800 transition-colors duration-300 text-xs">
            call to Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;