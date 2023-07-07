import getCurrentUser from './actions/getCurrentUser';
import LoginModal from './components/modals/LoginModal';
import { RegisterModal } from './components/modals/RegisterModal';
import RentModal from './components/modals/RentModal';
import Navbar from './components/navbar/Navbar';
import ToasterContext from './context/ToasterContext';
import './globals.css';
import { Nunito } from 'next/font/google';

const inter = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterContext />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
