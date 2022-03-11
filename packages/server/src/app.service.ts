import {Injectable, Scope} from '@nestjs/common';
import {AuthenticationClient, ManagementClient} from "auth0"

@Injectable({
  scope:Scope.REQUEST
})
export class AppService {

  private manageClient;

  constructor() {
    console.log("[AppService] service created")
    const cred = {
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      scope: 'create:users'
    }
    this.manageClient = new ManagementClient(cred)
    // this.authenClient = new AuthenticationClient(cred)
  }

  getHello(): string {
    return 'Hello World!';
  }

  async register(email: string, password: string, name: string): Promise<any> {
    return await this.manageClient.createUser({
      connection: "Username-Password-Authentication",
      email,
      password,
      name,
      email_verified: true,
    })
  }
}
