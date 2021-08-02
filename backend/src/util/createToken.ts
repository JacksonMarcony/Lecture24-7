import { sign } from 'jsonwebtoken'

export async function createToken(email) {
    const token = sign({}, process.env.JWT_KEY, {
        subject: email,
        expiresIn: "12h"
    })

    return token
} 