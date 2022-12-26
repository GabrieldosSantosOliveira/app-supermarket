import axios from 'axios';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { maybeCompleteAuthSession } from 'expo-web-browser';
import { createContext } from 'react';
import { useEffect, useState } from 'react';
maybeCompleteAuthSession();
interface IAuthContext {
  singInWithGoogle: () => Promise<void>;
  user: IUser | null;
  isUserLoading: boolean;
}
export const AuthContext = createContext(
  {} as IAuthContext
);
interface IAuthProvider {
  children: React.ReactNode;
}
interface IUser {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}
export const AuthProvider = ({
  children
}: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isUserLoading, setIsUserLoading] =
    useState<boolean>(false);
  const [request, response, promptAsync] =
    Google.useAuthRequest({
      clientId:
        '912913284963-jef8uel0rppkkpsc45t456pq2dr7ovml.apps.googleusercontent.com',
      redirectUri: AuthSession.makeRedirectUri({
        useProxy: true
      }),
      scopes: ['profile', 'email']
    });
  const singInWithGoogle = async () => {
    try {
      setIsUserLoading(true);
      await promptAsync();
    } catch (error) {
      console.log(error);
    } finally {
      setIsUserLoading(false);
    }
  };
  useEffect(() => {
    const fetchUser = async (access_token: string) => {
      try {
        setIsUserLoading(true);
        const { data } = await axios.get(
          'https://www.googleapis.com/oauth2/v2/userinfo',
          {
            headers: {
              Authorization: `Bearer ${access_token}`
            }
          }
        );
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsUserLoading(false);
      }
    };
    if (
      response?.type === 'success' &&
      response.authentication?.accessToken
    ) {
      const { access_token } = response.params;
      fetchUser(access_token);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        singInWithGoogle,
        isUserLoading,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
