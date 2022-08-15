const serverAddress = 'http://localhost:8000';

const formatGoods = ({
  id,
  title,
  description,
  price,
  img,
  categoryId,
  category,
}) => ({
  id,
  title,
  description,
  price,
  img,
  categoryId,
  category: category.title,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/cups?_expand=category`);
  const goods = await response.json();

  return goods.map(formatGoods);
};

const create = async (cupProps) => {
  const response = await fetch(`${serverAddress}/cups`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cupProps),
  });

  const good = await response.json();

  return good;
};

const update = async (id, goodProps) => {
  const response = await fetch(`${serverAddress}/cups/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goodProps),
  });

  const goods = await response.json();

  return goods;
};

const remove = async (id) => {
  await fetch(`${serverAddress}/cups/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const fetchCategories = async () => {
  const response = await fetch(`${serverAddress}/categories`);
  const categories = await response.json();

  return categories;
};

const GoodService = {
  fetchAll,
  create,
  update,
  remove,
  fetchCategories,
};

export default GoodService;
