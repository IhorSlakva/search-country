import { useState, useEffect } from 'react';
import { Container, CountryInfo, Heading, Section } from 'components';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';
import { GoBackBtn } from '../components/GoBackBtn/GoBackBtn';

export const Country = () => {
  const { countryId } = useParams();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [countryId]);
  console.log(countries);
  return (
    <Section>
      <Container>
        <CountryInfo {...countries} />
        <GoBackBtn />
      </Container>
    </Section>
  );
};
