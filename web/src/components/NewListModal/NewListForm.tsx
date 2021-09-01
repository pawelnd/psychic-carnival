import { useForm } from 'react-hook-form';
import React from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';

interface Props {
  onCancel: () => void;
}

export const NewListForm = (props: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(null);
      }, 30000);
    });
  }

  return (
    <>
      <form>
        <FormControl isInvalid={errors.name}>
          <FormLabel htmlFor="name">Nazwa</FormLabel>
          <Input
            placeholder="Nazwa"
            {...register('name', {
              required: 'Pole jest wymagane',
              minLength: { value: 6, message: 'Minimum 6 znaków' }
            })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>
        <Box mt={3} d={'flex'} justifyContent={'flex-end'}>
          <Button mr={3} isLoading={isSubmitting} type="submit" onClick={handleSubmit(onSubmit)}>
            Zapisz
          </Button>
          <Button onClick={() => props.onCancel()}>Anuluj</Button>
        </Box>
      </form>
    </>
  );
};
