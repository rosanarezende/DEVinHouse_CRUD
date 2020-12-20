import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

function Listagem(props) {
  const { pessoas, setPessoas, setPessoa } = props;


  const handleEdit = (id) => { 
    const pessoaClicada = pessoas.find (item => item.id === id);
    setPessoa(pessoaClicada);

   }

  const handleDelete = (id) => { 
    const result = pessoas.filter (item => item.id !== id);
    setPessoas (result);
   }


  return (
    <Box component={Paper} p={2}>
      <Typography variant="h4" component="h2" gutterBottom color="primary">
        Listagem
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">NOME</TableCell>
            <TableCell align="center">SOBRENOME</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pessoas.map((linha) => (
            <TableRow key={linha.id}>
              <TableCell align="center">{linha.nome}</TableCell>
              <TableCell align="center">{linha.sobrenome}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "10px" }}
                  startIcon={<Edit />}
                  onClick={() => handleEdit(linha.id)}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<Delete />}
                  onClick={() => handleDelete(linha.id)}
                >
                  Deletar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default Listagem;
