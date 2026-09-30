import crypto from 'crypto';
import { Session } from '../models/session.js';
import { FIFTEEN_MINUTES, THIRTY_DAYS } from '../constants/time.js';

export const createSession = async (userId) => {
  const accessToken = crypto.randomUUID();
  const refreshToken = crypto.randomUUID();

  return Session.create({
    userId,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + THIRTY_DAYS),
  });
};

export const setSessionCookies = (res, session) => {
  const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  };

  res.cookie('accessToken', session.accessToken, {
    ...cookieOptions,
    maxAge: FIFTEEN_MINUTES,
  });

  res.cookie('refreshToken', session.refreshToken, {
    ...cookieOptions,
    maxAge: THIRTY_DAYS,
  });

  res.cookie('sessionId', session._id, {
    ...cookieOptions,
    maxAge: THIRTY_DAYS,
  });
};
