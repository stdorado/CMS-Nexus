import JWT from "jsonwebtoken"


const secretKey = process.env.JWT_COOKIE

export function generateToken(payload,expiresIn = "1h"){
    return JWT.sign(payload,secretKey,{expiresIn})
}

export function verificarToken(token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }

  