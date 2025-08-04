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
#include "opcodes/opcodes.hpp"

namespace dxil_spv
{
bool emit_discard_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);
bool emit_is_helper_lane_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);

bool emit_sample_index_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);

bool emit_coverage_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);

bool emit_inner_coverage_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);

bool emit_derivative_instruction(spv::Op opcode, Converter::Impl &impl, const llvm::CallInst *instruction);

template <spv::Op opcode>
static inline bool emit_derivative_dispatch(Converter::Impl &impl, const llvm::CallInst *instruction)
{
	return emit_derivative_instruction(opcode, impl, instruction);
}

bool emit_extended_derivative_instruction(Converter::Impl &impl, const llvm::CallInst *instruction);
} // namespace dxil_spv
