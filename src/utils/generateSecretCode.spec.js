import { generateSecretCode } from './generateSecretCode';

test('should generate a 3 number long code \(default\)', () => {
    expect(generateSecretCode()).toHaveLength(3);
});

test('should generate a n number long code', () => {
    expect(generateSecretCode({ difficulty: 10 })).toHaveLength(10);
});