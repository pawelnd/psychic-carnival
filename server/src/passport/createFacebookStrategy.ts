import { config } from '@/configs/config';
import UserService from '@/services/users.service';

import { Strategy as FacebookStrategy } from 'passport-facebook';

export default function createFacebookStrategy() {
  const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, FRONTEND_REDIRECT_BASE_URL } = config;
  const userService = new UserService();

  return new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: `${FRONTEND_REDIRECT_BASE_URL}/api/auth/facebook/callback`,
      profileFields: ['id', 'email', 'displayName', 'photos'],
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile?.emails[0]?.value as string;
      const userPayload = {
        email,
        name: profile.displayName,
      };
      const user = await userService.findOrCreate(userPayload);
      done(null, await user);
    },
  );
}
