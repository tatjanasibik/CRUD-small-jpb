import * as React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Image from './image';
import TypographyLimited from './typography-limited';

const GoodCard = ({
  title,
  img,
  description,
  category,
  price,
  onDelete,
  onEdit,
}) => (
  <Card sx={{
    display: 'flex', flexDirection: 'column', height: '100%', position: 'relative',
  }}
  >
    <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
      <Image src={img} sx={{ position: 'absolute', top: 0, left: 0 }} />
    </Box>

    <Box sx={{
      position: 'absolute',
      top: 15,
      right: 15,
      display: 'flex',
      gap: 1,
    }}
    >
      <IconButton
        sx={{
          border: 1,
          borderColor: 'success',
          color: 'success',
        }}
        size="small"
        onClick={onEdit}
      >
        <DesignServicesIcon />
      </IconButton>

      <IconButton
        sx={{
          border: 1,
          borderColor: 'error.main',
          color: 'error.main',
        }}
        size="small"
        onClick={onDelete}
      >
        <HighlightOffIcon />
      </IconButton>
    </Box>

    <CardContent sx={{ p: 2, flexGrow: 1 }}>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <Typography variant="h5" component="div">{title}</Typography>
        <Typography variant="h6" component="div" color="info">{`${price} €`}</Typography>

      </Box>
      <TypographyLimited variant="body2" color="info">{description}</TypographyLimited>
      <Typography variant="subtitle" component="div" sx={{ mb: 2 }}>{category}</Typography>
    </CardContent>
  </Card>
);

export default GoodCard;
