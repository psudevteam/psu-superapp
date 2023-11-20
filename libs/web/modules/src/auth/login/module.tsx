'use client';
import { FC, ReactElement } from 'react';
import {
  Button,
  ControlledFieldText,
  Text,
} from '@psu-superapp/web-components';
import { useForm } from 'react-hook-form';
import { TLogin, validationSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginRequest } from './hook';

export const LoginModule: FC = (): ReactElement => {
  const {
    control,
    watch,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<TLogin>({
    mode: 'all',
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { mutate } = useLoginRequest();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: (success) => {
        console.log(success.email);
      },
      onError: (err) => {
        console.log(err.response?.data?.message);
      },
    });
  });

  return (
    <section className="flex h-screen  items-center w-full">
      <div className="md:w-1/2 md:flex hidden h-full bg-gray-300 items-center justify-center">
        <Text>Hello</Text>
      </div>
      <div className="md:w-1/2 w-full flex items-center justify-center h-full bg-white">
        <form onSubmit={onSubmit} className="w-full flex flex-col p-6 gap-y-4">
          <ControlledFieldText
            control={control}
            size="md"
            label="Email"
            type="email"
            name="email"
            placeholder="Masukkan email anda"
            status={
              watch('email') === '' && !errors.email
                ? 'none'
                : errors.email
                ? 'error'
                : 'success'
            }
            message={
              watch('email') === '' && !errors.email
                ? ''
                : errors.email
                ? errors.email?.message
                : 'Email Valid'
            }
          />
          <ControlledFieldText
            control={control}
            size="md"
            label="Kata Sandi"
            type="password"
            name="password"
            placeholder="Masukkan email anda"
            status={
              watch('password') === '' && !errors.password
                ? 'none'
                : errors.password
                ? 'error'
                : 'success'
            }
            message={
              watch('password') === '' && !errors.password
                ? ''
                : errors.password
                ? errors.password?.message
                : 'Kata Sandi Valid'
            }
          />
          <Button disabled={!isValid}>Masuk</Button>
        </form>
      </div>
    </section>
  );
};
