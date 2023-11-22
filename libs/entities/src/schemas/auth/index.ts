import { z } from 'zod';

export const VSLogin = z.object({
  body: z.object({
    email: z
      .string()
      .email({
        message: 'Email tidak valid',
      })
      .nonempty({
        message: 'Email tidak boleh kosong',
      }),
    password: z.string().nonempty({
      message: 'Password tidak boleh kosong',
    }),
  }),
});

export type TVSLogin = z.infer<typeof VSLogin>;

export const VSRegister = z.object({
  body: z.object({
    email: z
      .string()
      .email({
        message: 'Email tidak valid',
      })
      .nonempty({
        message: 'Email tidak boleh kosong',
      }),
    password: z.string().nonempty({
      message: 'Password tidak boleh kosong',
    }),
    fullname: z.string().nonempty({
      message: 'Password tidak boleh kosong',
    }),
  }),
});

export type TVSRegister = z.infer<typeof VSRegister>;

export const VSRefresh = z.object({
  body: z.object({
    refresh_token: z.string().nonempty({
      message: 'Email tidak boleh kosong',
    }),
  }),
});

export type TVSRefresh = z.infer<typeof VSRefresh>;
