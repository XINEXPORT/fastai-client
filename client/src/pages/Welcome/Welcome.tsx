import { FullSizeCentered } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';
import ChatWindow from '@/components/ChatWindow/ChatWindow';

function Welcome() {
  const isPortrait = useOrientation();

  return (
    <>
      <meta name="title" content="Welcome" />
      <FullSizeCentered flexDirection={isPortrait ? 'column' : 'row'}>
        <ChatWindow />
      </FullSizeCentered>
    </>
  );
}

export default Welcome;
