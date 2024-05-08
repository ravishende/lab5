// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber
test('test valid phone number 1', () => {
  expect(isPhoneNumber('(531) 467-6793 ')).toBe(true);
});
test('test valid phone number 2', () => {
  expect(isPhoneNumber('(531) 467-6793 ')).toBe(true);
});

test('test invalid phone number 1', () => {
  expect(isPhoneNumber('(abc) xif-4567 ')).toBe(false);
});

test('test invalid phone number 2', () => {
  expect(isPhoneNumber('5677648932 ')).toBe(false);
});

// isEmail
test('Test valid email 1', () => {
  expect(isEmail('valid@gmail.com')).toBe(true);
});

test('Test valid email 2', () => {
  expect(isEmail('jkdhgskjsh@ucsd.edu')).toBe(true);
});

test('Test invalid email 1', () => {
  expect(isEmail('invalid@.com')).toBe(false);
});

test('Test invalid email 2', () => {
  expect(isEmail('djkshgvid.com')).toBe(false);
});

// isStrongPassword
test('Test valid password 1', () => {
  expect(isStrongPassword('vallid875_')).toBe(true);
});
test('Test valid password 2', () => {
  expect(isStrongPassword('Gf8_gu7')).toBe(true);
});

test('Test invalid password 1', () => {
  expect(isStrongPassword('5gcom')).toBe(false);
});
test('Test invalid password 2', () => {
  expect(isStrongPassword('valid@')).toBe(false);
});

// isDate
test('Test valid date 1', () => {
  expect(isDate('11/03/2024')).toBe(true);
});
test('Test valid date 2', () => {
  expect(isDate('99/99/9999')).toBe(true);
});

test('Test invalid date 1', () => {
  expect(isDate('1/1/1')).toBe(false);
});
test('Test invalid date 2', () => {
  expect(isDate('12452222')).toBe(false);
});

// isHexColor
test('Test valid hex color 1', () => {
  expect(isHexColor('#f31')).toBe(true);
});
test('Test valid hex color 2', () => {
  expect(isHexColor('#ff0022')).toBe(true);
});

test('Test invalid hex color 1', () => {
  expect(isHexColor('36')).toBe(false);
});
test('Test invalid hex color 2', () => {
  expect(isHexColor('#34')).toBe(false);
});