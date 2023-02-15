import React, { useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  Snackbar,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { EditHelpText } from './styles';
import { dataProp } from '../../mocks/mockProperties';
import { dataLab } from '../../mocks/mockLaboratories';
import WarningIcon from '@mui/icons-material/Warning';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface FormData {
  name: string;
  dataInicial: string;
  dataFinal: string;
  infosPropriedade: {
    id: number;
    nome: string;
  };
  cnpj: string;
  laboratorio: {
    id: number;
    nome: string;
  };
  observacoes: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home: React.FC = () => {
  const [value, setValue] = useState('');
  const [inputTextArea, setInputTextArea] = useState('');
  const [inputProp, setInputProp] = useState('');
  const [inputLab, setInputLab] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  watch();
  const onSubmit = (data: FormData) => {
    setOpen(true);
    const date1 = new Date(data.dataInicial);
    const dateToMilliseconds = date1.getTime();
    const addedHours = dateToMilliseconds + 3600000 * 5;
    var newDateInitial = new Date(addedHours);
    const date2 = new Date(data.dataFinal);
    const dateToMilliseconds2 = date2.getTime();
    const addedHours2 = dateToMilliseconds2 + 3600000 * 5;
    var newDateFinale = new Date(addedHours2);
    const dataForm = {
      name: data.name,
      dataInicial: newDateInitial,
      dataFinal: newDateFinale,
      infosPropriedade: {
        id: 1,
        nome: data.infosPropriedade,
      },
      cnpj: inputProp,
      laboratorio: {
        id: 1,
        nome: data.laboratorio,
      },
      observacoes: data.observacoes,
    };
    setTimeout(function () {
      setOpen(false);
    }, 6000);
    console.log(dataForm);
  };
  return (
    <Box
      color="white"
      bgcolor="#ffffff"
      sx={{
        margin: '35px',
        position: 'relative',
        flexGrow: 1,
        border: (t) => `2px solid ${t.palette.divider}`,
      }}
    >
      <Card
        style={{
          background: '#00796a',
          color: 'white',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <CardHeader title="Teste front-end" />
        <Button
          variant="outlined"
          type="submit"
          size="medium"
          sx={{ color: 'white', margin: '12px' }}
          onClick={() => handleSubmit(onSubmit)()}
        >
          SALVAR
          <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Cadastro realizado com sucesso!
            </Alert>
          </Snackbar>
        </Button>
      </Card>

      <Grid container spacing={1} width="99.4%" margin="10px 0px 10px 0px">
        <Grid item md={6} sm={12} xs={12}>
          <TextField
            label="Nome"
            size="small"
            fullWidth
            variant="standard"
            value={value}
            helperText={<EditHelpText>{`${value.length}/40`}</EditHelpText>}
            inputProps={{ maxLength: 40 }}
            InputLabelProps={{ shrink: true, required: true }}
            {...register('name', {
              required: true,
              onChange: (e) => setValue(e.target.value),
            })}
          />
          {errors.name && errors.name.type === 'required' && (
            <div>
              <WarningIcon color="error" fontSize="small" />
              <span
                style={{
                  color: 'red',
                  fontSize: 14,
                  position: 'absolute',
                  margin: '0px 0px 2px 5px',
                }}
              >
                Error
              </span>
            </div>
          )}
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <TextField
            label="Data Inicial"
            type="date"
            size="small"
            fullWidth
            variant="standard"
            InputLabelProps={{ shrink: true, required: true }}
            {...register('dataInicial', { required: true })}
          />
          {errors.dataInicial && errors.dataInicial.type === 'required' && (
            <div>
              <WarningIcon color="error" fontSize="small" />
              <span
                style={{
                  color: 'red',
                  fontSize: 14,
                  position: 'absolute',
                  margin: '0px 0px 2px 5px',
                }}
              >
                Error
              </span>
            </div>
          )}
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <TextField
            label="Data Final"
            type="date"
            size="small"
            fullWidth
            variant="standard"
            InputLabelProps={{ shrink: true, required: true }}
            {...register('dataFinal', { required: true })}
          />
          {errors.dataFinal && errors.dataFinal.type === 'required' && (
            <div>
              <WarningIcon color="error" fontSize="small" />
              <span
                style={{
                  color: 'red',
                  fontSize: 14,
                  position: 'absolute',
                  margin: '0px 0px 2px 5px',
                }}
              >
                Error
              </span>
            </div>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={1} width="99.4%" margin="10px 0px 10px 0px">
        <Grid item md={6} sm={12} xs={12}>
          <Autocomplete
            options={dataProp}
            fullWidth
            size="small"
            onChange={(e, child: any) => setInputProp(`CNPJ ${child?.cnpj}`)}
            getOptionLabel={(option) => option?.infosPropriedade?.nome}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {
                  <div>
                    <div>{option?.infosPropriedade?.nome}</div>
                    <div>{`CNPJ ${option.cnpj}`}</div>
                  </div>
                }
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Propriedades"
                variant="standard"
                helperText={inputProp}
                InputLabelProps={{ shrink: true, required: true }}
                inputProps={{
                  ...params.inputProps,
                }}
                {...register('infosPropriedade', { required: true })}
              />
            )}
          />
          {errors.infosPropriedade &&
            errors.infosPropriedade.type === 'required' &&
            inputProp.length === 0 && (
              <div>
                <WarningIcon color="error" fontSize="small" />
                <span
                  style={{
                    color: 'red',
                    fontSize: 14,
                    position: 'absolute',
                    margin: '0px 0px 2px 5px',
                  }}
                >
                  Error
                </span>
              </div>
            )}
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Autocomplete
            disablePortal
            options={dataLab.map((d) => d.laboratorio.nome)}
            fullWidth
            size="small"
            onChange={(e: any) => setInputLab(e)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Laboratório"
                variant="standard"
                InputLabelProps={{ shrink: true, required: true }}
                {...register('laboratorio', { required: true })}
              />
            )}
          />
          {errors.laboratorio &&
            errors.laboratorio.type === 'required' &&
            inputLab.length === 0 && (
              <div>
                <WarningIcon color="error" fontSize="small" />
                <span
                  style={{
                    color: 'red',
                    fontSize: 14,
                    position: 'absolute',
                    margin: '0px 0px 2px 5px',
                  }}
                >
                  Error
                </span>
              </div>
            )}
        </Grid>
      </Grid>
      <Grid container spacing={1} width="99.4%" margin="10px 0px 10px 0px">
        <Grid item md={12} sm={12} xs={12}>
          <TextField
            label="Observações"
            size="small"
            fullWidth
            variant="standard"
            value={inputTextArea}
            helperText={
              <EditHelpText>{`${inputTextArea.length}/1000`}</EditHelpText>
            }
            multiline
            rows={4}
            inputProps={{ maxLength: 1000 }}
            InputLabelProps={{ shrink: true }}
            {...register('observacoes', {
              required: false,
              onChange: (e) => setInputTextArea(e.target.value),
            })}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
