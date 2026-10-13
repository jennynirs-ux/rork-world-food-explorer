import { Modal } from 'react-native';
import { fireEvent, render, screen } from '@testing-library/react-native';
import CookingMode from '@/components/CookingMode';

jest.mock('@/contexts/AppContext', () => ({
  useApp: () => ({ userProfile: { language: 'en' } }),
}));

describe('CookingMode finish', () => {
  it('reports completion before closing, so the parent still knows which dish it was', () => {
    const calls: string[] = [];
    render(
      <CookingMode
        visible
        steps={['Serve']}
        recipeName="Ramen"
        onComplete={() => calls.push('complete')}
        onClose={() => calls.push('close')}
      />,
    );

    fireEvent.press(screen.getByText('Finish'));
    expect(calls).toEqual(['complete', 'close']);
  });

  it('passes onDismiss to the native modal, where iOS reports the close animation has ended', () => {
    const onDismiss = jest.fn();
    render(
      <CookingMode
        visible
        steps={['Serve']}
        recipeName="Ramen"
        onComplete={() => {}}
        onClose={() => {}}
        onDismiss={onDismiss}
      />,
    );

    expect(screen.UNSAFE_getByType(Modal).props.onDismiss).toBe(onDismiss);
  });
});
