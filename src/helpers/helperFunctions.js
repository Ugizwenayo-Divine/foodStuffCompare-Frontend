import jwt from 'jsonwebtoken';

export default async (token) => {
    const data = jwt.verify(token, process.env.JWT_KEY);
    return data;
  };