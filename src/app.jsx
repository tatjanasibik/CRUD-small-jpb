import * as React from 'react';
import { Box, Grid, Modal } from '@mui/material';
import GoodService from './services/good-service';
import { GoodCard, Header, GoodForm } from './components';

const App = () => {
  const [goods, setGoods] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [goodBeingEdited, setGoodBeingEdited] = React.useState(null);

  const closeModal = () => {
    setModalOpen(false);
    setGoodBeingEdited(null);
  };

  const fetchAllGoods = async () => {
    const fetchedGoods = await GoodService.fetchAll();
    setGoods(fetchedGoods);
  };

  const createGood = async (goodProps) => {
    await GoodService.create(goodProps);
    await fetchAllGoods();
    closeModal();
  };

  const editGood = (id) => {
    const foundGood = goods.find((c) => c.id === id);
    setGoodBeingEdited(foundGood);
    setModalOpen(true);
  };

  const updateGood = async (goodProps) => {
    await GoodService.update(goodBeingEdited.id, goodProps);
    await fetchAllGoods();
    closeModal();
  };

  const removeGood = async (id) => {
    await GoodService.remove(id);
    fetchAllGoods();
  };

  React.useEffect(() => {
    fetchAllGoods();
  }, []);

  return (
    <Box sx={{
      gap: { xs: 4, xxl: 0 },
      pt: 2,
      px: 2,
    }}
    >
      <Header openModal={() => setModalOpen(true)} />
      <Modal open={modalOpen} onClose={closeModal}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        >
          <GoodForm
            onSubmit={goodBeingEdited ? updateGood : createGood}
            formTitle={goodBeingEdited ? 'Prekės redagavimas' : 'Naujos prekės sukūrimas'}
            submitText={goodBeingEdited ? 'Atnaujinti' : 'Sukurti'}
            color={goodBeingEdited ? 'warning' : 'success'}
            initValues={goodBeingEdited}
          />
        </Box>
      </Modal>

      <Grid container spacing={2}>
        {goods.map(({
          id,
          title,
          description,
          category,
          price,
          img,
        }) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <GoodCard
              title={title}
              description={description}
              img={img}
              category={category}
              price={price}
              onDelete={() => removeGood(id)}
              onEdit={() => editGood(id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
