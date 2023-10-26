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

<Container>
<Grid gutter="xs">
  <Grid.Col span="auto">
    <Input
      value={filters.title}
      onChange={(event) => setFilters({ ...filters, title: event.target.value })}
      placeholder="Filter by title"
    />
  </Grid.Col>
  <Grid.Col span={2}>
    <Text align="center">Filter by rating:</Text>
    <Radio
      value={0}
      name="rating"
      label="All"
      checked={filters.rating === 0}
      onChange={() => setFilters({ ...filters, rating: 0 })}
    />
    <Radio
      value={4.5}
      name="rating"
      label="4.5+"
      checked={filters.rating === 4.5}
      onChange={() => setFilters({ ...filters, rating: 4.5 })}
    />
    <Radio
      value={4.8}
      name="rating"
      label="4.8+"
      checked={filters.rating === 4.8}
      onChange={() => setFilters({ ...filters, rating: 4.8 })}
    />
  </Grid.Col>
  <Grid.Col span="auto">
    <Input
      value={filters.description}
      onChange={(event) => setFilters({ ...filters, description: event.target.value })}
      placeholder="Filter by description"
    />
  </Grid.Col>
  {/* <Grid.Col span="auto">
    <Text>Filter by price:</Text>
    <RangeSlider
      min={0}
      max={100}
      step={5}
      value={filters.price}
      onChange={(value) => setFilters({ ...filters, price: value })}
    />
  </Grid.Col> */}
</Grid>
</Container>