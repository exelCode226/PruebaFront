import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Cards({props}) {
  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 24 }}>
          {props}
        </Typography>
        <Typography variant="h5" component="div">
         
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">Actualizar</Button>
        <Button size="small">Eliminar</Button>
      </CardActions>
    </Card>
  );
}
