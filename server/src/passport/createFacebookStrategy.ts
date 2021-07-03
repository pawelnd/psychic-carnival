import { config } from '@/configs/config';
import { UserEntity } from '@/entity/users.entity';

import { Strategy as FacebookStrategy } from 'passport-facebook';
import { getRepository } from 'typeorm';

export default function createFacebookStrategy() {
  const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, FRONTEND_REDIRECT_BASE_URL } = config;
  const userRepository = getRepository(UserEntity);
  console.log(`${FRONTEND_REDIRECT_BASE_URL}/api/auth/facebook/callback`);

  return new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: `${FRONTEND_REDIRECT_BASE_URL}/api/auth/facebook/callback`,
      profileFields: ['id', 'email', 'displayName', 'photos'],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);

      const email = profile?.emails[0]?.value as string;
      const userPayload = {
        email,
        name: profile.displayName,
      };
      const user = await userRepository.create(userPayload);
      done(null, await user);
    },
  );
}
