import { PrismaClient } from '@psu-superapp/models';
import {
  comparePassword,
  encryptPassword,
  generateAccessToken,
  generateToken,
} from '@psu-superapp/api/utils';
import {
  TGenerateToken,
  TLoginRequest,
  TRegisterRequest,
} from '@psu-superapp/entities';
const prisma = new PrismaClient();
export const registerService = async (payload: TRegisterRequest) => {
  const { email, fullname, password } = payload;
  const getUser = await getUserByEmail({ email });

  if (getUser) {
    return {
      statusCode: 400,
      response: {
        message: 'Email sudah digunakan',
      },
    };
  }

  const createUser = await prisma.user.create({
    data: {
      email,
      fullname,
      password: await encryptPassword(password),
      roleId: 1,
    },
  });

  if (!createUser) {
    return {
      statusCode: 400,
      response: {
        message: 'Gagal membuat akun',
      },
    };
  }

  return {
    statusCode: 200,
    response: {
      message: 'Berhasil membuat akun, silahkan login',
    },
  };
};

export const loginService = async (payload: TLoginRequest) => {
  const { email, password } = payload;
  const getUser = await getUserByEmail({ email });
  const isPasswordValid = await comparePassword(
    password,
    getUser?.password as string
  );

  if (!getUser || !isPasswordValid) {
    return {
      statusCode: 400,
      response: {
        message: 'Akun tidak ditemukan',
      },
    };
  }
  const { access_token, refresh_token } = await generateToken({
    id: getUser?.id,
    email: getUser?.email,
  });
  return {
    statusCode: 200,
    response: {
      email: getUser?.email,
      fullname: getUser?.fullname,
      token: { access_token, refresh_token },
    },
  };
};

export const refreshService = async (payload: TGenerateToken) => {
  const accessToken = generateAccessToken(payload);
  if (!accessToken) {
    return {
      statusCode: 400,
      response: {
        message: 'Gagal membuat access token',
      },
    };
  }
  return {
    statusCode: 200,
    response: {
      access_token: accessToken,
    },
  };
};

export const getUserByEmail = async (payload: { email: string }) =>
  await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });
