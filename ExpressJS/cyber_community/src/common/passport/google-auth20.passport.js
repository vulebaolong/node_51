import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_URI_CALLBACK } from "../constant/app.constant";
import passport from "passport";
import prisma from "../prisma/init.prisma";
import { tokenService } from "../../services/token.service";

export const initGoogleAuth20 = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET,
                callbackURL: GOOGLE_CLIENT_URI_CALLBACK,
            },
            async function (accessToken, refreshToken, profile, cb) {
                // hàm này sẽ được chạy khi mọi thứ verify với google thành công
                // sẽ cần profile để kiểm tra trong db
                // ổn => cb(null, user)
                // không ổn => cb (new Error(err), null)

                const googleId = profile.id;
                const displayName = profile.displayName;
                const email = profile.emails[0].value;
                const emailVerified = profile.emails[0].verified;
                const photo = profile.photos[0].value;

                if (!emailVerified) {
                    return cb(new Error("Email chưa verify"), null);
                }

                let userExist = await prisma.users.findUnique({
                    where: {
                        email: email,
                    },
                });
                if (!userExist) {
                    userExist = await prisma.users.create({
                        data: {
                            email: email,
                            avatar: photo,
                            fullName: displayName,
                            googleId: googleId,
                        },
                    });
                }
                // code mà chạy được tới đây thì userExist luôn luôn có giá trị
                const tokens = tokenService.createTokens(userExist.id);

                console.log(profile);
                console.log({
                    accessToken,
                    refreshToken,
                    profile,
                    cb,
                    googleId,
                    displayName,
                    email,
                    emailVerified,
                    photo,
                });

                return cb(null, tokens);
            }
        )
    );
};
