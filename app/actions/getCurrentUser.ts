import prisma from '../libs/prismadb';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export async function getSession() {
  return await getServerSession(authOptions);
}

const getCurrentUser = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return null;
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });
  if (!currentUser) return null;
  try {
    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
