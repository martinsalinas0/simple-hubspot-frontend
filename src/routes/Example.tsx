import React, { useEffect, useState } from "react";
import axios from "axios";

interface Company {
  id: string;
  name: string;
  location: string;
  logoUrl: string;
}

const Example: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    const getAllCompanies = async () => {
      try {
        const response = await axios.get<Company[]>(
          "https://api.example.com/companies"
        );
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies", error);
      }
    };

    getAllCompanies();
  }, []);

  return (
    <div>
      {companies.length > 0 ? <p>{companies[0].name}</p> : <p>Loading...</p>}
    </div>
  );
};

export default Example;
