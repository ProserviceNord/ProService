
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

export class AuthService {
  constructor(private jwt: JwtService) {}

  async login(user) {
    return {
      token: this.jwt.sign({ sub: user.id, role: user.role })
    };
  }

  async hashPassword(pw: string) {
    return bcrypt.hash(pw, 10);
  }
}
