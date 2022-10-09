import { classNames } from './classNames';

describe('shared/lib/classNames', function () {
    test('with default cls', () => {
        expect(classNames('class1 class2')).toBe('class1 class2');
    });

    test('with additional cls', () => {
        expect(classNames('', {}, ['class3'])).toBe('class3');
    });

    test('with true mods', () => {
        expect(classNames('class1 class2', { hovered: true, selected: true }))
            .toBe('class1 class2 hovered selected');
    });

    test('with false mod', () => {
        expect(classNames('', { hovered: false, selected: true }))
            .toBe('selected');
    });
});
