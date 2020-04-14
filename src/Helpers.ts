export type base62 = string;
export type base64 = string;
export type base64url = string;

import { sodium } from './Crypto';

export function to_base64(input: string | Uint8Array): string {
  return sodium.to_base64(input)
}

export function from_base64(input: string): Uint8Array {
  return sodium.from_base64(input);
}
