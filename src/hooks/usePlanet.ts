/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API_URL } from '../api';
import { type planetType } from '../types/planet';

export const usePlanet = () => {
  const { planetName } = useParams();
  const [planet, setPlanet] = useState<planetType | null>(null);
  const [error, setError] = useState(false);

  const query = `
	{
 	 	planetModel(filter: { name: {eq: "${planetName}"} }) {
    	name,
    	images {
    		overview {url},
      	structure {url},
      	surface {url}
    	},
    	overview {
      	content,
      	source
    	},
    	structure {
      	content,
      	source
    	},
    	surface {
      	content,
      	source
    	},
			statistics {
      	title,
      	value
    	}
  	}
	}`;

  const getPlanet = async () => {
    try {
      const { data } = await axios.post(
        API_URL,
        {
          query,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_DATOCMS_TOKEN}`,
          },
        }
      );
      setPlanet(data.data.planetModel);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    getPlanet();
  }, [planetName]);

  return {
    planet,
    error,
  };
};
