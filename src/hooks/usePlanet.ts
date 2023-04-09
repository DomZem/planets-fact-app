/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { type Params } from 'react-router-dom';
import { API_URL } from '../api';
import { type PlanetNameType, type PlanetType } from '../types/planet';

interface PlanetParams extends Params {
  planetName: PlanetNameType;
}

export const usePlanet = () => {
  const { planetName } = useParams<PlanetParams>();
  const [planet, setPlanet] = useState<PlanetType>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
    setIsLoading(true);
    setIsError(false);
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
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  };

  useEffect(() => {
    getPlanet();
  }, [planetName]);

  return {
    planet,
    planetName,
    isLoading,
    isError,
  };
};
