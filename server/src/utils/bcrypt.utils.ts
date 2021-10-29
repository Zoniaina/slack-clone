import * as bcrypt from 'bcrypt';
import { MESSAGE } from '../common/message';

export const verifyPassword = async (
  inputPassword: string,
  userPassword: string,
): Promise<boolean> => {
  if (!(await bcrypt.compare(inputPassword, userPassword))) {
    throw Error(MESSAGE.INVALID_PASSWORD);
  }
  return true;
};

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};
