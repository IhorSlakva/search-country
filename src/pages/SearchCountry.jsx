import {
  Container,
  CountryList,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useState, useEffect } from 'react';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [q, setQ] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function onSubmit(query) {
    setQ(query);
  }
  useEffect(() => {
    if (q === '') return;
    setLoading(true);
    const getData = async () => {
      try {
        const data = await fetchByRegion(q);
        setCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [q]);
  console.log(countries);
  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <p>Error {error}</p>}
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
