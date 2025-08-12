/* Copyright (c) 2019-2022 Hans-Kristian Arntzen for Valve Corporation
 *
 * SPDX-License-Identifier: MIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

#pragma once

#include "GLSL.std.450.h"
#include "opcodes/opcodes.hpp"

namespace dxil_spv
{
bool emit_load_input_instruction(Converter::Impl &impl, const llvm::CallInst *instruction, bool spirv_semantics);

template <bool spirv_semantics>
static bool emit_load_input_dispatch(Converter::Impl &impl, const llvm::CallInst *instruction)
{
	return emit_load_input_instruction(impl, instruction, spirv_semantics);
}

bool emit_interpolate_instruction(GLSLstd450 opcode, Converter::Impl &impl, const llvm::CallInst *instruction, bool extended);
bool emit_store_output_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);
bool emit_create_handle_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);
bool emit_create_handle_for_lib_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);
bool emit_create_handle_from_heap_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);
bool emit_create_handle_from_binding_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);
bool emit_annotate_handle_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);

bool emit_cbuffer_load_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);
bool emit_cbuffer_load_legacy_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);
bool emit_gep_as_cbuffer_scalar_offset(Converter::Impl &impl, const llvm::GetElementPtrInst *instruction,
                                       const llvm::Value *cbv_handle, uint32_t scalar_index_offset, uint32_t stride);
bool cbuffer_supports_gep_punchthrough(Converter::Impl &impl, const llvm::Value *cbv_handle);
bool emit_load_draw_parameter_instruction(spv::BuiltIn builtin, Converter::Impl &impl, const llvm::CallInst *instruction);

template <GLSLstd450 opcode, bool extended>
static inline bool emit_interpolate_dispatch(Converter::Impl &impl, const llvm::CallInst *instruction)
{
	return emit_interpolate_instruction(opcode, impl, instruction, extended);
}

template <spv::BuiltIn builtin>
static inline bool emit_load_draw_parameter_dispatch(Converter::Impl &impl, const llvm::CallInst *instruction)
{
	return emit_load_draw_parameter_instruction(builtin, impl, instruction);
}

bool emit_load_control_point_count_in(Converter::Impl &impl, const llvm::CallInst *instruction);

struct AnnotateHandleMeta
{
	DXIL::Op resource_op;
	DXIL::ResourceType resource_type;
	llvm::Value *offset;
	uint32_t binding_index;
	bool non_uniform;
};
bool get_annotate_handle_meta(Converter::Impl &impl, const llvm::CallInst *instruction, AnnotateHandleMeta &meta);

bool resource_handle_is_uniform_readonly_descriptor(Converter::Impl &impl, const llvm::Value *value);

bool type_is_composite_return_value(llvm::Type *type);
llvm::Type *get_composite_element_type(llvm::Type *type);
} // namespace dxil_spv
