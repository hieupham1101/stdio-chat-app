import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const registerSchema = z
  .object({
    name: z.string().min(1, 'Username is required').max(100),
    email: z
      .string()
      .min(1, 'Email address is required')
      .email('Email Address is invalid'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
    passwordConfirm: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match',
  });

export type ValidationSchemaType = z.infer<typeof registerSchema>;

export const registerSchemaObject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  return { register, handleSubmit, errors };
};
