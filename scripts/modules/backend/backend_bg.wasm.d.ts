/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_vm_free(a: number): void;
export function vm_new(): number;
export function vm_load(a: number, b: number, c: number): void;
export function vm_store(a: number, b: number, c: number): void;
export function vm_tick(a: number): void;
export function vm_memory(a: number): number;
export function vm_registers(a: number): number;
export function compile(a: number, b: number, c: number): void;
export function symbols(a: number, b: number, c: number): void;
export function wasm_assemble(a: number, b: number): number;
export function wasm_get_version(): number;
export function wasm_string_new(a: number): number;
export function wasm_string_drop(a: number): void;
export function wasm_string_get_len(a: number): number;
export function wasm_string_get_byte(a: number, b: number): number;
export function wasm_string_set_byte(a: number, b: number, c: number): void;
export const __wbindgen_export_0: WebAssembly.Table;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
export function __externref_table_dealloc(a: number): void;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_start(): void;