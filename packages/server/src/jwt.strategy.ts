// import先が'passport-local'では無い事に注意！
import { ExtractJwt, Strategy as BaseJwtStrategy } from 'passport-jwt';

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {passportJwtSecret} from "jwks-rsa";


/**
 * @description JWTの認証処理を行うクラス
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(BaseJwtStrategy) {
    constructor() {
        console.log("here")
        super({
            secretOrKeyProvider: passportJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
            }),
            // Authorization bearerからトークンを読み込む関数を返す
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            audience: "https://royal-night-6877.us.auth0.com/api/v2/",
            issuer: `https://${process.env.AUTH0_DOMAIN}/`,
            algorithms: ['RS256'],
        });
    }

    // ここでPayloadを使ったバリデーション処理を実行できる
    // Payloadは、AuthService.login()で定義した値
    async validate(payload): Promise<any> {
        console.log(payload)
        return { ...payload };
    }
}