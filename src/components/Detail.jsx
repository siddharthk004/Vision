import React from 'react';

function Detail({name,cname}) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">About Product</h2>
        <p className="text-lg mb-4">
         {name} contains time-tested Imidacloprid and Beta-Cyfluthrin in an innovative oil dispersion formulation.
        </p>
        <p className="text-lg mb-4">
          {name} technical name - Beta-Cyfluthrin + Imidacloprid 300 OD (8.49 + 19.81 % w/w)
        </p>
        <p className="text-lg mb-4">
          It is a popular and effective insecticide widely used to control insects in crops such as cotton, soybean, rice, maize, and vegetables.
        </p>
        <p className="text-lg mb-4">
          {name} is thus a broad segment insecticide for sucking and biting pests. It gives a quick knockdown and anti-feeding effects.
        </p>
      </div>

      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">{name} Technical Details</h2>
        <p className="text-lg mb-4">
          <strong>Technical Content:</strong> Beta-Cyfluthrin + Imidacloprid 300 OD (8.49 + 19.81 % w/w)
        </p>
        <p className="text-lg mb-4">
          <strong>Mode of Entry:</strong> Dual Action - Contact and Systemic
        </p>
        <p className="text-lg mb-4">
          <strong>Mode of Action:</strong> Beta-Cyfluthrin is an insecticide of synthetic pyrethroid group. It acts by contact and ingestion. It disrupts the insects' nervous system as a sodium channel blocker, leading to rapid excitation and death. Imidacloprid acts as an antagonist to the nicotinic acetylcholine receptor, disturbing the signal transmission and causing nerve cell excitation, leading to death of the insect.
        </p>
      </div>

      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Key Features and Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Effective against a wide range of insect pests including aphids, thrips, and leafhoppers.</li>
          <li>Can be used as part of an Integrated Pest Management (IPM) strategy for eco-friendly pest management.</li>
          <li>Suitable for low-volume application with broad-spectrum control across all insect stages.</li>
          <li>Oil dispersion based on O-TEQ formulation ensures better rain fastness, optimized retention, and penetration activity.</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">{name} Usage and Crops</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300">Crops</th>
              <th className="p-2 border border-gray-300">Target Pest</th>
              <th className="p-2 border border-gray-300">Dosage / Acre (ml)</th>
              <th className="p-2 border border-gray-300">Dilution in water (L/Acre)</th>
              <th className="p-2 border border-gray-300">Dosage (ml) /L of Water</th>
              <th className="p-2 border border-gray-300">Waiting period from last spray to harvest (days)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300">Brinjal</td>
              <td className="p-2 border border-gray-300">Aphid, Jassid, Shoot & Fruit Borer</td>
              <td className="p-2 border border-gray-300">70 - 80</td>
              <td className="p-2 border border-gray-300">200</td>
              <td className="p-2 border border-gray-300">0.35-0.4</td>
              <td className="p-2 border border-gray-300">7</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">Soybean</td>
              <td className="p-2 border border-gray-300">Girdle Beetle & Semilooper</td>
              <td className="p-2 border border-gray-300">140-150</td>
              <td className="p-2 border border-gray-300">200</td>
              <td className="p-2 border border-gray-300">0.7ml-0.75</td>
              <td className="p-2 border border-gray-300">17</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Method of Application</h2>
        <p className="text-lg mb-4">Foliar Spray</p>
      </div>

      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
        <p className="text-lg">
          {name} provides long-lasting protection, keeping your crops safe for weeks or even months. 
          {cname} {name} residual action provides prolonged protection, reducing the need for frequent reapplication.
        </p>
      </div>

      <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Disclaimer</h2>
        <p className="text-lg">
          This information is provided for reference purposes only. Always follow the recommended application guidelines outlined on the product label and accompanying leaflet.
        </p>
      </div>
    </div>
  );
}

export default Detail;
