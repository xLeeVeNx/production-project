import { render, screen } from '@testing-library/react';
import { Button, EButtonThemes } from './Button';

describe('shared/ui/Button', function () {
    test('Button render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Button clear theme', () => {
        render(<Button theme={EButtonThemes.reset}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('reset');
        screen.debug();
    });
});
