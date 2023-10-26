import React, { useState } from 'react';
import { Container, Text, Pagination, Row, Col, SimpleGrid, Flex} from '@mantine/core';
import ListCard from '../ListCard/ListCard';
import { v4 as uuidv4 } from 'uuid';

export default function CardPagination() {
  const itemsPerPage = 4; // Количество элементов на странице
  const [currentPage, setCurrentPage] = useState(1);

  // Ваш массив с данными (контент)
  const mockdata = [
    {
      title: 'Top 10 places to visit in Norway this summer',
      image:
        'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      date: 'August 18, 2022',
    },
    {
      title: 'Best forests to visit in North America',
      image:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      date: 'August 27, 2022',
    },
    {
      title: 'Hawaii beaches review: better than you think',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      date: 'September 9, 2022',
    },
    {
      title: 'Mountains at night: 12 best locations to enjoy the view',
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      date: 'September 12, 2022',
    },
  ];

  // Рассчитываем индексы для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Получаем элементы текущей страницы
  const currentPageContent = mockdata.slice(startIndex, endIndex);

  return (
    <Container fluid >
        <Container>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      {currentPageContent.map((mockdata, index) => (
        <ListCard key={index} article={mockdata}></ListCard>
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