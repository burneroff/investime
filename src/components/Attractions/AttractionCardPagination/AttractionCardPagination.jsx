import React, { useState } from 'react';
import {
  Container,
  Pagination,
  SimpleGrid,
  Flex,
  Input,
  Text,
  Col,
  Grid,
  Radio,
  Slider,
  Space,
  RangeSlider,
  Group,
} from '@mantine/core';
import AttractionCard from '../AttractionCard/AttractionCard';
import { dataAttraction as mockdata} from '../../../Consts/Consts';

export default function AttractionCardPagination() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    title: '',
    rating: 0,
    description: '',
    price: 0,
  });

  const filteredData = mockdata.filter((attraction) => {
    return (
      attraction.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      attraction.rating >= filters.rating &&
      attraction.description.toLowerCase().includes(filters.description.toLowerCase()) &&
      attraction.price >= filters.price
    );
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageContent = filteredData.slice(startIndex, endIndex);

  return (
    <Container fluid style={{padding: "3% 10% 10% 5%"}}>
      <Text align="center" size='200%' variant="gradient" gradient={{ from: 'lime', to: 'cyan', deg: 90 }} fw={900} >Достопримечательности</Text>
      <Container style={{border: '2px solid green',  padding: '2%', margin: '3%', borderRadius: '50px'}}>
        <Text ml={10} ta={"start"} size='150%' c='green'>Фильтровать по</Text>
        <Grid gutter="xs" style={{padding: '2%'}}>
          <Grid style={{paddingRight: '5%'}}>
            <Grid.Col div='auto' display={"inline"}>
            <Text> Названию:</Text>
            <Input
              value={filters.title}
              onChange={(event) => setFilters({ ...filters, title: event.target.value })}
              placeholder="Название"
            />
            </Grid.Col>

            <Grid.Col div='auto'>
            <Text > Описанию:</Text>
            <Input
              value={filters.description}
              onChange={(event) => setFilters({ ...filters, description: event.target.value })}
              placeholder="Описание"
            />
          

          </Grid.Col> 
          </Grid>

          <Grid.Col span={2}>
            <Text mb={3}>Рейтингу:</Text>
            <Radio
            
              value={0}
              color='green'
              name="rating"
              label="All"
              checked={filters.rating === 0}
              onChange={() => setFilters({ ...filters, rating: 0 })}
            />
            <Space h="lg" />
            <Radio
            color='green'
              value={4.5}
              name="rating"
              label="4.5+"
              checked={filters.rating === 4.5}
              onChange={() => setFilters({ ...filters, rating: 4.5 })}
            />
            <Space h="lg" />
            <Radio
            color='green'
              value={4.8}
              name="rating"
              label="4.8+"
              checked={filters.rating === 4.8}
              onChange={() => setFilters({ ...filters, rating: 4.8 })}
            />
          </Grid.Col>
          
        </Grid>
      </Container>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {currentPageContent.map((attraction, index) => (
          <AttractionCard key={index} data={attraction} />
        ))}
      </SimpleGrid>
      <Flex justify="center" style={{ marginTop: '20px', }}>
        <Pagination
        color="rgb(79, 181, 69)"
          total={Math.ceil(filteredData.length / itemsPerPage)}
          value={currentPage}
          onChange={setCurrentPage}
        />
      </Flex>
    </Container>
  );
}