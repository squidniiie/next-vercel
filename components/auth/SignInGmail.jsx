import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { auth, provider } from '../../firebase/config';
export function SignInGmail() {
  const router = useRouter();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        router.push('/user/dashboard');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <button
      className='flex flex-row gap-2 px-2 py-1 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-700'
      onClick={signInWithGoogle}
    >
      <Image
        width={25}
        height={25}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png'
        alt='google'
      />
      Sign in with Google
    </button>
  );
}
