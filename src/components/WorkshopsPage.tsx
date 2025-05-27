// src/components/WorkshopsPage.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Workshop {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

const WorkshopsPage: React.FC = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const response = await axios.get(
          "https://testing.topplaced.com/api/workshops"
        );
        setWorkshops(response.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch workshops:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#0f6861] mb-8">
        Upcoming Workshops
      </h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : workshops.length === 0 ? (
        <p className="text-center">No workshops available at the moment.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-[#0f6861]">
                {workshop.title}
              </h3>
              <p className="text-gray-600 mt-2">{workshop.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                📅 {new Date(workshop.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkshopsPage;
