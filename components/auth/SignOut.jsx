import { auth } from '../../firebase/config';
import { useRouter } from 'next/router';
export function SignOut() {
  const router = useRouter();
  return (
    auth.currentUser && (
      <button
        className='px-2 bg-blue-400 text-white rounded-full shadow-lg hover:bg-blue-700'
        onClick={() => {
          router.push('/');
          auth.signOut();
        }}
      >
        Sign out
      </button>
    )
  );
}
