import { getKeyFromDate } from '../../../utils/functions';

describe('getKeyFromDate function', () => {
    it('returns the key from a date string', () => {
        const date = '2024-02-15';
        const expectedKey = '2024-02';
        expect(getKeyFromDate(date)).toBe(expectedKey);
    });

    it('returns the key from a different date string', () => {
        const date = '2023-12-31';
        const expectedKey = '2023-12';
        expect(getKeyFromDate(date)).toBe(expectedKey);
    });

    it('returns the key from a date string with different format', () => {
        const date = '2025-10-10T10:00:00Z';
        const expectedKey = '2025-10';
        expect(getKeyFromDate(date)).toBe(expectedKey);
    });
});
