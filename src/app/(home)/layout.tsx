import EbookAnchor from '@/components/EbookAnchor';
import Footer from '@/components/Footer';
import ShareAnchor from '@/components/ShareAnchor';
import Main from '@/components/Main';
import { NotificationProvider } from '@/components/NotificationContext';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <NotificationProvider>
      <div className="min-h-screen grid grid-rows-[1fr_auto]">
        <Main className="border-t-[20px] border-brand-purple">
          { children }
        </Main>
        <div>
          <EbookAnchor />
          <ShareAnchor />
          <Footer />
        </div>
      </div>
    </NotificationProvider>
  );
}
