import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Item = ({ data, onClick, onDelete }) => {
  const { title, imageURL, stock, price, description, category } = data;

  const [image, setImage] = React.useState(imageURL || '');
  const [name, setName] = React.useState(title || '');
  const [itemDescription, setDescription] = React.useState(description || '');
  const [itemCategory, setCategory] = React.useState(category || '');
  const [stockProds, setStock] = React.useState(stock || 0);
  const [newPrice, setPrice] = React.useState(price || 0);

  const handleIncrement = () => {
    setStock(stockProds + 1);
  };

  const handleDecrement = () => {
    if (stockProds > 0) {
      setStock(stockProds - 1);
    }
  };

  const handleClick = () => {
    if (!onClick) {
      return;
    }
    const product = {
      title: name,
      description: itemDescription,
      category: itemCategory,
      stock: stockProds,
      price: newPrice,
      imageURL: image,
    };

    onClick(product, data.id);
  };

  const handleDelete = () => {
    if (!onDelete) {
      return;
    }

    onDelete(data.id);
  };

  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia component="img" alt={title} height="140" image={imageURL} />
      <input value={image} onChange={(e) => setImage(e.target.value)} />
      <CardContent>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={itemDescription} onChange={(e) => setDescription(e.target.value)} />
        <input value={itemCategory} onChange={(e) => setCategory(e.target.value)} />

        $ <input value={newPrice} onChange={(e) => setPrice(e.target.value)} />

        <Typography color="text.secondary">
          Stock: {stockProds}
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </Typography>
      </CardContent>

      <button onClick={handleClick}>Guardar</button>
      <button onClick={handleDelete}>Borrar</button>
    </Card>
  );
};

export default Item;
