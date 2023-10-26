import React, { useState } from 'react';
import { Container, Pagination, SimpleGrid, Flex} from '@mantine/core';
import AttractionCard from '../AttractionCard/AttractionCard';


export default function AttractionCardPagination() {
  const itemsPerPage = 4; // Количество элементов на странице
  const [currentPage, setCurrentPage] = useState(1);

  // Ваш массив с данными (контент)
  const mockdata = [
    {
      title: 'Mountain Hike',
      rating: 4.8,
      description: 'Enjoy a thrilling mountain hike with stunning views.',
      price: 40,
      images: [
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=720&q=80',
        'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      ],
    },
    {
      title: 'Beach Day',
      rating: 4.5,
      description: 'Relax on the pristine beaches and soak up the sun.',
      price: 25,
      images: [
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto.format&fit=crop&w=720&q=80',
        'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      ],
    }
  ];

  // Рассчитываем индексы для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Получаем элементы текущей страницы
  const currentPageContent = mockdata.slice(startIndex, endIndex);
  console.log("Current", currentPageContent)
  return (
    <Container fluid >
        <Container>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      {currentPageContent.map((attraction, index) => (
    <AttractionCard key={index} data={attraction} />
))}
            </SimpleGrid>
        </Container>
        
        <Flex justify="center" style={{ marginTop: '20px' }}>
      <Pagination
        total={Math.ceil(mockdata.length / itemsPerPage)} // Общее количество страниц
        value={currentPage} // Текущая страница
        onChange={setCurrentPage} // Обработчик смены страницы
      />
    </Flex>
    </Container>
  );
}