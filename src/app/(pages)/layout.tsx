import EbookAnchor from '@/components/EbookAnchor';
import Footer from '@/components/Footer';
import ShareAnchor from '@/components/ShareAnchor';
import Nav from '@/components/Nav';
import Main from '@/components/Main';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Nav />

      <Main>{ children }</Main>

      <div>
        <EbookAnchor />
        <ShareAnchor />
        <Footer />
      </div>
    </div>
  );
}
