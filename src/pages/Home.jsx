import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const searchByCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchByCountries();
  }, []);
  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <p>Error {error}</p>}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};

export default Home;
