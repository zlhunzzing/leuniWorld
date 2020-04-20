import { mainModels } from "../models/main";

const model = new mainModels();

interface SignUpData {
  email;
}

export class mainService {
  async signupService(userInfo: SignUpData): Promise<void> {
    const result = await model.findOneWithEmail(userInfo.email);
    if (result) {
      throw new Error("ERROR");
    }
    // const shasum = crypto.createHmac("sha512", process.env.CRYPTO_SECRET_KEY);
    // shasum.update(userInfo.password);
    // userInfo.password = shasum.digest("hex");

    await model.save(userInfo);
  }
}
